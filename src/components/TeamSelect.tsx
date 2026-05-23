import React, { useState } from 'react';
import { PokemonMeta, PlayMode } from '../types';
import { POKEMON_LIST } from '../pokemonData';
import { audioSynth } from '../utils/audio';
import { Shield, Swords, Zap, Heart, Trophy, Sparkles, Volume2, VolumeX } from 'lucide-react';

interface TeamSelectProps {
  onSelect: (selected: PokemonMeta) => void;
  playMode?: PlayMode;
  opponentConnected?: boolean;
}

export default function TeamSelect({ onSelect, playMode, opponentConnected }: TeamSelectProps) {
  const [activeGen, setActiveGen] = useState<number>(1);
  const [selectedPkmn, setSelectedPkmn] = useState<PokemonMeta>(POKEMON_LIST[0]);
  const [soundOn, setSoundOn] = useState(audioSynth.isSoundEnabled());

  const handleSelect = (pkmn: PokemonMeta) => {
    setSelectedPkmn(pkmn);
    audioSynth.playClick();
  };

  const handleStart = () => {
    // Play transition chime
    audioSynth.playStartChime();
    onSelect(selectedPkmn);
  };

  const toggleSound = () => {
    const nextState = audioSynth.toggleSound();
    setSoundOn(nextState);
    audioSynth.playClick();
  };

  // Safe sprite helper
  const getSpriteUrl = (id: number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  };

  const filteredPokemon = POKEMON_LIST.filter((p) => p.generation.startsWith(`${activeGen}세대`));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-sans overflow-x-hidden relative" id="team-select-container">
      {/* 8-bit Background Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0)_95%,rgba(0,0,0,0.3)_95%)] bg-[length:100%_4px] pointer-events-none opacity-40 z-50"></div>

      {/* Header Bar */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md px-6 py-4 flex justify-between items-center z-10" id="header-select">
        <div className="flex items-center space-x-3">
          <div className="bg-red-600 p-2 rounded-lg border-2 border-slate-700 shadow-[2px_2px_0px_0px_rgba(239,68,68,0.5)]">
            <Trophy className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <h1 className="font-mono text-lg font-bold tracking-wider text-slate-100 flex items-center gap-1.5 uppercase">
              Retro Poke-Champions <span className="text-yellow-400 font-mono text-xs border border-yellow-400/40 px-1.5 py-0.5 rounded">1v1 META</span>
            </h1>
            <p className="text-xs text-slate-400">1~9세대 황금기 최강의 메타 크루 10선</p>
          </div>
        </div>

        <button
          onClick={toggleSound}
          className="p-2 border-2 border-slate-700 rounded-md hover:bg-slate-800 transition-all font-mono text-xs flex items-center space-x-2 bg-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] active:translate-x-0.5 active:translate-y-0.5"
          id="sound-toggle"
        >
          {soundOn ? (
            <>
              <Volume2 className="w-4 h-4 text-emerald-400" />
              <span>SOUND ON</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-rose-400" />
              <span>MUTED</span>
            </>
          )}
        </button>
      </header>

      {/* Main Selection Body */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 z-10" id="selection-main">
        
        {/* Left Side: Grid of 10 Champion Pokemon */}
        <div className="lg:col-span-7 flex flex-col space-y-4" id="select-left-panel">
          <div className="border border-slate-800 bg-slate-900/50 p-4 rounded-xl flex flex-col justify-center">
            <h2 className="font-mono text-sm tracking-widest text-slate-400 uppercase font-bold mb-2 flex items-center gap-1.5">
              <span>🎯 SELECT YOUR FIGHTER</span>
              <span className="text-xs text-yellow-500 font-normal">포켓몬과 세대를 고르십시오</span>
            </h2>

            {/* Generation Tabs */}
            <div className="flex overflow-x-auto gap-1 py-1 px-1 mb-3 bg-slate-950 border border-slate-800 rounded-xl scrollbar-none" id="gen-tabs-menu">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((gen) => {
                const isActive = activeGen === gen;
                return (
                  <button
                    key={gen}
                    onClick={() => {
                      setActiveGen(gen);
                      audioSynth.playClick();
                      const firstInGen = POKEMON_LIST.find((p) => p.generation.startsWith(`${gen}세대`));
                      if (firstInGen) {
                        setSelectedPkmn(firstInGen);
                      }
                    }}
                    className={`flex-1 min-w-[55px] px-2.5 py-1.5 rounded-lg font-mono text-[10px] font-bold tracking-widest text-center transition-all cursor-pointer ${
                      isActive
                        ? 'bg-yellow-400 text-slate-950 border border-yellow-400 font-black shadow-[0_0_8px_rgba(250,204,21,0.35)]'
                        : 'bg-transparent text-slate-400 border border-transparent hover:text-slate-200'
                    }`}
                  >
                    GEN {gen}
                  </button>
                );
              })}
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3" id="pokemon-grid">
              {filteredPokemon.map((pkmn) => {
                const isSelected = selectedPkmn.id === pkmn.id;
                return (
                  <button
                    key={pkmn.id}
                    onClick={() => handleSelect(pkmn)}
                    className={`relative p-3 rounded-xl border-2 transition-all flex flex-col items-center justify-center cursor-pointer group bg-slate-900 ${
                      isSelected
                        ? 'border-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.3)] scale-[1.03] bg-gradient-to-b from-slate-900 to-slate-800/80'
                        : 'border-slate-800 hover:border-slate-700 hover:bg-slate-900/80 hover:translate-y-[-2px]'
                    }`}
                    id={`pokemon-btn-${pkmn.id}`}
                  >
                    {/* Pokédex ID badge */}
                    <span className="absolute top-1 right-2 text-[9px] font-mono font-medium text-slate-500">
                      #{pkmn.id}
                    </span>

                    {/* Pokémon Sprite */}
                    <img
                      src={getSpriteUrl(pkmn.id)}
                      alt={pkmn.nameKor}
                      referrerPolicy="no-referrer"
                      className={`w-18 h-18 object-contain pixelated ${
                        isSelected ? 'animate-bounce' : 'group-hover:scale-105'
                      }`}
                      style={{ imageRendering: 'pixelated' }}
                    />

                    {/* Name */}
                    <span className={`text-xs font-semibold mt-1 transition-colors ${
                      isSelected ? 'text-yellow-400' : 'text-slate-300'
                    }`}>
                      {pkmn.nameKor}
                    </span>
                    
                    {/* Gen Label */}
                    <span className="text-[10px] font-mono text-slate-500 mt-0.5">
                      {pkmn.generation.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Meta Infobox */}
          <div className="border border-slate-800 bg-slate-900/40 p-5 rounded-xl flex-1 flex flex-col justify-between" id="pokemon-meta-infobox">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="bg-yellow-400 text-slate-950 font-mono text-xs font-bold px-2 py-0.5 rounded uppercase">
                  {selectedPkmn.generation}
                </span>
                <span className="text-slate-500 font-mono text-xs">No. {selectedPkmn.id}</span>
              </div>
              <h3 className="text-xl font-bold font-mono text-slate-100 flex items-center space-x-2">
                <span>{selectedPkmn.nameKor}</span>
                <span className="text-sm text-slate-400 font-normal">({selectedPkmn.nameEng})</span>
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed mt-2.5 font-sans border-l-2 border-yellow-500/40 pl-3">
                {selectedPkmn.metaReason}
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800/60 grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs text-slate-500 font-bold block mb-1">🔥 특성 (ABILITY)</span>
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                  <div className="font-mono text-xs text-slate-200 font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-yellow-400" />
                    {selectedPkmn.ability.name}
                  </div>
                  <p className="text-[10.5px] text-slate-400 mt-1 leading-snug">{selectedPkmn.ability.description}</p>
                </div>
              </div>

              <div>
                <span className="text-xs text-slate-500 font-bold block mb-1">🎁 지닌도구 (ITEM)</span>
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                  <div className="font-mono text-xs text-slate-200 font-bold flex items-center gap-1">
                    <Heart className="w-3 h-3 text-red-400" />
                    {selectedPkmn.item.name}
                  </div>
                  <p className="text-[10.5px] text-slate-400 mt-1 leading-snug">{selectedPkmn.item.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Detailed Stats & Moves List */}
        <div className="lg:col-span-5 flex flex-col space-y-6" id="select-right-panel">
          
          {/* Stats Bar Chart */}
          <div className="border border-slate-800 bg-slate-900/50 p-5 rounded-xl" id="pokemon-spec-card">
            <h3 className="font-mono text-sm tracking-widest text-slate-400 mb-4 uppercase font-bold flex items-center justify-between">
              <span>📊 BASE SPECS</span>
              <span className="text-xs text-slate-500 normal-case font-normal">Lv. 50 실전 최적화</span>
            </h3>

            {/* Nature Tag */}
            <div className="mb-4 bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
              <div>
                <span className="text-[10px] text-slate-500 font-mono block">NATURE (성격)</span>
                <span className="font-mono text-sm text-yellow-400 font-bold">{selectedPkmn.nature.name}</span>
              </div>
              <div className="text-right">
                <span className="text-[10.5px] text-slate-300 font-mono">
                  {selectedPkmn.nature.buff && <span className="text-emerald-400 font-bold">▲{selectedPkmn.nature.buff}</span>}{' '}
                  {selectedPkmn.nature.nerf && <span className="text-rose-400 font-bold">▼{selectedPkmn.nature.nerf}</span>}
                </span>
                <p className="text-[10px] text-slate-400 max-w-44 leading-tight">{selectedPkmn.nature.description}</p>
              </div>
            </div>

            {/* Stat Bars */}
            <div className="space-y-2.5" id="spec-bars">
              {[
                { label: 'HP', val: selectedPkmn.baseStats.hp, max: 200, color: 'bg-rose-500', icon: Heart },
                { label: '물리공격 (ATK)', val: selectedPkmn.baseStats.atk, max: 200, color: 'bg-orange-500', icon: Swords },
                { label: '물리방어 (DEF)', val: selectedPkmn.baseStats.def, max: 200, color: 'bg-emerald-500', icon: Shield },
                { label: '특수공격 (SPA)', val: selectedPkmn.baseStats.spa, max: 200, color: 'bg-blue-500', icon: Zap },
                { label: '특수방어 (SPD)', val: selectedPkmn.baseStats.spd, max: 200, color: 'bg-teal-500', icon: Shield },
                { label: '스피드 (SPE)', val: selectedPkmn.baseStats.spe, max: 200, color: 'bg-amber-500', icon: Zap },
              ].map((st) => {
                const Icon = st.icon;
                return (
                  <div key={st.label} className="space-y-1">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-slate-400 flex items-center space-x-1 font-mono">
                        <Icon className="w-3.5 h-3.5 text-slate-500 inline mr-1" />
                        {st.label}
                      </span>
                      <span className="text-slate-200 font-mono tracking-wider">{st.val}</span>
                    </div>
                    <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                      <div
                        className={`h-full ${st.color} rounded-full transition-all duration-500`}
                        style={{ width: `${Math.min(100, (st.val / st.max) * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Moves Grid */}
          <div className="border border-slate-800 bg-slate-900/50 p-5 rounded-xl flex-1" id="pokemon-moveset-card">
            <h3 className="font-mono text-sm tracking-widest text-slate-400 mb-4 uppercase font-bold">
              ⚔️ MOVESET (전술 기술 배치)
            </h3>

            <div className="grid grid-cols-2 gap-3" id="moves-preview">
              {selectedPkmn.moves.map((mv) => (
                <div key={mv.id} className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-slate-200 text-xs font-bold truncate pr-1">{mv.name}</span>
                    <span className="text-[9px] font-mono uppercase bg-slate-800 text-slate-400 px-1 py-0.5 rounded leading-none shrink-0">
                      {mv.type}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono mt-2">
                    <span>
                      위력: <span className="text-yellow-400">{mv.power || '-'}</span>
                    </span>
                    <span>
                      명중: <span className="text-sky-400">{mv.accuracy}%</span>
                    </span>
                  </div>

                  <p className="text-[9.5px] text-slate-400 leading-snug mt-1.5 border-t border-slate-900 pt-1 border-dashed">
                    {mv.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer / Battle Start Panel */}
      <footer className="border-t border-slate-800 bg-slate-900/60 backdrop-blur-md px-6 py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0" id="selection-footer">
        <div className="text-center sm:text-left">
          <p className="text-xs text-slate-500">
            {playMode && playMode !== 'AI'
              ? '실시간 로컬-피어 연결 모드. 당신과 매칭된 원격 훈련사님이 대상을 정렬하여 전투에 임합니다.'
              : '배틀 시작 시, 상대는 나머지 메타 도전자 중 AI가 최적의 능력치로 무작위 매칭하여 등장시킵니다.'}
          </p>
          <div className="flex items-center space-x-2 mt-1 justify-center sm:justify-start">
            <span className="text-yellow-400 text-sm font-bold">{selectedPkmn.nameKor}</span>
            <span className="text-xs text-slate-400 font-mono">가 당신의 챔피언으로 대기 중입니다!</span>
          </div>
        </div>

        <button
          onClick={handleStart}
          className="w-full sm:w-auto px-10 py-4.5 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-mono text-base font-bold rounded-lg border-2 border-yellow-400 tracking-widest shadow-[0_4px_16px_rgba(239,68,68,0.4)] active:scale-[0.98] transition-transform flex items-center justify-center space-x-3 group animate-pulse"
          id="battle-start-trigger"
        >
          <Trophy className="w-5 h-5 group-hover:rotate-12 transition-transform text-yellow-300" />
          <span>
            {playMode && playMode !== 'AI' ? 'CHAMPION SELECT & DEPLOY' : 'CHAMPIONSHIP BATTLE START'}
          </span>
        </button>
      </footer>
    </div>
  );
}
