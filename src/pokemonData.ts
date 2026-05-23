import { PokemonMeta } from './types';
import { GEN1_POKEMON } from './data/gen1';
import { GEN2_POKEMON } from './data/gen2';
import { GEN3_POKEMON } from './data/gen3';
import { GEN4_POKEMON } from './data/gen4';
import { GEN5_POKEMON } from './data/gen5';
import { GEN6_POKEMON } from './data/gen6';
import { GEN7_POKEMON } from './data/gen7';
import { GEN8_POKEMON } from './data/gen8';
import { GEN9_POKEMON } from './data/gen9';

// Complete combined 1-9 generation meta pokemon roster (90 Pokemon total!)
export const POKEMON_LIST: PokemonMeta[] = [
  ...GEN1_POKEMON,
  ...GEN2_POKEMON,
  ...GEN3_POKEMON,
  ...GEN4_POKEMON,
  ...GEN5_POKEMON,
  ...GEN6_POKEMON,
  ...GEN7_POKEMON,
  ...GEN8_POKEMON,
  ...GEN9_POKEMON
];

// Helper to initialize a BattlePokemon from PokemonMeta
export function initializePokemon(meta: PokemonMeta): import('./types').BattlePokemon {
  // Simple Level 50 formula with competitive stat tuning
  const hp = Math.floor(meta.baseStats.hp * 2 + 110); // Generous competitive HP
  const atk = Math.floor((meta.baseStats.atk * 2 + 31 + 31) * 0.5) + (meta.nature.buff === '공격' ? 10 : meta.nature.nerf === '공격' ? -10 : 0) + 60;
  const def = Math.floor((meta.baseStats.def * 2 + 31 + 31) * 0.5) + (meta.nature.buff === '방어' ? 10 : meta.nature.nerf === '방어' ? -10 : 0) + 60;
  const spa = Math.floor((meta.baseStats.spa * 2 + 31 + 31) * 0.5) + (meta.nature.buff === '특수공격' ? 10 : meta.nature.nerf === '특수공격' ? -10 : 0) + 60;
  const spd = Math.floor((meta.baseStats.spd * 2 + 31 + 31) * 0.5) + (meta.nature.buff === '특수방어' ? 10 : meta.nature.nerf === '특수방어' ? -10 : 0) + 60;
  const spe = Math.floor((meta.baseStats.spe * 2 + 31 + 31) * 0.5) + (meta.nature.buff === '스피드' ? 10 : meta.nature.nerf === '스피드' ? -10 : 0) + 60;

  return {
    meta: JSON.parse(JSON.stringify(meta)), // Deep copy to prevent sharing state
    stats: {
      hp: hp,
      maxHp: hp,
      atk: atk,
      def: def,
      spa: spa,
      spd: spd,
      spe: spe,
      stages: {
        atk: 0,
        def: 0,
        spa: 0,
        spd: 0,
        spe: 0
      }
    },
    currentHp: hp,
    status: 'Healthy',
    itemActive: true
  };
}
