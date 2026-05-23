import { BattlePokemon, Move, PokemonType, BattleLog } from '../types';

// Simplified but strategically accurate Type Chart for the chosen Pokémon types
const TYPE_CHART: Record<PokemonType, Partial<Record<PokemonType, number>>> = {
  Normal: {
    Ghost: 0,
    Steel: 0.5,
    Rock: 0.5
  },
  Fire: {
    Steel: 2,
    Grass: 2,
    Ice: 2,
    Fire: 0.5,
    Water: 0.5,
    Rock: 0.5,
    Dragon: 0.5
  },
  Water: {
    Fire: 2,
    Ground: 2,
    Rock: 2,
    Water: 0.5,
    Grass: 0.5,
    Dragon: 0.5
  },
  Electric: {
    Flying: 2,
    Water: 2,
    Ground: 0,
    Electric: 0.5,
    Dragon: 0.5,
    Grass: 0.5
  },
  Grass: {
    Water: 2,
    Ground: 2,
    Rock: 2,
    Fire: 0.5,
    Grass: 0.5,
    Poison: 0.5,
    Flying: 0.5,
    Bug: 0.5,
    Dragon: 0.5,
    Steel: 0.5
  },
  Ice: {
    Grass: 2,
    Ground: 2,
    Flying: 2,
    Dragon: 2,
    Fire: 0.5,
    Water: 0.5,
    Ice: 0.5,
    Steel: 0.5
  },
  Fighting: {
    Normal: 2,
    Rock: 2,
    Steel: 2,
    Dark: 2,
    Ice: 2,
    Poison: 0.5,
    Flying: 0.5,
    Psychic: 0.5,
    Bug: 0.5,
    Fairy: 0.5,
    Ghost: 0
  },
  Poison: {
    Grass: 2,
    Fairy: 2,
    Poison: 0.5,
    Ground: 0.5,
    Rock: 0.5,
    Ghost: 0.5,
    Steel: 0
  },
  Ground: {
    Fire: 2,
    Electric: 2,
    Rock: 2,
    Steel: 2,
    Poison: 2,
    Grass: 0.5,
    Bug: 0.5,
    Flying: 0
  },
  Flying: {
    Grass: 2,
    Fighting: 2,
    Bug: 2,
    Electric: 0.5,
    Rock: 0.5,
    Steel: 0.5
  },
  Psychic: {
    Fighting: 2,
    Poison: 2,
    Psychic: 0.5,
    Steel: 0.5,
    Dark: 0
  },
  Bug: {
    Grass: 2,
    Psychic: 2,
    Dark: 2,
    Fire: 0.5,
    Fighting: 0.5,
    Poison: 0.5,
    Flying: 0.5,
    Ghost: 0.5,
    Steel: 0.5,
    Fairy: 0.5
  },
  Rock: {
    Fire: 2,
    Flying: 2,
    Bug: 2,
    Ice: 2,
    Fighting: 0.5,
    Ground: 0.5,
    Steel: 0.5
  },
  Ghost: {
    Ghost: 2,
    Psychic: 2,
    Dark: 0.5,
    Normal: 0
  },
  Dragon: {
    Dragon: 2,
    Steel: 0.5,
    Fairy: 0
  },
  Dark: {
    Ghost: 2,
    Psychic: 2,
    Fighting: 0.5,
    Dark: 0.5,
    Fairy: 0.5
  },
  Steel: {
    Rock: 2,
    Ice: 2,
    Fairy: 2,
    Steel: 0.5,
    Fire: 0.5,
    Water: 0.5,
    Electric: 0.5
  },
  Fairy: {
    Fighting: 2,
    Dragon: 2,
    Dark: 2,
    Fire: 0.5,
    Poison: 0.5,
    Steel: 0.5
  },
  None: {}
};

// Returns multiplier for stat stages (-6 to +6)
export function getStageMultiplier(stage: number): number {
  if (stage >= 0) {
    return (2 + stage) / 2;
  } else {
    return 2 / (2 - stage);
  }
}

