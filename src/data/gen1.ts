import { PokemonMeta } from '../types';

export const GEN1_POKEMON: PokemonMeta[] = [
  {
    id: 150,
    nameKor: '뮤츠',
    nameEng: 'Mewtwo',
    generation: '1세대 (RGB)',
    metaReason: '1세대 배틀의 절대적인 신. 압도적인 특수 종족치와 전율의 스피드로 시합을 전멸로 몰고 가는 파괴의 화신이었습니다.',
    types: ['Psychic', 'None'],
    ability: {
      name: '프레셔',
      description: '강렬한 아우라로 상대의 기력을 쇠하게 해 PP 소비량을 2배 늘립니다.'
    },
    item: {
      name: '생명의구슬',
      description: '기술의 위력을 1.3배 올리지만 타격 시마다 체력이 10% 깎입니다.'
    },
    nature: {
      name: '조심 (Modest)',
      buff: '특수공격',
      nerf: '공격',
      description: '압도적인 사이코 에너지 방출 위력을 극한으로 끌어올립니다.'
    },
    baseStats: {
      hp: 106,
      atk: 110,
      def: 90,
      spa: 154,
      spd: 90,
      spe: 130
    },
    moves: [
      {
        id: 'psychic',
        name: '사이코키네시스',
        type: 'Psychic',
        category: 'Special',
        power: 90,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '강력한 염동력 파동으로 상대를 으깨어 부숩니다. 자속 보정을 받아 끔찍한 위력을 냅니다.'
      },
      {
        id: 'focus-blast',
        name: '기합구슬',
        type: 'Fighting',
        category: 'Special',
        power: 120,
        accuracy: 70,
        pp: 5,
        maxPp: 5,
        description: '정신을 모아 폭발적인 투기를 날립니다. 명중은 낮으나 강철, 악 상성 적들을 소멸시킵니다.'
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
        description: '전율의 냉기를 뿜어내어 공격합니다. 비행, 드래곤, 땅 포켓몬에게 치명상입니다.'
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
        description: '정신을 집중하여 특수공격과 특수방어력을 각각 1단계 상승시킵니다.'
      }
    ]
  },
  {
    id: 143,
    nameKor: '잠만보',
    nameEng: 'Snorlax',
    generation: '1세대 (RGB)',
    metaReason: '전설의 물리 탱커 겸 특수 막이. 무지막지한 고체력과 저주 세팅 뒤 잠자기로 무적을 달리며 리그를 정화했습니다.',
    types: ['Normal', 'None'],
    ability: {
      name: '두꺼운지방',
      description: '불꽃 타입과 얼음 타입 기술의 피해를 절반으로 깎아 안전하게 버팁니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '매 턴이 끝날 때마다 최대 체력의 1/16 만큼을 야금야금 자가 회복합니다.'
    },
    nature: {
      name: '신중 (Careful)',
      buff: '특수방어',
      nerf: '특수공격',
      description: '특수내구를 극대화하여 특수 어태커들의 공격을 우습게 맞받아냅니다.'
    },
    baseStats: {
      hp: 160,
      atk: 110,
      def: 65,
      spa: 65,
      spd: 110,
      spe: 30
    },
    moves: [
      {
        id: 'body-slam',
        name: '누르기',
        type: 'Normal',
        category: 'Physical',
        power: 85,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '푸근한 육체로 적을 완전 격돌합니다. 자속 노말 1.5배 보정과 마비 확률 30%를 품었습니다.'
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
        description: '공격력과 방어력을 1단계 늘리지만 스피드가 1단계 깎입니다. 잠만보를 뚫지 못할 요새로 바꿉니다.'
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
        description: '대지를 사정없이 진동시켜 바위, 강철 포켓몬들에게 지옥의 타격을 가합니다.'
      },
      {
        id: 'rest',
        name: '잠자기',
        type: 'Psychic',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '2턴 동안 꿈을 꾸며 잠들고 체력을 100% 완전 회복하며 상처와 모든 상태이상을 제거합니다.'
      }
    ]
  },
  {
    id: 149,
    nameKor: '망나뇽',
    nameEng: 'Dragonite',
    generation: '1세대 (RGB)',
    metaReason: '전설의 초대 거대 드래곤. 특성 멀티스케일의 생존력과 전설의 춤 한 번이면 용검의 화력으로 전 필드를 가볍게 평정합니다.',
    types: ['Dragon', 'Flying'],
    ability: {
      name: '부요한검', // Reuse exist or custom multiscale fallback
      description: '상처 없이 깔끔한 체력이 가득 차 있을 때 상대 공격에 무조건 50% 반감 보호막을 받습니다.'
    },
    item: {
      name: '무화열매',
      description: '체력이 매우 적을 때 긴급 급식을 실시해 체력의 33%를 즉시 복원합니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '물리 파괴 성질을 극도로 가속하는 대표 성격 세팅입니다.'
    },
    baseStats: {
      hp: 91,
      atk: 134,
      def: 95,
      spa: 100,
      spd: 100,
      spe: 80
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
        description: '야수로 변해 매서운 난타를 진행합니다. 물리 용 상상초월 고위력을 보장합니다.'
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
        description: '절대적인 초고속 우선 선제 타격권(+2)으로 적이 대응하기 전 참살을 가합니다.'
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
        description: '검푸른 활력 영혼의 춤을 취하여 물리공격과 기밀 스피드를 사뿐히 1단계 상승시킵니다.'
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
        description: '불꽃 정기를 주먹에 실어 날립니다. 드래곤을 막는 성가신 정예 강철, 얼음막이를 퇴출시킵니다.'
      }
    ]
  },
  {
    id: 94,
    nameKor: '팬텀',
    nameEng: 'Gengar',
    generation: '1세대 (RGB)',
    metaReason: '전설의 고전 고스트 마스터. 기합의띠로 살아남아 변칙적인 고속 섀도볼 앤 잠재파워, 길동무로 상대를 동반 폭파했습니다.',
    types: ['Ghost', 'Poison'],
    ability: {
      name: '부유',
      description: '땅 위에 떠 있는 속성을 얻어 상대의 치명적인 땅 타입 공격(지진 등)을 완전히 무시 조처합니다.'
    },
    item: {
      name: '생명의구슬',
      description: '체력을 소모하는 원죄를 짊어지되 특수 기술 화력을 1.3배 추가 추진합니다.'
    },
    nature: {
      name: '겁쟁이 (Timid)',
      buff: '스피드',
      nerf: '공격',
      description: '빠른 기동력을 끌어올려 선공 고스트 타격을 확보합니다.'
    },
    baseStats: {
      hp: 60,
      atk: 65,
      def: 60,
      spa: 130,
      spd: 75,
      spe: 110
    },
    moves: [
      {
        id: 'shadow-ball',
        name: '섀도볼',
        type: 'Ghost',
        category: 'Special',
        power: 80,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '자속 자정 유령 에너지를 뭉쳐 발사합니다. 에스퍼와 고스트 타입을 순식간에 절멸냅니다.'
      },
      {
        id: 'sludge-bomb',
        name: '오물폭탄',
        type: 'Poison',
        category: 'Special',
        power: 90,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '치명적인 오물 액기스 탄환을 발사합니다. 페어리, 풀 타입 적들의 가슴을 깊게 베어냅니다.'
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
        description: '푸른 전율의 번개를 낙하 시킵니다. 고스트 공격을 견디려는 물, 비행막이 포켓몬의 기세를 꺾습니다.'
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
        description: '간사한 음유 상상을 작동해 특수공격력을 2단계(+100%) 격하게 상승시킵니다.'
      }
    ]
  },
  {
    id: 65,
    nameKor: '후딘',
    nameEng: 'Alakazam',
    generation: '1세대 (RGB)',
    metaReason: '1세대의 두뇌전 파괴자. 에스퍼 상성의 신으로 군림해 상대방을 일격사 시키는 가공할 에너지를 연사했습니다.',
    types: ['Psychic', 'None'],
    ability: {
      name: '황금몸', // Fallback
      description: '변화기나 상처 간접 대미지 효과에 완전 면역 성상을 지녀 기합의띠 상태를 성실히 지켜냅니다.'
    },
    item: {
      name: '구애안경',
      description: '오직 단 하나의 선택 기술만 가능케 하나 특수 에너지 위력을 1.5배 곱 증폭시킵니다.'
    },
    nature: {
      name: '겁쟁이 (Timid)',
      buff: '스피드',
      nerf: '공격',
      description: '빛보다 전율인 뇌 세포 전달 스피드를 한계 돌파 증대시킵니다.'
    },
    baseStats: {
      hp: 55,
      atk: 50,
      def: 45,
      spa: 135,
      spd: 95,
      spe: 120
    },
    moves: [
      {
        id: 'psychic',
        name: '사이코키네시스',
        type: 'Psychic',
        category: 'Special',
        power: 90,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '메인 스트리밍 염력 주파수를 고스펙 방사하여 적의 신경망 자아를 파쇄시킵니다.'
      },
      {
        id: 'dazzling-gleam',
        name: '매지컬샤인',
        type: 'Fairy',
        category: 'Special',
        power: 80,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '빛나는 마구 영혼 요정 구체를 던져 어둠 속성에 완벽한 징벌 타격을 시원하게 가합니다.'
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
        description: '동족 에스퍼들이나 고스트 막이들의 명치를 완연히 관통해 부수기 적합한 서브 어택입니다.'
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
        description: '뇌세포 신진 대사를 조작해 그 자리에서 즉시 소실된 HP의 50% 분량을 급 보전해 충전합니다.'
      }
    ]
  },
  {
    id: 131,
    nameKor: '라프라스',
    nameEng: 'Lapras',
    generation: '1세대 (RGB)',
    metaReason: '등 뒤에 포탑 바다의 요새. 단단한 복합 얼음/물 상성과 상상을 불허하는 체급, 그리고 폭우 저수 특성으로 가득히 유지했습니다.',
    types: ['Water', 'Ice'],
    ability: {
      name: '두꺼운지방', // Water absorber analogue or thick fat
      description: '얼음, 불꽃 타격을 가뿐히 대폭 삼단 감쇄하여 요새 성능을 수호하도록 작용합니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '단단한 껍질 안에서 조금씩 도구를 조작해 턴마다 상처를 1/16 수준 자가 치유합니다.'
    },
    nature: {
      name: '차분 (Calm)',
      buff: '특수방어',
      nerf: '공격',
      description: '바다 아우라 특수 차단율을 집중 성형하여 특수 딜을 가볍게 넘깁니다.'
    },
    baseStats: {
      hp: 130,
      atk: 85,
      def: 80,
      spa: 85,
      spd: 95,
      spe: 60
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
        description: '성난 해일의 침수 대 수압 분출포를 발포합니다! 명중은 다소 떨리지만 무시무시한 폭포수입니다.'
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
        description: '등 위 얼음 탄망에서 고드름 성질의 얼음 탄환을 뿜어냅니다. 땅, 드래곤 제압 지표 1순위 기술입니다.'
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
        description: '바다 한가운데에 폭풍우 번개를 떨어뜨려, 맞선 여타 물 포켓몬들에게 서릿발 역침식을 냅니다.'
      },
      {
        id: 'self-renew',
        name: '자기재생',
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '신비스러운 해수를 이용해 신체를 즉시 50% 자가 보강 수복 완료합니다.'
      }
    ]
  },
  {
    id: 6,
    nameKor: '리자몽',
    nameEng: 'Charizard',
    generation: '1세대 (RGB)',
    metaReason: '전설의 태양 지배 화룡. 가공할 가속 오버히트와 하늘을 두르는 참극 폭격 불꽃검기로 평원을 전설의 재로 가동 수놓았습니다.',
    types: ['Fire', 'Flying'],
    ability: {
      name: '부요한검', // Solar power / blaze fallback
      description: '불꽃 체력이 깎일 시 오히려 등 뒤 불꽃 엔진이 과열되며 화염 속성 기술 파괴력이 1.5배 증가합니다.'
    },
    item: {
      name: '생명의구슬',
      description: '기술 파괴력을 1.3배 추가 강화하되 화염 전동 반동으로 타격 시 피가 수급량 하향 소모됩니다.'
    },
    nature: {
      name: '겁쟁이 (Timid)',
      buff: '스피드',
      nerf: '공격',
      description: '하늘을 가로지르는 날개 가속 제어권을 완전 수중 장악합니다.'
    },
    baseStats: {
      hp: 78,
      atk: 84,
      def: 78,
      spa: 109,
      spd: 85,
      spe: 100
    },
    moves: [
      {
        id: 'flamethrower',
        name: '화염방사',
        type: 'Fire',
        category: 'Special',
        power: 90,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '가슴에서 용광로 수준 업화 화염탄 광선을 연사 배출합니다. 강철, 풀, 벌레, 얼음을 요절냅니다.'
      },
      {
        id: 'air-slash',
        name: '에어슬래시',
        type: 'Flying',
        category: 'Special',
        power: 75,
        accuracy: 95,
        pp: 15,
        maxPp: 15,
        description: '날개를 저어 날카로운 참격 진공파를 가합니다. 30% 확률로 상대를 완전 주저앉히며 풀죽입니다.'
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
        description: '용의 불멸 에너지를 각인해 공격과 스피드를 1단계 가볍게 기강 향상합니다.'
      },
      {
        id: 'mystical-fire',
        name: '매지컬플레임',
        type: 'Fire',
        category: 'Special',
        power: 75,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '상대를 녹여 가면서 적의 특공 단계를 확정적으로 1랭크씩 강탈하여 깎아버립니다.'
      }
    ]
  },
  {
    id: 3,
    nameKor: '이상해꽃',
    nameEng: 'Venusaur',
    generation: '1세대 (RGB)',
    metaReason: '숲의 마수 막이. 검은오물과 기가드레인의 무자비한 흡착 생명 빨아들이기 메커니즘으로 교체 대지를 지배했습니다.',
    types: ['Grass', 'Poison'],
    ability: {
      name: '두꺼운지방', // Chlorophyll falling
      description: '지정 얼음, 불꽃 기술 대미지를 짱짱하게 반감 받아 필드 생태수명을 극한 추진합니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '꽃망울을 통해 턴마다 미세 양분을 획득하여 지탱 수명치를 회복합니다.'
    },
    nature: {
      name: '차분 (Calm)',
      buff: '특수방어',
      nerf: '공격',
      description: '성가신 자연 장벽 특수 내구력을 극미하게 강화시켜 안정을 도모합니다.'
    },
    baseStats: {
      hp: 80,
      atk: 82,
      def: 83,
      spa: 100,
      spd: 100,
      spe: 80
    },
    moves: [
      {
        id: 'giga-drain',
        name: '기가드레인',
        type: 'Grass',
        category: 'Special',
        power: 75,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '성가신 상대의 수분 생기 에너지를 전부 강력 흡착해 뺍니다! 가한 타격의 50%를 자신의 체력으로 돌려받습니다.'
      },
      {
        id: 'sludge-bomb',
        name: '오물폭탄',
        type: 'Poison',
        category: 'Special',
        power: 90,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '맹동 화공성 오물을 대량 분출해 페어리 숲 몬스터를 박멸합니다.'
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
        description: '자신의 독, 풀 상성을 막으려는 비열한 불꽃, 강철 막이들에게 무거운 대지 흔들기 보복을 가합니다.'
      },
      {
        id: 'recover',
        name: '자기재생', // Synthesis equivalent
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '꽃 아우라 광합성을 실시해 50%의 대 체력량을 단번에 급 복구 수혈합니다.'
      }
    ]
  },
  {
    id: 9,
    nameKor: '거북왕',
    nameEng: 'Blastoise',
    generation: '1세대 (RGB)',
    metaReason: '하이드로 크롬 물리 수비수. 단단한 껍질 방패와 전 방공 포격 기술로 상대 어태커들을 무난하게 지치게 만듭니다.',
    types: ['Water', 'None'],
    ability: {
      name: '위협', // Rain dish analogue
      description: '양 어깨에 달린 기동 고압 수포의 폭발적 아우라로 상대의 물리 공격 성능을 즉각 1랭크 감퇴합니다.'
    },
    item: {
      name: '울퉁불퉁멧',
      description: '물리 계열 직접 접촉 기습 공격 시 상대의 최대 고 지표 체력의 1/6을 가시로 찔러 아프게 돌려줍니다.'
    },
    nature: {
      name: '장난꾸러기 (Impish)',
      buff: '방어',
      nerf: '특수공격',
      description: '단단하고 기갑 무서운 메탈 껍질 방어 수치를 끝장 보존합니다.'
    },
    baseStats: {
      hp: 79,
      atk: 83,
      def: 100,
      spa: 85,
      spd: 105,
      spe: 78
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
        description: '강력한 금속 포신에서 강제 수압 분수를 발사하는 시원시원한 자속 주포 기술입니다.'
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
        description: '물에 대항해 나타난 거만하디 거만한 드래곤, 비행 날개들을 얼려 땅 아래로 처박는 냉동 서브웨폰입니다.'
      },
      {
        id: 'sacred-sword',
        name: '고속스핀', // Spin equivalent
        type: 'Normal', // Normal spin
        category: 'Physical',
        power: 50,
        accuracy: 100,
        pp: 40,
        maxPp: 40,
        description: '껍질 속에 숨어 광폭 회전 몸통 박치기를 시도해 물리 피해를 선사합니다.'
      },
      {
        id: 'curse', // Iron defense variant
         name: '저주',
         type: 'Ghost',
         category: 'Status',
         power: 0,
         accuracy: 100,
         pp: 10,
         maxPp: 10,
         description: '공격과 철갑 물방을 고루 1등급 늘림으로써 진정한 불멸의 파도 탱크 성상을 자랑합니다.'
      }
    ]
  },
  {
    id: 130,
    nameKor: '갸라도스',
    nameEng: 'Gyarados',
    generation: '1세대 (RGB)',
    metaReason: '성난 폭포의 용왕룡. 용의춤 세팅 유무로 파도를 일으켜 시합 필드의 선공과 후공 매칭을 파괴해 주도권을 유도합니다.',
    types: ['Water', 'Flying'],
    ability: {
      name: '위협',
      description: '배틀 등판과 동시에 천지를 격노하게 포효해 맞선 상대의 물리 살상공격력을 매섭게 1랭크 격하합니다.'
    },
    item: {
      name: '무화열매',
      description: '체력 소실 한계가 임박할 순간 품속의 열매 섭취 처방을 개시해 HP를 안전하게 급 회복 보충합니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '물리 분쇄 기량을 기하급수적으로 증진 시키는 돌진 딜러의 정석 배치입니다.'
    },
    baseStats: {
      hp: 95,
      atk: 125,
      def: 79,
      spa: 60,
      spd: 100,
      spe: 81
    },
    moves: [
      {
        id: 'waterfall',
        name: '폭포오르기', // Waterfall
        type: 'Water',
        category: 'Physical',
        power: 80,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '폭포를 거슬러 올라 물빛 살의 정권을 물리적으로 박아칩니다! 일정 20% 주기로 타격을 맞은 타겟을 심각하게 풀죽입니다.'
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
        description: '폭풍 진동을 일구어 위협적인 바위, 강철, 불꽃, 전기 사냥개들을 요동쳐서 참살 처방합니다.'
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
        description: '동양 용왕 영혼 댄스를 가미해 물리 공격력과 기밀 도트 스피드를 가볍게 즉시 1랭크씩 늘립니다.'
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
        description: '날카로운 비행 포켓몬들 명치를 조각내기 적합한 급소 보증 고위력 암석 투척 세팅입니다.'
      }
    ]
  }
];
