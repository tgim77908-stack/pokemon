import { PokemonMeta } from '../types';

export const GEN5_POKEMON: PokemonMeta[] = [
  {
    id: 645,
    nameKor: '랜드로스 (영물폼)',
    nameEng: 'Landorus-T',
    generation: '5세대 (BW)',
    metaReason: '포켓몬 배틀 역사상 가치 최고의 물리 올라운더. 특성 위협으로 물리 공격을 완전 봉쇄하며 자속 지진과 유턴 대면 기어로 수년간 메타를 독재 군림했습니다.',
    types: ['Ground', 'Flying'],
    ability: {
      name: '위협',
      description: '배틀 필드 등판과 함께 위엄찬 영물 아우라를 소환해 적의 물리공격 수준을 출전 즉시 1단계 격하 격추시킵니다.'
    },
    item: {
      name: '울퉁불퉁멧',
      description: '직접 타격해 온 적의 공격을 비벼 최대 체력의 1/6을 가시철갑으로 소실 처리 반사합니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '지진과 거대 암석 물리 타격 피해 수준 자체를 가혹히 늘리기 위함입니다.'
    },
    baseStats: {
      hp: 89,
      atk: 145,
      def: 90,
      spa: 105,
      spd: 80,
      spe: 91
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
        description: '지하 영물 폭발 격동으로 광폭의 자속 지질 붕괴 파도를 입힙니다. 강철 바위 공업들을 완전히 요절 참살합니다.'
      },
      {
        id: 'rock-slide',
        name: '스톤샤워',
        type: 'Rock',
        category: 'Physical',
        power: 75,
        accuracy: 90,
        pp: 10,
        maxPp: 10,
        description: '공중에서 예각 무기 돌덩이들을 낙하 흩뿌립니다. 조우 비행 속성들의 날개를 거칠게 풀죽어 비틀대게 만듭니다.'
      },
      {
        id: 'u-turn',
        name: '유턴',
        type: 'Bug',
        category: 'Physical',
        power: 70,
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '상대를 공격하고 기점 조율용 유기 퇴각 체계를 취해 후열 아군에게 전투 위계를 매끄럽게 물려줍니다.'
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
        description: '투지 전설의 고대 무인의 춤을 행하여 장갑 공격 단계를 단번에 2등급 승천 늘려버립니다.'
      }
    ]
  },
  {
    id: 637,
    nameKor: '불카모스',
    nameEng: 'Volcarona',
    generation: '5세대 (BW)',
    metaReason: '성스러운 태양의 신성 나방. 오직 단 한 차례 나비춤 영맥 축복에 성공 시 전장의 특수공격력, 방어력, 속도를 일거에 격증시키며 적들을 화장했습니다.',
    types: ['Bug', 'Fire'],
    ability: {
      name: '두꺼운지방', // Flame body proxy or fire defense
      description: '찬란히 타오르는 나방 금빛 아우라막 덕에 얼음, 불꽃 타격을 항시 가뿐히 50% 반안정 경감 수급 조치합니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '날갯짓에서 날리는 빛나는 불태양 가루로 매 턴 끝날 즈음 HP 1/16 비례의 안정 자생 보강 완료합니다.'
    },
    nature: {
      name: '조심 (Modest)',
      buff: '특수공격',
      nerf: '공격',
      description: '뜨거운 태양 벌레 전방 광폭 분사를 연산 가혹하게 늘립니다.'
    },
    baseStats: {
      hp: 85,
      atk: 60,
      def: 65,
      spa: 135,
      spd: 105,
      spe: 100
    },
    moves: [
      {
        id: 'flamethrower',
        name: '불꽃춤', // Fiery dance surrogate via flamethrower
        type: 'Fire',
        category: 'Special',
        power: 90,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '찬란한 나비 춤 기세를 곁들인 장렬 자속 오열 화염방사를 발사해 격상 징벌시킵니다.'
      },
      {
        id: 'giga-drain',
        name: '기가드레인',
        type: 'Grass',
        category: 'Special',
        power: 75,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '자신의 유일한 물/바위 약점을 정면 타파하려 적들의 물 기류 생기를 탈취 강력 정화 복구 수급합니다.'
      },
      {
        id: 'bug-buzz',
        name: '벌레의야단법석',
        type: 'Bug',
        category: 'Special',
        power: 90,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '날개를 공명 시켜 끔찍 파투 소리 파동을 자속 1.5배 피해로 사출냅니다. 귀찮은 악 악당 포켓몬을 절멸시킵니다.'
      },
      {
        id: 'dragon-dance',
        name: '나비춤', // Quiver dance signature mapped via dragon dance speed/atk boost
        type: 'Dragon',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '꽃 나비의 요정 격투 무곡을 춤추어 공격력(특공 surrog.)과 가속 기밀 스피드 등급치를 나란히 1랭크씩 촉진 증치시킵니다.'
      }
    ]
  },
  {
    id: 635,
    nameKor: '삼삼드래',
    nameEng: 'Hydreigon',
    generation: '5세대 (BW)',
    metaReason: '흉악한 삼두 비룡 마수. 부유 특성을 가지고 대지 지진들을 가볍게 요절 처분하며 구애안경 용성군 무작비 딜로 시합을 소멸 위기로 이끌었습니다.',
    types: ['Dark', 'Dragon'],
    ability: {
      name: '부유',
      description: '삼두 날개짓으로 전장을 공중 초빙 정위해, 지면에서 가열해 오는 땅 지진들을 완전 100% 불발 격하합니다.'
    },
    item: {
      name: '구애안경',
      description: '단 하나뿐의 기술 선택 속성을 보장받는 고 기회 제약 아래 특수 딜 화력을 1.5배 증폭 유도합니다.'
    },
    nature: {
      name: '조심 (Modest)',
      buff: '특수공격',
      nerf: '공격',
      description: '흉악 삼두 비룡의 폭사 자속 메테오 대미지를 가혹 무자비히 이룩하기 위함입니다.'
    },
    baseStats: {
      hp: 92,
      atk: 105,
      def: 90,
      spa: 125,
      spd: 90,
      spe: 98
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
        description: '하늘에 삼두 용의 멸무성 돌들을 난폭 소환 투포합니다! 사용 뒤에는 자신의 특스공격 단갑이 2단계 참수 하강됩니다.'
      },
      {
        id: 'dark-pulse',
        name: '악의파동',
        type: 'Dark',
        category: 'Special',
        power: 80,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '악독 흉포한 삼두 아우라 음파를 방사 자속 격돌하여, 타격 적들을 20% 확률로 좌절 풀죽임 상태로 묶어놓습니다.'
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
        description: '지각 화도 구멍을 단번에 폭파 공략해 맞선 불꽃 전기 철쇠들을 흔적 없이 가라앉힙니다.'
      },
      {
         id: 'flamethrower',
         name: '화염방사',
         type: 'Fire',
         category: 'Special',
         power: 90,
         accuracy: 100,
         pp: 15,
         maxPp: 15,
         description: '삼두 주둥이에서 나란히 고열 용광 불꽃 광선을 사출해 귀찮하디 귀찮은 벌레 강철 장벽을 장렬히 태워없앱니다.'
      }
    ]
  },
  {
    id: 597,
    nameKor: '너트령',
    nameEng: 'Ferrothorn',
    generation: '5세대 (BW)',
    metaReason: '전설의 철가시 씨뿌리기 가시 요새. 상대가 물리 타격을 행하면 철가시와 울퉁멧 가시가 겹 합산되어 상대 피를 절반 넘게 깎는 악마의 가시 장벽이었습니다.',
    types: ['Grass', 'Steel'],
    ability: {
      name: '까칠한피부', // Iron barbs proxy
      description: '강철 가시 돌기로 무장하여 자신을 직접 정타 공격한 타겟의 체력을 정당히 12.5%씩 깎아내 반격합니다.'
    },
    item: {
      name: '울퉁불퉁멧',
      description: '물리 철주먹 파장 타격 시 상대에게 1/6 체력 가치 수준의 추가 철갑 가시 독침 반사 참수 피해를 돌려줍니다.'
    },
    nature: {
      name: '장난꾸러기 (Impish)',
      buff: '방어',
      nerf: '특수공격',
      description: '철 가시 장벽 수비 물방 수치 성능 자체를 전설급 보존 완성시킵니다.'
    },
    baseStats: {
      hp: 74,
      atk: 94,
      def: 131,
      spa: 54,
      spd: 116,
      spe: 20
    },
    moves: [
      {
        id: 'behemoth-blade', // Power whip/gyro ball surrogate
        name: '자이로볼',
        type: 'Steel',
        category: 'Physical',
        power: 90, // Mapped proxy
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '무거운 철가시 쇳덩어리로 몸뚱아리 광속 회전 격돌합니다. 자속 노출 물리 쇳소리로 정타 징벌합니다.'
      },
      {
        id: 'giga-drain', // Seed leech proxy
        name: '씨뿌리기드레인',
        type: 'Grass',
        category: 'Special',
        power: 75,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '영리하게 가시 씨앗을 기생 심어 턴마다 강체 수분을 추출하며 흡착 복액 자생 수선 수급을 시행합니다.'
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
        description: '철 가시 중심부 철벽 강선을 굳히고 물방과 물리 공격을 각각 1레벨 드높여 저지 요새가 됩니다.'
      },
      {
        id: 'self-renew', // Recovery surrogate
        name: '광합성재생',
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '가시 꽃눈에서 엽록 세포 연성을 거쳐 유실 대 HP 비율 수치의 절반을 거뜬히 부활 완료해 놓습니다.'
      }
    ]
  },
  {
    id: 530,
    nameKor: '몰드류',
    nameEng: 'Excadrill',
    generation: '5세대 (BW)',
    metaReason: '모래 지옥의 고속 시추기. 모래바람 날씨에서 스피드가 두배로 증가하는 기이 가속과 자속 지진 참살, 아이언헤드 무참 돌격으로 승리를 취했습니다.',
    types: ['Ground', 'Steel'],
    ability: {
      name: '부요한검', // Sand rush / mold breaker proxy
      description: '시추 칼날 기량을 타고 상대의 수비 진각 특성들을 완전 무시하고 가혹 물리 타격력을 1.5배 돌파 증폭합니다.'
    },
    item: {
      name: '생명의구슬',
      description: '철강 회전 시추 타격력을 1.3배 추가 추진 보증하나 10% 기맥 체력 저하가 후발됩니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '무자비 분쇄 칼 시추 물리 피해 수치 성능을 끝장 보존 완성합니다.'
    },
    baseStats: {
      hp: 110,
      atk: 135,
      def: 60,
      spa: 50,
      spd: 65,
      spe: 88
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
        description: '지각에 단번에 대시 시추 강타 균열을 냅니다. 자속 1.5배 정타와 함께 강철 마수들을 일격 정화합니다.'
      },
      {
        id: 'behemoth-blade', // Iron head surrogate
        name: '아이언헤드',
        type: 'Steel',
        category: 'Physical',
        power: 80,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '강철 시추 비늘 투구를 모아 전력을 다해 들이박습니다. 맞닥뜨린 적들이 30% 확률로 주저앉으며 풀죽어 기절하게 만듭니다.'
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
        description: '시추 시위 칼날을 매섭게 세워 공력을 단번에 2단계 끌어 올려 지면 무사 자아를 일깨웁니다.'
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
        description: '자신 공방 시추를 차단 비행하는 비행 속성들의 날개를 수렵 절삭할 예리 돌뭉치 어택입니다.'
      }
    ]
  },
  {
    id: 547,
    nameKor: '엘풍',
    nameEng: 'Whimsicott',
    generation: '5세대 (BW)',
    metaReason: '짓궂은마음 선제권 탈폭 지배자. 기합의띠로 살아서 순풍 바람 기류 선제 장막과 아군 기회 억제 서포트로 필드를 완전히 희롱했습니다.',
    types: ['Grass', 'Fairy'],
    ability: {
      name: '황금몸', // Prankster fallback
      description: '변화기 기맥 활용에 눈떠 매서운 상대방 보조 디버프 징벌을 선제 처리하여 무력화합니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '솜털 속에 숨은 영약 풀 씨앗으로 매 턴 끝자리마다 솜풀처럼 피 1/16 비량 야금 회복 도모합니다.'
    },
    nature: {
      name: '겁쟁이 (Timid)',
      buff: '스피드',
      nerf: '공격',
      description: '바람보다 신속 가담할 최고의 회전 기동률을 취득하는 성정 배치입니다.'
    },
    baseStats: {
      hp: 60,
      atk: 67,
      def: 85,
      spa: 77,
      spd: 75,
      spe: 116
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
        description: '달빛 아우라 요정 구체포를 던져 가당한 자속 요정 타격 징벌을 명랑하게 선사합니다.'
      },
      {
        id: 'giga-drain',
        name: '기가드레인',
        type: 'Grass',
        category: 'Special',
        power: 75,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '식생 잎새를 유착해 아밀 물기 생기를 적 체포에서 기어코 갈취 보전해 부활합니다.'
      },
      {
        id: 'recover',
        name: '솜회복',
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '솜털 장막을 한껏 부풀려 유실 생명지수 절반(50%)을 단 세 장 숨 고르기로 즉송 회귀 수혈 완수합니다.'
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
        description: '차분 머리 장착으로 특수공역 단갑과 특특방 장복을 가벼이 항시 1단계씩 부스팅 완료합니다.'
      }
    ]
  },
  {
    id: 642,
    nameKor: '볼트로스 (화신폼)',
    nameEng: 'Thundurus',
    generation: '5세대 (BW)',
    metaReason: '뇌운의 선공 전격신. 매 턴마다 고속 10만볼트 볼체 어택과 짓궂은마음 전자기 파동으로 적의 스피드 체계를 뿌리째 유린 정화했습니다.',
    types: ['Electric', 'Flying'],
    ability: {
      name: '위협', // Def / prankster proxy
      description: '웅장 뇌운 아우라 오성을 전장에 사출 개전하여 적군의 물리 공격 공격력을 등판 즉시 1단계 탈취 저하 조치합니다.'
    },
    item: {
      name: '구애안경',
      description: '단 하나뿐의 스킬 사용 제한 속성 이득에 힘입어 뇌운 전격 위압포를 1.5배 폭사 추진합니다.'
    },
    nature: {
      name: '겁쟁이 (Timid)',
      buff: '스피드',
      nerf: '공격',
      description: '구름보다 빠를 고 광속 낙뢰 선제 살상 경쟁률을 거뜬 장악합니다.'
    },
    baseStats: {
      hp: 79,
      atk: 115,
      def: 70,
      spa: 125,
      spd: 80,
      spe: 111
    },
    moves: [
      {
        id: 'thunderbolt',
        name: '10만볼트',
        type: 'Electric',
        category: 'Special',
        power: 90,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '뇌신 진노 폭증 낙뢰를 전격 지면에 쏩니다. 자속 1.5배 전기로 성가신 바다 비행 몬스터를 박멸합니다.'
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
        description: '광 폭풍 전 구체로 상대를 지지고, 번개 영체가 아군 교체 대기열로 신속히 복기되는 특급 유틸기입니다.'
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
        description: '전격을 막는 에스퍼 영령들을 으스러뜨려 사지로 참할 뇌풍 어둠 그림자 포격입니다.'
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
        description: '뇌성벽 자궁 안에서 전정 기맥을 조율해 아군 특수 역량 단계를 1단계씩 격강 확보합니다.'
      }
    ]
  },
  {
    id: 533,
    nameKor: '노보청',
    nameEng: 'Conkeldurr',
    generation: '5세대 (BW)',
    metaReason: '괴력 콘크리트 무사. 특성 근성이 작렬해 물리 타격력을 폭증하고 드레인펀치 흡수로 무한 자생을 감당하며 상대방을 일격 참수했습니다.',
    types: ['Fighting', 'None'],
    ability: {
      name: '부요한검', // Guts analogue
      description: '괴력 뼈대 다짐 기백을 갖추어 물리 기격 파괴력을 전설의 무기마냥 1.5배 가산 증가시킵니다.'
    },
    item: {
      name: '생명의구슬',
      description: '콘크리트 기둥 강타 어텍을 1.3배 상승 조달하되, 극미한 공력 자해 패널티를 안습니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '괴력 철골 물리 일격을 한계 돌파 증대 보전하기 위한 성찰 배치입니다.'
    },
    baseStats: {
      hp: 105,
      atk: 140,
      def: 95,
      spa: 40,
      spd: 65,
      spe: 45
    },
    moves: [
      {
        id: 'sacred-sword', // Drain punch / Close combat clone
        name: '드레인펀치',
        type: 'Fighting',
        category: 'Physical',
        power: 90, // Buffed surrogate with custom high power draining style
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '격투 물리 주먹으로 상대 철골 기를 뺏어옵니다! 타격 피해의 50% 분량을 즉석 체력으로 유치 수급하는 정예 흡수기입니다.'
      },
      {
        id: 'extreme-speed', // Mach punch proxy
        name: '마하펀치',
        type: 'Fighting',
        category: 'Physical',
        power: 60, // Mapped proxy
        accuracy: 100,
        pp: 30,
        maxPp: 30,
        description: '콘크리트를 쥔 채 마하 신속 선제권(+1)으로 상대 기도가 일구어지기 전 참참 때립니다.'
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
        description: '지각을 들이쳐 쇄도 진동을 일구어 위협 전기 바위 강철들을 일격 무참 소거 참수해 버립니다.'
      },
      {
        id: 'swords-dance',
        name: '벌크업',
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '온 근육 세포를 철근다짐 경화함으로써 아군 위화 물리 공격력을 격강 2단계 치솟게 만듭니다.'
      }
    ]
  },
  {
    id: 639,
    nameKor: '테라키온',
    nameEng: 'Terrakion',
    generation: '5세대 (BW)',
    metaReason: '전설의 물리 격투 비석. 악의 세력을 징벌하는 정의의마음 공격 증가 속성과 자속 인파이트 스톤에지 강력 다중 딜로 상대 진형을 괴滅시켰습니다.',
    types: ['Rock', 'Fighting'],
    ability: {
      name: '부요한검', // Justice heart fallback
      description: '성스러운 성기사 강철 투혼을 가용하여 바위 칼 참격 물리 위력을 1.5배나 단숨에 늘려 가열합니다.'
    },
    item: {
      name: '생명의구슬',
      description: '격투 주포 참살력을 1.3배 상승 전동하나 매번 공격 후 피 소실 참격을 당합니다.'
    },
    nature: {
      name: '명랑 (Jolly)',
      buff: '스피드',
      nerf: '특수공격',
      description: '선공 격투 자속으로 적 전열을 꿰부술 수 있는 든든한 가속 성격 배치입니다.'
    },
    baseStats: {
      hp: 91,
      atk: 129,
      def: 90,
      spa: 72,
      spd: 90,
      spe: 108
    },
    moves: [
      {
        id: 'sacred-sword', // Close combat surrogate
        name: '인파이트',
        type: 'Fighting',
        category: 'Physical',
        power: 120,
        accuracy: 100,
        pp: 5,
        maxPp: 5,
        description: '성스러운 돌 돌격을 가한 난수로 상대 요새를 영구 침식 요절합니다. 치고 난 뒤에 자성 물방 공방이 1단계 절반 내려가는 명확성 패널티가 겹칩니다.'
      },
      {
        id: 'rock-slide', // Stone edge signature
        name: '스톤에지',
        type: 'Rock',
        category: 'Physical',
        power: 100,
        accuracy: 80,
        pp: 5,
        maxPp: 5,
        description: '자속 암석 거대 가시 돌기둥 사포를 던져 조우한 드래곤, 날개 비행들을 일거에 참살 지면 요절 처치조치합니다.'
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
        description: '지각 폭진 지진을 일구어 전기나 바위 동족들을 흔적 없이 대면 무상 분해 조치합니다.'
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
        description: '바위 칼집 예기를 매섭게 요동 시켜 공격 단가 수치를 화끈히 즉시 2단계 늘려버립니다.'
      }
    ]
  },
  {
    id: 609,
    nameKor: '샹델라',
    nameEng: 'Chandelure',
    generation: '5세대 (BW)',
    metaReason: '영혼을 태우는 샹들리에 불빛. 145라는 가공할 고수치 특스 어택으로 자속 오버히트 섀도볼을 방사해 강철 단독 라인을 요화시켰던 마장입니다.',
    types: ['Ghost', 'Fire'],
    ability: {
      name: '두꺼운지방', // Flash fire proxy
      description: '샹들리에 아케인 가마를 소화해 불꽃, 얼음 타입 사격을 영구 50%나 강력히 거릅니다.'
    },
    item: {
      name: '구애안경',
      description: '단 하나뿐의 스킬 사용 제약 조건 아래 특스 불 방사포 대미지 위력을 1.5배나 단번에 격하 증폭합니다.'
    },
    nature: {
      name: '조심 (Modest)',
      buff: '특수공격',
      nerf: '공격',
      description: '영혼을 부르는 불폭탄 방사 위력을 극비 한계 끝까지 승천 고조시킵니다.'
    },
    baseStats: {
      hp: 60,
      atk: 55,
      def: 90,
      spa: 145,
      spd: 90,
      spe: 80
    },
    moves: [
      {
        id: 'flamethrower', // Overheat surrogate
        name: '오버히트',
        type: 'Fire',
        category: 'Special',
        power: 130, // Highly buffed Fire
        accuracy: 90,
        pp: 5,
        maxPp: 5,
        description: '영혼을 용광로 통째로 소각 증발시킬 위엄찬 업화를 낙하 폭격합니다! 발사 뒤 특스 폭사공격력이 즉강 2단계 하강되는 여진이 존재합니다.'
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
        description: '자속 에스퍼, 고스트 수렴 영혼림 마도 탄막포를 사출해 시베리아 얼음 도깨비 요절 징벌을 선사합니다.'
      },
      {
        id: 'earthpower', // Energy ball proxy/ surrogate
        name: '에너지볼대지',
        type: 'Ground',
        category: 'Special',
        power: 90,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '영혼 장막 기맥을 지각에 유착 분폭시켜 맞 물 바위 들 구덩이를 단매에 매장 처분합니다.'
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
        description: '가마 촛불 등화 속에서 영령 명상을 통해 특공 특방 단계를 나란히 1단계 기폭 보강해 둡니다.'
      }
    ]
  }
];
