import { PokemonMeta } from '../types';

export const GEN3_POKEMON: PokemonMeta[] = [
  {
    id: 376,
    nameKor: '메타그로스',
    nameEng: 'Metagross',
    generation: '3세대 (RSE)',
    metaReason: '호연의 무적 강철 지능 요새. 특성 클리어바디로 교체 하향을 차단하며 최고 위력 자속 코메트펀치와 대 지진으로 적들을 분쇄했습니다.',
    types: ['Steel', 'Psychic'],
    ability: {
      name: '두꺼운지방', // Clear body analogue or defensive proxy
      description: '어두운 장막 금속 기갑을 갖추어 적들의 얼음, 불꽃 타격을 대폭 감쇄 차단해 냅니다.'
    },
    item: {
      name: '구애머리띠',
      description: '한 가지 공격 기술 고정 제약 조건하에 물리 살상 공격력을 무려 1.5배 가산합니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '무자비한 물리 철갑 주먹 분쇄 파괴력을 끌어올립니다.'
    },
    baseStats: {
      hp: 80,
      atk: 135,
      def: 130,
      spa: 95,
      spd: 90,
      spe: 70
    },
    moves: [
      {
        id: 'behemoth-blade', // Meteor Mash surrogate
        name: '코메트펀치',
        type: 'Steel',
        category: 'Physical',
        power: 90,
        accuracy: 90,
        pp: 10,
        maxPp: 10,
        description: '혜성 같은 물리 강철 주먹으로 대상을 분쇄합니다. 자속 노출로 가해진 타격은 공력을 추가 증강할 수 있습니다.'
      },
      {
        id: 'earthquake',
        name: '지진',
        type: 'Ground',
        category: 'Physical',
        power: 100,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '강력 대지를 진동하여 맞 상대 강철, 바위, 전기 벽을 무난히 침식 파괴합니다.'
      },
      {
        id: 'zen-headbutt',
        name: '사념의박치기',
        type: 'Psychic',
        category: 'Physical',
        power: 80,
        accuracy: 90,
        pp: 15,
        maxPp: 15,
        description: '머리에 강력 염력을 주입해 들이박는 물리 자속기입니다. 격투, 독 포켓몬을 절망시킵니다.'
      },
      {
        id: 'curse',
        name: '저주',
        type: 'Ghost',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '속도를 포기하고 한층 단단한 철장 물리 아머와 공격 정수 성능을 각각 1단계 보강합니다.'
      }
    ]
  },
  {
    id: 373,
    nameKor: '보만다',
    nameEng: 'Salamence',
    generation: '3세대 (RSE)',
    metaReason: '성난 드래곤의 돌진. 전설의 위협 특성으로 등판 물리공격을 격하하고 용의춤 고속 고화력 사태로 전 필드를 참수 평정했습니다.',
    types: ['Dragon', 'Flying'],
    ability: {
      name: '위협',
      description: '전장을 전율케 하는 포효로 조우한 적 물공 지수를 즉각 1랭크 격하 차단합니다.'
    },
    item: {
      name: '생명의구슬',
      description: '기술 위력을 1.3배 상승 조달하되 타격 정타 시 극미한 반동 생명 감소를 부여합니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '용격 발톱 물리 파괴력을 격상하여 돌격 어태커 형세로 설계합니다.'
    },
    baseStats: {
      hp: 95,
      atk: 135,
      def: 80,
      spa: 110,
      spd: 80,
      spe: 100
    },
    moves: [
      {
        id: 'outrage',
        name: '역린',
        type: 'Dragon',
        category: 'Physical',
        power: 120,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '난폭 자아를 깨워 자속 드래곤 1.5배 피해의 폭격을 쏟아냅니다.'
      },
      {
        id: 'earthquake',
        name: '지진',
        type: 'Ground',
        category: 'Physical',
        power: 100,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '대면 수단을 마련하려는 영악한 강철 포켓몬들의 징검다리를 가치 없이 무너뜨립니다.'
      },
      {
        id: 'dragon-dance',
        name: '용의춤',
        type: 'Dragon',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '보만다에게 춤 한번은 용검의 강림을 뜻합니다. 파죽공격력과 고성 스피드 단계를 각각 1등급 활성 증진합니다.'
      },
      {
        id: 'stone-edge',
        name: '스톤에지',
        type: 'Rock',
        category: 'Physical',
        power: 100,
        accuracy: 80,
        pp: 5,
        maxPp: 5,
        description: '동족 날개 비행들을 요절내어 기세를 잡을 때 기용되는 무거운 참격 바위돌 세팅입니다.'
      }
    ]
  },
  {
    id: 382,
    nameKor: '가이오가',
    nameEng: 'Kyogre',
    generation: '3세대 (RSE)',
    metaReason: '심해의 지배자. 나오자마자 폭우를 내려 물속성 위력을 폭등시켰으며, 구애안경 극강 해수스파우팅으로 적 진형을 뿌리째 녹였습니다.',
    types: ['Water', 'None'],
    ability: {
      name: '위협', // Rain source proxy or Intimidate to mimic rain defense
      description: '심해 해신 진노 폭풍 아우라를 개전해 조우 상대 물리 공격력을 1랭크 뺏어 절반 하향시킵니다.'
    },
    item: {
      name: '구애안경',
      description: '단 하나뿐의 기술 선택 제한과 바꿀 위압적 특수 위력 1.5배 증가 버프를 상시 투사합니다.'
    },
    nature: {
      name: '조심 (Modest)',
      buff: '특수공격',
      nerf: '공격',
      description: '심해 해일 물 방사 뿜어져 나가는 기운을 가혹 극대화로 추진합니다.'
    },
    baseStats: {
      hp: 100,
      atk: 100,
      def: 90,
      spa: 150,
      spd: 140,
      spe: 90
    },
    moves: [
      {
        id: 'hydro-pump', // Sea spout proxy
        name: '해수스파우팅',
        type: 'Water',
        category: 'Special',
        power: 150, // Pure high dmg
        accuracy: 100,
        pp: 5,
        maxPp: 5,
        description: '자신의 최대 체력과 에너지를 완연히 동원한 광범위 폭우 대 해일 수압 폭사포를 갈깁니다.'
      },
      {
        id: 'thunderbolt', // Thunder surrogate
        name: '번개',
        type: 'Electric',
        category: 'Special',
        power: 110,
        accuracy: 70, // Thunder under rain is 100, but base accuracy 70 for raw
        pp: 10,
        maxPp: 10,
        description: '하늘에 가득한 먹구름을 요동쳐 성난 영수 번개를 강타합니다. 가이오가의 물 벽에 대항하려는 비행과 물 어태커의 혼을 뺍니다.'
      },
      {
        id: 'ice-beam',
        name: '냉동빔',
        type: 'Ice',
        category: 'Special',
        power: 90,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '성가신 자연 잔디 풀숲 식생이나 드래곤들을 꽝꽝 얼려 깨 부수는 절대 영도급 냉기 사선포입니다.'
      },
      {
        id: 'calm-mind',
        name: '명상',
        type: 'Psychic',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '내적인 고용한 물결을 도모하여 특수 폭사와 특수 방어를 나란히 1단계 기강 촉진합니다.'
      }
    ]
  },
  {
    id: 383,
    nameKor: '그란돈',
    nameEng: 'Groudon',
    generation: '3세대 (RSE)',
    metaReason: '대지의 요철 신. 날씨 가뭄을 펼치며 적의 물속성 생존기들을 증발 소거하고, 자뭉 단애의칼과 불꽃펀치 가속으로 전장을 박살 냈습니다.',
    types: ['Ground', 'None'],
    ability: {
      name: '두꺼운지방', // Drought fire/ice proxy
      description: '태양의 열기를 지면 온도로 각인받아 불꽃과 얼음 피해를 50%나 강력히 격하시킵니다.'
    },
    item: {
      name: '무화열매',
      description: '사구 대전 속에서 기력이 사그라질 즉시 열매를 개봉 긴급 수급하여 33% 피를 회생 수급합니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '단단히 성난 대지 물리 분쇄력을 끝판 완수하는 성정 세팅입니다.'
    },
    baseStats: {
      hp: 100,
      atk: 150,
      def: 140,
      spa: 100,
      spd: 90,
      spe: 90
    },
    moves: [
      {
        id: 'precipice-blades', // Thousand Arrows surrogate or high ground dmg
        name: '단애의칼',
        type: 'Ground',
        category: 'Physical',
        power: 120,
        accuracy: 85,
        pp: 10,
        maxPp: 10,
        description: '지각을 들쑥날쑥하게 예각화 시킨 암석 가시창 대지를 적의 가슴에 수직 낙하 수렵합니다.'
      },
      {
        id: 'stone-edge',
        name: '스톤에지',
        type: 'Rock',
        category: 'Physical',
        power: 100,
        accuracy: 80,
        pp: 5,
        maxPp: 5,
        description: '하늘에 건방지게 비상하는 비행 몬스터 날개죽지를 통째로 산산조각 내 버릴 무참한 돌 주포입니다.'
      },
      {
        id: 'fire-punch',
        name: '불꽃펀치',
        type: 'Fire',
        category: 'Physical',
        power: 75,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '대지 마그마 불꽃 용암을 주먹에 실어 밀어칩니다. 땅을 막는 가혹한 강철 풀 숲 장막을 분해 퇴출 완료합니다.'
      },
      {
        id: 'swords-dance',
        name: '칼춤',
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '대지 불멸 무사의 칼 시위를 당겨 아군의 물리 충공 지수를 즉석 2단계 격강 증치합니다.'
      }
    ]
  },
  {
    id: 282,
    nameKor: '가디안',
    nameEng: 'Gardevoir',
    generation: '3세대 (RSE)',
    metaReason: '전설의 트레이스 요정. 적의 강점을 즉각 마천루 복제하여 아군 우위를 수립하며 문포스 보조 타임으로 요정 성상을 자아냈습니다.',
    types: ['Psychic', 'Fairy'],
    ability: {
      name: '황금몸', // Trace / synchronous block
      description: '요정 신비막으로 성가신 상태이상 유발 및 아군 간접 상해 피해를 완벽 수호 처리 보증합니다.'
    },
    item: {
      name: '구애안경',
      description: '단 가의 선택 조건에 특수 마력 파동 지수 파괴력을 무한히 1.5배 가산 확보합니다.'
    },
    nature: {
      name: '조심 (Modest)',
      buff: '특수공격',
      nerf: '공격',
      description: '빛나는 영락 요정 폭사를 강화하여 적 진영을 퇴수시킬 정점 배치입니다.'
    },
    baseStats: {
      hp: 68,
      atk: 65,
      def: 65,
      spa: 125,
      spd: 115,
      spe: 80
    },
    moves: [
      {
        id: 'moonblast',
        name: '문포스',
        type: 'Fairy',
        category: 'Special',
        power: 95,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '고고한 광휘의 달무리 요정 성광포를 정격 사출합니다! 타격과 함께 상대의 기강 특공을 깎을 기회가 풍요로이 존재합니다.'
      },
      {
        id: 'psychic',
        name: '사이코키네시스',
        type: 'Psychic',
        category: 'Special',
        power: 90,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '정교한 염파 신경 공격망을 기동해 격투와 독 속성의 맥을 소지 가차 없이 참수 요절해버립니다.'
      },
      {
        id: 'shadow-ball',
        name: '섀도볼',
        type: 'Ghost',
        category: 'Special',
        power: 80,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '영혼 그림자 화공망을 구성해 동족 에스퍼들이나 성가신 유령들의 뒷덜미를 꿰뚫어 사냥 차단합니다.'
      },
      {
        id: 'calm-mind',
        name: '명상',
        type: 'Psychic',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '우아한 요정의 기도를 펼쳐 특수 어택과 특수 내성을 성실하게 나란히 1단계 격양시킵니다.'
      }
    ]
  },
  {
    id: 350,
    nameKor: '밀로틱',
    nameEng: 'Milotic',
    generation: '3세대 (RSE)',
    metaReason: '세상에서 가장 아름다운 요새. 상태이상에 걸리면 이상한비늘이 작동해 방어가 1.5배 격증하며 자성 열탕으로 온 적들을 전멸 시킨 심해 보스입니다.',
    types: ['Water', 'None'],
    ability: {
      name: '두꺼운지방', // Scald/marvel scale analogues
      description: '천상의 비늘 굴절로 불꽃, 얼음 타입 사격을 철저하게 요지부동 50%나 경감해 내어 요새를 수호합니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '매서운 시합 판도가 끝날 시각을 조준해 조금의 체력을 요긴히 자생 회귀 부릅니다.'
    },
    nature: {
      name: '차분 (Calm)',
      buff: '특수방어',
      nerf: '공격',
      description: '우아한 심해 특내 보존 수치를 고스펙 조율하여 든든함을 꾀합니다.'
    },
    baseStats: {
      hp: 95,
      atk: 60,
      def: 79,
      spa: 100,
      spd: 125,
      spe: 81
    },
    moves: [
      {
        id: 'hydro-pump',
        name: '열탕',
        type: 'Water',
        category: 'Special',
        power: 80,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '천상의 끓는 물을 아름답게 아우라를 조준 발사합니다. 30% 확률로 적 물리 딜을 영원히 고장 낼 화상을 매섭게 가미 입힙니다.'
      },
      {
        id: 'ice-beam',
        name: '냉동빔',
        type: 'Ice',
        category: 'Special',
        power: 90,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '풀 식물 저항 날개들을 얼려 요절 시켜 아군의 요새 자궁을 안전하게 수호 처방할 정석 기술입니다.'
      },
      {
        id: 'recover',
        name: '자기재생',
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '비늘 무늬 영혼 정화를 일으켜 즉각 유실 HP 수치의 50%를 온전하고 단정하게 즉석 회복 부활 가해 둡니다.'
      },
      {
        id: 'calm-mind',
        name: '명상',
        type: 'Psychic',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '아름다운 기맥을 차분 정리하여 자가 특수 화력과 특수 저항 단계를 우뚝 1등급 늘려 줍니다.'
      }
    ]
  },
  {
    id: 384,
    nameKor: '레쿠쟈',
    nameEng: 'Rayquaza',
    generation: '3세대 (RSE)',
    metaReason: '천공의 전설 보룡. 날씨 영향을 잠재우는 에어록과 신속 선제 세팅, 용의춤 후 가해지는 파괴광선 역린으로 하늘의 패왕이 되었습니다.',
    types: ['Dragon', 'Flying'],
    ability: {
      name: '부요한검', // Air lock proxy or power buff
      description: '천공 기류 보호 축복을 받아 가해지는 물리 격돌 타격 파괴력을 1.5배 한층 추가 충족 전동시킵니다.'
    },
    item: {
      name: '생명의구슬',
      description: '용격 공격 파도를 1.3배 상승 확보하나, 반사 반동 상해 피 절삭을 대가 요구 당합니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '천공의 기강 물리 참살 공격 위력을 극한 조율 보존합니다.'
    },
    baseStats: {
      hp: 105,
      atk: 150,
      def: 90,
      spa: 150,
      spd: 90,
      spe: 95
    },
    moves: [
      {
        id: 'outrage',
        name: '화룡점정', // Rayquaza signature proxy via Outrage high power
        type: 'Dragon',
        category: 'Physical',
        power: 120,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '하늘 끝자락에서 정현으로 투과 돌진하는 물리 용 속성 극비 살상 참수 공격입니다.'
      },
      {
        id: 'extreme-speed',
        name: '신속',
        type: 'Normal',
        category: 'Physical',
        power: 80,
        accuracy: 100,
        pp: 5,
        maxPp: 5,
        description: '천공 비행 가속력을 쥐어 짜 선공 우선권(+2)으로 적 기도가 무상 회귀하기 전 정수 참격을 날립니다.'
      },
      {
        id: 'dragon-dance',
        name: '용의춤',
        type: 'Dragon',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '흑구름 속에서 무한 용 격류 댄스를 이행해 물리 파괴와 기성 기밀 전 속도를 각각 1랭크씩 늘립니다.'
      },
      {
        id: 'earthquake',
        name: '지진',
        type: 'Ground',
        category: 'Physical',
        power: 100,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '하늘에서 지면으로 강습 후 흔드는 강력 분열 진동파로 바위, 강철 무기물들을 완전 부스러뜨려 가동합니다.'
      }
    ]
  },
  {
    id: 289,
    nameKor: '게으름괴수 게을킹',
    nameEng: 'Slaking',
    generation: '3세대 (RSE)',
    metaReason: '전설의 참수 고체급 괴수. 670급 전설 초월 종족치를 품었으나 게으름 특성의 한계를 가졌기에 구애 고위력 기가임팩트 치명상 즉사 공격 뒤에 빠졌습니다.',
    types: ['Normal', 'None'],
    ability: {
      name: '프레셔', // Slaking override or custom
      description: '비주얼 적으로 게을러 보이지만 무지막지한 고 중량 기운으로 상대 훈련사의 기력을 완연히 압박 차단합니다.'
    },
    item: {
      name: '구애머리띠',
      description: '단기술 사용 제약에 힘입어 전무후무의 전설급 물리 충공력을 1.5배 파괴 가동 확보합니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '대면을 으깨버릴 무식하고 성난 물리 정수 살상 파괴력을 극한 보증합니다.'
    },
    baseStats: {
      hp: 150,
      atk: 160,
      def: 100,
      spa: 95,
      spd: 65,
      spe: 100
    },
    moves: [
      {
        id: 'extreme-speed', // Giga impact surrogate
        name: '기가임팩트',
        type: 'Normal',
        category: 'Physical',
        power: 120, // Proxy high power Normal
         accuracy: 90,
         pp: 5,
         maxPp: 5,
         description: '동물적 광폭 위압을 품고 지면에 수직 돌파 격돌 박기를 행합니다. 자속 노말로 고 타격을 장식합니다.'
      },
      {
        id: 'earthquake',
        name: '지진',
        type: 'Ground',
        category: 'Physical',
        power: 100,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '괴력을 살려 대지를 강타 진동합니다. 바위, 강철 등 가가 공격 저지 장단막들을 사정없이 분해 퇴출 완료 처분합니다.'
      },
      {
        id: 'crunch',
        name: '깨물어부수기',
        type: 'Dark',
        category: 'Physical',
        power: 80,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '동족 및 고스트, 에스퍼 유령들을 단 한 입에 잘근잘근 씹어 발기 적합한 어둠 악격 물리 정타 세팅입니다.'
      },
      {
        id: 'swords-dance',
        name: '벌크업', // Swords dance proxy
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '거대한 육체에 힘을 가득히 충전하여 자신의 물리 딜러 랭크 공격력을 극한 수치 2단계 증폭시킵니다.'
      }
    ]
  },
  {
    id: 257,
    nameKor: '번치코',
    nameEng: 'Blaziken',
    generation: '3세대 (RSE)',
    metaReason: '가속 특성의 혁명가. 매 턴마다 날렵해 지는 기합의 생명줄과 생명의구슬 플레어드라이브 폭발 참격 한 쌍으로 상대 기점을 모두 도모했습니다.',
    types: ['Fire', 'Fighting'],
    ability: {
      name: '부요한검', // Speed boost analogue
      description: '매섭게 타오르는 닭의 기맥 투지를 타고 격투 물리 기술 피해를 1.5배 한층 추가 확보해 연소 유도합니다.'
    },
    item: {
      name: '생명의구슬',
      description: '스펙 타격을 1.3배 상승 조치하되, 연사 정타 사격 시 자신의 기맥 체력을 10% 디버프 감량 당하는 패널티를 수반합니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '플레어 발 공격 물리력을 극한 추진하는 성격 배치입니다.'
    },
    baseStats: {
      hp: 80,
      atk: 120,
      def: 70,
      spa: 110,
      spd: 70,
      spe: 80
    },
    moves: [
      {
        id: 'flare-blitz',
        name: '플레어드라이브',
        type: 'Fire',
        category: 'Physical',
        power: 120,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '업화를 몸 주위에 돌린 뒤 고속 전속력으로 부딪치며 장렬히 불태웁니다. 공격 반동 33% 아픔 패널티가 상존합니다.'
      },
      {
        id: 'sacred-sword', // Close combat surrogate / high Jump kick analogue
        name: '인파이트',
        type: 'Fighting',
        category: 'Physical',
        power: 120,
        accuracy: 100,
        pp: 5,
        maxPp: 5,
        description: '무자비한 주먹 싸움 난격을 행해 대상을 소멸해 버리는 화력 격투기입니다. 맞춘 뒤 방어 특방 저하가 상웅 수반됩니다.'
      },
      {
        id: 'earthquake',
        name: '지진',
        type: 'Ground',
        category: 'Physical',
        power: 100,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '동족 가마불꽃이나 든든한 전기 사냥개들을 요동쳐서 참살 청소하는 보조 대지 물리 딜 기술입니다.'
      },
      {
        id: 'swords-dance',
        name: '칼춤',
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '투지 벌레 칼 시위를 부추겨 아군의 물리공격 지표 능력을 화끈하게 2등급 격증해 줍니다.'
      }
    ]
  },
  {
    id: 344,
    nameKor: '점토도리',
    nameEng: 'Claydol',
    generation: '3세대 (RSE)',
    metaReason: '대고대의 부유 장막 막이. 스텔스 바위 함정 설치 및 자가재생 신진대사를 타고 적들의 견제 수단들을 가로막았습니다.',
    types: ['Ground', 'Psychic'],
    ability: {
      name: '부유',
      description: '부유령 정체성을 회득해 상대 적들이 갈기는 매서운 대지 지진 물리 사격을 온전히 불발 면역합니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '고대 점토 입자를 모아서 턴마다 피 1/16 비례의 안정 지각 자생 치유를 자맥 수행합니다.'
    },
    nature: {
      name: '차분 (Calm)',
      buff: '특수방어',
      nerf: '공격',
      description: '신전 기맥 특차 장막 단계를 집중 기화 부스팅 완료해 놓습니다.'
    },
    baseStats: {
      hp: 60,
      atk: 70,
      def: 105,
      spa: 70,
      spd: 120,
      spe: 75
    },
    moves: [
      {
        id: 'earthpower',
        name: '대지의힘',
        type: 'Ground',
        category: 'Special',
        power: 90,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '지하 마그마 열 기맥을 특방 깎는 확률과 더불어 상대 명치에 수직 분폭시키는 자속 특수 병기입니다.'
      },
      {
        id: 'psychic',
        name: '사이코키네시스',
        type: 'Psychic',
        category: 'Special',
        power: 90,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '고대 초능력 음유 뇌파 공격을 행사해 격투, 독 몬스터들을 우습게 관통 파투 퇴출시킵니다.'
      },
      {
        id: 'recover',
        name: '자기재생',
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '고대 신전 문양 재생술을 가미해 맞선 아군 혹은 자신의 피 50% 분량을 사뭇 이펙티브 복액 보충합니다.'
      },
      {
        id: 'stealth-rock',
        name: '스텔스록',
        type: 'Rock',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '지면에 예리한 은밀 스텔스 공중 고드름 수렵 돌 조각 함정을 살포하여 교섭 기점을 차단시킵니다.'
      }
    ]
  }
];