// Calculate true stats in battle taking stages, items, and terrains into account
export function calculateEffectiveStats(pkmn: BattlePokemon, isOpponent: boolean, terrain: 'Electric' | 'Normal' = 'Normal') {
  const { stats, meta } = pkmn;
  const stages = stats.stages;

  // Modifiers
  let atkMod = getStageMultiplier(stages.atk);
  let defMod = getStageMultiplier(stages.def);
  let spaMod = getStageMultiplier(stages.spa);
  let spdMod = getStageMultiplier(stages.spd);
  let speMod = getStageMultiplier(stages.spe);

  // Abilities & Status adjustments
  if (pkmn.status === 'Burned') {
    atkMod *= 0.5; // Burn halves physical attack
  }
  if (pkmn.status === 'Paralyzed') {
    speMod *= 0.5; // Paralysis halves speed
  }

  // Snorlax Thick Fat
  // Choice Band Snorlax / Tyranitar
  let finalAtk = stats.atk * atkMod;
  if (meta.item.name === '구애머리띠') finalAtk *= 1.5;

  let finalSpa = stats.spa * spaMod;
  if (meta.item.name === '구애안경') finalSpa *= 1.5;

  let finalDef = stats.def * defMod;
  
  let finalSpd = stats.spd * spdMod;
  // Tyranitar Sandstorm buff or Flutter Mane SpD
  if (meta.nameEng === 'Tyranitar') finalSpd *= 1.5; // Custom passive sand buff

  let finalSpe = stats.spe * speMod;
  // Flutter Mane booster energy
  if (meta.nameEng === 'Flutter Mane' && pkmn.itemActive) {
    finalSpe *= 1.5; // Protosynthesis Spe boost
  }

  return {
    atk: Math.floor(finalAtk),
    def: Math.floor(finalDef),
    spa: Math.floor(finalSpa),
    spd: Math.floor(finalSpd),
    spe: Math.floor(finalSpe)
  };
}

export function getTypeEffectiveness(moveType: PokemonType, pokemonTypes: [PokemonType, PokemonType]): { factor: number; text: string } {
  let factor = 1.0;
  for (const t of pokemonTypes) {
    if (t !== 'None') {
      const typeMods = TYPE_CHART[moveType] || {};
      const mod = typeMods[t] !== undefined ? typeMods[t]! : 1.0;
      factor *= mod;
    }
  }

  let text = '';
  if (factor > 1) {
    text = '효과가 굉장했다!';
  } else if (factor > 0 && factor < 1) {
    text = '효과가 별로인 듯하다...';
  } else if (factor === 0) {
    text = '효과가 없는 것 같다...';
  }
  return { factor, text };
}

// Utility to create a new log entry
let logIdCounter = 0;
export function createLog(text: string, type: BattleLog['type'], turn: number): BattleLog {
  logIdCounter++;
  return {
    id: `log-${logIdCounter}-${Date.now()}`,
    turn,
    text,
    type
  };
}

export interface BattleTurnResult {
  player: BattlePokemon;
  opponent: BattlePokemon;
  logs: BattleLog[];
  winner: 'player' | 'opponent' | null;
}

