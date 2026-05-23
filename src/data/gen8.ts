import { PokemonMeta } from '../types';

export const GEN8_POKEMON: PokemonMeta[] = [
  {
    id: 888,
    nameKor: '자시안 (검왕)',
    nameEng: 'Zacian-C',
    generation: '8세대 (SwSh)',
    metaReason: '가라르의 절대 멸무성 거대 신성 영웅 검사. 구극 강철/페어리 상성에 나오자마자 불요의검 공격 랭크 촉진과 무서운 전설 거수참 격돌로 적들을 참수 도태시켰습니다.',
    types: ['Fairy', 'Steel'],
    ability: {
      name: '부요한검', // Intrepid sword proxy: physical boost on entry
      description: '불요의검 영광을 일구어 물리공격력 파괴 능성을 등판과 동시에 항시 전설 보검마냥 1.5배나 추가 추진 굳힙니다.'
    },
    item: {
      name: '생명의구슬', // Rusted sword analog
      description: '녹슨검 전설 에너지를 탑재해 피해를 1.3배 추가 강화하되 타격 시 10%의 체손 지 디버프를 수반합니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '거수참 물리 칼날 검기 참살 지수를 극비 고 수치 보존 완성합니다.'
    },
    baseStats: {
      hp: 92,
      atk: 170,
      def: 115,
      spa: 80,
      spd: 115,
      spe: 138
    },
    moves: [
      {
        id: 'behemoth-blade',
        name: '거수참',
        type: 'Steel',
        category: 'Physical',
        power: 100, // Behemoth blade signature
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '거대 무사 강철검으로 대상 성을 통째로 양단 참수 도절합니다. 자속 1.5배 보정과 합해진 가공포 물리 공격입니다.'
      },
      {
        id: 'extreme-speed', // Play rough substitute / speed prioritization
        name: '치근거리기선제',
        type: 'Fairy',
        category: 'Physical',
        power: 80, // Fairy physical prioritizer
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '요정의 초월 우선 선제 기동권(+1)을 손에 들고 상대 기도가 기화하기 전 일절 으스러뜨려 둡니다.'
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
        description: '지하 지각 대 균열 진동을 난수로 방사 폭진시켜 맞 강철 어태커들 다리를 사정없이 붕괴 매장합니다.'
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
        description: '칼바람 아우라 영광을 고조시켜 공격 단를 단 번에 2단계 즉강 수립해 둡니다.'
      }
    ]
  },
  {
    id: 887,
    nameKor: '드래펄트',
    nameEng: 'Dragapult',
    generation: '8세대 (SwSh)',
    metaReason: '초고속 고스트 드래곤 전폭기. 클리어바디 기맥과 다중 자속 투사 어태킹 및 고속 볼체 유턴 기기 정돈으로 메타 가속화를 주도했습니다.',
    types: ['Ghost', 'Dragon'],
    ability: {
      name: '부유', // Clear body defensive analog or levitate proxy
      description: '고공 비행 전폭기 형정 정위를 취해 상대들이 매설 사출한 땅 지진 주포들을 완전 100% 불발 면역 차단합니다.'
    },
    item: {
      name: '생명의구슬',
      description: '드래곤 은하 참살력을 1.3배 추가 상승 확보하나 연사할 때마다 피 10% 소실 반작용이 따릅니다.'
    },
    nature: {
      name: '명랑 (Jolly)',
      buff: '스피드',
      nerf: '특수공격',
      description: '초기동 전폭 속령 기세를 지표 스피드 장벽에 몰아 부스팅 장악 완료코자 성형 배치합니다.'
    },
    baseStats: {
      hp: 88,
      atk: 120,
      def: 75,
      spa: 100,
      spd: 75,
      spe: 142
    },
    moves: [
      {
        id: 'outrage', // Dragon arrow proxy via high power outrage
        name: '드래곤애로우',
        type: 'Dragon',
        category: 'Physical',
        power: 120,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '꼬리 가마에서 드라꼰 자식 비행체들을 난폭 고 기속 연속 투사 참수하는 자속 고위력 병기입니다.'
      },
      {
         id: 'slash', // Phantom force proxy
         name: '고스트다이브',
         type: 'Ghost',
         category: 'Physical',
         power: 90,
         accuracy: 100,
         pp: 15,
         maxPp: 15,
         description: '그림자 틈단 구덩이에 은거 돌격 관천 정타를 박습니다. 맞 강철 요정들을 귀찮게 할 자속 유령 공방기입니다.'
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
        description: '공중 공격 하강 후 즉각 환두 퇴각 전술을 취해 아군 대면 교섭을 기기 완료 조처합니다.'
      },
      {
        id: 'swords-dance',
        name: '용의춤', // dragon dance
        type: 'Dragon',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '전폭 비룡 용관 춤사위를 울려 물리 공력과 가속도 기밀 전속 단계를 각각 1등급 격강시킵니다.'
      }
    ]
  },
  {
    id: 892,
    nameKor: '우라오스 (연격폼)',
    nameEng: 'Urshifu',
    generation: '8세대 (SwSh)',
    metaReason: '전설의 보이지않는 격투 주먹 마수. 상대 방어 수호장막을 완전 관통 들이박는 자속 수류연타 크리티컬 한 쌍으로 요새 라인을 완전 참수 파괴했습니다.',
    types: ['Water', 'Fighting'],
    ability: {
      name: '부요한검', // Unseen fist proxy
      description: '보이지않는 권법 기예 투지를 타고 가가 물리 정격 격돌 타격 전력을 영구적으로 1.5배나 단칼 곱 산출해 줍니다.'
    },
    item: {
      name: '생명의구슬', // Focus sash analogue
      description: '연격 참수 물리 가속 세팅 위력을 1.3배 추진하되 10% 전정 복역 통증을 안고 감량받습니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '물빛 영권 격투 격 정타 피해 수치를 극한 전동 성형 고조하기 위함입니다.'
    },
    baseStats: {
      hp: 100,
      atk: 130,
      def: 100,
      spa: 63,
      spd: 60,
      spe: 97
    },
    moves: [
      {
        id: 'waterfall', // Surfing strikes proxy
        name: '수류연타',
        type: 'Water',
        category: 'Physical',
        power: 85, // Highly buffed Waterfall surrogate
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '폭우 파도를 주먹 세 마디 정격 복합 연속 크리티컬로 사출 정타합니다! 적 방어벽을 영영 으스러뜨려 놓습니다.'
      },
      {
        id: 'sacred-sword', // Close combat proxy
        name: '인파이트',
        type: 'Fighting',
        category: 'Physical',
        power: 120,
        accuracy: 100,
        pp: 5,
        maxPp: 5,
        description: '강인 난폭 격투 권법을 개시 수직 함락시킵니다. 가해진 참수 뒤에 자성 물방 공방이 1단계 저하되는 여진이 존재합니다.'
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
         description: '대강에 권 격 무림 진동을 일구어 위형 전기 바위들을 무참히 매장 저격 조치합니다.'
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
        description: '연격 무사의 참격 칼 시위를 매섭게 요동공력 특성을 2단계 늘려 놓습니다.'
      }
    ]
  },
  {
    id: 897,
    nameKor: '버드렉스 (흑마)',
    nameEng: 'Calyrex-S',
    generation: '8세대 (SwSh - DLC)',
    metaReason: '가라르의 절대 영마 왕. 나오자마자 혼연일체 고주파로 악당들을 위축하고 구애안경 아스트랄비트 폭격 분사로 전 필드를 참혹 매장 시켰습니다.',
    types: ['Psychic', 'Ghost'],
    ability: {
      name: '황금몸', // As One proxy
      description: '영혼 영마 수뇌 융합력 덕분에 성가신 변화기 수렵 사안 디버프를 완전 100% 불발 기화시킵니다.'
    },
    item: {
      name: '구애안경',
      description: '단기술 사용 제약에 힘입어 전 무덤 아스트랄 광역 파도를 무한히 1.5배나 사정없이 증폭 확보합니다.'
    },
    nature: {
      name: '겁쟁이 (Timid)',
      buff: '스피드',
      nerf: '공격',
      description: '영마의 전광 가기 속 스피드를 대폭 취득 선 용성군급 에너지를 뿜어내기 위함입니다.'
    },
    baseStats: {
      hp: 100,
      atk: 85,
      def: 80,
      spa: 165,
      spd: 100,
      spe: 150
    },
    moves: [
      {
        id: 'shadow-ball', // Astral barrage proxy
        name: '아스트랄비트',
        type: 'Ghost',
        category: 'Special',
        power: 120, // Proxy high power Ghost Astral Barrage
        accuracy: 100,
        pp: 5,
        maxPp: 5,
        description: '명계 구름 사슴들이 난폭 폭격 대 아스트랄 유령 폭풍우 사포를 쏩니다. 에스퍼 요정들을 영영 참수 요절합니다.'
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
        description: '전설 영성 전뇌 주파수를 고스펙 사출 격투 독 요괴들의 맥을 요절 저격해 버립니다.'
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
         description: '동물적 기생 생초 풀 뿌리를 수렵 조장해 상대 피 50%를 복액 자생 수급합니다.'
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
        description: '고요한 기맥 무소음 아우라 연성 명상을 진행해 특공 특내 단값을 1단계 늘려 놓습니다.'
      }
    ]
  },
  {
    id: 861,
    nameKor: '오롱털',
    nameEng: 'Grimmsnarl',
    generation: '8세대 (SwSh)',
    metaReason: '짓궂은 장막의 임프 대장. 짓마 특성 벽설치 기류와 소울크래시 어택 및 가혹 저주 요새 세팅으로 수많은 물리 어태커 기세를 참참 깎았습니다.',
    types: ['Dark', 'Fairy'],
    ability: {
      name: '황금몸', // Prankster fallback
      description: '못된 장난 세팅 기예를 가동해 상대가 거는 성가신 디버프를 선제 정화 격하 면역합니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '장벽 속에서 턴 저물 시각에 털 한올 모아 피 1/16 비량 자생 수선 완료해 둡니다.'
    },
    nature: {
      name: '장난꾸러기 (Impish)',
      buff: '방어',
      nerf: '특수공격',
      description: '단단히 성난 골격 특성 물방 수비를 든든히 보전코자 구축 배치합니다.'
    },
    baseStats: {
      hp: 95,
      atk: 120,
      def: 85,
      spa: 95,
      spd: 75,
      spe: 60
    },
    moves: [
      {
        id: 'crunch', // Trick/foul play surrogate or Soul clash surrogate
        name: '소울크래시',
        type: 'Fairy',
        category: 'Physical',
        power: 75,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '요정 정기 손톱으로 후려갈겨 대상 물리 딜 처분을 행함과 동시에 적 특특공력을 확증 1단 깎습니다.'
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
        description: '소지한 장비를 악 독 발을 동원해 기습 탁 쳐서 소실 만시킵니다.'
      },
      {
        id: 'recover', // Screen healing proxy
        name: '장벽수리',
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '요정 빛 장벽을 가다듬어 소지 영맥 피 50% 분량을 즉석 자맥 복구 확보 완료해 둡니다.'
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
        description: '검은 장벽 아치를 경화해 장갑 물리 물방과 물리 공격을 각각 1레벨 드높여 저지합니다.'
      }
    ]
  },
  {
    id: 894,
    nameKor: '레지에레키',
    nameEng: 'Regieleki',
    generation: '8세대 (SwSh)',
    metaReason: '가라르의 절대 초 가속도 기밀 기맥 수호 전격 비석. 트랜지스터 사태로 사출하는 전기 폭사 위력포를 무려 2배 넘게 드높이던 전격왕입니다.',
    types: ['Electric', 'None'],
    ability: {
      name: '부요한검', // Transistor proxy: electric booster
      description: '트랜지스터 자장 전격 기예가 가동돼 자신의 전기 속성 기술 위력을 영구 1.5배 가열 곱 증폭시킵니다.'
    },
    item: {
      name: '구애안경',
      description: '단 하나의 기술 사용 강제 조치에 동조해 자속 낙뢰 광선포 위력을 1.5배나 사정없이 폭사 추진합니다.'
    },
    nature: {
      name: '겁쟁이 (Timid)',
      buff: '스피드',
      nerf: '공격',
      description: '빛을 초월하는 전격 비석 속 스피드 게이지를 완연 장악 완료코자 성찰합니다.'
    },
    baseStats: {
      hp: 80,
      atk: 100,
      def: 50,
      spa: 100,
      spd: 50,
      spe: 200
    },
    moves: [
      {
        id: 'thunderbolt',
        name: '일렉트릭네트볼',
        type: 'Electric',
        category: 'Special',
        power: 90,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '자속 발전 파동 전자기 빔을 지면에 수직 낙하 폭격합니다. 물 비행 속성들을 말끔히 도태 처분합니다.'
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
        description: '전격 타격 화망을 가하고 아둔 번개 전송 구체로 신속히 후진 복귀 조작을 감행합니다.'
      },
      {
        id: 'shadow-ball',
        name: '원시의빛눈', // Ancient power surrogate/Shadow ball proxy
        type: 'Ghost',
        category: 'Special',
        power: 80,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '전격을 피하는 에스퍼 장벽들의 등뼈를 요절 관진해 참할 보조 그림자 포격입니다.'
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
        description: '전자기 폭풍우 중심 자궁 기성 동조 명상을 거쳐 아군 특수 역량 단계를 1랭크 격강 수립합니다.'
      }
    ]
  },
  {
    id: 815,
    nameKor: '에이스번',
    nameEng: 'Cinderace',
    generation: '8세대 (SwSh)',
    metaReason: '가라르의 축구 화염 스타토. 특성 리베로 기맥 사태 덕에 화염볼 사격 및 무릎차기 유턴 기습 어태킹을 자속 1.5배로 동원 도태 전개했습니다.',
    types: ['Fire', 'None'],
    ability: {
      name: '부요한검', // Libero proxy: raw damage booster
      description: '리베로 동물 기동술에 의해 가가 물리 참살 기술 위력을 1.5배 추가 추진 연쇄 유도합니다.'
    },
    item: {
      name: '생명의구슬',
      description: '화구 기습 타격 물리 파괴 지수를 1.3배 상승 조달하나 10%의 체손 지 디버프를 당합니다.'
    },
    nature: {
      name: '명랑 (Jolly)',
      buff: '스피드',
      nerf: '특수공격',
      description: '필드를 달 누비는 스타 돌격 속도 단값을 지표 속도 성형으로써 완수합니다.'
    },
    baseStats: {
      hp: 80,
      atk: 116,
      def: 75,
      spa: 65,
      spd: 75,
      spe: 119
    },
    moves: [
      {
        id: 'flare-blitz', // Pyro ball signature proxy using Flare Blitz high damage style
        name: '화염볼드라이브',
        type: 'Fire',
        category: 'Physical',
        power: 120,
        accuracy: 90,
        pp: 10,
        maxPp: 10,
        description: '성난 오열 불 화구를 일신 발차기 돌진 사출합니다. 자속 불꽃 120 피해와 함께 용광 소각을 냅니다.'
      },
      {
        id: 'sacred-sword', // High jump kick surrogate proxy
        name: '무릎차기',
        type: 'Fighting',
        category: 'Physical',
        power: 120, // High Jump kick mapped proxy
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '동물 무릎 투혼 격돌 무술을 개시합니다. 치고 난 뒤에 자성 물방 공방이 1단계 저하되는 원상이 상존합니다.'
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
        description: '상대를 공격하고 기점 조율용 유기 퇴각 체계를 취해 후열 아군에게 전투 위계를 매듭짓습니다.'
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
        description: '시합 가가 무예 칼 시위를 부추겨 아군의 물리살상력을 2단계 격강 증치합니다.'
      }
    ]
  },
  {
    id: 812,
    nameKor: '고릴타',
    nameEng: 'Rillaboom',
    generation: '8세대 (SwSh)',
    metaReason: '전설의 신성 드럼 그래시 필더. 나오자마자 초원 자작 전자기 파동을 펼침과 아울러 자속 그래시슬라이더 우선도 선공 난타로 필드를 도말 평정했습니다.',
    types: ['Grass', 'None'],
    ability: {
      name: '부요한검', // Grassy surge proxy: grass booster
      description: '그래시 메이커 초원 기예 오성이 가동돼 자성 풀 속성 기술 파괴력을 전설의 무기처럼 1.5배나 단칼 촉진 증강시킵니다.'
    },
    item: {
      name: '구애머리띠',
      description: '단기술 지정 하에 물리 딜러 징벌 파쇄력을 무한히 1.5배 격하게 기복 올립니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '초원 드럼 물리 분쇄 대미지 자체를 극한 보전 완성시킵니다.'
    },
    baseStats: {
      hp: 100,
      atk: 125,
      def: 90,
      spa: 60,
      spd: 70,
      spe: 85
    },
    moves: [
      {
        id: 'extreme-speed', // Grassy glide priority proxy inside grass slot
        name: '그래시슬라이더선제',
        type: 'Grass',
        category: 'Physical',
        power: 70, // Mapped grass priority
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '풀빛 요성 비행 선제권력(+1)을 타고 상대 기도가 기화하기 전 일절 으스러뜨려 요절 처치하는 정석 어택입니다.'
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
        description: '지하 대지 폭진 붕괴를 일구어 위형 전기 바위들을 무참히 분해수립합니다.'
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
        description: '상대를 공격하고 기점 조율 아우라를 후열 복역하고 후방 대면을 수립합니다.'
      },
      {
        id: 'swords-dance',
        name: '칼춤', // Swords dance / wood hammer surrogate bulk ups
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '드럼 곰 괴력 칼바람 아우라를 부추겨 공격력을 격강 2단계 늘려버립니다.'
      }
    ]
  },
  {
    id: 823,
    nameKor: '아머까오',
    nameEng: 'Corviknight',
    generation: '8세대 (SwSh)',
    metaReason: '철갑 날갑 미러아머 장군 새. 유턴 대면 기어를 조율하고 날개쉬기 자생 기맥 및 철갑 저주 요새 세팅으로 수많은 물리 어태커 기세를 꺾었습니다.',
    types: ['Steel', 'Flying'],
    ability: {
      name: '위협', // Mirror armor raw defensive proxy
      description: '철갑 비늘 장벽의 위엄으로 상대 적군 물리 격격 돌진 어태킹 단계를 1등급 절삭 기화 조치합니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '갑비 장벽 날개 속에서 턴 저물 시각에 쇳덩이 한올 모아 피 1/16 자생 수선 완료합니다.'
    },
    nature: {
      name: '장난꾸러기 (Impish)',
      buff: '방어',
      nerf: '특수공격',
      description: '단단히 성난 골격 특성 물방 수비를 견고 기화 보강 완성합니다.'
    },
    baseStats: {
      hp: 98,
      atk: 87,
      def: 105,
      spa: 53,
      spd: 85,
      spe: 67
    },
    moves: [
      {
        id: 'behemoth-blade', // Steel wing surrogate proxy
        name: '아이언윙버스트',
        type: 'Steel',
        category: 'Physical',
        power: 80,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '강철 같은 회전 날개로 정면 수직 강격 참수 일검을 사출 가하는 자속 강비 물리 일격입니다.'
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
        description: '상대를 공격하고 기점 조율용 유기 퇴각 체계를 취해 후열 아군에게 전투 위계를 매칭 조절 완료합니다.'
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
        description: '강고한 접은 강철 비늘을 정리 쉬며 생체 복역 피수치 50% 분량을 거뜬 복원합니다.'
      },
      {
        id: 'curse',
        name: '철벽저주', // Iron defense variant
        type: 'Ghost',
         category: 'Status',
         power: 0,
         accuracy: 100,
         pp: 10,
         maxPp: 10,
         description: '철기 아머를 극치 다짐 경화함으로써 아군 물방과 공격력을 나란히 1등급 보스팅 고조합니다.'
      }
    ]
  },
  {
    id: 858,
    nameKor: '브리무음',
    nameEng: 'Hatterene',
    generation: '8세대 (SwSh)',
    metaReason: '성전의 보석 자장 매직 장막 마녀. 매비 자속 요정 문포스와 트릭룸 들이박는 자가 명상으로 올라운더들을 질식 도태시켰습니다.',
    types: ['Psychic', 'Fairy'],
    ability: {
      name: '황금몸', // Magic bounce proxy
      description: '도발 마맥 방벽에 기해 상대가 가하는 지저분한 이물 기점 억제 징벌을 100% 불발 기화시킵니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '마맥 보석에서 유독 매 턴 끝자리 피 1/16 분량 자맥 복원 완료 도모합니다.'
    },
    nature: {
      name: '차분 (Calm)',
      buff: '특수방어',
      nerf: '공격',
      description: '장벽 마 마녀 특보 특내 한계치를 전전 고조 성형시킵니다.'
    },
    baseStats: {
      hp: 57,
      atk: 90,
      def: 95,
      spa: 136,
      spd: 103,
      spe: 29
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
        description: '신전 보석 달 요성의 광 폭풍 아우라포를 사출 가합니다. 상대 비룡 악들을 요요 징벌 처분합니다.'
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
        description: '전설 전뇌 신수 주파포를 고스펙 방사하여 맞 격투 독 무사들의 맥을 으깨버립니다.'
      },
      {
        id: 'recover', // self heal
        name: '마녀재생',
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '마맥 정화를 유치 자성 결합함으로써 영맥 피수치 절반(50%)을 즉시 충전 완료합니다.'
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
        description: '마녀 모자 아래 마음 고용한 명상을 진행해 특공 특내 단값을 나란히 1등급씩 부스팅 확보합니다.'
      }
    ]
  }
];
