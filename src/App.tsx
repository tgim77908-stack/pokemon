import React, { useState, useEffect, useRef } from 'react';
import TeamSelect from './components/TeamSelect';
import BattleScreen from './components/BattleScreen';
import { PokemonMeta, PlayMode, NetworkMessage } from './types';
import { audioSynth } from './utils/audio';
import { PokeChampsNetwork } from './network';
import { POKEMON_LIST } from './pokemonData';
import { Swords, Trophy, Sparkles, Shield, Compass, User, RefreshCw, Send, MessageSquare, AlertCircle, Copy, Check } from 'lucide-react';

export default function App() {
  const [screen, setScreen] = useState<'MENU' | 'LOBBY' | 'DRAFT' | 'BATTLE'>('MENU');
  const [playMode, setPlayMode] = useState<PlayMode>('AI');
  
  // Nicknames & Network
  const [nickname, setNickname] = useState<string>(() => {
    const trainers = ['레드', '그린', '블루', '지우', '이슬', '웅이', '성호', '난천'];
    const randomName = trainers[Math.floor(Math.random() * trainers.length)];
    return `${randomName}_${Math.floor(100 + Math.random() * 900)}`;
  });
  const [opponentNickname, setOpponentNickname] = useState<string>('상대 트레이너');
  const [roomCode, setRoomCode] = useState<string>('');
  const [joinCode, setJoinCode] = useState<string>('');
  const [connectionStatus, setConnectionStatus] = useState<'disconnected' | 'connecting' | 'connected' | 'error'>('disconnected');
  const [network, setNetwork] = useState<PokeChampsNetwork | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');

  // Chat Log
  const [chatMessages, setChatMessages] = useState<{ sender: string; text: string; time: string; system?: boolean }[]>([]);
  const [chatInput, setChatInput] = useState<string>('');

  // Fighter Drafting States
  const [selectedFighter, setSelectedFighter] = useState<PokemonMeta | null>(null);
  const [opponentFighter, setOpponentFighter] = useState<PokemonMeta | null>(null);
  const [opponentSelectedId, setOpponentSelectedId] = useState<number | null>(null);

  // Synced Battle States
  const [opponentChosenMoveId, setOpponentChosenMoveId] = useState<string | null>(null);
  const [syncedBattleState, setSyncedBattleState] = useState<any>(null);

  // Auto clean up network on unmount
  useEffect(() => {
    return () => {
      if (network) {
        network.destroy();
      }
    };
  }, [network]);

  const addSystemLog = (text: string) => {
    setChatMessages((prev) => [
      ...prev,
      {
        sender: '시스템',
        text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        system: true
      }
    ]);
  };

  const handleModeAI = () => {
    audioSynth.playClick();
    setPlayMode('AI');
    setScreen('DRAFT');
  };

  const handleModeMultiplayer = () => {
    audioSynth.playClick();
    setScreen('LOBBY');
  };

  // WebRTC PeerJS Initializations
  const initNetworkCallbacks = (net: PokeChampsNetwork) => {
    return {
      onOpen: (id: string) => {
        setRoomCode(id);
        setConnectionStatus('waiting');
        addSystemLog(`📡 대기실이 무사히 승인되었습니다! 코드: ${id}`);
      },
      onConnected: () => {
        setConnectionStatus('connected');
        addSystemLog('⚡ 배틀 콜로세움 동기화가 성사되었습니다!');
        audioSynth.playStartChime();
        
        // Greet each other with nicknames
        const mode = playMode; // check mode
        net.send({
          type: 'HELLO',
          name: nickname,
          sender: net.isConnected() ? 'host' : 'client' // doesn't matter, we send nickname
        });
      },
      onData: (msg: NetworkMessage) => {
        if (msg.type === 'HELLO' && msg.name) {
          setOpponentNickname(msg.name);
          addSystemLog(`🤝 [${msg.name}] 트레이너님이 콜로세움에 입장하였습니다!`);
        }
        else if (msg.type === 'CHAT' && msg.text) {
          setChatMessages((prev) => [
            ...prev,
            {
              sender: msg.from || '상대',
              text: msg.text!,
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]);
          audioSynth.playClick();
        }
        else if (msg.type === 'START_DRAFT') {
          addSystemLog('⚔️ 상대방의 요청으로 에픽 드래프트 보드 진입!');
          setScreen('DRAFT');
          audioSynth.playStartChime();
        }
        else if (msg.type === 'SELECT_FIGHTER' && msg.pokemonId) {
          setOpponentSelectedId(msg.pokemonId);
          const found = POKEMON_LIST.find((p) => p.id === msg.pokemonId);
          if (found) {
            setOpponentFighter(found);
            addSystemLog(`🎯 상대가 [${found.nameKor}] 챔피언을 선택 중입니다/방금 골랐습니다!`);
          }
        }
        else if (msg.type === 'CHOOSE_MOVE' && msg.moveId) {
          setOpponentChosenMoveId(msg.moveId);
        }
        else if (msg.type === 'SYNC_STATE' && msg.state) {
          setSyncedBattleState(msg.state);
          // Auto move client to battle screen if they are not already there
          setScreen('BATTLE');
        }
        else if (msg.type === 'RESET') {
          addSystemLog('🔄 대전 상흔이 완전 초기화되었습니다! 리매치 개시.');
          setOpponentChosenMoveId(null);
          // Reload state
        }
      },
      onDisconnect: () => {
        setConnectionStatus('disconnected');
        addSystemLog('🔌 상대 트레이너와의 실시간 동기화가 소실되었습니다.');
        setScreen('LOBBY');
      },
      onError: (err: Error) => {
        console.error('PeerJS Network Error:', err);
        setConnectionStatus('error');
        setFeedbackMessage('네트워크 채널 동용 오류! 방 번호가 불안정하거나 서버 승인이 정체중입니다.');
      }
    };
  };

  const handleCreateRoom = () => {
    audioSynth.playClick();
    setConnectionStatus('generating');
    setPlayMode('MULTIPLAYER_HOST');
    
    const callbacks = initNetworkCallbacks({} as any); // placeholder
    const net = new PokeChampsNetwork({
      onOpen: (id) => {
        setRoomCode(id);
        setConnectionStatus('waiting');
        addSystemLog(`📡 방을 열고 대전 코드를 활성했습니다: ${id}`);
      },
      onConnected: () => {
        setConnectionStatus('connected');
        addSystemLog('🤝 원격 훈련사님이 접속에 동기화하였습니다!');
        audioSynth.playStartChime();
        net.send({ type: 'HELLO', name: nickname });
      },
      onData: (data) => callbacks.onData(data),
      onDisconnect: () => callbacks.onDisconnect(),
      onError: (err) => callbacks.onError(err)
    });

    net.createHost();
    setNetwork(net);
  };

  const handleJoinRoom = () => {
    if (!joinCode.trim()) {
      setFeedbackMessage('입장할 대전 방 코드를 기입하여 주십시오.');
      return;
    }
    audioSynth.playClick();
    setConnectionStatus('connecting');
    setPlayMode('MULTIPLAYER_CLIENT');

    const callbacks = initNetworkCallbacks({} as any);
    const net = new PokeChampsNetwork({
      onOpen: (id) => {
        addSystemLog(`🔑 클라이언트 연결 로드 준비 완수 (ID: ${id})`);
      },
      onConnected: () => {
        setConnectionStatus('connected');
        addSystemLog('🤝 호스트 방 접속 동기화 완료!');
        audioSynth.playStartChime();
        net.send({ type: 'HELLO', name: nickname });
      },
      onData: (data) => callbacks.onData(data),
      onDisconnect: () => callbacks.onDisconnect(),
      onError: (err) => callbacks.onError(err)
    });

    net.connectToHost(joinCode.trim());
    setNetwork(net);
  };

  const handleCancelLobby = () => {
    audioSynth.playClick();
    if (network) {
      network.destroy();
      setNetwork(null);
    }
    setConnectionStatus('disconnected');
    setRoomCode('');
    setScreen('MENU');
  };

  const handleStartMultiplayerDraft = () => {
    if (connectionStatus !== 'connected' || !network) return;
    audioSynth.playStartChime();
    network.send({ type: 'START_DRAFT' });
    setScreen('DRAFT');
    addSystemLog('⚔️ 에픽 최강 메타 드래프트에 돌입합니다!');
  };

  const handleSendChatMessage = () => {
    if (!chatInput.trim() || !network) return;
    
    network.send({
      type: 'CHAT',
      text: chatInput.trim(),
      from: nickname
    });

    setChatMessages((prev) => [
      ...prev,
      {
        sender: nickname,
        text: chatInput.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);

    setChatInput('');
    audioSynth.playClick();
  };

  // Draft Pokémon choice
  const handleSelectFighter = (fighter: PokemonMeta) => {
    setSelectedFighter(fighter);
    
    if (playMode === 'AI') {
      setScreen('BATTLE');
    } else if (network) {
      // Send selected fighter to peer
      network.send({
        type: 'SELECT_FIGHTER',
        pokemonId: fighter.id
      });
      addSystemLog(`🎯 내가 [${fighter.nameKor}] 챔피언을 지명 수락했습니다. 상대 결정을 기다리는 중...`);

      // If opponent already selected their fighter, trigger battle transit!
      if (opponentFighter) {
        addSystemLog(`⚔️ 양측 챔피언 결정 완료! 아레나로 진입합니다!`);
        setTimeout(() => {
          setScreen('BATTLE');
        }, 1200);
      }
    }
  };

  const handleBackToDraft = () => {
    audioSynth.playClick();
    setSelectedFighter(null);
    setOpponentFighter(null);
    setOpponentSelectedId(null);
    setOpponentChosenMoveId(null);
    setSyncedBattleState(null);
    setScreen('DRAFT');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(roomCode);
    setCopied(true);
    audioSynth.playClick();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center relative overflow-x-hidden font-sans" id="app-root">
      {/* Absolute CRT Scanline Effects for true GBA texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0)_95%,rgba(0,0,0,0.35)_95%)] bg-[length:100%_4px] pointer-events-none opacity-40 z-50"></div>

      {screen === 'MENU' && (
        <div className="w-full max-w-lg mx-auto p-8 border-4 border-slate-800 bg-slate-900 rounded-3xl text-center relative overflow-hidden shadow-2xl flex flex-col justify-center items-center" id="main-menu-card">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0)_95%,rgba(0,0,0,0.3)_95%)] bg-[length:100%_4px] pointer-events-none opacity-40 z-0"></div>
          
          <div className="relative z-10 space-y-6 w-full flex flex-col items-center">
            {/* Spinning Poke Ball */}
            <div className="w-24 h-24 rounded-full border-4 border-slate-700 bg-slate-950 flex flex-col justify-between items-center relative overflow-hidden animate-pulse shadow-lg" id="retro-pokeball">
              <div className="w-full h-1/2 bg-red-600 border-b-4 border-slate-700"></div>
              <div className="w-7 h-7 rounded-full bg-slate-900 border-4 border-slate-700 absolute inset-0 m-auto flex justify-center items-center z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-white animate-ping"></div>
              </div>
              <div className="w-full h-1/2 bg-white"></div>
            </div>

            <div>
              <h1 className="font-mono text-3xl font-black tracking-widest text-slate-100 flex flex-col items-center">
                <span className="text-yellow-400 font-mono text-xs border border-yellow-400 px-2 py-0.5 rounded tracking-normal uppercase font-bold animate-bounce mb-2">
                  Nintendo Meta League
                </span>
                <span className="leading-tight uppercase font-extrabold text-white text-2xl tracking-wide">포켓몬 챔피언스</span>
                <span className="text-yellow-400 text-base font-extrabold font-mono uppercase tracking-[0.3em] mt-1">1v1 RETRO BATTLE</span>
              </h1>
              <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed mt-4 font-sans">
                1세대부터 9세대까지 역대 최고의 사기 메타 포켓몬 10마리가 집결했습니다. AI 또는 원격 유저와 1대1 도트 배틀을 시작하십시오!
              </p>
            </div>

            {/* Custom Nickname Bar */}
            <div className="w-full bg-slate-950 px-4 py-3 rounded-xl border border-slate-800 flex items-center justify-between" id="nickname-bar">
              <div className="flex items-center space-x-2.5">
                <User className="w-4 h-4 text-indigo-400" />
                <span className="text-[11px] font-mono font-bold text-slate-400 uppercase">My Nickname</span>
              </div>
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                maxLength={12}
                className="bg-slate-900 border border-slate-700 px-3 py-1 rounded text-xs font-mono text-yellow-400 focus:outline-none focus:border-yellow-400 text-right w-36"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 w-full" id="modes-selection">
              <button
                onClick={handleModeAI}
                className="py-4 px-3 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 rounded-xl border-2 border-yellow-400 font-mono text-[11px] font-extrabold tracking-wider text-white shadow active:scale-95 transition-all text-center flex flex-col items-center justify-center space-y-1.5 cursor-pointer"
              >
                <Trophy className="w-5 h-5 text-yellow-300" />
                <span>AI 배틀 (CPU 전설)</span>
              </button>
              <button
                onClick={handleModeMultiplayer}
                className="py-4 px-3 bg-gradient-to-r from-indigo-700 to-violet-800 hover:from-indigo-600 hover:to-violet-700 rounded-xl border-2 border-indigo-450 font-mono text-[11px] font-extrabold tracking-wider text-indigo-100 shadow active:scale-95 transition-all text-center flex flex-col items-center justify-center space-y-1.5 cursor-pointer"
              >
                <Swords className="w-5 h-5 text-indigo-305" />
                <span>온라인 실시간 멀티</span>
              </button>
            </div>

            <p className="text-[10px] text-slate-500 font-mono">
              WebRTC Peer Connection Engine - No DB Server Required
            </p>
          </div>
        </div>
      )}

      {screen === 'LOBBY' && (
        <div className="w-full max-w-xl mx-auto p-6 border-4 border-slate-800 bg-slate-900 rounded-3xl relative shadow-2xl flex flex-col space-y-5" id="lobby-card">
          <div className="flex justify-between items-center border-b border-slate-800 pb-3">
            <div className="flex items-center space-x-2.5">
              <div className="bg-indigo-600 p-1.5 rounded-lg border-2 border-indigo-450 text-white shrink-0">
                <Swords className="w-4 h-4 animate-pulse" />
              </div>
              <div>
                <h2 className="font-mono font-bold text-sm text-slate-100 uppercase tracking-widest">
                  배틀 네트워크 대기실 (MULTIPLAYER)
                </h2>
                <p className="text-[10px] text-slate-400">내 닉네임: <span className="text-yellow-400 font-mono">{nickname}</span></p>
              </div>
            </div>
            
            <button
              onClick={handleCancelLobby}
              className="text-xs font-mono text-slate-400 hover:text-white px-2 py-1 hover:bg-slate-800 rounded border border-slate-700 transition-colors"
            >
              나가기
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Hosting Panel */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[11px] font-mono font-black text-rose-400 uppercase tracking-wider block">Option A. 방 만들기 (HOST)</span>
                <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                  방을 개설하여 대전 번호를 획득한 뒤 상대방에게 배포하여 실시간 WebRTC 배틀을 수락받습니다.
                </p>
              </div>

              {roomCode ? (
                <div className="space-y-2">
                  <div className="bg-slate-900 border border-indigo-900 p-2 rounded flex justify-between items-center text-xs">
                    <span className="font-mono text-slate-400">코드:</span>
                    <strong className="font-mono text-yellow-400 text-sm select-all tracking-wider">{roomCode}</strong>
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="w-full py-2 bg-indigo-900 hover:bg-indigo-800 text-white font-mono text-[10.5px] font-bold rounded flex justify-center items-center space-x-1.5 border border-indigo-400 text-center cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? '복사 완료!' : '대전 코드 복사'}</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleCreateRoom}
                  disabled={connectionStatus === 'generating'}
                  className="w-full py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-mono text-xs font-bold rounded-lg border-2 border-yellow-400 text-center tracking-wider hover:translate-y-[-1px] transition-transform cursor-pointer"
                >
                  {connectionStatus === 'generating' ? '서버 승인 받는 중...' : 'HOST 대전 개설'}
                </button>
              )}
            </div>

            {/* Joining Panel */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[11px] font-mono font-black text-sky-400 uppercase tracking-wider block">Option B. 참전 신청 (JOIN)</span>
                <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                  상대방이 발급해 준 호스트 대전 코드를 수집 기입하여 원격 시합에 참여합니다.
                </p>
              </div>

              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="호스트 코드 입력"
                  value={joinCode}
                  onChange={(e) => setJoinCode(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-yellow-400 font-mono tracking-wider focus:outline-none focus:border-yellow-400 placeholder-slate-600 text-center"
                />
                <button
                  onClick={handleJoinRoom}
                  disabled={connectionStatus === 'connecting'}
                  className="w-full py-2 bg-sky-600 hover:bg-sky-500 text-white font-mono text-xs font-bold rounded-lg border-2 border-sky-400 text-center tracking-wider hover:translate-y-[-1px] transition-transform cursor-pointer"
                >
                  {connectionStatus === 'connecting' ? '방 찾아 접속 중...' : '원격 콜로세움 참전'}
                </button>
              </div>
            </div>
          </div>

          {/* Connection Status Flag */}
          <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-xl flex items-center justify-between">
            <div className="flex items-center space-x-2 font-mono text-xs">
              <span className="text-slate-400 text-[10.5px]">연결 유효 상태:</span>
              {connectionStatus === 'disconnected' && <span className="text-slate-500 font-bold">🔴 대치 없음</span>}
              {connectionStatus === 'generating' && <span className="text-yellow-500 animate-pulse font-bold">🟡 방 등록 개설 중...</span>}
              {connectionStatus === 'waiting' && <span className="text-yellow-400 animate-pulse font-bold">⏳ 상대 결투 대기 중...</span>}
              {connectionStatus === 'connecting' && <span className="text-amber-500 animate-pulse font-bold">💫 상대 신호 조율 중...</span>}
              {connectionStatus === 'connected' && <span className="text-emerald-400 flex items-center font-bold">🟢 연결 성사! vs {opponentNickname}</span>}
              {connectionStatus === 'error' && <span className="text-rose-500 font-bold">❌ 접속 실패</span>}
            </div>

            {connectionStatus === 'connected' && playMode === 'MULTIPLAYER_HOST' && (
              <button
                onClick={handleStartMultiplayerDraft}
                className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 border border-emerald-400 text-white font-mono text-[10.5px] font-bold rounded-lg tracking-wider animate-bounce"
              >
                START DRAFT (시합 개시)
              </button>
            )}

            {connectionStatus === 'connected' && playMode === 'MULTIPLAYER_CLIENT' && (
              <span className="text-[10px] text-yellow-400 font-mono italic animate-pulse">
                호스트가 드래프트를 열길 기다리는 중...
              </span>
            )}
          </div>

          {feedbackMessage && (
            <div className="text-[10.5px] text-rose-400 bg-rose-950/20 border border-rose-950 px-3 py-2 rounded-lg flex items-center space-x-2">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{feedbackMessage}</span>
            </div>
          )}

          {/* Lobby Chatting Drawer */}
          <div className="border border-slate-800 bg-slate-950/60 p-4 rounded-xl flex flex-col h-44">
            <div className="flex items-center space-x-1.5 font-mono text-[11px] font-bold text-slate-400 border-b border-slate-800 pb-1.5 mb-2">
              <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
              <span>실시간 채팅 (CHAT LOG)</span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-1.5 text-xs pr-1 font-mono mb-2">
              {chatMessages.length === 0 ? (
                <p className="text-slate-600 italic text-[10.5px] text-center pt-4">아무도 말글을 적지 않았습니다.</p>
              ) : (
                chatMessages.map((msg, i) => (
                  <div key={i} className={`flex flex-col text-[11px] ${msg.system ? 'text-indigo-400 italic' : ''}`}>
                    <div className="flex justify-between items-baseline mb-0.5">
                      <span className={`font-extrabold ${msg.sender === nickname ? 'text-yellow-400' : 'text-slate-300'}`}>{msg.sender}</span>
                      <span className="text-[9px] text-slate-600">{msg.time}</span>
                    </div>
                    <p className={`text-slate-300 pl-1 border-l border-slate-800 ${msg.system ? 'border-none' : ''}`}>{msg.text}</p>
                  </div>
                ))
              )}
            </div>

            <div className="flex space-x-1.5">
              <input
                type="text"
                placeholder="상대에게 할 말을 적으십시오..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendChatMessage()}
                className="flex-1 bg-slate-900 border border-slate-700 text-xs text-slate-100 rounded px-2 focus:outline-none"
              />
              <button
                onClick={handleSendChatMessage}
                disabled={!network}
                className="p-1 px-3 bg-indigo-700 hover:bg-indigo-600 disabled:opacity-40 rounded border border-indigo-500 text-white text-xs font-mono"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {screen === 'DRAFT' && (
        <TeamSelect
          onSelect={handleSelectFighter}
          playMode={playMode}
          opponentConnected={connectionStatus === 'connected'}
        />
      )}

      {screen === 'BATTLE' && selectedFighter && (
        <BattleScreen
          playerMeta={selectedFighter}
          opponentMeta={opponentFighter || undefined}
          playMode={playMode}
          network={network}
          onBackToDraft={handleBackToDraft}
          opponentChosenMoveId={opponentChosenMoveId}
          clearOpponentChosenMoveId={() => setOpponentChosenMoveId(null)}
          syncedBattleState={syncedBattleState}
          clearSyncedBattleState={() => setSyncedBattleState(null)}
        />
      )}
    </div>
  );
}