// Full execution of a single turn based on move selection
export function executeTurn(
  player: BattlePokemon,
  opponent: BattlePokemon,
  playerMove: Move,
  opponentMove: Move,
  turnNumber: number
): BattleTurnResult {
  const localLogs: BattleLog[] = [];
  const nextPlayer = JSON.parse(JSON.stringify(player)) as BattlePokemon;
  const nextOpponent = JSON.parse(JSON.stringify(opponent)) as BattlePokemon;

  // 1. Move priority check
  const playerPriority = getMovePriority(playerMove, turnNumber === 1);
  const opponentPriority = getMovePriority(opponentMove, turnNumber === 1);

  // Speed calculation
  const playerEff = calculateEffectiveStats(nextPlayer, false);
  const opponentEff = calculateEffectiveStats(nextOpponent, true);

  let playerGoesFirst = true;
  if (playerPriority > opponentPriority) {
    playerGoesFirst = true;
  } else if (opponentPriority > playerPriority) {
    playerGoesFirst = false;
  } else {
    // Priority is equal, compare speed
    if (playerEff.spe > opponentEff.spe) {
      playerGoesFirst = true;
    } else if (opponentEff.spe > playerEff.spe) {
      playerGoesFirst = false;
    } else {
      playerGoesFirst = Math.random() > 0.5;
    }
  }

  const movers = playerGoesFirst
    ? [
        { isPlayer: true, attacker: nextPlayer, defender: nextOpponent, move: playerMove, effAtt: playerEff, effDef: opponentEff },
        { isPlayer: false, attacker: nextOpponent, defender: nextPlayer, move: opponentMove, effAtt: opponentEff, effDef: playerEff }
      ]
    : [
        { isPlayer: false, attacker: nextOpponent, defender: nextPlayer, move: opponentMove, effAtt: opponentEff, effDef: playerEff },
        { isPlayer: true, attacker: nextPlayer, defender: nextOpponent, move: playerMove, effAtt: playerEff, effDef: opponentEff }
      ];

  // Electric Terrain or special battlefield elements
  const isElectricTerrain = nextPlayer.meta.nameEng === 'Tapu Koko' || nextOpponent.meta.nameEng === 'Tapu Koko';

  // Perform attacks
  let flinchNext = false;

  for (let i = 0; i < movers.length; i++) {
    const { isPlayer, attacker, defender, move, effAtt, effDef } = movers[i];

    // Verify attacker is alive and not skipping due to sleep/flinch/fainting
    if (attacker.currentHp <= 0) {
      attacker.status = 'Fainted';
      continue;
    }

    // Flinch check
    if (flinchNext && i === 1) {
      localLogs.push(createLog(`💥 ${attacker.meta.nameKor}은(는) 풀이 죽어 기술을 사용할 수 없었다!`, 'status', turnNumber));
      flinchNext = false;
      continue;
    }

    // Sleep check
    if (attacker.status === 'Asleep') {
      if (attacker.sleepTurns && attacker.sleepTurns > 0) {
        attacker.sleepTurns--;
        localLogs.push(createLog(`💤 ${attacker.meta.nameKor}은(는) 쿨쿨 자고 있다.`, 'status', turnNumber));
        continue;
      } else {
        attacker.status = 'Healthy';
        localLogs.push(createLog(`☀️ ${attacker.meta.nameKor}은(는) 정신을 차리고 잠에서 깨어났다!`, 'status', turnNumber));
      }
    }

    // Execute Move
    localLogs.push(createLog(`▶️ ${attacker.meta.nameKor}의 <b>${move.name}</b> 사용!`, 'system', turnNumber));

    // Accuracy Check
    if (Math.random() * 100 > move.accuracy) {
      localLogs.push(createLog(`💨 기술이 빗나갔다!`, 'system', turnNumber));
      continue;
    }

    // Check Good as Gold (Gholdengo blocks status moves from enemies)
    if (move.category === 'Status' && defender.meta.nameEng === 'Gholdengo' && !isPlayer) {
      // Opponent uses Status move on player Gholdengo
      localLogs.push(createLog(`✨ 타부자고의 특성 [황금몸]의 영향으로 변화 기술의 공격을 완전 면역했다!`, 'status', turnNumber));
      continue;
    }

    if (move.category === 'Status' && defender.meta.nameEng === 'Gholdengo' && isPlayer && move.id !== 'recover' && move.id !== 'curse' && move.id !== 'swords-dance' && move.id !== 'nasty-plot' && move.id !== 'calm-mind' && move.id !== 'dragon-dance' && move.id !== 'rest') {
      // Player uses status move against Gholdengo opponent
      localLogs.push(createLog(`✨ 타부자고의 특성 [황금몸]의 영향으로 변화 기술의 공격을 완전 면역했다!`, 'status', turnNumber));
      continue;
    }

    // Execute effects or damage
    if (move.category === 'Status') {
      resolveStatusMove(move, attacker, defender, localLogs, turnNumber);
    } else {
      // Damage calculation
      const isPhysical = move.category === 'Physical';
      const attackPower = isPhysical ? effAtt.atk : effAtt.spa;
      const defensePower = isPhysical ? effDef.def : effDef.spd;

      // Base Damage
      let baseDamage = Math.floor((((2 * 50 / 5) + 2) * move.power * attackPower / defensePower) / 50) + 2;

      // STAB
      const hasStab = attacker.meta.types.includes(move.type);
      if (hasStab) {
        baseDamage = Math.floor(baseDamage * 1.5);
      }

      // Type Effectiveness
      const { factor: typeFactor, text: typeText } = getTypeEffectiveness(move.type, defender.meta.types);
      baseDamage = Math.floor(baseDamage * typeFactor);

      // Random factor
      const randomMultiplier = 0.85 + Math.random() * 0.15;
      baseDamage = Math.floor(baseDamage * randomMultiplier);

      // Special Ability Modifiers
      // Snorlax Thick Fat (halves fire types)
      if (move.type === 'Fire' && defender.meta.nameEng === 'Snorlax' && defender.meta.ability.name === '두꺼운지방') {
        baseDamage = Math.floor(baseDamage * 0.5);
        localLogs.push(createLog(`🛡️ 두꺼운지방 특성으로 불꽃 위력이 감소했다!`, 'status', turnNumber));
      }

      // Delta Stream Rayquaza (halves rock, electric, ice dmg if defending)
      if (defender.meta.nameEng === 'Mega Rayquaza' && ['Rock', 'Electric', 'Ice'].includes(move.type)) {
        baseDamage = Math.floor(baseDamage * 0.5);
        localLogs.push(createLog(`🌀 난기류 [델타스트림] 덕분에 날씨 오라 효과로 약점 피해가 대폭 저하된다.`, 'status', turnNumber));
      }

      // Incineroar Special: Parting Shot, Intimidate is handled dynamically or at start
      // Final Damage round-off
      const dmg = Math.max(1, baseDamage);
      defender.currentHp = Math.max(0, defender.currentHp - dmg);

      localLogs.push(createLog(`💥 ${defender.meta.nameKor}은(는) <b>${dmg}</b>의 피해를 입었다!`, 'damage', turnNumber));
      if (typeText) {
        localLogs.push(createLog(typeText, typeFactor > 1 ? 'damage' : 'system', turnNumber));
      }

      // Handle Flinching from Fake Out
      if (move.id === 'fake-out' && turnNumber === 1 && defender.currentHp > 0) {
        flinchNext = true;
      }

      // Life Orb Recoil (Rayquaza & Garchomp)
      if (attacker.meta.item.name === '생명의구슬' && attacker.currentHp > 0) {
        const recoil = Math.floor(attacker.stats.maxHp * 0.1);
        attacker.currentHp = Math.max(0, attacker.currentHp - recoil);
        localLogs.push(createLog(`💔 ${attacker.meta.nameKor}은(는) 생명의구슬 대가로 <b>${recoil}</b>의 반동 대미지를 입었다.`, 'damage', turnNumber));
      }

      // Flare Blitz Recoil (Incineroar)
      if (move.id === 'flare-blitz' && attacker.currentHp > 0) {
        const recoil = Math.floor(dmg * 0.33);
        attacker.currentHp = Math.max(0, attacker.currentHp - recoil);
        localLogs.push(createLog(`🔥 반동으로 ${attacker.meta.nameKor}도 <b>${recoil}</b>의 대미지를 얻어맞았다.`, 'damage', turnNumber));
      }

      // Make It Rain Spec modification (Gholdengo reduces SpA by 1 stage)
      if (move.id === 'make-it-rain') {
        attacker.stats.stages.spa = Math.max(-6, attacker.stats.stages.spa - 1);
        localLogs.push(createLog(`📉 골드러시 사용 반동으로 ${attacker.meta.nameKor}의 <b>특수공격</b>이 하락했다!`, 'stat-change', turnNumber));
      }

      // Volt Switch / U-Turn - let's make it hit hard and add meta flair
      if (move.id === 'volt-switch' || move.id === 'u-turn') {
        localLogs.push(createLog(`🔄 ${attacker.meta.nameKor}은(는) 대면 수치를 조율하며 정교하게 기점을 노리고 있다.`, 'system', turnNumber));
      }

      // Knock Off - custom text bonus
      if (move.id === 'knock-off') {
        if (defender.itemActive) {
          defender.itemActive = false;
          localLogs.push(createLog(`👜 탁 쳐서 떨어뜨려 상대의 소중한 도구 <b>[${defender.meta.item.name}]</b>을 상실시켰다!`, 'status', turnNumber));
        }
      }

      // Rough Skin (Garchomp ability)
      if (defender.meta.nameEng === 'Garchomp' && move.category === 'Physical' && attacker.currentHp > 0) {
        const roughDmg = Math.floor(attacker.stats.maxHp * 0.125);
        attacker.currentHp = Math.max(0, attacker.currentHp - roughDmg);
        localLogs.push(createLog(`🌵 까칠한피부에 스쳐 ${attacker.meta.nameKor}은(는) <b>${roughDmg}</b>의 마찰 상해를 입었다!`, 'damage', turnNumber));
      }

      // Rocky Helmet item
      if (defender.meta.item.name === '울퉁불퉁멧' && defender.itemActive && move.category === 'Physical' && attacker.currentHp > 0) {
        const helmetDmg = Math.floor(attacker.stats.maxHp * 0.166);
        attacker.currentHp = Math.max(0, attacker.currentHp - helmetDmg);
        localLogs.push(createLog(`🪖 울퉁불퉁멧의 금속 가시에 찔려 ${attacker.meta.nameKor}은(는) <b>${helmetDmg}</b>의 장비 피해를 얻었다!`, 'damage', turnNumber));
      }

      // Check if defender fainted
      if (defender.currentHp <= 0) {
        defender.status = 'Fainted';
        localLogs.push(createLog(`💀 <b>${defender.meta.nameKor}</b>은(는) 기절하며 시합 불능상태가 되었다!`, 'status', turnNumber));
        break; // Stop turn iterations
      }
    }

    // Check if attacker fainted due to recoil/rough skin
    if (attacker.currentHp <= 0) {
      attacker.status = 'Fainted';
      localLogs.push(createLog(`💀 <b>${attacker.meta.nameKor}</b>은(는) 기절했다!`, 'status', turnNumber));
      break;
    }
  }

  // At the very end of turn:
  // Apply Leftovers healing if active and alive
  applyEndTurnSurvivalItems(nextPlayer, turnNumber, localLogs);
  applyEndTurnSurvivalItems(nextOpponent, turnNumber, localLogs);

  // Determine winner
  let winner: 'player' | 'opponent' | null = null;
  if (nextPlayer.currentHp <= 0 && nextOpponent.currentHp <= 0) {
    winner = 'opponent'; // Tie goes to opponent for game design challenge
  } else if (nextPlayer.currentHp <= 0) {
    winner = 'opponent';
    nextPlayer.status = 'Fainted';
  } else if (nextOpponent.currentHp <= 0) {
    winner = 'player';
    nextOpponent.status = 'Fainted';
  }

  return {
    player: nextPlayer,
    opponent: nextOpponent,
    logs: localLogs,
    winner
  };
}

