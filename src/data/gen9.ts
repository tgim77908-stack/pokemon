import { PokemonMeta } from '../types';

export const GEN9_POKEMON: PokemonMeta[] = [
  {
    id: 987,
    nameKor: '날개치는머리',
    nameEng: 'Flutter Mane',
    generation: '9세대 (SV)',
    metaReason: '팔데아 최고의 패러독스 고대마수이자 경쟁 랭크 역사상 빈도 최고의 넘사벽 어태커. 고대활성 스피드로 문포스 섀도볼 주포 투과 사격에서 전장을 완전히 유린했습니다.',
    types: ['Ghost', 'Fairy'],
    ability: {
      name: '부요한검', // Protosynthesis Spe boost proxy
      description: '부스트에너지 고대활성이 발화돼 공격 타격 가 속도를 항시 전설 보검급 1.5배 가산 전송시킵니다.'
    },
    item: {
      name: '생명의구슬', // Booster energy surrogate
      description: '고대 부스트에너지 공정으로 피해를 1.3배 추가 추진하되 타격 시 10% 전정 체강 감량을 받습니다.'
    },
    nature: {
      name: '겁쟁이 (Timid)',
      buff: '스피드',
      nerf: '공격',
      description: '초기동 비상 패러독스 극강 속 전력을 지표 속도에 기화 부스팅 장악 완료코자 성형 배치합니다.'
    },
    baseStats: {
      hp: 55,
      atk: 55,
      def: 55,
      spa: 135,
      spd: 135,
      spe: 135
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
        description: '달무리 정기 고대 구체포를 사출 전진합니다. 조우한 드래곤, 격투, 암흑 속성들을 영영 참수 징벌합니다.'
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
        description: '자속 고스트 에스퍼 마도 어둠 전도포를 조준 사출해, 명치를 으스러뜨려 요절 처치조치합니다.'
      },
      {
        id: 'mystical-fire', // Mystical fire surrogate
        name: '매지컬플레임',
        type: 'Fire',
        category: 'Special',
        power: 75,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '고대 마법 태양 꽃불을 달궈 사출해 상대 수특특특공력을 1랭크씩 강탈 참수 저화합니다.'
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
        description: '고고한 내공 호흡 평정을 자궁에 실어 특공 특보단 단값을 1단계 부스팅 고조합니다.'
      }
    ]
  },
  {
    id: 1000,
    nameKor: '타부자고',
    nameEng: 'Gholdengo',
    generation: '9세대 (SV)',
    metaReason: '금빛의 혁명적 사기 황금 몸마수. 전설의 특성 황금몸 덕에 적 변화 공격을 100% 완전 파투 면역하고 강력 자속 골드러시 쇠소리로 상대를 요화 참살시켰습니다.',
    types: ['Steel', 'Ghost'],
    ability: {
      name: '황금몸',
      description: '황금 바디 오성을 지녀 상대가 전하는 성가신 보조 장밀 디버프기를 전면 완전 불발 기화시킵니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '황금빛 턴 저물 시각에 자성 금 동전 한잎 갈아 피 1/16 비량 자생 수선 수급을 시행합니다.'
    },
    nature: {
      name: '조심 (Modest)',
      buff: '특수공격',
      nerf: '공격',
      description: '골드러시 특스 폭사포 전동력을 극한 증강 완성시킵니다.'
    },
    baseStats: {
      hp: 87,
      atk: 60,
      def: 95,
      spa: 133,
      spd: 91,
      spe: 84
    },
    moves: [
      {
        id: 'make-it-rain',
        name: '골드러시',
        type: 'Steel',
        category: 'Special',
        power: 120, // Make it Rain signature high power
        accuracy: 100,
        pp: 5,
        maxPp: 5,
        description: '대강에 고 금속 주화 동전 비폭탄우를 쏟아붓습니다! 정타 사격 뒤 자신의 특특공력이 1단계 참쇠 하강되는 패널티가 상반됩니다.'
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
        description: '황금 전령 구체포를 사출해 동족들과 에스퍼 요괴들의 기를 으깨놓아 요절합니다.'
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
        description: '황금 도가니 정화를 동조해 육맥 피수치 절반(50%)을 즉시 복원 완료 도모합니다.'
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
        description: '비열 구상 모색을 전동해 특공단 가치를 2배(+100%) 상승 고조해 세상을 녹아내리게 합니다.'
      }
    ]
  },
  {
    id: 1002,
    nameKor: '파오젠',
    nameEng: 'Chien-Pao',
    generation: '9세대 (SV)',
    metaReason: '재앙의 고속 설산 검사. 적들의 물리 물방 능성을 깎는 재앙의검 특성을 주동하고 음속 고드름떨구기와 기습 선제권으로 필드를 참수 요절냈습니다.',
    types: ['Dark', 'Ice'],
    ability: {
      name: '부요한검', // Ruinous Sword proxy: attack booster
      description: '재앙의검 가사로 상대방의 방어 체제를 으깨고 물리 참살 위력을 1.5배나 단숨에 늘려 가강시킵니다.'
    },
    item: {
      name: '생명의구슬', // Focus sash analogue
      description: '설산 돌격 참격 위력을 1.3배 상승 전동하나 10%의 체강 감량을 소급 지불받습니다.'
    },
    nature: {
      name: '명랑 (Jolly)',
      buff: '스피드',
      nerf: '특수공격',
      description: '설산 가속 속령을 지표 스피드 장벽에 몰아 부스팅 장악 완료코자 성찰합니다.'
    },
    baseStats: {
      hp: 80,
      atk: 120,
      def: 80,
      spa: 90,
      spd: 65,
      spe: 135
    },
    moves: [
      {
        id: 'behemoth-blade', // Ice Spinner surrogate/Icicle crash proxy
        name: '고드름떨구기',
        type: 'Ice',
        category: 'Physical',
        power: 85,
        accuracy: 90,
        pp: 10,
        maxPp: 10,
        description: '하늘에 매서운 고드름 가시 산더미를 낙하해 대상을 격정 들이박습니다. 30% 확률로 좌절 풀죽음을 안기는 명격입니다.'
      },
      {
        id: 'knock-off', // Throat chop surrogate
        name: '목틀어쥐기',
        type: 'Dark',
        category: 'Physical',
        power: 80,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '재앙 악당 참수 손가락 갈퀴로 대상을 가뿐히 후벼 명격을 입히는 메인 물리 악 격입니다.'
      },
      {
        id: 'extreme-speed', // Ice shard / Sucker punch prioritizing proxy
        name: '기습선제',
        type: 'Dark',
        category: 'Physical',
        power: 70, // proxy high power Sucker punch
        accuracy: 100,
        pp: 5,
        maxPp: 5,
         description: '재앙의 초 선제권(+1) 낙하로 상대 지향을 기화하기 전 기습 참참 때리는 유용한 기예입니다.'
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
        description: '재앙 칼끝 세움을 매섭게 가동해 아군 물리공격력을 극강 2단계 늘립니다.'
      }
    ]
  },
  {
    id: 1003,
    nameKor: '딩루',
    nameEng: 'Ting-Lu',
    generation: '9세대 (SV)',
    metaReason: '정전의 재앙 대 늪지 막이 그릇. 특격 재앙의그릇 특보 저지로 상대 광역 특수 에너지를 영영 침수화 차단하고 고 체로 장성 저지했습니다.',
    types: ['Dark', 'Ground'],
    ability: {
      name: '위협', // Vessel of ruin proxy: reduces spA/atk
      description: '재앙의그릇 고대 아우라를 개전해 맞 상대 공격 가강 능선을 1랭크 격하 기화 저지 조치합니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '늪지 속흙에서 매 턴 속 피 1/16 수준 자생 수선 완료 도모합니다.'
    },
    nature: {
      name: '신중 (Careful)',
      buff: '특수방어',
      nerf: '특수공격',
      description: '재앙 요새 그릇 수비 특방 수치 자체를 극한 고조 도말하기 위해 배치합니다.'
    },
    baseStats: {
      hp: 155,
      atk: 110,
      def: 125,
      spa: 55,
      spd: 80,
      spe: 45
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
        description: '재앙 대 지질 함몰 폭진을 일구어 위형 전기 바위를 영원히 대면 무상 매장 파투냅니다.'
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
        description: '손목 탁 참격을 가하여 소지 도구 장비를 요요 기화 소멸시킵니다.'
      },
      {
        id: 'recover', // Self heal proxy
        name: '흙정화수급',
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '흙그릇 속 신비 정수를 흡입HP 수치 50% 분량을 즉석 자맥 회복 완료 조처해 둡니다.'
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
        description: '그릇 철강 굳히기로 공격 물방 단계를 1레벨 드높여 저지 요공 형태가 선사됩니다.'
      }
    ]
  },
  {
    id: 1007,
    nameKor: '코라이돈',
    nameEng: 'Koraidon',
    generation: '9세대 (SV)',
    metaReason: '고대의 붉은 비룡 투신왕. 진홍빛고동 날씨 전동을 일으켜 화염 1.5배 자속 어택을 불태우며 전설의 일격 거수 인파이트로 승기를 장악했습니다.',
    types: ['Fighting', 'Dragon'],
    ability: {
      name: '부요한검', // Orichalcum Pulse proxy: damage booster
      description: '진홍빛고동 화운이 가동돼 물리 참수 타격 정격 피해력을 무조건 전설 보보검마냥 1.5배나 단칼 곱 산출해 줍니다.'
    },
    item: {
      name: '생명의구슬',
      description: '비룡의 신성 주포 위력을 1.3배 추가 강화 전동하나 10%의 자해 결손이 따릅니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '비룡 투신 물리 참살 공격 위력을 극한 조율 보존합니다.'
    },
    baseStats: {
      hp: 100,
      atk: 135,
      def: 115,
      spa: 85,
      spd: 100,
      spe: 135
    },
    moves: [
      {
        id: 'sacred-sword', // Collision course surrogate proxy with high power
        name: '액셀브레이크',
        type: 'Fighting',
        category: 'Physical',
        power: 120, // Collision course proxy
        accuracy: 100,
        pp: 5,
        maxPp: 5,
        description: '바퀴 강 회전 강 기습 돌사 공격 참수 격돌 정타를 정면에 선사합니다. 치고 난 뒤에 자성 물방 공방이 1단 하강하는 여진이 상존합니다.'
      },
      {
        id: 'outrage',
        name: '자속역린',
        type: 'Dragon',
        category: 'Physical',
        power: 120,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '자속 1.5배 비룡 역화를 모아 일신의 무쌍 광폭 난수를 쏟아냅니다.'
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
        description: '지하 대지 폭진 붕괴를 일구어 위형 전기 바위들을 무참히 매장 저격 조치합니다.'
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
        description: '붉은 영혼 칼끝 무사 시위를 당겨 공격 랭크 가치를 2단계 늘려 놓습니다.'
      }
    ]
  },
  {
    id: 1008,
    nameKor: '미라이돈',
    nameEng: 'Miraidon',
    generation: '9세대 (SV)',
    metaReason: '미래의 자빛 하드론 전격 비룡왕. 나오자마자 하드론 필드를 사출 전격 화력을 폭사하고 전설 라이트닝드라이브 사설로 전장을 참수 요절했습니다.',
    types: ['Electric', 'Dragon'],
    ability: {
      name: '부요한검', // Hadron engine proxy: electric surge + booster
      description: '하드론 필드 미래 자장이 발화돼 아군의 매서운 전격 기술 위력을 영구 1.5배 가열 곱 증폭시킵니다.'
    },
    item: {
      name: '생명의구슬',
      description: '자색 비룡 낙뢰 광선포 위력을 1.3배나 사정없이 폭사 추진합니다.'
    },
    nature: {
      name: '조심 (Modest)',
      buff: '특수공격',
      nerf: '공격',
      description: '라이트닝드라이브 폭사 단값을 전정 구축 도모 완료코자 배치합니다.'
    },
    baseStats: {
      hp: 100,
      atk: 85,
      def: 100,
      spa: 135,
      spd: 115,
      spe: 135
    },
    moves: [
      {
        id: 'thunderbolt', // Electro drift signature proxy using high damage electric
        name: '라이트닝드라이브',
        type: 'Electric',
        category: 'Special',
        power: 120, // Electro drift proxy high power
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '미래 자폭 전격 융합 빔포 광선포를 지평 관통 정타 폭격합니다. 자속 전기로 비행 바다들을 소멸합니다.'
      },
      {
        id: 'draco-meteor',
        name: '용성군',
        type: 'Dragon',
        category: 'Special',
        power: 130,
        accuracy: 90,
        pp: 5,
        maxPp: 5,
        description: '하늘에 우는 드래곤 수 자색 은하 성폭우들을 폭격냅니다. 타격 유도 뒤 특특특공력이 즉강 2단 격강 기화 하강당합니다.'
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
        description: '전격 타격을 가한 자빛 하드론 번개 전송으로 복기 후 아군 대면을 수립합니다.'
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
         description: '하드론 자장 한복판에서 기성 동조 명상을 거쳐 아군 특수단 단값을 1단계 부스팅 고조합니다.'
      }
    ]
  },
  {
    id: 984,
    nameKor: '위대한엄니',
    nameEng: 'Great Tusk',
    generation: '9세대 (SV)',
    metaReason: '고대의 웅장 코끼리 전사 패러독스. 자속 고 화력 지진 인파이트 어택 조합으로 드넓은 강철 산맥을 으깨놓아 유유히 필드를 지배했습니다.',
    types: ['Ground', 'Fighting'],
    ability: {
      name: '부요한검',
      description: '부스트에너지 고대활성이 가동돼 물리 기격 참살력을 항시 무구 1.5배나 단칼 곱 산출해 줍니다.'
    },
    item: {
      name: '생명의구슬',
      description: '코끼리 기격 난참 피해를 1.3배 추가 강화하나 주먹 발사 시 기맥 피 10% 뺏깁니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '웅장한 고대 들이박 물리 살상력을 드높이는 대표 세팅입니다.'
    },
    baseStats: {
      hp: 115,
      atk: 131,
      def: 131,
      spa: 53,
      spd: 53,
      spe: 87
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
        description: '지각 웅장 폭진 붕괴로 자속 1.5배 정타 돌격을 먹여 바위 강철들을 일거 매장합니다.'
      },
      {
        id: 'sacred-sword', // Headlong rush / close combat surrogate
        name: '헤드롱러시인파이트',
        type: 'Fighting',
        category: 'Physical',
        power: 120,
        accuracy: 100,
        pp: 5,
        maxPp: 5,
         description: '혼과 투지를 모아 무차별 수직 강습 분쇄 난격을 먹입니다. 치고 난 뒤에 자성 물방 공방이 1단 격하 전동됩니다.'
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
        description: '거대 투포 암석더미를 공중 낙하 시켜 비행날개 숲을 좌절 풀죽어 요절합니다.'
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
        description: '상피 웅장 고대 춤사위 갈퀴를 털어 공격 단계를 즉강 2단계 치솟게 만듭니다.'
      }
    ]
  },
  {
    id: 1005,
    nameKor: '고동치는달',
    nameEng: 'Roaring Moon',
    generation: '9세대 (SV)',
    metaReason: '고대의 웅장 메가 비룡 비석. 칼춤 뒤에 가하는 가혹한 자속 탁쳐서떨어뜨리기 지진 기습 어태킹 조합으로 영광의 무쌍 참살을 가했습니다.',
    types: ['Dragon', 'Dark'],
    ability: {
      name: '부요한검',
      description: '부스트에너지 고대활성 영맥 수뇌 융합력으로 물리 칼날 참살력을 무조건 1.5배 곱 산출해 줍니다.'
    },
    item: {
      name: '생명의구슬',
      description: '용격 공격 파도를 1.3배 상승 확보하며 타격 시 10%의 자성 감량을 감당받습니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '용격 발톱 물리 참수력을 격상 고용하려 조율합니다.'
    },
    baseStats: {
      hp: 105,
      atk: 139,
      def: 71,
      spa: 55,
      spd: 101,
      spe: 119
    },
    moves: [
      {
        id: 'outrage',
        name: '자속역린역화',
        type: 'Dragon',
        category: 'Physical',
        power: 120,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '자속 1.5배 드랙 격강 역화를 가해 물리 무참 난격 징벌을 선공합니다.'
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
        description: '고대 비룡 칼손톱으로 기습 탁 쳐서 소지 도구 장비를 으깨 무력화 시켜 버립니다.'
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
        description: '지각 들이치기로 동족 악 강철들의 다리를 사정없이 붕괴 매장합니다.'
      },
      {
        id: 'swords-dance',
        name: '칼춤', // Dragon dance variant mapped for raw attack boost
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '검푸른 영혼 칼끝 춤사위를 드높여 물리 공력을 2단계 등치 늘려 놓습니다.'
      }
    ]
  },
  {
    id: 1006,
    nameKor: '무쇠무인',
    nameEng: 'Iron Valiant',
    generation: '9세대 (SV)',
    metaReason: '미래의 이강 칼 무사 패러독스. 자속 요정 문포스와 대 격투 인파이트 물리 특수 이중 대 융단 사포로 적들을 요화 전멸시켰습니다.',
    types: ['Fairy', 'Fighting'],
    ability: {
      name: '부요한검',
      description: '쿼크차지 전자기 동조 덕에 가당한 요격 참살력을 영구히 1.5배 촉진 늘려 가강합니다.'
    },
    item: {
      name: '생명의구슬',
      description: '이강 칼끝 정타 대미지를 1.3배 추진하되 10%의 체손 지 디버프를 받습니다.'
    },
    nature: {
      name: '겁쟁이 (Timid)',
      buff: '스피드',
      nerf: '공격',
      description: '미래 강가 요성 칼 속도 단값을 지표 스피드 성형 완료코자 배치합니다.'
    },
    baseStats: {
      hp: 74,
      atk: 130,
      def: 90,
      spa: 120,
      spd: 60,
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
        description: '요성 메카 에너지를 전정 달빛 구체포로 던져 자속 징벌 가가 정타합니다.'
      },
      {
        id: 'sacred-sword', // Close combat surrogate proxy
        name: '격인인파이트',
        type: 'Fighting',
        category: 'Physical',
        power: 120,
        accuracy: 100,
        pp: 5,
        maxPp: 5,
        description: '칼날 기예 권의 극을 사출 정격 투과합니다. 치고 난 뒤에 자성 공방 장단막이 1단계 절반 내려가는 원상이 따릅니다.'
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
        description: '메카 내재 영령 전격 구포를 쏘아 기이 에스퍼들의 명치를 으깨놓아 요절합니다.'
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
        description: '미래 마물 명상 회담을 조율 자가 특폭 특내 단값을 1단계 부스팅 고조합니다.'
      }
    ]
  },
  {
    id: 1017,
    nameKor: '오거폰 (화덕의 가면)',
    nameEng: 'Ogerpon',
    generation: '9세대 (SV - DLC)',
    metaReason: '팔데아의 구세 야수 도깨비. 화덕의가면과 특격 굳건한담포 공격 증가 자속 덩굴방망이 극강 소각 주포로 전장을 징멸했습니다.',
    types: ['Grass', 'Fire'],
    ability: {
      name: '부요한검', // Embody aspect proxy: attack boost
      description: '덩굴 가면에 동조하는 우화 영가 기동돼 물리 참수 가강 파생 위력을 영구 1.5배나 단칼 곱 산출해 줍니다.'
    },
    item: {
      name: '생명의구슬', // Hearthflame mask proxy
      description: '화덕가면 징벌력을 1.3배 상승 전동하나 10%의 체손 지 디버프를 당합니다.'
    },
    nature: {
      name: '고집 (Adamant)',
      buff: '공격',
      nerf: '특수공격',
      description: '방망이 타격 물리 피해 수치 성능을 극한 전정 고조합니다.'
    },
    baseStats: {
      hp: 80,
      atk: 120,
      def: 84,
      spa: 60,
      spd: 96,
      spe: 110
    },
    moves: [
      {
        id: 'flare-blitz', // Ivy cudgel (Fire type signature Ivy cudgel mapped via high damage fire flare blitz)
        name: '덩굴방망이폭방',
        type: 'Fire',
        category: 'Physical',
        power: 120, // Ivy cudgel signature surrogate high power
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '가면 덩굴 속 마맥 방망이를 드높이 격 격동 돌진 격타합니다! 자속 1.5배와 급소 정타 크리티컬 지수가 고수치 존재합니다.'
      },
      {
        id: 'leaf-blade', // Horn leech analog / proxy
        name: '혼리치리프블레이드',
        type: 'Grass',
        category: 'Physical',
        power: 90,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '덩굴 결정을 잎새 칼 검기로 투과하고 타격한 피해의 50% 수준을 즉석 자성 생명으로 수글 완료합니다.'
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
        description: '지각 들이쳐 기이 흔들어 전기 바위 동족들을 흔적 없이 대면 무상 분해합니다.'
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
        description: '도깨비의 광폭 비명 칼끝 가사 춤을 일구 아군 물리 공격 단값을 즉강 2단계 치솟게 만듭니다.'
      }
    ]
  }
];
