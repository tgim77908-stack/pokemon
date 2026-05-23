import { PokemonMeta } from '../types';

export const GEN4_POKEMON: PokemonMeta[] = [
  {
    id: 443,
    nameKor: '한카리아스',
    nameEng: 'Garchomp',
    generation: '4세대 (DPPt)',
    metaReason: '4세대의 제왕이자 역대 최강의 600족 물리 어태커. 모래 지옥 회피와 까칠한피부 사태, 고지표 칼춤 지진 세팅은 Sinnoh 지방의 악몽이었습니다.',
    types: ['Dragon', 'Ground'],
    ability: {
      name: '까칠한피부',
      description: '물리 계열 직접 타격식의 역 접촉을 해 온 타겟에게 최대 체력의 1/8(12.5%) 상해 피해를 강제로 되안깁니다.'
    },
    item: {
      name: '울퉁불퉁멧',
      description: '직접 접촉 공격 한정으로 타격한 상대에게 1/6 체력량을 깎아내는 물리 복수를 돌려줍니다.'
    },
    nature: {
      name: '명랑 (Jolly)',
      buff: '스피드',
      nerf: '특수공격',
      description: '격변하는 한카 한계 속도 경쟁 구도를 정밀 제압 확보해 선공지진을 취득하기 위함입니다.'
    },
    baseStats: {
      hp: 108,
      atk: 130,
      def: 95,
      spa: 80,
      spd: 85,
      spe: 102
    },
    moves: [
      {
        id: 'earthquake',
        name: '지진',
        type: 'Ground',
        category: 'Physical',
        power: 100,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '강력 지각 자속 대 균열 흔들기 폭격을 가합니다. 강철, 바위, 전기를 단 한 격에 소멸시킵니다.'
      },
      {
        id: 'outrage', // Dragon claw proxy or outrage
        name: '역린',
        type: 'Dragon',
        category: 'Physical',
        power: 120,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '자속 드래곤 1.5배 역화력을 동원해 일명 보검 참격을 행합니다.'
      },
      {
        id: 'stone-edge',
        name: '스톤샤워',
        type: 'Rock',
        category: 'Physical',
        power: 75,
        accuracy: 90,
        pp: 10,
        maxPp: 10,
        description: '거대한 무덤 암석을 투포 공격으로 쏟아부어 비행 적들을 위축 격하 퇴수시킵니다.'
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
        description: '칼바람 아우라를 부추겨 아군의 물리살상력을 2단계(+100%) 격하게 상승시킵니다.'
      }
    ]
  },
  {
    id: 468,
    nameKor: '토게키스',
    nameEng: 'Togekiss',
    generation: '4세대 (DPPt)',
    metaReason: '하늘의은총 사기 주동자. 60% 확률의 공포 에어슬래시 무자비한 풀죽음 가속 연타로 전장을 완전히 묶어버렸던 전설의 하얀 요정새였습니다.',
    types: ['Fairy', 'Flying'],
    ability: {
      name: '부요한검', // Serene grace proxy for increased air slash rate or dmg
      description: '하늘 요정 총애 축복이 가동돼 자신의 에어슬래시 풀죽음 기회를 가혹하게 극대화로 추진합니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '하늘을 저항 선회하면서 턴마다 유실 체력을 상시 1/16 가치 수준 자생 복구합니다.'
    },
    nature: {
      name: '겁쟁이 (Timid)',
      buff: '스피드',
      nerf: '공격',
      description: '가혹한 풀죽음 선공 에어슬래시 연사가 가능하도록 선발기동 스피드를 대폭 취득시킵니다.'
    },
    baseStats: {
      hp: 85,
      atk: 50,
      def: 95,
      spa: 120,
      spd: 115,
      spe: 80
    },
    moves: [
      {
        id: 'air-slash',
        name: '에어슬래시',
        type: 'Flying',
        category: 'Special',
        power: 75,
        accuracy: 95,
        pp: 15,
        maxPp: 15,
        description: '진공칼바람 날을 날려 30%(하늘의은총 60%) 확률로 피격된 대상을 꼼짝달싹 못 하게 무참히 풀죽입니다.'
      },
      {
        id: 'moonblast', // Dazzling gleam surrogate
        name: '문포스',
        type: 'Fairy',
        category: 'Special',
        power: 95,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '아름다운 요정 광채 무리탄을 던져 자속 1.5배 피해의 성스러운 징벌을 가합니다.'
      },
      {
        id: 'self-renew', // Roost proxy
        name: '날개쉬기',
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '땅으로 내려와 접은 날개를 쉬며 최대 HP 게이지의 50%를 뚝딱 자생 회생 완료 조처합니다.'
      },
      {
        id: 'nasty-plot',
        name: '나쁜음모',
        type: 'Dark',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '사악하고 간악한 모의를 전동해 자신의 특수 기맥 폭사 위력을 2배 즉시 상향 승천시킵니다.'
      }
    ]
  },
  {
    id: 448,
    nameKor: '루카리오',
    nameEng: 'Lucario',
    generation: '4세대 (DPPt)',
    metaReason: '파동의 가호 용사. 정의의마음 공격 버프과 파동탄, 신속 특수/물리 이강 어택 분기를 지녀 상대를 머리 아프게 한 정예 돌격 대장입니다.',
    types: ['Fighting', 'Steel'],
    ability: {
      name: '황금몸', // Inner focus proxy
      description: '파동의 경지에 달하여 위압적인 기세 위축 풀죽음 효과에 일체 무반응 요지부동 면역 상태를 갖춥니다.'
    },
    item: {
      name: '생명의구슬',
      description: '파동 위력을 1.3배 상승 전진하되 주먹 타격 시 미세 생명 디버프 상해를 대가 소모합니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '파동의 한계를 뛰어넘어 물리 격투 융단 폭격을 확보하고자 한 세팅입니다.'
    },
    baseStats: {
      hp: 70,
      atk: 110,
      def: 70,
      spa: 115,
      spd: 70,
      spe: 90
    },
    moves: [
      {
        id: 'sacred-sword', // Close combat proxy
        name: '인파이트',
        type: 'Fighting',
        category: 'Physical',
        power: 120,
        accuracy: 100,
        pp: 5,
        maxPp: 5,
        description: '방어를 전적으로 포기하고 무차별 투기의 극을 갈깁니다! 사용 후 물방과 특방이 1단계 저하되는 원상이 있습니다.'
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
        description: '파동 전동 가속 전송권으로 적의 우선도를 완벽 기선 제압하는(+2) 전무후무 물리선제기입니다.'
      },
      {
        id: 'behemoth-blade', // Meteor Mash variant / Flash Cannon surrogate
        name: '코메트펀치',
        type: 'Steel',
        category: 'Physical',
        power: 90,
        accuracy: 90,
        pp: 10,
        maxPp: 10,
        description: '강철 아케인 아우라를 주먹에 봉인해 일격 분쇄 참격을 가질 강인한 물리 금속기입니다.'
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
        description: '오라 전설의 고대 칼 댄스로 공격 랭크 수치를 격상 2단계 늘려버립니다.'
      }
    ]
  },
  {
    id: 485,
    nameKor: '히드런',
    nameEng: 'Heatran',
    generation: '4세대 (DPPt)',
    metaReason: '용암 화산의 지배 금갑 야수. 단단한 강철/불꽃 복합 상성과 마그마스톰 대지의힘의 광폭 어택으로 상대 페어리를 증발시킨 수비형 정예였습니다.',
    types: ['Fire', 'Steel'],
    ability: {
      name: '두꺼운지방', // Flash fire proxy
      description: '마그마 요람 출신 용암질을 가져 얼음, 비행, 혹은 불꽃 타격을 대폭 요지부동 반감합니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '용암이 끓는 등받이에서 매 턴 끝 수치 시각에 HP를 1/16 가치 수준 자동 회생 보충합니다.'
    },
    nature: {
      name: '차분 (Calm)',
      buff: '특수방어',
      nerf: '공격',
      description: '가장 강력한 수비 화산 야수 특수 맷집 특방 지수를 집중 성형 고조합니다.'
    },
    baseStats: {
      hp: 91,
      atk: 90,
      def: 106,
      spa: 130,
      spd: 106,
      spe: 77
    },
    moves: [
      {
        id: 'fire-spit', // Magma storm surrogate
        name: '마그마스톰',
        type: 'Fire',
        category: 'Special',
        power: 100, // Flat high dmg
        accuracy: 75,
        pp: 5,
        maxPp: 5,
        description: '지옥 심판 화산 마그마의 폭풍우 용적을 시원하게 조준 발사하여 타겟팅 구역을 가혹히 연소 지옥구덩이로 만듭니다.'
      },
      {
        id: 'earthpower',
        name: '대지의힘',
        type: 'Ground',
        category: 'Special',
        power: 90,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '대강을 끓여 흩는 에너지를 사출합니다. 조우한 동족 불꽃, 강철 막이들 배짱을 순식간에 저하합니다.'
      },
      {
        id: 'flash-cannon',
        name: '러스터캐논',
        type: 'Steel',
        category: 'Special',
        power: 80,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '몸통 철갑에서 강력 자속 금속 광폭포를 사출해 페어리 숲 도깨비들을 격정 징벌 처분합니다.'
      },
      {
        id: 'self-renew', // Recover surrogate
        name: '용암재생',
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '마그마 정수를 다시 체내 흡수시켜 상처 피 분량을 즉각 50%나 부활 수급 조치해 놓습니다.'
      }
    ]
  },
  {
    id: 487,
    nameKor: '기라티나 (오리진)',
    nameEng: 'Giratina',
    generation: '4세대 (DPPt)',
    metaReason: '반물질 깨어진세계의 명왕룡. 백금옥을 탑재해 섀도다이브와 용성군의 폭화 고위력 징벌로 상대를 저승 골짜기에 가뒀던 유령 패왕이었습니디.',
    types: ['Ghost', 'Dragon'],
    ability: {
      name: '부유',
      description: '명왕의 가호를 입고 완전히 공중에 떠 지면 땅 지진 타격들을 가볍게 요절 면역 차단합니다.'
    },
    item: {
      name: '생명의구슬', // Platinum orb analogue
      description: '반물질 혜택으로 고스트/드래곤 위력을 1.3배 추가 극강 보전하되 10% 반동 통증을 수반합니다.'
    },
    nature: {
      name: '조심 (Modest)',
      buff: '특수공격',
      nerf: '공격',
      description: '명왕의 극렬 자속 반물질 뇌파포 방사력을 극한 융합 확보합니다.'
    },
    baseStats: {
      hp: 150,
      atk: 120,
      def: 100,
      spa: 120,
      spd: 100,
      spe: 90
    },
    moves: [
      {
        id: 'draco-meteor',
        name: '용성군',
        type: 'Dragon',
        category: 'Special',
        power: 130,
        accuracy: 90,
        pp: 5,
        maxPp: 5,
        description: '성난 드래곤의 운석 비우량을 영혼에 실어 투과 폭격냅니다. 피격 타격 뒤에 특수공격력이 2단계 감쇠되는 여운이 남습니다.'
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
        description: '저승 골짜기 자궁 무덤 유령 에너지를 뿜어냅니다. 자속 1.5배 보정과 합쳐 귀찮은 에스퍼 명치를 으깨놓습니다.'
      },
      {
        id: 'mystical-fire',
        name: '섀도본', // Shadow clone variant / Aura sphere surrogate
        type: 'Fire',
        category: 'Special',
        power: 75,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '상대 강철 장막을 달궈 가면서 특공 단계를 확증 1단계 감쇠 처리하는 반물질 화공술입니다.'
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
        description: '반물질의 정적으로 마음 깊은 뇌파 영성 정돈을 통해 일격 특특스공방 단계를 1단계 부스팅 고조합니다.'
      }
    ]
  },
  {
    id: 461,
    nameKor: '포푸니라',
    nameEng: 'Weavile',
    generation: '4세대 (DPPt)',
    metaReason: '얼음 악의 선두 저승사자. 초고속 얼음뭉치 선제 타율과 탁쳐서떨어뜨리기로 상대 포켓몬의 기를 꺾고 아이템을 완전 도태시켰습니다.',
    types: ['Dark', 'Ice'],
    ability: {
      name: '부요한검', // Pressure / Inner focus proxy
      description: '도둑고양이 야생 본능을 일구어 물리 참살 상성 위력을 1.5배 추가 추진 확보합니다.'
    },
    item: {
      name: '생명의구슬',
      description: '기습 타격력을 한층 늘리는 조달 수단인 만큼 공격 타격 시 체력 저하를 수반당합니다.'
    },
    nature: {
      name: '명랑 (Jolly)',
      buff: '스피드',
      nerf: '특수공격',
      description: '경쟁하는 한계 속도 고지를 완연 장악하고자 확보한 신속형 성찰입니다.'
    },
    baseStats: {
      hp: 70,
      atk: 120,
      def: 65,
      spa: 45,
      spd: 85,
      spe: 125
    },
    moves: [
      {
        id: 'knock-off',
        name: '탁쳐서떨어뜨리기',
        type: 'Dark',
        category: 'Physical',
        power: 65, // Base 65, high if object active
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '적의 장비를 기습 타설하여 땅바닥에 떨어뜨립니다! 상대 기강 도구를 무력화하며 높은 물리 딜을 입힙니다.'
      },
      {
        id: 'behemoth-blade', // Icicle crash surrogate
        name: '고드름떨구기',
        type: 'Ice',
        category: 'Physical',
        power: 85,
        accuracy: 90,
        pp: 10,
        maxPp: 10,
        description: '머리 위에 거대 날카로운 서릿발 칼날 기둥산더미를 수직 낙하해 침산합니다. 30% 확률로 기용 상대의 위축 풀죽음을 가미해 옵니다.'
      },
      {
        id: 'extreme-speed', // Ice shard proxy
        name: '얼음뭉치',
        type: 'Ice',
        category: 'Physical',
        power: 50, // Buffed speed proxy
        accuracy: 100,
        pp: 30,
        maxPp: 30,
        description: '품 안에서 영하 냉동 고드름 탄환을 선공으로(+1) 날렵 투사합니다. 드래곤 기세를 꺾는 명 수단입니다.'
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
        description: '손가락 갈퀴 발 예리함을 극명히 흔들어 아군의 물리 격강 수치를 즉석 2단계 격증 확보합니다.'
      }
    ]
  },
  {
    id: 472,
    nameKor: '글라이온',
    nameEng: 'Gliscor',
    generation: '4세대 (DPPt)',
    metaReason: '맹독의 생존 요새. 포이즌힐과 가혹 칼춤 지진, 기점 마련을 타고 물리 딜러들을 가차 없이 고사 기진맥진하게 몰아넣은 빌런이었습니다.',
    types: ['Ground', 'Flying'],
    ability: {
      name: '두꺼운지방', // Poison heal analog
      description: '철저히 단련된 상피와 공방 속성 덕에 상대의 가혹한 불꽃 얼음 피해를 50%나 강력히 거릅니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '공중 사구에 숨어 매서운 공방마다 체력 피 수치 1/16 비례의 안정 지각 자생 수선 완료합니다.'
    },
    nature: {
      name: '장난꾸러기 (Impish)',
      buff: '방어',
      nerf: '특수공격',
      description: '단단한 기갑 상피 날개의 철갑 물리 물방 수치 자체를 끝까지 끌어올리기 위한 것입니다.'
    },
    baseStats: {
      hp: 75,
      atk: 95,
      def: 125,
      spa: 45,
      spd: 75,
      spe: 95
    },
    moves: [
      {
        id: 'earthquake',
        name: '지진',
        type: 'Ground',
        category: 'Physical',
        power: 100,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '공중 하강 지각 주동 흔들기 폭격을 행합니다. 강철 바위 사구 벽들을 가치 없이 으깨놓아 가동시킵니다.'
      },
      {
        id: 'knock-off',
        name: '탁쳐서떨어뜨리기',
        type: 'Dark',
        category: 'Physical',
        power: 65,
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '꼬리 전지 가질로 상대 손목을 타격해 소지 장비를 해제 파괴 조처하고 딜을 먹입니다.'
      },
      {
        id: 'self-renew', // Roost surrogate
        name: '날개쉬기',
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '잠시 모래 위에 착륙해 박쥐 날개 안으로 휴강하여 손실 HP 게이지의 절반을 급 자생 부활 조치해 둡니다.'
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
        description: '지각 무사 꼬리 갈퀴들을 드높이 휘둘러 아군 물리공격 단계를 단번에 2단계 즉석 늘립니다.'
      }
    ]
  },
  {
    id: 437,
    nameKor: '동탁군',
    nameEng: 'Bronzong',
    generation: '4세대 (DPPt)',
    metaReason: '수수께끼 부유 강비 요새. 상대의 땅 타입을 특성으로 완연 무력화하며 명상 가동과 철판 장벽으로 필드를 마비 통제했습니다.',
    types: ['Steel', 'Psychic'],
    ability: {
      name: '부유',
      description: '부유 공명 전설로 땅지진 주포들을 완전 불발 기화 유도 격하 면역 수급시켜 수호합니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '종소리 공명 속에서 턴이 끝날 때마다 영혼 생명피 1/16 단계를 상시 자맥 수급해 놓습니다.'
    },
    nature: {
      name: '차분 (Calm)',
      buff: '특수방어',
      nerf: '공격',
      description: '사찰 청동 종구의 특방 저지 장밀 한계치를 극도로 성형 증강시킵니다.'
    },
    baseStats: {
      hp: 67,
      atk: 89,
      def: 116,
      spa: 79,
      spd: 116,
      spe: 33
    },
    moves: [
      {
        id: 'flash-cannon',
        name: '러스터캐논',
        type: 'Steel',
        category: 'Special',
        power: 80,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '청동구 안에서 응축한 금속 고주파 파장 강사 광선을 발사해 요정 도깨비 요절 참격을 쏩니다.'
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
        description: '전뇌 사찰 환각의 기량을 기증 사출 뇌파 어택합니다. 격투, 독 포켓몬 상종을 면치 않게 만듭니다.'
      },
      {
        id: 'recover', // self heal
        name: '자기재생',
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '청동 종탑에 울리는 범종 메아리 요동 영성으로 자신의 피를 50% 분량을 거뜬하게 충전 부활합니다.'
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
        description: '정적의 명경지수 내공 연마를 진행해 자성 특공 특방 단계를 완연히 아울러 1단계 기폭 보강해 둡니다.'
      }
    ]
  },
  {
    id: 479,
    nameKor: '로토무 (워시)',
    nameEng: 'Rotom',
    generation: '4세대 (DPPt)',
    metaReason: '세탁기 정예 대면 머신. 오직 단 하나뿐인 풀 약점을 부유로 덮으며 10만볼트 볼트체인지 하이드로 범람포로 중무장해 기점 정리를 해 낸 세탁 마왕이었습니다.',
    types: ['Electric', 'Water'],
    ability: {
      name: '부유',
      description: '완전히 필드 위 공중 자장에 정위해 상대들의 매서운 땅 계열 지진 공격을 100% 불발 기화시킵니다.'
    },
    item: {
      name: '자뭉열매', // Sitrus proxy: Sitrus restores HP. Or custom Muhwa
      description: '기력이 반동 소심 깎여 하전 시 품 안의 열매를 급작 섭취하여 33% 피를 단숨 복원 완료합니다.'
    },
    nature: {
      name: '차분 (Calm)',
      buff: '특수방어',
      nerf: '공격',
      description: '세탁기 금갑 특력 차단 방패 수치를 정밀히 드높이어 놓습니다.'
    },
    baseStats: {
      hp: 50,
      atk: 65,
      def: 107,
      spa: 105,
      spd: 107,
      spe: 86
    },
    moves: [
      {
        id: 'hydro-pump',
        name: '하이드로펌프',
        type: 'Water',
        category: 'Special',
        power: 110,
        accuracy: 80,
        pp: 5,
        maxPp: 5,
        description: '세탁 고온 고압 범람 수사 주포를 상대 명치에 뿜어냅니다. 불꽃, 바위, 땅을 시원하고 통쾌히 격정 처분시킵니다.'
      },
      {
        id: 'thunderbolt',
        name: '10만볼트',
        type: 'Electric',
        category: 'Special',
        power: 90,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '강력 자속 초 고압 발전 번개 폭사를 시전하여 하늘을 저격하고 수많은 물 비행 장산 몬스터들을 전멸시킵니다.'
      },
      {
        id: 'volt-switch',
        name: '볼트체인지',
        type: 'Electric',
        category: 'Special',
        power: 70,
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '전격 타격 화망을 가하자마자 고유 자장 전격체로 환원 퇴각해 아군 대기 교체를 확보하는 우수기입니다.'
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
        description: '전기 가속 자장 속에 깊은 평점을 자아내 특수공격 및 저항 한도 랭크를 각각 1단계 부스팅 고정합니다.'
      }
    ]
  },
  {
    id: 395,
    nameKor: '엠페르트',
    nameEng: 'Empoleon',
    generation: '4세대 (DPPt)',
    metaReason: '황제 펭귄의 철갑 위안. 단 하나뿐인 강철/물 유니크 상성을 갖추어 상대의 수많은 특수 광역 타격을 견디며 명상으로 돌파했습니다.',
    types: ['Water', 'Steel'],
    ability: {
      name: '두꺼운지방', // Def/torrent proxy
      description: '두꺼운 강철 철갑 기갑에 싸여 불꽃, 얼음 기술을 강력하게 영구 50%나 경감 차단하는 특성입니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '빙산 위 황제 조율을 부려 매 턴마다 비례 피 상흔 수선 복원을 항시 완료해 둡니다.'
    },
    nature: {
      name: '차분 (Calm)',
      buff: '특수방어',
      nerf: '공격',
      description: '황제 강갑 특보 방벽 내구 수치를 전무후무 극한 보정 촉진합니다.'
    },
    baseStats: {
      hp: 84,
      atk: 86,
      def: 88,
      spa: 111,
      spd: 101,
      spe: 60
    },
    moves: [
      {
        id: 'hydro-pump', // Surf / Scald surrogate
         name: '하이드로펌프',
         type: 'Water',
         category: 'Special',
         power: 110,
         accuracy: 80,
         pp: 5,
         maxPp: 5,
         description: '황제 근엄 수압 포격을 발포하는 기맥 기술입니다. 맞선 불꽃, 바위를 단숨에 자비 없이 증발 소멸 소거합니다.'
      },
      {
        id: 'flash-cannon',
        name: '러스터캐논',
        type: 'Steel',
        category: 'Special',
        power: 80,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '강비 비늘 날개에서 자속 철갑 아우라 캐논을 뿜어냅니다. 페어리, 얼음 저항에게 끔찍한 타격입니다.'
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
         description: '황제 영역을 위협하는 성가신 비행 드래곤 날개들을 한 격에 기강 빙판 위로 꽝꽝 가둬버릴 서브포입니다.'
      },
      {
        id: 'recover', // roost equivalent
        name: '자기재생',
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '빙산의 신성수로 육신을 정성껏 연성 세정하여 잃어버린 체력 게이지 50% 분량을 거뜬 복원시킵니다.'
      }
    ]
  }
];