function getMovePriority(move: Move, isFirstTurn: boolean): number {
  if (move.id === 'fake-out' && isFirstTurn) return 3;
  if (move.id === 'extreme-speed') return 2;
  return 0;
}

function resolveStatusMove(
  move: Move,
  attacker: BattlePokemon,
  defender: BattlePokemon,
  logs: BattleLog[],
  turnNumber: number
) {
  switch (move.id) {
    case 'curse':
      attacker.stats.stages.atk = Math.min(6, attacker.stats.stages.atk + 1);
      attacker.stats.stages.def = Math.min(6, attacker.stats.stages.def + 1);
      attacker.stats.stages.spe = Math.max(-6, attacker.stats.stages.spe - 1);
      logs.push(createLog(`📈 ${attacker.meta.nameKor}의 <b>공격</b>, <b>방어</b>가 각각 1강화되고 <b>스피드</b>가 감쇠했다!`, 'stat-change', turnNumber));
      break;

    case 'dragon-dance':
      attacker.stats.stages.atk = Math.min(6, attacker.stats.stages.atk + 1);
      attacker.stats.stages.spe = Math.min(6, attacker.stats.stages.spe + 1);
      logs.push(createLog(`📈 고대의 힘찬 댄스로 ${attacker.meta.nameKor}의 <b>공격</b>, <b>스피드</b>가 각각 1레벨 증진했다!`, 'stat-change', turnNumber));
      break;

    case 'swords-dance':
      attacker.stats.stages.atk = Math.min(6, attacker.stats.stages.atk + 2);
      logs.push(createLog(`⚔️ 칼바람 무예로 ${attacker.meta.nameKor}의 <b>공격</b>이 격하게 치솟았다! (+2단계급)`, 'stat-change', turnNumber));
      break;

    case 'nasty-plot':
      attacker.stats.stages.spa = Math.min(6, attacker.stats.stages.spa + 2);
      logs.push(createLog(`😈 황금빛 비열한 정략구상으로 ${attacker.meta.nameKor}의 <b>특수공격</b>이 극도로 격상되었다! (+2단계급)`, 'stat-change', turnNumber));
      break;

    case 'calm-mind':
      attacker.stats.stages.spa = Math.min(6, attacker.stats.stages.spa + 1);
      attacker.stats.stages.spd = Math.min(6, attacker.stats.stages.spd + 1);
      logs.push(createLog(`🧘 차분한 내공 조율로 ${attacker.meta.nameKor}의 <b>특수공격</b>과 <b>특수방어</b>가 고결하게 1강화되었다.`, 'stat-change', turnNumber));
      break;

    case 'recover':
    case 'self-renew':
      const heals = Math.floor(attacker.stats.maxHp * 0.5);
      attacker.currentHp = Math.min(attacker.stats.maxHp, attacker.currentHp + heals);
      logs.push(createLog(`💚 자가 연성을 통해 ${attacker.meta.nameKor}의 체력수치가 <b>${heals} HP</b> 만큼 복원 복구되었다!`, 'heal', turnNumber));
      break;

    case 'rest':
      attacker.currentHp = attacker.stats.maxHp;
      attacker.status = 'Asleep';
      attacker.sleepTurns = 2;
      logs.push(createLog(`💤 ${attacker.meta.nameKor}은(는) 모든 상흔을 지우고 <b>완전 숙면</b> 모드로 전환했다! (HP 100% 자가 극강 충전, 2턴 기절 수면)`, 'heal', turnNumber));
      break;

    case 'parting-shot':
      defender.stats.stages.atk = Math.max(-6, defender.stats.stages.atk - 1);
      defender.stats.stages.spa = Math.max(-6, defender.stats.stages.spa - 1);
      logs.push(createLog(`🗣️ 야비한 험담을 내뱉어 상대 ${defender.meta.nameKor}의 <b>물리공격</b>과 <b>특수공격</b> 단계를 각각 1등급 격하시켰다!`, 'stat-change', turnNumber));
      break;

    case 'stealth-rock':
      logs.push(createLog(`🪨 공중에 날카로운 투사형 함정 바위를 잔뜩 흩뿌려 교체 기점을 억제했다!`, 'system', turnNumber));
      break;

    default:
      logs.push(createLog(`🛡️ 상호 간 미묘한 견제 기류가 교류했다.`, 'system', turnNumber));
      break;
  }
}

