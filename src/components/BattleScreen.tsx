import React, { useState, useEffect, useRef } from 'react';
import { PokemonMeta, BattlePokemon, BattleLog, Move, PlayMode } from '../types';
import { initializePokemon, POKEMON_LIST } from '../pokemonData';
import { executeTurn, getTypeEffectiveness } from '../utils/battleEngine';
import { audioSynth } from '../utils/audio';
import { RefreshCw, ArrowLeft, Shield, Swords, Zap, Heart, Sparkles, Send, BrainCircuit, HelpCircle, MessageSquare } from 'lucide-react';

interface BattleScreenProps {
  playerMeta: PokemonMeta;
  opponentMeta?: PokemonMeta;
  playMode: PlayMode;
  network: any;
  onBackToDraft: () => void;
  opponentChosenMoveId: string | null;
  clearOpponentChosenMoveId: () => void;
  syncedBattleState: any;
  clearSyncedBattleState: () => void;
}

// Procedural 8-bit visual skill overlays representing competitive movesets
function SkillEffectOverlay({ type }: { type: string }) {
  // Generate a list of randomized coordinate offsets for pure CSS retro pixel squares
  const particlesCount = 14;
  const particles = Array.from({ length: particlesCount }, (_, i) => ({
    id: i,
    left: `${15 + (i * 73) % 70}%`,
    top: `${20 + (i * 47) % 60}%`,
    size: 6 + (i % 3) * 4, // 6px, 10px, 14px
    delay: `${(i * 0.04).toFixed(2)}s`,
  }));

  switch (type) {
    case 'Fire':
      return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-red-600/15 animate-pulse"></div>
          {particles.map((p) => {
            const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-400', 'bg-rose-500'];
            const color = colors[p.id % colors.length];
            return (
              <div
                key={p.id}
                className={`absolute ${color} rounded-sm animate-pixel-float shadow-[0_0_8px_rgba(239,68,68,0.5)]`}
                style={{
                  left: p.left,
                  bottom: '20px',
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  animationDelay: p.delay,
                  animationDuration: '0.6s',
                }}
              />
            );
          })}
          <div className="absolute bg-orange-600/90 text-yellow-300 border-2 border-yellow-400 font-mono font-black text-[10px] px-2 py-1 rounded rotate-12 shadow-lg animate-ping">
            FIRE BLAST! 🔥
          </div>
        </div>
      );

    case 'Water':
      return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-blue-600/20"></div>
          {particles.map((p) => {
            const colors = ['bg-blue-500', 'bg-cyan-400', 'bg-sky-500', 'bg-indigo-400'];
            const color = colors[p.id % colors.length];
            const isLeft = p.id % 2 === 0;
            return (
              <div
                key={p.id}
                className={`absolute ${color} rounded-sm animate-pixel-float`}
                style={{
                  left: isLeft ? `${(p.id * 15) % 90}%` : undefined,
                  right: !isLeft ? `${(p.id * 15) % 90}%` : undefined,
                  bottom: `${10 + (p.id * 8) % 60}%`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  animationDelay: p.delay,
                  animationDuration: '0.5s',
                }}
              />
            );
          })}
          <div className="absolute bg-blue-600/90 text-sky-100 border-2 border-sky-300 font-mono font-black text-[10px] px-2 py-1 rounded -rotate-6 shadow-lg animate-pulse">
            HYDRO PUMP! 🌊
          </div>
        </div>
      );

    case 'Electric':
      return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 overflow-hidden rounded-xl animate-electric-strobe">
          <svg className="w-full h-full stroke-yellow-300 stroke-[5px] fill-none drop-shadow-[0_0_15px_rgba(250,204,21,0.9)]" viewBox="0 0 100 100">
            <polyline points="50,15 30,55 65,48 35,92" />
            <polyline points="46,18 26,58 61,51 31,95" className="stroke-white stroke-[2.5px]" />
          </svg>
          <div className="absolute bg-yellow-400 text-slate-950 border-2 border-slate-950 font-mono font-black text-[10px] px-2 py-0.5 rounded shadow-md uppercase tracking-wide">
            THUNDERBOLT! ⚡
          </div>
        </div>
      );

    case 'Grass':
      return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-emerald-600/10"></div>
          {particles.map((p) => {
            const colors = ['bg-emerald-500', 'bg-green-400', 'bg-lime-550', 'bg-teal-600'];
            const color = colors[p.id % colors.length];
            return (
              <div
                key={p.id}
                className={`absolute ${color} rounded-sm animate-spin-slow`}
                style={{
                  left: p.left,
                  top: p.top,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  animationDelay: p.delay,
                  transform: `rotate(${p.id * 35}deg)`,
                }}
              />
            );
          })}
          <div className="absolute w-2 h-40 bg-green-200 border-r-4 border-emerald-500 animate-slash top-1/2 left-1/2"></div>
          <div className="absolute bg-emerald-650 text-emerald-100 border-2 border-green-300 font-mono font-black text-[10px] px-2 py-1 rounded rotate-3 shadow-lg">
            LEAF EDGE! 🍃
          </div>
        </div>
      );

    case 'Psychic':
      return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 overflow-hidden rounded-xl">
          <div className="absolute w-20 h-20 rounded-full border-4 border-purple-500/80 animate-ping shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
          <div className="absolute w-32 h-32 rounded-full border-2 border-pink-500/60 animate-pulse"></div>
          {particles.map((p) => {
            const colors = ['bg-pink-500', 'bg-purple-500', 'bg-fuchsia-400', 'bg-indigo-500'];
            const color = colors[p.id % colors.length];
            return (
              <div
                key={p.id}
                className={`absolute ${color} rounded-full animate-pixel-float`}
                style={{
                  left: p.left,
                  bottom: `${(p.id * 12) % 65}%`,
                  width: `${p.size - 2}px`,
                  height: `${p.size - 2}px`,
                  animationDelay: p.delay,
                  animationDuration: '0.8s',
                }}
              />
            );
          })}
          <div className="absolute bg-purple-900/90 text-pink-300 border-2 border-pink-400 font-mono font-black text-[9px] px-2 py-1 rounded-full uppercase tracking-widest shadow-lg animate-bounce">
            PSYCHIC STORM 🔮
          </div>
        </div>
      );

    case 'Ice':
      return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-cyan-300/15"></div>
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute bg-cyan-300 rounded-sm rotate-45 animate-pulse"
              style={{
                left: p.left,
                top: p.top,
                width: `${p.size - 1}px`,
                height: `${p.size - 1}px`,
                animationDelay: p.delay,
              }}
            />
          ))}
          <div className="absolute bg-cyan-700/90 text-cyan-150 border-2 border-white font-mono font-black text-[10px] px-2 py-1 rounded shadow-lg animate-bounce">
            BLIZZARD! ❄️
          </div>
        </div>
      );

    case 'Dragon':
      return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-violet-955/20"></div>
          {particles.map((p) => {
            const color = p.id % 2 === 0 ? 'bg-violet-600' : 'bg-rose-600';
            return (
              <div
                key={p.id}
                className={`absolute ${color} rounded-sm animate-pixel-float`}
                style={{
                  left: p.left,
                  bottom: '10px',
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  animationDelay: p.delay,
                }}
              />
            );
          })}
          <div className="absolute w-2.5 h-32 bg-violet-400 animate-slash top-1/2 left-1/3"></div>
          <div className="absolute w-2.5 h-32 bg-rose-450 animate-slash top-1/2 left-2/3" style={{ animationDelay: '0.1s' }}></div>
          <div className="absolute bg-gradient-to-r from-violet-700 to-rose-700 text-yellow-300 border border-yellow-300 font-mono font-black text-[10px] px-2.5 py-0.5 rounded shadow-md">
            DRAGON PULSE 🐲
          </div>
        </div>
      );

    case 'Status':
      return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 overflow-hidden rounded-xl">
          {particles.map((p) => {
            const isGold = p.id % 2 === 0;
            return (
              <div
                key={p.id}
                className={`absolute font-mono text-sm font-black animate-pixel-float ${isGold ? 'text-amber-400' : 'text-emerald-400'}`}
                style={{
                  left: p.left,
                  bottom: '5px',
                  animationDelay: p.delay,
                  animationDuration: '0.7s',
                }}
              >
                ▲
              </div>
            );
          })}
          <div className="absolute text-emerald-450 text-3xl font-bold animate-pulse scale-125">
            💚
          </div>
          <div className="absolute bg-neutral-900 border border-emerald-500 text-emerald-400 font-mono font-black text-[9px] px-2 py-0.5 rounded uppercase shadow-inner">
            BUFF / HEAL ✨
          </div>
        </div>
      );

    default: // Normal, Ground, Rock, Steel, Dark, Flying, Fighting, Poison, Bug, Ghost, Fairy
      return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-red-650/10"></div>
          {particles.map((p) => {
            const isLeft = p.id % 2 === 0;
            return (
              <div
                key={p.id}
                className="absolute bg-slate-300 rounded-sm animate-pixel-float"
                style={{
                  left: '50%',
                  top: '50%',
                  width: `${p.size - 2}px`,
                  height: `${p.size - 2}px`,
                  transform: `translate(${isLeft ? '-' : ''}${p.id * 5}px, ${p.id * 3}px)`,
                  animationDelay: '0s',
                  animationDuration: '0.4s',
                }}
              />
            );
          })}
          <div className="absolute w-2 h-36 bg-white animate-slash top-1/2 left-1/2"></div>
          <div className="absolute bg-slate-300 text-slate-900 border-2 border-slate-700 font-mono font-black text-[10px] px-2 py-0.5 rounded-md shadow-md">
            IMPACT! 💥
          </div>
        </div>
      );
  }
}

