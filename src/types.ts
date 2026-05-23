export type PokemonType =
  | 'Normal'
  | 'Fire'
  | 'Water'
  | 'Electric'
  | 'Grass'
  | 'Ice'
  | 'Fighting'
  | 'Poison'
  | 'Ground'
  | 'Flying'
  | 'Psychic'
  | 'Bug'
  | 'Rock'
  | 'Ghost'
  | 'Dragon'
  | 'Dark'
  | 'Steel'
  | 'Fairy'
  | 'None';

export type MoveCategory = 'Physical' | 'Special' | 'Status';

export interface Move {
  id: string;
  name: string;
  type: PokemonType;
  category: MoveCategory;
  power: number; // 0 for status moves
  accuracy: number;
  pp: number;
  maxPp: number;
  description: string;
  effect?: (attacker: BattlePokemon, defender: BattlePokemon) => string;
}

export interface PokemonMeta {
  id: number; // Pokédex ID for sprites
  nameKor: string;
  nameEng: string;
  generation: string;
  metaReason: string; // Brief description of what made it meta
  types: [PokemonType, PokemonType];
  ability: {
    name: string;
    description: string;
  };
  item: {
    name: string;
    description: string;
  };
  nature: {
    name: string;
    buff: string;
    nerf: string;
    description: string;
  };
  baseStats: {
    hp: number;
    atk: number;
    def: number;
    spa: number;
    spd: number;
    spe: number;
  };
  moves: Move[];
}

export interface BattleStats {
  hp: number;
  maxHp: number;
  atk: number;
  def: number;
  spa: number;
  spd: number;
  spe: number;
  // Stage multipliers (ranges from -6 to +6)
  stages: {
    atk: number;
    def: number;
    spa: number;
    spd: number;
    spe: number;
  };
}

export interface BattlePokemon {
  meta: PokemonMeta;
  stats: BattleStats;
  currentHp: number;
  status: 'Healthy' | 'Burned' | 'Paralyzed' | 'Asleep' | 'Fainted';
  sleepTurns?: number;
  itemActive: boolean;
}

export interface BattleLog {
  id: string;
  turn: number;
  text: string;
  type: 'damage' | 'status' | 'stat-change' | 'heal' | 'system' | 'ai-comment';
}

export interface BattleState {
  playerPokemon: BattlePokemon;
  opponentPokemon: BattlePokemon;
  currentTurn: number;
  logs: BattleLog[];
  winner: 'player' | 'opponent' | null;
  commentaryLoading: boolean;
  aiCommentary: string; // Real-time analyzer text
}

export type PlayMode = 'AI' | 'MULTIPLAYER_HOST' | 'MULTIPLAYER_CLIENT';

export interface NetworkMessage {
  type: 'HELLO' | 'START_DRAFT' | 'SELECT_FIGHTER' | 'CHOOSE_MOVE' | 'SYNC_STATE' | 'RESET' | 'CHAT';
  name?: string;
  pokemonId?: number;
  moveId?: string;
  sender?: 'host' | 'client';
  state?: BattleState; // For synchronizing battle positions
  text?: string;
  from?: string;
}