function applyEndTurnSurvivalItems(pkmn: BattlePokemon, turnNumber: number, logs: BattleLog[]) {
  if (pkmn.currentHp <= 0) return;

  // 1. Leftovers (먹다남은음식)
  if (pkmn.meta.item.name === '먹다남은음식' && pkmn.itemActive) {
    const recover = Math.floor(pkmn.stats.maxHp / 16);
    pkmn.currentHp = Math.min(pkmn.stats.maxHp, pkmn.currentHp + recover);
    logs.push(createLog(`🍏 [먹다남은음식]을 조금 갉아먹으며 ${pkmn.meta.nameKor}의 상처가 <b>${recover} HP</b> 자가 수선되었다.`, 'heal', turnNumber));
  }

  // 2. Berry healing (무화열매) if HP < 25%
  if (pkmn.meta.item.name === '무화열매' && pkmn.itemActive && pkmn.currentHp < pkmn.stats.maxHp * 0.25) {
    pkmn.itemActive = false; // consume Berry
    const berryHeal = Math.floor(pkmn.stats.maxHp * 0.33);
    pkmn.currentHp = Math.min(pkmn.stats.maxHp, pkmn.currentHp + berryHeal);
    logs.push(createLog(`🍒 위기 상황! ${pkmn.meta.nameKor}은(는) 즉각 소지한 <b>[무화열매]</b> 한 방 충전으로 <b>${berryHeal} HP</b>를 폭시 회복했다!`, 'heal', turnNumber));
  }
}
