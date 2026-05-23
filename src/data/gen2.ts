import { PokemonMeta } from '../types';

export const GEN2_POKEMON: PokemonMeta[] = [
  {
    id: 248,
    nameKor: '마기라스',
    nameEng: 'Tyranitar',
    generation: '2세대 (GSC)',
    metaReason: '모래바람을 일으켜 바위 버프 특수방어를 1.5배 가동하며 메리트 공격을 일삼은 무자비한 괴수. 역대 최고의 날씨 통제권 지배자입니다.',
    types: ['Rock', 'Dark'],
    ability: {
      name: '모래날림',
      description: '배틀 필드에 나오면 모래바람을 소환해 자신의 특수방어력을 1.5배로 항시 상향 가동합니다.'
    },
    item: {
      name: '구애머리띠',
      description: '어태킹 공격력을 무려 1.5배나 가열하지만 오직 최초 지정 기술 하나만 연사하도록 락을 겁니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '순수 물리 분쇄 대미지 자체를 한계 끝장까지 성형 도모합니다.'
    },
    baseStats: {
      hp: 100,
      atk: 134,
      def: 110,
      spa: 95,
      spd: 100,
      spe: 61
    },
    moves: [
      {
        id: 'rock-slide',
        name: '스톤샤워',
        type: 'Rock',
        category: 'Physical',
        power: 75,
        accuracy: 90,
        pp: 10,
        maxPp: 10,
        description: '하늘에서 거대 암석 산을 흩뿌려 충격을 줍니다. 자속 보정을 받으며 30% 확률로 상대를 완전히 좌절시켜 풀죽입니다.'
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
        description: '사나운 이빨로 자속 암흑 기강 파괴 물리 참격을 가합니다. 에스퍼, 고스트 포켓몬은 피가 마릅니다.'
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
        description: '대지를 격해 뒤흔들며 동족 바위나 전기, 강철 장벽을 요절내기 적합한 최고의 물리 정화포입니다.'
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
        description: '광폭 댄스로 공격 랭크와 기밀 스피드 등급을 각각 1레벨 증치시킵니다.'
      }
    ]
  },
  {
    id: 212,
    nameKor: '핫삼',
    nameEng: 'Scizor',
    generation: '2세대 (GSC)',
    metaReason: '강철 불릿펀치 테크니션의 전설. 단 하나뿐인 불꽃 4배 약점을 제외한 환상적인 방어 상성과 훌륭한 물리 찌르기를 갖췄습니다.',
    types: ['Bug', 'Steel'],
    ability: {
      name: '부요한검', // Technician proxy: power buff
      description: '집중 연마한 강철 신체 덕에 Bullet Punch 혹은 저위력 기술 파괴력을 두 배 가산 증폭합니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '매서운 공방 속에서 음식을 요리 조리 섭취해 상처를 미량 회복해 둡니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '자속 불릿 선제권 물리 대미지 끝판 파괴 성상을 이룩합니다.'
    },
    baseStats: {
      hp: 70,
      atk: 130,
      def: 100,
      spa: 55,
      spd: 80,
      spe: 65
    },
    moves: [
      {
        id: 'behemoth-blade', // Bullet Punch proxy high prioritize
        name: '불릿펀치',
        type: 'Steel',
        category: 'Physical',
        power: 80, // Buffed via Technician proxy
        accuracy: 100,
        pp: 30,
        maxPp: 30,
        description: '강철 주먹을 음속 우선도 배정 선제(+1)로 기습 정타합니다. 핫삼을 상징하는 전설의 자속 킬링기입니다.'
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
        description: '등 뒤 날개로 선베기를 가하고 신속히 후방 아군 대기열로 복습 복귀합니다.'
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
        description: '시합 가속 무예를 일구어 가당한 물리 공격 검기를 즉각 2단계(+100%) 상승 고조해버립니다.'
      },
      {
        id: 'self-renew', // roost proxy
        name: '날개쉬기',
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '날개를 잠시 구겨 정리하며 잃었던 최대 내구성 50%의 대 체력을 즉석 회귀 수혈합니다.'
      }
    ]
  },
  {
    id: 242,
    nameKor: '해피너스',
    nameEng: 'Blissey',
    generation: '2세대 (GSC)',
    metaReason: '전무후무 255 고지표 체력으로 우뚝 선 핑크 악마 특수 차단 누각. 특수 어태커들의 공격을 완전히 무상 연소로 소멸시키는 통곡의 벽이었습니다.',
    types: ['Normal', 'None'],
    ability: {
      name: '두꺼운지방', // Natural cure analog
      description: '풍요로운 비계로 불꽃, 얼음 타입 기술 파괴력을 영구적으로 단단하게 반감 억제 차단 처리합니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '압도적인 초 체력량에 매 턴 끝날 때마다 비단을 입히듯 1/16 가치의 체력을 상추 회복합니다.'
    },
    nature: {
      name: '수줍음 (Bold)', // Bold max def
      buff: '방어',
      nerf: '공격',
      description: '유지력이 극도로 허약한 물리 하치 방어율을 최소 고정 극대화 보강하기 위한 방책입니다.'
    },
    baseStats: {
      hp: 160, // Squeezed HP
      atk: 10,
      def: 60, // Buffed def for gameplay
      spa: 75,
      spd: 135,
      spe: 55
    },
    moves: [
      {
        id: 'body-slam',
        name: '지구던지기',
        type: 'Normal',
        category: 'Physical',
        power: 75, // Flat dmg surrogate
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '지구 자전을 체감하는 묵직한 힘으로 메쳐 안정적인 수준의 지속 대미지를 먹입니다.'
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
        description: '유령 구체를 가볍게 던져 자신을 농락하려는 고스트 및 에스퍼의 장기를 분쇄 차단합니다.'
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
        description: '정신을 가다듬어 특수공격과 특수방어력을 마침내 1단계씩 안전하게 한계 증폭시킵니다.'
      },
      {
        id: 'recover', // Softboiled surrogate
        name: '알낳기',
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '우수한 특급 핑크 헬스 치료 알을 연성해 자신의 잃었던 대 피 수치 50%를 일거 만에 충전 부활합니다.'
      }
    ]
  },
  {
    id: 245,
    nameKor: '스이쿤',
    nameEng: 'Suicune',
    generation: '2세대 (GSC)',
    metaReason: '조율된 극강의 회복 막이 겸 전설의 명상 메이커. 화상을 걸어 물리 어태커들의 공격력을 절단하며 요새로 군림했습니다.',
    types: ['Water', 'None'],
    ability: {
      name: '프레셔',
      description: '전설의 영수 신비를 자아내 상대가 공격을 기용 시 매 회 PP를 두 배로 소진 이끕니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '턴마다 물빛 영체 보호 장막을 돌려 최대 피 비례의 상흔 복원을 상시 실시 조치합니다.'
    },
    nature: {
      name: '차분 (Calm)',
      buff: '특수방어',
      nerf: '공격',
      description: '물빛 방패 장막 특방률을 드높여 대면 유리함을 기획 수립합니다.'
    },
    baseStats: {
      hp: 100,
      atk: 75,
      def: 115,
      spa: 90,
      spd: 115,
      spe: 85
    },
    moves: [
      {
        id: 'hydro-pump', // Scald surrogate with burning chance or high dmg
        name: '열탕',
        type: 'Water',
        category: 'Special',
        power: 80,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '사나운 열풍의 뜨거운 가마 수압 빔을 쏩니다. 피격을 입은 타겟에게 30% 확정 주기로 물리 딜을 반내림하는 화상을 심사 입힙니다.'
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
        description: '창대한 서릿발 극광 파동을 선사합니다. 맞닥뜨린 비행, 드래곤 타겟들을 차갑게 제압 분쇄합니다.'
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
        description: '호수 한가운데에서 내공을 정성껏 연성해 특공과 특방 랭크를 우아하게 각각 1단계 보강합니다.'
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
        description: '호수 자궁의 깊은 수면에 빠져 피를 100% 자가 복원 수급하며 2개년 수면 디버프에 기꺼이 진입합니다.'
      }
    ]
  },
  {
    id: 227,
    nameKor: '무장조',
    nameEng: 'Skarmory',
    generation: '2세대 (GSC)',
    metaReason: '원조 강철/비행 극강의 물리방어 보스. 울퉁불퉁멧 피해와 옹골찬 생존 및 체력 날개쉬기 회복 기법으로 오랜 물리 딜러들을 도태시켰습니다.',
    types: ['Steel', 'Flying'],
    ability: {
      name: '위협', // Sturdy surrogate or Intimidate to make def skyrocket
      description: '칼바람 날갯짓과 금속 위압 아우라로 상대의 물리 공격 랭크를 출전 즉시 1단계 뺏어 저하합니다.'
    },
    item: {
      name: '울퉁불퉁멧',
      description: '철갑 깃털 충격으로 물리 공격을 행한 상대에게 타격 시 최대 역 수치 가치 1/6을 반사 관통 상해시킵니다.'
    },
    nature: {
      name: '장난꾸러기 (Impish)',
      buff: '방어',
      nerf: '특수공격',
      description: '순수 금속 날개의 기갑 장막 물방 계수를 우뚝 보호합니다.'
    },
    baseStats: {
      hp: 65,
      atk: 80,
      def: 140,
      spa: 40,
      spd: 70,
      spe: 70
    },
    moves: [
      {
        id: 'behemoth-blade', // Steel wing/brave bird proxy
        name: '회전부리',
        type: 'Flying',
        category: 'Physical',
        power: 80,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '강철 같은 회전 부리로 정면 낙하 수직 점혈 공격을 시도하는 시원한 물리 자속 일격입니다.'
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
        description: '대면을 노리는 핫삼이나 전격 바위 강철 포켓몬들에게 가차 없이 철저한 땅 지진 정리를 붑니다.'
      },
      {
        id: 'curse',
        name: '철벽', // Curse surrogate
        type: 'Ghost',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '금속 결합 아우라를 경화해 자신의 물리공격과 방어 수준을 견고하게 1레벨 증치합니다.'
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
        description: '높은 바위에서 비행 날개를 고음 정돈해 피 50% 분량을 거뜬하게 자생 연성 완수합니다.'
      }
    ]
  },
  {
    id: 214,
    nameKor: '헤라크로스',
    nameEng: 'Heracross',
    generation: '2세대 (GSC)',
    metaReason: '풍요로운 인파이트 한 방의 전설 벌레 제왕. 공격 단계를 올린 벌레 폭탄 메가폰 한 사발로 에스퍼 악 타선을 단칼 참살한 장사입니다.',
    types: ['Bug', 'Fighting'],
    ability: {
      name: '부요한검', // Guts proxy
      description: '격투 가 투지를 자극하여 물리 격돌 기술 파괴력을 전설의 보검처럼 1.5배 추가 추진 증폭합니다.'
    },
    item: {
      name: '생명의구슬',
      description: '스펙 타격을 1.3배 추가 강화 전진 보증하지만 공격을 행하면 피가 저하 상쇄 적용됩니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '괴력 벌레 주먹 물리 피해 지수 자체를 극단 보강 고정합니다.'
    },
    baseStats: {
      hp: 80,
      atk: 125,
      def: 75,
      spa: 40,
      spd: 95,
      spe: 85
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
        description: '풀파워 투기로 혼신의 물리 난타를 정면에 선사합니다. 맞추고 나선 물방과 특방이 일격 격하되는 상응 패널티를 안습니다.'
      },
      {
        id: 'megahorn',
        name: '메가폰',
        type: 'Bug',
        category: 'Physical',
        power: 120,
        accuracy: 85,
        pp: 10,
        maxPp: 10,
        description: '거대 외뿔에 대 투시 벌레 전류를 충전해 맹습 충돌합니다. 에스퍼, 풀, 악을 뚫는 흉악한 벌레 폭탄입니다.'
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
        description: '자신의 벌레 날개를 사리사욕 절단하려는 무서운 비행, 불꽃 막이들에게 바위 스펙 타격을 돌려줍니다.'
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
        description: '투 혼 칼끝의 춤사위를 자아내 위화 공격력을 화끈하게 2단계 증강 각성시킵니다.'
      }
    ]
  },
  {
    id: 197,
    nameKor: '블래키',
    nameEng: 'Umbreon',
    generation: '2세대 (GSC)',
    metaReason: '전설의 어둠 수호 수비수. 매 턴마다 속임수와 희망사항 50% 피 복원으로 적 물리 어태커들의 살의를 완벽히 녹아내리게 했습니다.',
    types: ['Dark', 'None'],
    ability: {
      name: '두꺼운지방', // Sync proxy
      description: '어두운 장막 오라를 가동해 불꽃, 얼음 기술에 강력한 반감 수호 조치를 취득합니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '칠흑 같은 어둠 속에서 상흔을 매서운 턴마다 조금씩 달게 회복 연출합니다.'
    },
    nature: {
      name: '장난꾸러기 (Impish)',
      buff: '방어',
      nerf: '특수공격',
      description: '단단하디 단단한 월광 물방 수비율을 견고하게 성형 완수합니다.'
    },
    baseStats: {
      hp: 95,
      atk: 65,
      def: 110,
      spa: 60,
      spd: 130,
      spe: 65
    },
    moves: [
      {
        id: 'crunch', // Foul play surrogate
        name: '속임수',
        type: 'Dark',
        category: 'Physical',
        power: 95,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '상대의 가가 물리 공격 수치 자체를 유도 조작해 상대를 치는 악독한 자속 정타 웨폰입니다. 적 물리력이 강할수록 이쪽의 타격도 하늘로 승천합니다.'
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
        description: '달빛 영혼 구체를 가볍게 사출해 보조 대미지를 간결하게 부과시킵니다.'
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
        description: '월광 어둠의 기류로 저주 기강을 짜서 공격과 물방을 각각 1단계 안전하게 부스팅 고정 조치합니다.'
      },
      {
        id: 'recover', // Wish surrogate
        name: '희망사항',
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '밤하늘에 소원을 빌어 자신의 수치 피 상태의 50% 분량을 안전하게 즉석 조달 부활 완료합니다.'
      }
    ]
  },
  {
    id: 160,
    nameKor: '장크로다일',
    nameEng: 'Feraligatr',
    generation: '2세대 (GSC)',
    metaReason: '전설의 괴력 악어 사냥꾼. 우격스타일 기세와 용의춤으로 대지 해일 폭포타격을 일구어 드넓은 강철 산맥을 유유히 으스러뜨렸습니다.',
    types: ['Water', 'None'],
    ability: {
      name: '부요한검', // Sheer force surrogate
      description: '이빨 물어뜯기 기세 우격다짐 기교를 보전해 폭포수 피해력을 1.3배 추가 강화합니다.'
    },
    item: {
      name: '생명의구슬',
      description: '공격 위력을 1.3배 상승 확보하나 연사할 때마다 극미한 피 소모 반동을 유발 처리합니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '악어 철턱 물리 살상력을 드높이는 대표 세팅입니다.'
    },
    baseStats: {
      hp: 85,
      atk: 105,
      def: 100,
      spa: 79,
      spd: 83,
      spe: 78
    },
    moves: [
      {
        id: 'waterfall',
        name: '폭포오르기',
        type: 'Water',
        category: 'Physical',
        power: 80,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '강력한 자속 수룡 투기로 기어를 가해 상대를 정면 강타 격돌합니다. 맞은 상대를 풀죽일 수 있습니다.'
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
        description: '철갑 악어 이빨로 한 입에 대상을 물어 으스러뜨리는 전형적인 서브 물리병기입니다.'
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
        description: '물빛 영기를 차단하려는 귀찮디귀찮은 전기 포켓몬들 굴을 단번에 붕괴 청소합니다.'
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
        description: '늪의 용무를 가뿐하게 한 번 춤춤으로써 물리공격과 기체 스피드를 사뿐하게 1등급 증가시킵니다.'
      }
    ]
  },
  {
    id: 243,
    nameKor: '라이코',
    nameEng: 'Raikou',
    generation: '2세대 (GSC)',
    metaReason: '전설의 전정 수호 뇌수. 신통력과 10만볼트, 볼트체인지로 한 박자 빠른 기수 타격을 내며 대면권을 성실히 조장했습니다.',
    types: ['Electric', 'None'],
    ability: {
      name: '프레셔',
      description: '번개 자장 위압으로 적의 기력 PP 소비 수치 수량을 항시 두 배로 강제 소모시킵니다.'
    },
    item: {
      name: '구애안경',
      description: '오직 단 하나의 스킬 사용 제한 조건하에 특스 방사 위력 수치 성능을 1.5배 보전 향상합니다.'
    },
    nature: {
      name: '겁쟁이 (Timid)',
      buff: '스피드',
      nerf: '공격',
      description: '번개 치는 낙뢰 폭발력을 타고 신속한 선공 조작률을 극대로 올립니다.'
    },
    baseStats: {
      hp: 90,
      atk: 85,
      def: 75,
      spa: 115,
      spd: 100,
      spe: 115
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
        description: '구애안경과 자속 전기 1.5배가 합친 고 전압 낙뢰 폭격을 지면에 쏩니다. 물, 비행 훈련사들을 참혹 매장시킵니다.'
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
        description: '전기를 차단하려는 에스퍼 포켓몬들 명치를 고요히 섀도우 에너지로 요절 저격해 버립니다.'
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
        description: '전류 구체로 타격한 즉시 빠르게 전장에서 빠져나가 교체 아군 퇴로를 구축하는 정예 유틸기입니다.'
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
        description: '뇌운 자궁 한가운데에서 평정을 이끌어 특수 화공과 특수 저항 수치를 가뿐히 1단계 기복 올립니다.'
      }
    ]
  },
  {
    id: 230,
    nameKor: '킹드라',
    nameEng: 'Kingdra',
    generation: '2세대 (GSC)',
    metaReason: '바다 깊숙한 정예 비룡. 오직 하나뿐인 드래곤 약점 보완과 쓱쓱 날씨 스피드 가동으로 바다 참살을 진행한 불멸의 자속 딜러입니다.',
    types: ['Water', 'Dragon'],
    ability: {
      name: '고대활성', // Swift swim speed double surrogate
      description: '비 구름 쓱쓱 가속 기류를 보충받은 덕에 자신의 상응 스피드를 즉석 1.5배 가속하여 가동 수렵합니다.'
    },
    item: {
      name: '생명의구슬',
      description: '드래곤 기술 위력을 1.3배 상승 고정하나 화력 반동 상해를 대가로 지불받습니다.'
    },
    nature: {
      name: '조심 (Modest)',
      buff: '특수공격',
      nerf: '공격',
      description: '성스러운 바다 특력 용성군 파도 대미지에 최고의 힘을 불어넣습니다.'
    },
    baseStats: {
      hp: 75,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 85
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
        description: '천상에서 무수한 용 구름 파편들을 폭격 낙하합니다! 발사 후에는 이쪽의 특수공격 능력이 격하게 2차 하락 조치됩니다.'
      },
      {
        id: 'hydro-pump',
        name: '하이드로펌프',
        type: 'Water',
        category: 'Special',
        power: 110,
        accuracy: 80,
        pp: 5,
        maxPp: 5,
        description: '성난 심해의 급 수압 주포를 시원하게 정력 연사합니다. 얼음 핫삼이나 불꽃 바위를 흔적 없이 도태시킵니다.'
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
        description: '풀 속성 식물 어태커들의 명치를 얼려 사투 소실 시킬 성가신 얼음 고드름 탄환입니다.'
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
        description: '깊은 해저 참격의 춤새를 타서 선공권과 어택 랭크를 각각 1단계 조율 완료합니다.'
      }
    ]
  }
];
