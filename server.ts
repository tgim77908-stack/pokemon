import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini safely to avoid crashing on launch if the key is missing or not yet configured.
let aiClient: GoogleGenAI | null = null;
function getGenAI() {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key || key === 'MY_GEMINI_API_KEY') {
      console.warn('⚠️ GEMINI_API_KEY is not configured or uses a placeholder. Falling back to local offline commentary.');
      return null;
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// Meta Analysis Commentary Endpoint
app.post('/api/battle-commentary', async (req, res) => {
  try {
    const { playerPkmn, opponentPkmn, currentTurn, turnLogs } = req.body;

    const ai = getGenAI();
    if (!ai) {
      // Graceful fallback with authentic looking offline retro tips
      return res.json({
        commentary: `[오프라인 도감 분석] ${playerPkmn.nameKor} vs ${opponentPkmn.nameKor}의 세기말 1대1 정면승부! 성격과 도구 사기 시너지를 활용해 전략을 펼치세요!`
      });
    }

    const logsString = turnLogs.map((l: any) => l.text.replace(/<[^>]*>/g, '')).join('\n');

    const prompt = `
양측 포켓몬 최신 상태:
- 아군: ${playerPkmn.nameKor} (타입: ${playerPkmn.types.join('/')}, 성격: ${playerPkmn.natureName}, 도구: ${playerPkmn.itemName}, 남은 HP: ${playerPkmn.currentHp}/${playerPkmn.maxHp})
- 적군: ${opponentPkmn.nameKor} (타입: ${opponentPkmn.types.join('/')}, 성격: ${opponentPkmn.natureName}, 도구: ${opponentPkmn.itemName}, 남은 HP: ${opponentPkmn.currentHp}/${opponentPkmn.maxHp})

현재 턴: ${currentTurn}턴
최근 대전 상황 로그:
${logsString}

위 대치 구도가 실제 포켓몬 배틀 리그 세대 역사(예: 2세대 잠만보의 저주신화, 4세대 한카리아스의 102스피드 정복기, 6세대 메가레쿠쟈의 밸런스 붕괴, 혹은 9세대 날개치는머리/타부자고의 압도적 입지 등) 관점에서 어떤 의미가 있으며, 해당 스킬 선택이나 전략이 왜 역대 정석 메타 배치에 부합하는지 닌텐도 챔피언십 배틀 전문가 '오박사 AI'의 어조로 재치 있고 명쾌하게 한글로 2~3줄 요약해서 말해 다오. 친근하고 지적으로 서술해줘.
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "너는 닌텐도 포켓몬 배틀 분석 마스터 '오박사 AI'이다. 오직 포켓몬 리그 1-9세대 실전 지식만을 지적이고 프로페셔널하게 해설한다.",
        temperature: 0.8,
      }
    });

    res.json({
      commentary: response.text || '대치가 치열하여 한 수 예측이 어렵습니다!'
    });
  } catch (error: any) {
    console.error('Gemini commentary error:', error);
    res.json({
      commentary: '[배틀 분석 장치 일시 장애] 오박사와 실시간 연동이 끊겼지만 배틀은 멈추지 않습니다! 다음 커맨드를 이행하십시오.'
    });
  }
});

// Serve frontend via Vite middleware (dev) or express.static (prod)
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // Serve HTML
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Pokemon Champions Server boot success! Running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
