import { PokemonMeta } from '../types';

export const GEN6_POKEMON: PokemonMeta[] = [
  {
    id: 658,
    nameKor: '개굴닌자',
    nameEng: 'Greninja',
    generation: '6세대 (XY)',
    metaReason: '칼로스의 신비한 변신 닌자. 특성 변환자재로 타격 기술의 상성을 자신화하며 생명의구슬 자속 하이드로펌프와 급습 물체인 세팅으로 리그를 제패했습니다.',
    types: ['Water', 'Dark'],
    ability: {
      name: '부요한검', // Protean / Battle Bond proxy: damage booster
      description: '인법 수수께끼 기예를 펼치며 가하는 전방 속성 타격 파괴력을 늘려 적의 허점을 꿰찌릅니다.'
    },
    item: {
      name: '생명의구슬',
      description: '모든 기술 파괴력을 1.3배 추가 강화하되 화용 전동 반동으로 타격 시 피가 10% 소실됩니다.'
    },
    nature: {
      name: '겁쟁이 (Timid)',
      buff: '스피드',
      nerf: '공격',
      description: '음속 닌자 선발기동 스피드를 대폭 취득 선공권을 소유하기 위함입니다.'
    },
    baseStats: {
      hp: 72,
      atk: 95,
      def: 67,
      spa: 103,
      spd: 71,
      spe: 122
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
        description: '닌자 수리검 고압 수조 수포탄을 연속 사출 뿜어냅니다. 불꽃, 바위, 지면을 가차 수치 없이 요절 참살합니다.'
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
        description: '암흑 환영 분신 오성을 방사해 쳐부숩니다. 에스퍼, 고스트들에게 전율의 20% 겁먹기를 안깁니다.'
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
        description: '풀 식물 숲 저항 및 비행 드래곤 날개 뼈를 완전히 얼려 지면 골짜기로 깨 처박을 기술입니다.'
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
        description: '인법 환두술 기습 공격을 개시한 뒤 은밀히 후열 아군 교체 기회를 수립 처방해 둡니다.'
      }
    ]
  },
  {
    id: 663,
    nameKor: '파이어로',
    nameEng: 'Talonflame',
    generation: '6세대 (XY)',
    metaReason: '질풍날개 전용 우선 선제공격의 전설. 우선도(+1)가 탑재된 브레이브버드를 무자비하게 난사해 모든 격투, 벌레 어태커를 멸종 위기로 몬 장사입니다.',
    types: ['Fire', 'Flying'],
    ability: {
      name: '부요한검', // Gale wings high speed priority proxy
      description: '질풍 날개 가속력을 얻어 비행 계지 참살 기술을 절대 음속 선제 참수 가동하게 만듭니다.'
    },
    item: {
      name: '생명의구슬',
      description: '음속 비상 난타력을 1.3배 상승 전진하나 자성 10% 생명 절삭 상해를 면치 못합니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '비행 돌격 벌레이 미사일 물리 피해력을 끝끝내 보존 완성시킵니다.'
    },
    baseStats: {
      hp: 78,
      atk: 81,
      def: 71,
      spa: 74,
      spd: 69,
      spe: 126
    },
    moves: [
      {
        id: 'extreme-speed', // Brave bird proxy high damage flying priority
        name: '브레이브버드',
        type: 'Flying',
        category: 'Physical',
        power: 120, // High power surrogate
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '날개를 접고 장렬 비상 정정 격돌 참수 공격을 선제 우선 순위로 가합니다. 자속 비행 보정 고 타격입니다.'
      },
      {
        id: 'flare-blitz',
        name: '플레어드라이브',
        type: 'Fire',
        category: 'Physical',
        power: 120,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '용광로 불꽃 업화를 온몸에 감아 수직 하강 격하합니다. 타격 뒤에 이쪽도 33% 반격 전동 피해를 당합니다.'
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
        description: '화산 바위에 앉아 불 피를 정돈하여 소진 체력치 수치의 1/2을 급 충전 복구합니다.'
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
        description: '불꽃 비늘 먼지를 무섭도록 요동 시켜 공격 단계를 단번에 2단계 끌어올립니다.'
      }
    ]
  },
  {
    id: 681,
    nameKor: '킬가르도',
    nameEng: 'Aegislash',
    generation: '6세대 (XY)',
    metaReason: '공수교대의 수수께끼 마검. 약점보험을 걸고 킹쉴드 철벽 세팅 뒤 섀도볼과 야습 복수 타격을 가질 Kalos 최고의 사기 성배 마검이었습니다.',
    types: ['Steel', 'Ghost'],
    ability: {
      name: '황금몸', // Stance change analogue
      description: '마검 결계 오성을 자아내 적들의 매서운 상태이상 징벌이나 아군 간접 피해를 완전 차단 차단합니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '마검 칼집 안에서 턴마다 소지 양분을 흡수해 피 1/16 비례의 안정 지각 복원을 행합니다.'
    },
    nature: {
      name: '차분 (Calm)',
      buff: '특수방어',
      nerf: '공격',
      description: '킹쉴드 요새막 수비 특방수치를 한계까지 전동 성형 수립하기 위함입니다.'
    },
    baseStats: {
      hp: 60,
      atk: 100, // Balanced quiet form
      def: 120,
      spa: 100,
      spd: 120,
      spe: 60
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
        description: '마검 영혼 칼 파편 구체를 사출 자속 징벌합니다. 에스퍼 장벽 요정들을 기가 차게 요절 파투냅니다.'
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
        description: '강비 빛 갈매기로 단번에 광역 쏘기합니다. 맞닥뜨린 페어리 요정들의 귀여움을 단장에 소멸시킵니다.'
      },
      {
        id: 'recover', // King's shield analogue: heal/re-shield proxy
        name: '킹쉴드재생',
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '철갑 방패 속으로 은거하며 즉시 무사 상흔 50% 분량을 급 자생 수급 확보 완료합니다.'
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
        description: '마검의 영맥에 정신을 유탁해 자가 특공 특내 랭크 단계를 1단계 부스팅 고정 조치합니다.'
      }
    ]
  },
  {
    id: 700,
    nameKor: '님피아',
    nameEng: 'Sylveon',
    generation: '6세대 (XY)',
    metaReason: '페어리스킨 하이퍼보이스 폭파 소리 여신. 리본 달린 요정으로 귀여운 외양 뒤에 전장을 구애안경 자속 무자비 요정 성광포로 진동시켰습니다.',
    types: ['Fairy', 'None'],
    ability: {
      name: '부요한검', // Pixilate proxy
      description: '페어리 스킨 가호를 받아 가당한 노멀 계열 소리 주파수를 요정 참격 위압으로 1.5배 가산 전송시킵니다.'
    },
    item: {
      name: '구애안경',
      description: '단기술 지정 하에 요정 고 유희 전동 위력을 무한히 1.5배나 폭사 추진해 확보합니다.'
    },
    nature: {
      name: '조심 (Modest)',
      buff: '특수공격',
      nerf: '공격',
      description: '리본 요정포 갈기는 특스 폭사력의 정점을 이룩하기 위한 성찰 배치입니다.'
    },
    baseStats: {
      hp: 95,
      atk: 65,
      def: 65,
      spa: 110,
      spd: 130,
      spe: 60
    },
    moves: [
      {
        id: 'moonblast', // Hyper voice signature proxy
        name: '스킨하이퍼보이스',
        type: 'Fairy',
        category: 'Special',
        power: 95,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '요정 정기로 증폭한 광역 차원 하이퍼 소리 파장을 자속 1.5배 격격 타격합니다. 악, 격투, 용들을 흔적 없이 소멸합니다.'
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
        description: '어두운 리본 영혼 그림자 구체를 낙하합니다. 동족이나 에스퍼 장벽들의 등뼈를 요절내기 안성맞춤입니다.'
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
        description: '달무리 요정 소망 연성을 거쳐 유실 대 피수치 상흔 수치 50% 분량을 즉석 회귀 수급 완료합니다.'
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
        description: '리본 기조를 단정히 정맥 정화 조절하여 요성의 특특공방을 1단계 기복 올립니다.'
      }
    ]
  },
  {
    id: 384,
    nameKor: '메가레쿠쟈',
    nameEng: 'Mega Rayquaza',
    generation: '6세대 (XY - ORAS)',
    metaReason: '전 포켓몬 역사상 전무후무 최강 최조의 신성 하늘 지형룡. 델타스트림 오라로 약점을 반감하고, 도구 생구 화룡점정 격돌 뒤 신속으로 세상을 멸망 시켰습니다.',
    types: ['Dragon', 'Flying'],
    ability: {
      name: '부요한검', // Delta stream / mega boost proxy
      description: '델타스트림 고공 기맥 소유권 덕분에 자신 약점 상해들을 무조건 철저히 50%나 감쇄 확보 완료합니다.'
    },
    item: {
      name: '생명의구슬',
      description: '화룡 물리 정격 대 어택 위력을 1.3배 상승 전동하나 10% 자해 생명 소모 반작용이 따릅니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '천공의 전설 주포 물리 참살 공격 위력을 극한 조율 보존합니다.'
    },
    baseStats: {
      hp: 105,
      atk: 180,
      def: 100,
      spa: 180,
      spd: 100,
      spe: 115
    },
    moves: [
      {
        id: 'outrage', // Dragon Ascent signature proxy
        name: '화룡점정',
        type: 'Dragon',
        category: 'Physical',
        power: 120,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '창대한 하늘 중심에서 강철 비늘 날개를 가두며 가로지르는 전무후무 고위력 비룡 참수 어택입니다.'
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
        description: '우선 선공권 배정(+2)을 입은 고속 대 돌격 정타를 날려 적군 생명이 안전 정위하기 전 정지 사형을 가합니다.'
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
        description: '지하 대지 폭진 붕괴를 일구어 위협 전기 바위들을 무참히 요절 분해수립합니다.'
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
        description: '천공의 용왕신 무곡을 자아 아우르며 물리 공격과 스피드를 각각 격하게 1등급 늘립니다.'
      }
    ]
  },
  {
    id: 115,
    nameKor: '메가캥카',
    nameEng: 'Mega Kangaskhan',
    generation: '6세대 (XY)',
    metaReason: '역대 물리 파괴 캥거루 마수. 특성 부자유친 덕에 턴당 모든 공격을 두번 분사 연타하여 기띠 격파 및 60% 확률 풀죽음 속이기를 일구었습니다.',
    types: ['Normal', 'None'],
    ability: {
      name: '부요한검', // Parental bond double attack proxy: massive damage boost
      description: '부자유친 아기새 아우라 공조를 타고 가하는 타격 정격 피해력을 1.5배나 단칼 곱 산출해 줍니다.'
    },
    item: {
      name: '울퉁불퉁멧',
      description: '직접 타격당 물리 접촉 시 아기 캥거루가 메고 간 가시철갑으로 상대를 1/6 체력 깎아 물리침합니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '고 수치 이판사판 대 타격 물리 어택 대미지 끝장을 완성합니다.'
    },
    baseStats: {
      hp: 105,
      atk: 125,
      def: 100,
      spa: 60,
      spd: 100,
      spe: 100
    },
    moves: [
      {
        id: 'extreme-speed', // Double attack normal equivalent or Return proxy
        name: '이판사판태클',
        type: 'Normal',
        category: 'Physical',
        power: 120, // Proxy high power Normal
         accuracy: 100,
         pp: 15,
         maxPp: 15,
         description: '자식과 함께 일신 격 격동 돌격을 가하는 파괴의 메인 웨폰입니다. 자속 1.5배를 탑재했습니다.'
      },
      {
        id: 'fake-out', // Fake out
        name: '속이기',
        type: 'Normal',
        category: 'Physical',
        power: 40,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '대면 1턴 한정으로 절대 초 우선(+3) 선 기습 갈김하여 상대 타겟을 100% 확률로 뇌진탕 풀죽음 묶어버립니다.'
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
        description: '지각 들이치기를 모아 바위, 강철 무기물들을 단매에 분쇄 처방해 버립니다.'
      },
      {
        id: 'swords-dance',
        name: '칼춤', // Power up punch surrogate
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 20,
        maxPp: 20,
         description: '아이를 대동한 호랑 괴력 영기 칼끝 춤으로 단번에 공격력 수치를 2단계 늘려 놓습니다.'
      }
    ]
  },
  {
    id: 6,
    nameKor: '메가리자몽Y',
    nameEng: 'Charizard-Y',
    generation: '6세대 (XY)',
    metaReason: '태양의 폭격룡. 나오자마자 가뭄 필드를 연출해 가마불꽃 자속 오버히트로 맞상대 물막이들을 연소 도태시켰습니다.',
    types: ['Fire', 'Flying'],
    ability: {
      name: '두꺼운지방', // Rain/Drought proxy or fire boost
      description: '열 아케인 엔진 활성을 통해 자성 얼음 불꽃 내성을 영구 단단하게 50%나 경감해 내어 수호합니다.'
    },
    item: {
      name: '생명의구슬',
      description: '태양 전격 폭격을 1.3배 상승 조달하되 공격 행동 시 10% 생명 절삭 상해 통증을 안습니다.'
    },
    nature: {
      name: '겁쟁이 (Timid)',
      buff: '스피드',
      nerf: '공격',
      description: '기동 속도를 완연 확보해 선공 태양열 오버 화염방사를 융단 폭포 사출하기 위한 것입니다.'
    },
    baseStats: {
      hp: 78,
      atk: 104,
      def: 78,
      spa: 159,
      spd: 115,
      spe: 100
    },
    moves: [
      {
        id: 'flamethrower',
        name: '가뭄화염방사',
        type: 'Fire',
        category: 'Special',
        power: 90,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '태양의 백열 열 용광 광채를 고압 분사해 대상을 요화시킵니다. 강철, 풀 장막을 흔적 없이 증발시킵니다.'
      },
      {
         id: 'giga-drain', // Solar beam equivalent
         name: '태양솔라빔',
         type: 'Grass',
         category: 'Special',
         power: 120, // High raw Solar beam surrogate via giga drain mapping
         accuracy: 100,
         pp: 10,
         maxPp: 10,
         description: '태양 정기 마력을 모아 거대 식생 에너지 빔포를 정격 돌사합니다! 타격 뒤 피 50%를 흡착 복액 수글합니다.'
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
        description: '날개를 크게 저어 영혼마저 절단할 매서운 참수 비행 진공 칼날 파동포입니다. 30% 확률로 상대를 완전히 겁먹여 풀죽입니다.'
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
        description: '태양 빛 평정을 자궁에 실어 자가 특공 특내 랭크 수준을 1단계 부스팅 고조합니다.'
      }
    ]
  },
  {
    id: 707,
    nameKor: '클레피',
    nameEng: 'Klefki',
    generation: '6세대 (XY)',
    metaReason: '전설의 열쇠 장난감 마군. 짓궂은마음 선제 뽐내기와 러스터캐논 명상 세팅으로 드래곤 악당들을 울게 만든 수비 요정이었습니다.',
    types: ['Steel', 'Fairy'],
    ability: {
      name: '황금몸', // Prankster fallback
      description: '열쇠 마력 정위로 상대가 시도하는 지저분한 이물 보조 징벌을 선제 무상화 격항 조치해 냅니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '열쇠 고리 공명으로 자꾸만 턴마다 피 1/16 수준 자가 영맥 수선 완료 조처합니다.'
    },
    nature: {
      name: '차분 (Calm)',
      buff: '특수방어',
      nerf: '공격',
      description: '요정 장난감 금갑 특방 수비율을 전정으로 구축 고조시킵니다.'
    },
    baseStats: {
      hp: 57,
      atk: 80,
      def: 91,
      spa: 80,
      spd: 87,
      spe: 75
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
        description: '금속 고리 마맥에서 나오는 자속 금속포 사출기입니다. 요정 요괴들을 시원하게 요화 정화합니다.'
      },
      {
        id: 'moonblast',
        name: '문포스',
        type: 'Fairy',
        category: 'Special',
        power: 95,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '달무리 정기 아우라 성광포를 던집니다. 용 드래곤 악 포켓몬들에게 치명적 사형 참살 피해를 가합니다.'
      },
      {
        id: 'recover', // self cure
        name: '열쇠수리',
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '망가진 무기 요정 리보를 재생 결합해 HP 게이지의 절반(50%)을 즉시 충전 완료합니다.'
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
        description: '열쇠 금맥에 정신 우화를 유치 조절해 기맥 특화 특보를 1단계씩 안전 보전 끌어올려 버립니다.'
      }
    ]
  },
  {
    id: 706,
    nameKor: '미끄래곤',
    nameEng: 'Goodra',
    generation: '6세대 (XY)',
    metaReason: '전설의 슬라임 드래곤. 특성 초식으로 상대 풀 공격력을 흡입하고 돌격조끼 특수 수비율을 탑재해 끔찍한 특방 요새로 활약했습니다.',
    types: ['Dragon', 'None'],
    ability: {
      name: '두꺼운지방', // Sap sipper/gooey defensive proxy
      description: '점액질 피부 성상을 타고 상대 적들이 연마 가한 불꽃, 얼음 기술을 무참히 반안정 50%나 경감 차단합니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '점액막을 보강하며 매 턴이 저물 시각에 체력 게이지 1/16 비례의 안정 지각 자치 수급을 기용 처리해 둡니다.'
    },
    nature: {
      name: '차분 (Calm)',
      buff: '특수방어',
      nerf: '공격',
      description: '슬라임 우갑 특방 철포 내구 장벽을 극한으로 마련하기 위함입니다.'
    },
    baseStats: {
      hp: 90,
      atk: 100,
      def: 70,
      spa: 110,
      spd: 150,
      spe: 80
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
        description: '하늘에 우는 용 슬라임 영 운석우들을 세차게 폭격 낙하합니다! 행한 타격 뒤 자신의 특공은 격하게 2차 참쇠 하강 고조 패널티가 옵니다.'
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
        description: '점액에서 내뿜는 마그마성 고열 기화 가스를 조준 격하합니다. 벌레 강철 풀 장벽들을 가차 없이 요화합니다.'
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
         description: '점액 유착 식생 기교로 적의 기맥 체수분을 훔쳐 아군 피 50%를 흡착 부활 완료합니다.'
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
        description: '차분 고요한 점액 정밀 정돈을 통해 자가 특공 특보단 단계를 완연히 아울러 1등급 늘려 버립니다.'
      }
    ]
  },
  {
    id: 719,
    nameKor: '디안시',
    nameEng: 'Diancie',
    generation: '6세대 (XY)',
    metaReason: '빛나는 보석 비석 페어리. 클리어바디 저항과 자속 고 파괴 다이아스톰 문포스로 무작비 공격을 일삼은 성전의 보석 요정이었습니다.',
    types: ['Rock', 'Fairy'],
    ability: {
      name: '황금몸', // Magic bounce / clear body surrogate
      description: '보석 광휘 오라막을 펼쳐 성가신 상태이상 및 아군 간접 상해 피해를 무조건 차단 차단합니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '다이아 공명 자장 속에서 턴마다 소지 양맥 피 1/16 분량 자생 연성 수급해 둡니다.'
    },
    nature: {
      name: '조심 (Modest)',
      buff: '특수공격',
      nerf: '공격',
      description: '다이아 무덤 보석 광포 광휘 방사 위력을 극비 보존 도모하려 배치합니다.'
    },
    baseStats: {
      hp: 50,
      atk: 100,
      def: 150,
      spa: 100,
      spd: 150,
      spe: 50
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
        description: '보석에서 요정 달 광채를 쏟아냅니다. 조우한 드래곤, 어둠 속성들의 가슴을 단장에 분쇄 참수 징벌합니다.'
      },
      {
        id: 'rock-slide', // Diamond storm surrogate
        name: '다이아스톰',
        type: 'Rock',
        category: 'Physical',
        power: 100,
        accuracy: 95,
        pp: 5,
        maxPp: 5,
        description: '보석 비석에서 무수한 다이아 파도 폭풍을 날립니다! 자속 바위 1.5배와 함께 자신의 방어를 격상할 찬스가 존재합니다.'
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
         description: '광 보석 자장을 지각에 동조해 맞 강철 어태커들 다리를 영영 가라앉힙니다.'
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
        description: '다이아 전맥 한가운데에서 평정을 자아 보석 능성과 공력을 1단계 늘려 놓습니다.'
      }
    ]
  }
];