export default function BattleScreen({
  playerMeta,
  opponentMeta,
  playMode,
  network,
  onBackToDraft,
  opponentChosenMoveId,
  clearOpponentChosenMoveId,
  syncedBattleState,
  clearSyncedBattleState
}: BattleScreenProps) {
  // 1. Initialize player pokemon state
  const [playerPkmn, setPlayerPkmn] = useState<BattlePokemon>(() => initializePokemon(playerMeta));
  
  // 2. Initialize opponent pokemon state (with random placeholder for AI mode, or specified meta for multiplay)
  const [opponentPkmn, setOpponentPkmn] = useState<BattlePokemon>(() => {
    if (playMode !== 'AI' && opponentMeta) {
      return initializePokemon(opponentMeta);
    }
    const otherPkmns = POKEMON_LIST.filter((p: any) => p.id !== playerMeta.id);
    const randomChoice = otherPkmns[Math.floor(Math.random() * otherPkmns.length)];
    return initializePokemon(randomChoice);
  });

  const [currentTurn, setCurrentTurn] = useState<number>(1);
  const [logs, setLogs] = useState<BattleLog[]>([
    {
      id: 'init-1',
      turn: 0,
      text: `🔔 <b>경기 시작!</b> 챔피언십 대결이 펼쳐집니다! ${playerMeta.nameKor} vs ${opponentPkmn.meta.nameKor}!`,
      type: 'system'
    }
  ]);
  
  // Choice items rule support: locks first choice
  const [playerLockedMove, setPlayerLockedMove] = useState<Move | null>(null);
  const [opponentLockedMove, setOpponentLockedMove] = useState<Move | null>(null);

  // Graphics states
  const [playerAnimate, setPlayerAnimate] = useState<'idle' | 'hit' | 'boost' | 'heal'>('idle');
  const [opponentAnimate, setOpponentAnimate] = useState<'idle' | 'hit' | 'boost' | 'heal'>('idle');
  const [battleEffect, setBattleEffect] = useState<{
    type: string;
    target: 'player' | 'opponent';
  } | null>(null);
  
  // Battle state flow control
  const [winner, setWinner] = useState<'player' | 'opponent' | null>(null);
  const [isFighting, setIsFighting] = useState<boolean>(false);
  const [commentaryLoading, setCommentaryLoading] = useState<boolean>(false);
  const [aiCommentary, setAiCommentary] = useState<string>(`[시합 기록 분석중...] 양측 포켓몬이 격돌했습니다! 첫 번째 커맨드를 조작하십시오.`);

  // Local Selection Lock (e.g. Waiting for peer)
  const [playerPendingMove, setPlayerPendingMove] = useState<Move | null>(null);

  // Sidebar Tab Layout Switcher ('logs' | 'chat')
  const [activeTab, setActiveTab] = useState<'logs' | 'chat'>('logs');
  
  // Chatting States
  const [chatInput, setChatInput] = useState<string>('');
  const [chatMessages, setChatMessages] = useState<{ sender: string; text: string; time: string }[]>([]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logs to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [chatMessages]);

  // Handle battle opening Intimidate / Surge entries on first mount
  useEffect(() => {
    // Only execute if Singleplayer or Multiplayer Host (since host propagates initial state)
    if (playMode === 'AI' || playMode === 'MULTIPLAYER_HOST') {
      const freshPlayer = { ...playerPkmn };
      const freshOpponent = { ...opponentPkmn };
      const introLogs: BattleLog[] = [];

      resolveEntryAbilities(freshPlayer, freshOpponent, introLogs, true);
      resolveEntryAbilities(freshOpponent, freshPlayer, introLogs, false);

      if (introLogs.length > 0) {
        setLogs((prev) => [...prev, ...introLogs]);
        setPlayerPkmn(freshPlayer);
        setOpponentPkmn(freshOpponent);
      }
      
      // Fetch initial meta introduction commentary
      fetchOakCommentary(freshPlayer, freshOpponent, 1, introLogs);

      // On Host side, after calculating entries, we broadcast initial state to Client
      if (playMode === 'MULTIPLAYER_HOST' && network) {
        setTimeout(() => {
          network.send({
            type: 'SYNC_STATE',
            state: {
              playerPokemon: freshOpponent, // Client swaps perspectives!
              opponentPokemon: freshPlayer,
              currentTurn: 1,
              logs: introLogs,
              winner: null,
              commentaryLoading: false,
              aiCommentary: '배틀 필드가 개설되었습니다! 첫 번째 턴을 설계하십시오.'
            }
          });
        }, 1000);
      }
    }
  }, []);

  // Set abilities logic at entrance
  function resolveEntryAbilities(p: BattlePokemon, opp: BattlePokemon, localLogs: BattleLog[], isPlayerAction: boolean) {
    if (p.meta.ability.name === '위협') {
      opp.stats.stages.atk = Math.max(-6, opp.stats.stages.atk - 1);
      localLogs.push({
        id: `intimidate-${isPlayerAction ? 'p' : 'o'}-${Date.now()}`,
        turn: 0,
        text: `👁️ ${p.meta.nameKor}의 특성 <b>[위협]</b> 발동! 상대 ${opp.meta.nameKor}의 물리공격력이 1단계 저하되었습니다.`,
        type: 'stat-change'
      });
      audioSynth.playStatUp();
    }
    
    if (p.meta.ability.name === '부요한검') {
      p.stats.stages.atk = Math.min(6, p.stats.stages.atk + 1);
      localLogs.push({
        id: `intrepid-${isPlayerAction ? 'p' : 'o'}-${Date.now()}`,
        turn: 0,
        text: `⚔️ ${p.meta.nameKor}의 특성 <b>[부요한검]</b> 발동! 물리 전설의 검기를 가동해 공격력을 1단계 높였습니다.`,
        type: 'stat-change'
      });
      audioSynth.playStatUp();
    }
    
    if (p.meta.ability.name === '일렉트릭메이커') {
      localLogs.push({
        id: `electric-surge-${isPlayerAction ? 'p' : 'o'}-${Date.now()}`,
        turn: 0,
        text: `⚡ ${p.meta.nameKor}의 특성 <b>[일렉트릭메이커]</b> 발동! 전장을 일렉트릭필드로 도배했습니다!`,
        type: 'system'
      });
      audioSynth.playStatUp();
    }
  }

  // Request strategic commentary from Express Server Backend supported by Google Gemini AI
  async function fetchOakCommentary(currPlayer: BattlePokemon, currOpponent: BattlePokemon, turnNum: number, currentLogs: BattleLog[]) {
    setCommentaryLoading(true);
    try {
      const response = await fetch('/api/battle-commentary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          playerPkmn: {
            nameKor: currPlayer.meta.nameKor,
            types: currPlayer.meta.types,
            natureName: currPlayer.meta.nature.name,
            itemName: currPlayer.meta.item.name,
            currentHp: currPlayer.currentHp,
            maxHp: currPlayer.stats.maxHp
          },
          opponentPkmn: {
            nameKor: currOpponent.meta.nameKor,
            types: currOpponent.meta.types,
            natureName: currOpponent.meta.nature.name,
            itemName: currOpponent.meta.item.name,
            currentHp: currOpponent.currentHp,
            maxHp: currOpponent.stats.maxHp
          },
          currentTurn: turnNum,
          turnLogs: currentLogs
        })
      });
      const data = await response.json();
      setAiCommentary(data.commentary || '두 몬스터의 투지가 타오르고 있습니다!');
    } catch (err) {
      console.error('Failed to load AI commentary:', err);
      setAiCommentary('[포켓덱 비상 연락망] 오박사 장비 장애 발생! 통상 메타 정보: 두마리 모두 최고의 성격 상성을 갖추고 있으니 커맨드를 기획하십시오.');
    } finally {
      setCommentaryLoading(false);
    }
  }

  // Reactive Multiplay Listeners
  // 1. Client mode reactive sync state
  useEffect(() => {
    if (playMode === 'MULTIPLAYER_CLIENT' && syncedBattleState) {
      setIsFighting(true);
      audioSynth.playHit();

      setTimeout(() => {
        setPlayerPkmn(syncedBattleState.playerPokemon);
        setOpponentPkmn(syncedBattleState.opponentPokemon);
        setLogs(syncedBattleState.logs);
        setCurrentTurn(syncedBattleState.currentTurn);
        setWinner(syncedBattleState.winner);
        setAiCommentary(syncedBattleState.aiCommentary);
        setPlayerPendingMove(null);
        setIsFighting(false);

        if (syncedBattleState.winner) {
          if (syncedBattleState.winner === 'player') {
            audioSynth.playVictory();
          } else {
            audioSynth.playHit();
          }
        }
        clearSyncedBattleState();
      }, 500);
    }
  }, [syncedBattleState, playMode]);

  // 2. Host mode reactive opponent move choice
  useEffect(() => {
    if (playMode === 'MULTIPLAYER_HOST' && opponentChosenMoveId) {
      // If Host has already made their own move, resolve the turn instantly!
      if (playerPendingMove) {
        executeMultiplayerTurn(playerPendingMove, opponentChosenMoveId);
      }
    }
  }, [opponentChosenMoveId, playerPendingMove, playMode]);

  // Host executes turn calculation and broadcasts swapped view to Client
  const executeMultiplayerTurn = (hostMove: Move, clientMoveId: string) => {
    const oppMove = opponentPkmn.meta.moves.find((m) => m.id === clientMoveId);
    if (!oppMove) return;

    setIsFighting(true);
    animateFighters(hostMove, oppMove);

    if (hostMove.power > 0 || oppMove.power > 0) {
      audioSynth.playHit();
    } else {
      audioSynth.playHeal();
    }

    setTimeout(() => {
      const result = executeTurn(playerPkmn, opponentPkmn, hostMove, oppMove, currentTurn);

      // Save states on Host
      setPlayerPkmn(result.player);
      setOpponentPkmn(result.opponent);
      setLogs((prev) => [...prev, ...result.logs]);

      let turnWinner = result.winner;
      let nextTurn = turnWinner ? currentTurn : currentTurn + 1;

      if (turnWinner) {
        setWinner(turnWinner);
        if (turnWinner === 'player') {
          audioSynth.playVictory();
        } else {
          audioSynth.playHit();
        }
      } else {
        setCurrentTurn(nextTurn);
        fetchOakCommentary(result.player, result.opponent, nextTurn, result.logs);
      }

      setPlayerPendingMove(null);
      clearOpponentChosenMoveId();
      setIsFighting(false);

      // Broadcast absolute synced view to client (Swapping perspectives!)
      if (network) {
        network.send({
          type: 'SYNC_STATE',
          state: {
            playerPokemon: result.opponent, // Client swaps perspectives
            opponentPokemon: result.player,
            currentTurn: nextTurn,
            logs: [...logs, ...result.logs],
            winner: turnWinner === 'player' ? 'opponent' : (turnWinner === 'opponent' ? 'player' : null),
            commentaryLoading: false,
            aiCommentary: aiCommentary || '실시간 정보 동기화 완료!'
          }
        });
      }
    }, 800);
  };

  // Select opponent move automatically with meta AI logic
  const selectOpponentMove = (): Move => {
    if (opponentLockedMove && opponentPkmn.meta.item.name === '구애머리띠') {
      return opponentLockedMove;
    }

    const oMoves = opponentPkmn.meta.moves;
    
    if (opponentPkmn.currentHp < opponentPkmn.stats.maxHp * 0.4 && Math.random() < 0.6) {
      const healMove = oMoves.find((m) => ['recover', 'rest', 'self-renew'].includes(m.id));
      if (healMove) return healMove;
    }

    const hasFakeOut = oMoves.find((m) => m.id === 'fake-out');
    if (currentTurn === 1 && hasFakeOut) {
      return hasFakeOut;
    }

    if (opponentPkmn.currentHp > opponentPkmn.stats.maxHp * 0.8 && Math.random() < 0.4) {
      const buffMove = oMoves.find((m) => ['curse', 'dragon-dance', 'swords-dance', 'nasty-plot', 'calm-mind'].includes(m.id));
      if (buffMove) return buffMove;
    }

    let bestMove = oMoves[0];
    let maxFactor = -1;

    for (const m of oMoves) {
      if (m.power > 0) {
        const { factor } = getTypeEffectiveness(m.type, playerPkmn.meta.types);
        if (factor > maxFactor) {
          maxFactor = factor;
          bestMove = m;
        }
      }
    }

    return bestMove;
  };

  // Player action handler
  const handleMoveSelect = (move: Move) => {
    if (isFighting || winner || playerPendingMove) return;
    audioSynth.playClick();

    // 1. WebRTC Multiplayer Routing
    if (playMode !== 'AI') {
      if (playMode === 'MULTIPLAYER_CLIENT') {
        // Lock client locally and send move over WebRTC
        setPlayerPendingMove(move);
        if (network) {
          network.send({
            type: 'CHOOSE_MOVE',
            moveId: move.id
          });
        }
      } else if (playMode === 'MULTIPLAYER_HOST') {
        // If opponent (client) move already arrived:
        if (opponentChosenMoveId) {
          executeMultiplayerTurn(move, opponentChosenMoveId);
        } else {
          // If opponent move hasn't arrived, lock locally and wait
          setPlayerPendingMove(move);
        }
      }
      return;
    }

    // 2. Singleplayer AI Routing
    setIsFighting(true);

    if (!playerLockedMove && (playerMeta.item.name === '구애머리띠' || playerMeta.item.name === '구애안경')) {
      setPlayerLockedMove(move);
    }

    const oppMove = selectOpponentMove();
    if (!opponentLockedMove && (opponentPkmn.meta.item.name === '구애머리띠' || opponentPkmn.meta.item.name === '구애안경')) {
      setOpponentLockedMove(oppMove);
    }

    animateFighters(move, oppMove);

    if (move.power > 0 || oppMove.power > 0) {
      audioSynth.playHit();
    } else {
      audioSynth.playHeal();
    }

    setTimeout(() => {
      const result = executeTurn(playerPkmn, opponentPkmn, move, oppMove, currentTurn);
      
      setPlayerPkmn(result.player);
      setOpponentPkmn(result.opponent);
      setLogs((prev) => [...prev, ...result.logs]);
      
      if (result.winner) {
        setWinner(result.winner);
        if (result.winner === 'player') {
          audioSynth.playVictory();
        } else {
          audioSynth.playHit();
        }
      } else {
        setCurrentTurn((t) => t + 1);
        fetchOakCommentary(result.player, result.opponent, currentTurn + 1, result.logs);
      }

      setIsFighting(false);
    }, 800);
  };

  const animateFighters = (pMove: Move, oMove: Move) => {
    // 1. Initial striker: Player hits Opponent
    if (pMove.category === 'Status') {
      setPlayerAnimate('boost');
      setBattleEffect({ type: 'Status', target: 'player' });
    } else {
      setOpponentAnimate('hit');
      setBattleEffect({ type: pMove.type, target: 'opponent' });
    }

    // Reset initial striker effect
    setTimeout(() => {
      setBattleEffect(null);
    }, 420);

    // 2. Secondary striker: Opponent hits Player (runs after delay)
    setTimeout(() => {
      if (oMove.category === 'Status') {
        setOpponentAnimate('boost');
        setBattleEffect({ type: 'Status', target: 'opponent' });
      } else {
        setPlayerAnimate('hit');
        setBattleEffect({ type: oMove.type, target: 'player' });
      }
    }, 450);

    // Reset secondary striker effect
    setTimeout(() => {
      setBattleEffect(null);
    }, 870);

    setTimeout(() => {
      setPlayerAnimate('idle');
      setOpponentAnimate('idle');
    }, 900);
  };

  const handleRematch = () => {
    audioSynth.playStartChime();
    setPlayerPkmn(initializePokemon(playerMeta));
    
    let otherPkmn = opponentPkmn;
    if (playMode === 'AI') {
      const otherPkmns = POKEMON_LIST.filter((p: any) => p.id !== playerMeta.id);
      const randomChoice = otherPkmns[Math.floor(Math.random() * otherPkmns.length)];
      otherPkmn = initializePokemon(randomChoice);
    } else if (opponentMeta) {
      otherPkmn = initializePokemon(opponentMeta);
    }

    setOpponentPkmn(otherPkmn);
    setCurrentTurn(1);
    setPlayerLockedMove(null);
    setOpponentLockedMove(null);
    setWinner(null);
    setPlayerPendingMove(null);
    setAiCommentary(`전투가 완전 리셋되었습니다! 오박사와 실시간 연결을 갱신합니다.`);
    
    const freshLogs = [
      {
        id: `rematch-${Date.now()}`,
        turn: 0,
        text: `🔄 <b>리매치 매치 개막!</b> 양측 전의를 회복하여 필드에 긴장감이 몰아칩니다!`,
        type: 'system' as const
      }
    ];
    setLogs(freshLogs);

    if (playMode !== 'AI' && network) {
      network.send({ type: 'RESET' });
      if (playMode === 'MULTIPLAYER_HOST') {
        // Re-push initialization schema
        setTimeout(() => {
          network.send({
            type: 'SYNC_STATE',
            state: {
              playerPokemon: otherPkmn,
              opponentPokemon: initializePokemon(playerMeta),
              currentTurn: 1,
              logs: freshLogs,
              winner: null,
              commentaryLoading: false,
              aiCommentary: '배틀 필드가 리매치로 초기화되었습니다!'
            }
          });
        }, 1000);
      }
    }
  };

  const getHPBarColor = (curr: number, max: number) => {
    const ratio = curr / max;
    if (ratio >= 0.5) return 'bg-emerald-500';
    if (ratio >= 0.2) return 'bg-amber-400';
    return 'bg-rose-500';
  };

  const getSpriteUrl = (id: number, back: boolean = false) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${back ? 'back/' : ''}${id}.png`;
  };

  const getTypeColor = (type: string) => {
    const map: Record<string, string> = {
      Normal: 'bg-slate-400 text-slate-100',
      Fire: 'bg-red-500 text-slate-100',
      Water: 'bg-blue-500 text-slate-100',
      Electric: 'bg-yellow-400 text-slate-900',
      Grass: 'bg-emerald-500 text-slate-100',
      Ice: 'bg-cyan-400 text-slate-900',
      Fighting: 'bg-rose-600 text-slate-100',
      Poison: 'bg-purple-500 text-slate-100',
      Ground: 'bg-amber-700 text-slate-100',
      Flying: 'bg-indigo-400 text-slate-100',
      Psychic: 'bg-pink-500 text-slate-100',
      Bug: 'bg-lime-500 text-slate-100',
      Rock: 'bg-yellow-700 text-slate-100',
      Ghost: 'bg-indigo-700 text-slate-100',
      Dragon: 'bg-violet-600 text-slate-100',
      Dark: 'bg-slate-800 text-slate-100',
      Steel: 'bg-slate-500 text-slate-100',
      Fairy: 'bg-pink-400 text-slate-900',
      None: 'bg-transparent text-slate-500'
    };
    return map[type] || 'bg-slate-500 text-slate-100';
  };

  const handleSendBattleChat = () => {
    if (!chatInput.trim() || !network) return;
    network.send({
      type: 'CHAT',
      text: chatInput.trim(),
      from: '원격_상대'
    });
    setChatMessages((prev) => [
      ...prev,
      {
        sender: '나',
        text: chatInput.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setChatInput('');
    audioSynth.playClick();
  };

  // Side effect to capture reactive incoming chats
  useEffect(() => {
    if (!network) return;
    
    // Listen for peer chat messages directly
    const originalOnData = network.onData;
    network.onData = (msg: any) => {
      if (msg.type === 'CHAT' && msg.text) {
        setChatMessages((prev) => [
          ...prev,
          {
            sender: msg.from || '상대',
            text: msg.text,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
        audioSynth.playClick();
      } else if (originalOnData) {
        originalOnData(msg);
      }
    };

    return () => {
      network.onData = originalOnData;
    };
  }, [network]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-sans overflow-hidden relative animate-fade-in" id="battle-screen-container">
      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0)_95%,rgba(0,0,0,0.3)_95%)] bg-[length:100%_4px] pointer-events-none opacity-40 z-50"></div>

      {/* Header Panel */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md px-6 py-4 flex justify-between items-center z-10" id="header-battle">
        <button
          onClick={onBackToDraft}
          className="p-2.5 border-2 border-slate-700 rounded-lg hover:bg-slate-800 transition-all font-mono text-xs flex items-center space-x-2 bg-slate-900"
          id="btn-back"
        >
          <ArrowLeft className="w-4 h-4 text-slate-400" />
          <span>DRAFT BOARD</span>
        </button>

        <div className="text-center">
          <span className="font-mono text-emerald-400 text-sm font-bold tracking-widest">{currentTurn} TURN</span>
          <p className="text-[10px] text-slate-500">
            {playMode === 'AI' ? '포켓몬 AI 챔피언스 리그' : '실시간 1v1 무선 매치'}
          </p>
        </div>

        <button
          onClick={handleRematch}
          className="p-2.5 border-2 border-slate-700 rounded-lg hover:bg-blue-900/40 hover:border-blue-500/50 transition-all font-mono text-xs flex items-center space-x-2 bg-slate-900 text-blue-300"
          id="btn-restart"
        >
          <RefreshCw className="w-4 h-4" />
          <span>REMATCH</span>
        </button>
      </header>

      {/* Main Battle Field Container */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-4 grid grid-cols-1 lg:grid-cols-12 gap-5 z-10 overflow-y-auto" id="arena-grid">
        
        {/* Left Grid: GBA/DS Pixel Battle Field */}
        <div className="lg:col-span-8 flex flex-col space-y-4" id="battlefield-left">
          
          {/* THE RETRO ARENA */}
          <div className="aspect-[4/3] w-full bg-gradient-to-b from-sky-950 via-slate-900 to-emerald-950 rounded-2xl border-4 border-slate-800 relative flex flex-col justify-between p-6 shadow-inner overflow-hidden animate-wiggle-subtle" id="pixel-arena">
            
            {/* OPPONENT ACTIVE PANEL (Top Right) */}
            <div className="flex justify-between items-start w-full self-start" id="opponent-battle-status">
              {/* Opponent Status HUD */}
              <div className="bg-slate-900/90 border-2 border-slate-700 p-3.5 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.6)] w-64 flex flex-col" id="opp-stats-panel">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-mono font-extrabold text-sm text-slate-100 flex items-center space-x-1">
                    <span>{opponentPkmn.meta.nameKor}</span>
                  </span>
                  <span className="font-mono font-bold text-xs text-yellow-400">Lv.50</span>
                </div>

                {/* HP Stat bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>HP</span>
                    <span>
                      {opponentPkmn.currentHp} / {opponentPkmn.stats.maxHp}
                    </span>
                  </div>
                  <div className="w-full bg-slate-950 h-2.5 rounded-full border border-slate-800 p-0.5 overflow-hidden">
                    <div
                      className={`h-full ${getHPBarColor(opponentPkmn.currentHp, opponentPkmn.stats.maxHp)} rounded-full transition-all duration-300`}
                      style={{ width: `${(opponentPkmn.currentHp / opponentPkmn.stats.maxHp) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Active Stat Levels HUD */}
                <div className="flex flex-wrap gap-1 mt-2" id="opp-stages">
                  {Object.entries(opponentPkmn.stats.stages).map(([k, val]) => {
                    const numVal = val as number;
                    if (numVal === 0) return null;
                    return (
                      <span key={k} className={`text-[9px] px-1 rounded font-mono ${numVal > 0 ? 'bg-emerald-600/30 text-emerald-400' : 'bg-rose-600/30 text-rose-400'}`}>
                        {k.toUpperCase()} {numVal > 0 ? `+${numVal}` : numVal}
                      </span>
                    );
                  })}
                  {opponentPkmn.status !== 'Healthy' && (
                    <span className="bg-rose-500 text-slate-950 text-[9.5px] font-bold px-1 rounded font-mono uppercase">
                      {opponentPkmn.status}
                    </span>
                  )}
                </div>
              </div>

              {/* Opponent Sprite Field */}
              <div className="relative w-40 h-40 flex items-center justify-center animate-wiggle-subtle" id="opponent-sprite-panel">
                <div className="absolute inset-x-0 bottom-4 bg-slate-950/45 h-5 w-28 rounded-full blur-sm mx-auto"></div>
                <img
                  src={getSpriteUrl(opponentPkmn.meta.id, false)}
                  alt={opponentPkmn.meta.nameKor}
                  referrerPolicy="no-referrer"
                  className={`w-32 h-32 object-contain pixelated absolute select-none ${
                    opponentAnimate === 'hit' ? 'animate-wiggle border-red-500 filter brightness-110 duration-200' : ''
                  } ${opponentAnimate === 'boost' ? 'animate-pulse scale-105' : ''}`}
                />
                {battleEffect && battleEffect.target === 'opponent' && (
                  <SkillEffectOverlay type={battleEffect.type} />
                )}
              </div>
            </div>

            {/* PLAYER ACTIVE PANEL (Bottom Left) */}
            <div className="flex justify-between items-end w-full self-end" id="player-battle-status">
              {/* Player Sprite Field (Back sprite GBA style) */}
              <div className="relative w-40 h-40 flex items-center justify-center" id="player-sprite-panel">
                <div className="absolute inset-x-0 bottom-4 bg-slate-950/45 h-5 w-28 rounded-full blur-sm mx-auto"></div>
                <img
                  src={getSpriteUrl(playerPkmn.meta.id, true)}
                  alt={playerPkmn.meta.nameKor}
                  referrerPolicy="no-referrer"
                  className={`w-34 h-34 object-contain pixelated absolute select-none ${
                    playerAnimate === 'hit' ? 'animate-wiggle border-red-500 filter brightness-110 duration-200' : ''
                  } ${playerAnimate === 'boost' ? 'animate-pulse scale-105' : ''}`}
                />
                {battleEffect && battleEffect.target === 'player' && (
                  <SkillEffectOverlay type={battleEffect.type} />
                )}
              </div>

              {/* Player Status HUD */}
              <div className="bg-slate-900/90 border-2 border-slate-700 p-3.5 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.6)] w-64 flex flex-col" id="player-stats-panel">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-mono font-extrabold text-sm text-slate-100 flex items-center space-x-1">
                    <span>{playerPkmn.meta.nameKor}</span>
                  </span>
                  <span className="font-mono font-bold text-xs text-yellow-400">Lv.50</span>
                </div>

                {/* HP Stat bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>HP</span>
                    <span>
                      {playerPkmn.currentHp} / {playerPkmn.stats.maxHp}
                    </span>
                  </div>
                  <div className="w-full bg-slate-950 h-2.5 rounded-full border border-slate-800 p-0.5 overflow-hidden">
                    <div
                      className={`h-full ${getHPBarColor(playerPkmn.currentHp, playerPkmn.stats.maxHp)} rounded-full transition-all duration-300`}
                      style={{ width: `${(playerPkmn.currentHp / playerPkmn.stats.maxHp) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Active Stat Levels HUD */}
                <div className="flex flex-wrap gap-1 mt-2" id="player-stages">
                  {Object.entries(playerPkmn.stats.stages).map(([k, val]) => {
                    const numVal = val as number;
                    if (numVal === 0) return null;
                    return (
                      <span key={k} className={`text-[9px] px-1 rounded font-mono ${numVal > 0 ? 'bg-emerald-600/30 text-emerald-400' : 'bg-rose-600/30 text-rose-400'}`}>
                        {k.toUpperCase()} {numVal > 0 ? `+${numVal}` : numVal}
                      </span>
                    );
                  })}
                  {playerPkmn.status !== 'Healthy' && (
                    <span className="bg-rose-500 text-slate-950 text-[9.5px] font-bold px-1 rounded font-mono uppercase">
                      {playerPkmn.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* REALTIME OAK META ASSISTANT DIALOG BAR */}
          <div className="border border-indigo-950 bg-slate-900 p-4 rounded-xl flex items-start space-x-3 shadow-lg relative overflow-hidden" id="oak-counsel">
            <div className="absolute right-0 top-0 w-24 h-24 bg-indigo-505/5 rounded-full blur-md"></div>
            
            <div className="flex-shrink-0 bg-gradient-to-b from-indigo-700 to-indigo-900 p-2 rounded-xl border-2 border-indigo-400">
              <BrainCircuit className={`w-5 h-5 text-indigo-100 ${commentaryLoading ? 'animate-spin' : ''}`} />
            </div>

            <div className="flex-1 space-y-1">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[10px] font-black tracking-wider text-indigo-400 uppercase">
                  📡 오박사 AI 메타 분석 (OAK ANALYSIS)
                </span>
                
                {commentaryLoading && (
                  <span className="font-mono text-[9px] text-indigo-300 animate-pulse">
                    분석 연산 중...
                  </span>
                )}
              </div>

              {commentaryLoading ? (
                <p className="text-slate-450 text-xs italic animate-pulse">
                  &ldquo;메타 기류와 상성을 계산하여 추천 전력을 기획하고 있습니다...&rdquo;
                </p>
              ) : (
                <p className="text-slate-200 text-xs leading-relaxed font-sans font-medium">
                  {aiCommentary}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right Grid: Commands & Battle Logs */}
        <div className="lg:col-span-4 flex flex-col space-y-3.5 justify-between" id="battlefield-right">
          
          {/* TAB SYSTEM HEADER */}
          <div className="flex border-2 border-slate-800 rounded-lg overflow-hidden bg-slate-900 leading-none">
            <button
              onClick={() => setActiveTab('logs')}
              className={`flex-1 py-3 text-xs font-mono font-bold tracking-widest text-center transition-colors border-r border-slate-800 flex items-center justify-center space-x-1 cursor-pointer ${
                activeTab === 'logs' ? 'bg-indigo-900 text-yellow-400' : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              <span>📜 시합 피드</span>
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex-1 py-3 text-xs font-mono font-bold tracking-widest text-center transition-colors flex items-center justify-center space-x-1 cursor-pointer ${
                activeTab === 'chat' ? 'bg-indigo-900 text-yellow-400' : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>💬 매치 채팅</span>
            </button>
          </div>

          {/* TAB PANEL 1: SCROLLING BATTLE LOGS */}
          {activeTab === 'logs' ? (
            <div className="border border-slate-850 bg-slate-900/50 p-4 rounded-xl flex flex-col h-72 lg:h-96" id="battle-logs-panel">
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto space-y-2 pr-1 font-mono text-[10.5px] leading-relaxed select-text"
                id="logs-viewport"
              >
                {logs.map((log) => {
                  let textClass = 'text-slate-350';
                  if (log.type === 'damage') textClass = 'text-rose-400 bg-rose-950/20 px-1.5 py-0.5 rounded border border-rose-950';
                  if (log.type === 'heal') textClass = 'text-emerald-400 bg-emerald-950/20 px-1.5 py-0.5 rounded border border-emerald-950';
                  if (log.type === 'stat-change') textClass = 'text-yellow-400 font-semibold';
                  if (log.type === 'status') textClass = 'text-indigo-450 font-semibold';

                  return (
                    <div
                      key={log.id}
                      className={`border-l-2 pl-2 border-slate-800 ${textClass}`}
                      dangerouslySetInnerHTML={{ __html: log.text }}
                    />
                  );
                })}
              </div>
            </div>
          ) : (
            /* TAB PANEL 2: LIVE RETRO CHAT BOX */
            <div className="border border-slate-850 bg-slate-900/50 p-4 rounded-xl flex flex-col h-72 lg:h-96 justify-between" id="battle-chat-panel">
              <div
                ref={chatScrollRef}
                className="flex-1 overflow-y-auto space-y-2 pr-1 font-mono text-xs mb-3"
                id="chat-viewport"
              >
                {chatMessages.length === 0 ? (
                  <p className="text-slate-600 italic text-[10px] text-center pt-8">상대방에게 영리하게 농담을 뱉어 집중을 방해해 보십시오!</p>
                ) : (
                  chatMessages.map((msg, i) => (
                    <div key={i} className="flex flex-col text-[11px]">
                      <div className="flex justify-between items-baseline opacity-70">
                        <span className="font-extrabold text-indigo-400 text-[10px]">{msg.sender}</span>
                        <span className="text-[8px] text-slate-650">{msg.time}</span>
                      </div>
                      <p className="text-slate-300 pl-1 border-l border-slate-800">{msg.text}</p>
                    </div>
                  ))
                )}
              </div>

              <div className="flex space-x-1.5 border-t border-slate-800 pt-3">
                <input
                  type="text"
                  placeholder="텍스트 입력..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendBattleChat()}
                  className="flex-1 bg-slate-950 text-slate-100 placeholder-slate-700 border border-slate-800 rounded px-2 text-xs focus:outline-none"
                />
                <button
                  onClick={handleSendBattleChat}
                  disabled={playMode === 'AI'}
                  className="p-1.5 bg-indigo-700 hover:bg-indigo-650 disabled:opacity-40 text-white rounded text-xs font-mono"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* COMMAND ACTION SWITCHER */}
          <div className="border-4 border-slate-800 bg-slate-900 p-4 rounded-2xl shadow-xl flex flex-col" id="battle-controls">
            {winner ? (
              <div className="text-center py-5 space-y-4" id="victory-screen">
                <h4 className="font-mono text-base font-black tracking-widest text-yellow-400 uppercase">
                  {winner === 'player' ? '🏆 VICTORY CHAMPION' : '💀 DEFEAT GAME OVER'}
                </h4>
                <p className="text-xs text-slate-350 px-2 font-sans">
                  {winner === 'player'
                    ? `당신의 영리한 상성 저격과 기점 확보 전술이 완전히 승리를 거두어냈습니다!`
                    : `적의 날카로운 수 읽기와 장비 특성에 무릎 꿇었습니다.`}
                </p>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={handleRematch}
                    className="py-2.5 px-3 bg-indigo-700 hover:bg-indigo-600 text-white font-mono text-xs font-bold rounded-lg border-2 border-indigo-400 shadow cursor-pointer active:scale-95 transition-transform"
                    id="btn-restart-rematch"
                  >
                    FIGHT AGAIN
                  </button>
                  <button
                    onClick={onBackToDraft}
                    className="py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs font-bold rounded-lg border-2 border-slate-600 shadow cursor-pointer active:scale-95 transition-transform"
                    id="btn-back-rematch"
                  >
                    DRAFT NEW
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3" id="commands-menu">
                <div className="flex justify-between items-center border-b border-slate-800 pb-1.5">
                  <span className="font-mono text-[10px] tracking-wider text-slate-500 uppercase font-black">
                    🥋 COMMANDS ACTION
                  </span>
                  
                  {playerPendingMove ? (
                    <span className="text-[10px] text-yellow-400 font-bold border border-yellow-400/45 px-1.5 rounded animate-pulse">
                      상대 결정 대기 중...
                    </span>
                  ) : (
                    playerMeta.item.name === '구애머리띠' && playerLockedMove && (
                      <span className="text-[9.5px] text-orange-400 font-bold border border-orange-400/40 px-1 rounded">머리띠 고정</span>
                    )
                  )}

                  {playerMeta.item.name === '구애안경' && playerLockedMove && (
                    <span className="text-[9.5px] text-sky-450 font-bold border border-sky-400/40 px-1 rounded">안경 고정</span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2" id="moves-action-grid">
                  {playerPkmn.meta.moves.map((mv) => {
                    const isChoiceLocked = !!playerLockedMove && playerLockedMove.id !== mv.id;
                    const isDisabled = isFighting || isChoiceLocked || !!playerPendingMove;

                    return (
                      <button
                        key={mv.id}
                        onClick={() => handleMoveSelect(mv)}
                        disabled={isDisabled}
                        className={`p-3 rounded-xl border-2 text-left font-mono transition-all relative group flex flex-col justify-between h-20 ${
                          isDisabled
                            ? 'opacity-40 border-slate-800 bg-slate-950 cursor-not-allowed'
                            : 'border-slate-700 bg-slate-800/60 hover:bg-slate-800 hover:border-yellow-400 hover:translate-y-[-1px] cursor-pointer'
                        }`}
                        id={`move-btn-${mv.id}`}
                      >
                        <div className="flex justify-between items-start w-full">
                          <span className={`text-[11px] font-extrabold tracking-tight ${isDisabled ? 'text-slate-550' : 'text-slate-150 group-hover:text-yellow-400'}`}>
                            {mv.name}
                          </span>
                          <span className={`text-[8px] font-mono uppercase px-1 rounded leading-none shrink-0 ${getTypeColor(mv.type)}`}>
                            {mv.type}
                          </span>
                        </div>

                        <div className="flex justify-between items-center text-[9px] text-slate-500 w-full">
                          <span>
                            위력: <span className="text-yellow-400 font-bold">{mv.power || '-'}</span>
                          </span>
                          <span>
                            명중: <span className="text-sky-450">{mv.accuracy}%</span>
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
