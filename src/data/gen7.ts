import { PokemonMeta } from '../types';

export const GEN7_POKEMON: PokemonMeta[] = [
  {
    id: 725,
    nameKor: '어흥염',
    nameEng: 'Incineroar',
    generation: '7세대 (SM)',
    metaReason: '실전 배틀 역사상 최강 고지표 서포터이자 VGC의 황제. 위협 특성과 탁치기 및 파격적인 이득 막말내뱉기로 상대 올라운더들의 혼을 빼놓는 대장입니다.',
    types: ['Fire', 'Dark'],
    ability: {
      name: '위협',
      description: '출전과 함께 사나운 악당 표효 아우라를 소환해 필드 상대 물리살상 공격력을 1랭크 격하 차단합니다.'
    },
    item: {
      name: '무화열매',
      description: '상처 기력이 소실 임박할 لحظ에 열매를 급작 섭취 처방해 33% 피를 단숨 동원 활성시킵니다.'
    },
    nature: {
      name: '신중 (Careful)',
      buff: '특수방어',
      nerf: '특수공격',
      description: '안정 장막 특공 특막 내구를 끝장 성형해 시합을 유도 수립하기 위함입니다.'
    },
    baseStats: {
      hp: 95,
      atk: 115,
      def: 90,
      spa: 80,
      spd: 90,
      spe: 60
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
        description: '업화를 온몸에 가두며 슬라임 돌격을 시도하는 자속 물리 고위력 어태킹입니다. 33% 반사 화력 반동 통증을 안습니다.'
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
        description: '사나운 악당 손톱으로 후려쳐 상대 소지 장비 도구를 영원히 땅바닥에 해제 퇴출 소멸 사지 조처합니다.'
      },
      {
        id: 'parting-shot',
        name: '막말내뱉기',
        type: 'Dark',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '험한 말을 남겨 조우한 적 물공 특공 게이지를 나란히 1단씩 감쇠 처리하고 후방 아군 복기 조작을 시행합니다.'
      },
      {
        id: 'fake-out',
        name: '속이기',
        type: 'Normal',
        category: 'Physical',
        power: 40,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '대면 1턴 절대 우선(+3) 선제권 시추 주먹 타격을 먹여 맞선 대상을 100% 무참 풀죽음 침수 처분합니다.'
      }
    ]
  },
  {
    id: 785,
    nameKor: '카푸꼬꼬꼭',
    nameEng: 'Tapu Koko',
    generation: '7세대 (SM)',
    metaReason: '성스러운 일렉트릭 필드의 폭풍우 인도 수호신. 나오자마자 전기파동을 고속 증폭하고 생구 볼트체인징과 필드 버프포로 필드를 지배했습니다.',
    types: ['Electric', 'Fairy'],
    ability: {
      name: '부요한검', // Electric field proxy: electric booster
      description: '일렉트릭 메이커 자장 보호막을 완연 가동해 아군의 모든 전격 타입 파괴력을 1.5배나 가열 곱 증폭합니다.'
    },
    item: {
      name: '생명의구슬',
      description: '전기 폭사 파도를 1.3배 추가 극강 보전하되 10% 기맥 체강 감량을 상반 받습니다.'
    },
    nature: {
      name: '겁쟁이 (Timid)',
      buff: '스피드',
      nerf: '공격',
      description: '수호신 속성의 전광석화 스피드를 완벽 돌파 추진 선공권을 가용하려 합니다.'
    },
    baseStats: {
      hp: 70,
      atk: 115,
      def: 85,
      spa: 95,
      spd: 75,
      spe: 130
    },
    moves: [
      {
        id: 'thunderbolt',
        name: '필드10만볼트',
        type: 'Electric',
        category: 'Special',
        power: 90,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '신성 전기 자장과 결합한 광폭 번개포 광선을 사출 지면 관통합니다. 물 비행 훈련사들을 시원히 박멸합니다.'
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
        description: '신전에서 취한 요정 달무리 성광포를 던져 가당한 자속 페어리 1.5배 참살 징벌을 선공 장악 가합니다.'
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
        description: '전격 타격을 가하는 한편 아둔 번개 전송 구체로 즉각 복귀해 아군 대면 교체를 수립 조치합니다.'
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
         description: '차분 호전 평정을 자궁에 실어 특공과 특내 단값을 나란히 1단계 부스팅 고정 조치합니다.'
      }
    ]
  },
  {
    id: 778,
    nameKor: '따라큐',
    nameEng: 'Mimikyu',
    generation: '7세대 (SM)',
    metaReason: '공포의 탈 생명줄 유령. 무조건 일격 무마하는 가혹 탈 특성 생존력 덕에 확정 보장 1칼춤 뒤 어깨를 걸고 야습과 문포스로 상대를 참수 요절냈습니다.',
    types: ['Ghost', 'Fairy'],
    ability: {
      name: '황금몸', // Disguise proxy
      description: '가면 껍질 탈을 써서 위협적인 기합의 칼날 일격을 완벽히 무산 면역 차단하는 생명줄 특성입니다.'
    },
    item: {
      name: '생명의구슬',
      description: '유령 가시 손톱 검기 파괴력을 1.3배 추가 강화하되 타격 시 10% 자해 생명 소모 반작용이 따릅니다.'
    },
    nature: {
      name: '명랑 (Jolly)',
      buff: '스피드',
      nerf: '특수공격',
      description: '탈 생명 탈피 가속 스피드를 완벽 지표 경쟁 성형하여 우선 선공 참수권을 확보합니다.'
    },
    baseStats: {
      hp: 55,
      atk: 90,
      def: 80,
      spa: 50,
      spd: 105,
      spe: 96
    },
    moves: [
      {
        id: 'shadow-ball', // Play rough clone or shadow claw proxy
        name: '치근거리기',
        type: 'Fairy',
        category: 'Physical',
        power: 90,
        accuracy: 90,
        pp: 10,
        maxPp: 10,
        description: '리얼 악당 요정 힘으로 정타 유인 돌격 난타합니다. 자속 문포스 형 물리 자정 어택으로 상대를 귀찮게 합니다.'
      },
      {
        id: 'extreme-speed', // Shadow sneak proxy prioritized
        name: '야습',
        type: 'Ghost',
        category: 'Physical',
        power: 50, // Prioritized Shadow sneak surrogate
        accuracy: 100,
        pp: 30,
        maxPp: 30,
        description: '그림자를 사방 낙하 음음 선제권(+1)으로 상대 기도가 기화하기 전 일절 격파하는 유용한 기습 참정 기예입니다.'
      },
      {
        id: 'slash', // Shadow claw surrogate
        name: '섀도클로',
        type: 'Ghost',
        category: 'Physical',
        power: 70,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '자속 그림자 손가락 갈퀴로 적의 명치를 사정없이 후벼 관통 파괴하는 전형적인 자속 물리 웨폰입니다.'
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
        description: '가면 뒤의 영검 칼사위를 무섭도록 가동해 물리공격력을 극강 고조 2단계 증강합니다.'
      }
    ]
  },
  {
    id: 747,
    nameKor: '시마사사기',
    nameEng: 'Toxapex',
    generation: '7세대 (SM)',
    metaReason: '전무후무 맹독 자생의 끝 요새. 특성 재생력과 자성 가혹 열탕 온수 사포, 자기재생 신진대사를 타고 전 물리 라인을 질식 고사시켰던 악마입니다.',
    types: ['Water', 'Poison'],
    ability: {
      name: '두꺼운지방', // Regenerative defense proxy
      description: '독 가시 외갑 결정을 단단히 성형해 얼음 불꽃 기류 어택을 영구 강력 50%나 감쇄 확보 완료합니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '독포 장막 속에서 턴 저물 때마다 체생 피 1/16 비례의 안정 지각 치유를 기용합니다.'
    },
    nature: {
      name: '장난꾸러기 (Impish)',
      buff: '방어',
      nerf: '특수공격',
      description: '독가시 기갑 물리 물방 보호 수치를 우뚝 성형하여 무너뜨릴 수 없는 산성 보루를 짓습니다.'
    },
    baseStats: {
      hp: 50,
      atk: 63,
      def: 152,
      spa: 53,
      spd: 142,
      spe: 35
    },
    moves: [
      {
        id: 'hydro-pump', // Scald surrogate
        name: '산성열탕',
        type: 'Water',
        category: 'Special',
        power: 80,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '물빛 끓인 해파리 고온 맹독 수를 분총 주사합니다. 상대 물리 딜을 영원히 고장 낼 화상을 매섭게 가미합니다.'
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
        description: '자속 보정을 받은 화학 오물 탄팩을 폭격 분사해 요정 도깨비들을 사지로 매가 요절 참수 시키는 병기입니다.'
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
        description: '가시 세포 분열 신진 조각을 정렬해 잃었던 최대 생명수 50%를 단숨에 원 복액 충전시킵니다.'
      },
      {
        id: 'curse', // Iron defense variant
         name: '철벽저주',
         type: 'Ghost',
         category: 'Status',
         power: 0,
         accuracy: 100,
         pp: 10,
         maxPp: 10,
         description: '강인한 기갑을 경화시켜 자신의 공격 물방 수준을 1등급 증강하여 돌격 거구 탱크 요새 형세가 됩니다.'
      }
    ]
  },
  {
    id: 798,
    nameKor: '종이신도',
    nameEng: 'Kartana',
    generation: '7세대 (SM)',
    metaReason: '울트라비스트 종이의 명도 칼날. 181급 이계 파괴 물리공력과 자속 격베기 리프블레이드로 상대를 통째 절삭하고 비스트부스트로 공격을 촉진했습니다.',
    types: ['Grass', 'Steel'],
    ability: {
      name: '부요한검', // Beast boost proxy: attack skyrocket
      description: '상대를 쓰러트릴 시 비스트 부스트 정맥이 촉진 공격 어택 계수를 1.5배 격강 전송시켜 평정합니다.'
    },
    item: {
      name: '생명의구슬',
      description: '종이날 칼 참살력을 1.3배 상승 전동하나 매 참수 정탄 사격 시 10% 생지 디버프를 안습니다.'
    },
    nature: {
      name: '명랑 (Jolly)',
      buff: '스피드',
      nerf: '특수공격',
      description: '이계의 종이 날렵 속도를 취합하려 지표 속도 성형을 이룩합니다.'
    },
    baseStats: {
      hp: 59,
      atk: 181,
      def: 131,
      spa: 59,
      spd: 31,
      spe: 109
    },
    moves: [
      {
        id: 'leaf-blade',
        name: '리프블레이드',
        type: 'Grass',
        category: 'Physical',
        power: 90,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '강철 섬유 잎새 가시를 검기화 하여 대상의 심장에 수직 참수를 가합니다. 크리티컬 급소 확률 장착이 드높습니다.'
      },
      {
        id: 'sacred-sword',
        name: '성스러운칼',
        type: 'Fighting',
        category: 'Physical',
        power: 90,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '검기 정수를 일구어 상대의 귀찮은 지맥 수비 특성들을 무시 정밀 일격을 사출하는 격투 서브웨폰입니다.'
      },
      {
        id: 'behemoth-blade', // Smart horn / steel proxy
        name: '스마트호른',
        type: 'Steel',
        category: 'Physical',
        power: 70,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '예리한 강철 외각 모서리로 돌파 뚫는 무오차 기어 물리 자속 일검입니다.'
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
        description: '이계 종이 참수 칼집 예각을 매섭게 세워 공력을 단매에 2단계 돌파 추진 각색시킵니다.'
      }
    ]
  },
  {
    id: 797,
    nameKor: '철화구야',
    nameEng: 'Celesteela',
    generation: '7세대 (SM)',
    metaReason: '전설의 거대 우주 강철 죽창 대포 요새. 헤비봄버와 지진 참격 및 자기재생 생존력을 타고 전장을 영구 질식 도태시켰던 수비 영주였습니다.',
    types: ['Steel', 'Flying'],
    ability: {
      name: '위협', // Beast boost defensive proxy
      description: '거대 우주 요새에서 품어져 비정해 나오는 고 중량 위압으로 적 물리 어태킹 단계를 1등급 절삭 저하 조치합니다.'
    },
    item: {
      name: '먹다남은음식',
      description: '우주 대 수호 장치에서 턴마다 미맥 원액 피 1/16 단계를 상시 공급 수급해 놓습니다.'
    },
    nature: {
      name: '차분 (Calm)',
      buff: '특수방어',
      nerf: '공격',
      description: '죽창 요새 강철 특방 저항치를 극한 성형 조장하기 위한 성찰입니다.'
    },
    baseStats: {
      hp: 97,
      atk: 101,
      def: 103,
      spa: 107,
      spd: 101,
      spe: 61
    },
    moves: [
      {
        id: 'flash-cannon', // Heavy slam proxy
        name: '러스터헤비봄버',
        type: 'Steel',
        category: 'Special',
        power: 80,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '거대 수 중량 광폭 쇳덩어리 주포 광선포를 발사 갈깁니다. 자속 1.5배와 함께 요정들을 다듬요절 참수합니다.'
      },
      {
        id: 'earthpower', // earthquake surrogate
        name: '대지의힘',
        type: 'Ground',
        category: 'Special',
        power: 90,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '우주 수신 열 기포를 대지에 방사 폭진시켜 바위 불쇠들을 흔적 없이 가라앉힙니다.'
      },
      {
        id: 'recover', // Leech seed recover surrogate
        name: '씨뿌리기재생',
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 10,
        maxPp: 10,
        description: '강비 요새 뿌리를 지면에 유착 기공하여 즉각 무사 상흔 50% 분량을 급 조달 부활 완료합니다.'
      },
      {
        id: 'calm-mind',
        name: '철벽명상', // Calm mind proxy
        type: 'Psychic',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '우주 장막 공명에 의해 자가 특특공방 단계를 점진 1랭크씩 늘려 저지 장단막 요새를 굳힙니다.'
      }
    ]
  },
  {
    id: 801,
    nameKor: '마기아나',
    nameEng: 'Magearna',
    generation: '7세대 (SM)',
    metaReason: '성전의 태고 루시 소울하트 도깨비 인형. 동료가 사망할 시 소울하트가 공명해 전설의 대 징멸 플뢰르포를 발포해 승기를 무작비 장악했습니다.',
    types: ['Steel', 'Fairy'],
    ability: {
      name: '부요한검', // Soul heart proxy
      description: '태고 기어 소울 에너지 공조로 특수 요정 에너지를 강철 톱처럼 1.5배 추진 가속합니다.'
    },
    item: {
      name: '구애안경',
      description: '단기술 제약 제단 아래 마맥 요정포 한 방의 위력을 1.5배 사정없이 증폭 확보합니다.'
    },
    nature: {
      name: '조심 (Modest)',
      buff: '특수공격',
      nerf: '공격',
      description: '기어 요성의 하이 에너지포 방사율을 매서운 극비 돌파 완료시킵니다.'
    },
    baseStats: {
      hp: 80,
      atk: 95,
      def: 115,
      spa: 130,
      spd: 115,
      spe: 65
    },
    moves: [
      {
        id: 'draco-meteor', // Fleur cannon signature proxy inside dragon slot
        name: '플뢰르캐논',
        type: 'Fairy',
        category: 'Special',
        power: 130, // High Fleur cannon surrogate
        accuracy: 90,
        pp: 5,
        maxPp: 5,
        description: '꽃 모양 기어 성광포를 정격 돌사 폭포수처럼 사출 쏟아부어 사지로 참참냅니다! 타격 뒤 특특스공력이 격하게 2차 참쇠 하강 고조 패널티가 닥칩니다.'
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
        description: '철갑 기맥 주포 광선포를 날려 요정 도깨비 요절 징벌을 선공 장악 가합니다.'
      },
      {
         id: 'moonblast',
         name: '러블리체인샤인',
         type: 'Fairy',
         category: 'Special',
         power: 95,
         accuracy: 100,
         pp: 15,
         maxPp: 15,
         description: '광 폭풍 요성의 정격 탄막 요정 구체포를 사출해 드래곤 악포를 완전히 도태시킵니다.'
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
        description: '기어 회전 주맥 조율 명상을 거쳐 자가 특특공방을 1단계 기복 올립니다.'
      }
    ]
  },
  {
    id: 807,
    nameKor: '제라오라',
    nameEng: 'Zeraora',
    generation: '7세대 (SM - USUM)',
    metaReason: '전설의 기동 축전 수뇌 고속 야생 번개수. 플라즈마피스트 급습 타격과 신속 대 돌파로 상대 수 장단막을 유유히 흔들었던 기사입니다.',
    types: ['Electric', 'None'],
    ability: {
      name: '부요한검', // Volt absorb damage boost proxy
      description: '야생 수 뇌격 전격 융합술을 전지 가동해 물리 격도 타격 피해를 대폭 1.5배 추가 추진 연쇄 유도합니다.'
    },
    item: {
      name: '생명의구슬',
      description: '번개 사격 물리 칼날 참살력을 1.3배 추가 추진 보전하되 10%의 체손 지 디버프를 당합니다.'
    },
    nature: {
      name: '명랑 (Jolly)',
      buff: '스피드',
      nerf: '특수공격',
      description: '번개의 음속 속령을 지표 속도에 기화 극명 부스팅 조율 완료코자 성찰합니다.'
    },
    baseStats: {
      hp: 88,
      atk: 112,
      def: 75,
      spa: 102,
      spd: 80,
      spe: 143
    },
    moves: [
      {
         id: 'behemoth-blade', // Plasma fists proxy
         name: '플라즈마피스트',
         type: 'Electric',
         category: 'Physical',
         power: 100, // Highly buffed electric
         accuracy: 100,
         pp: 15,
         maxPp: 15,
         description: '성난 번개 주먹 격돌 돌진 타격을 전장에 수직 낙하 박아칩니다! 자속 전기 1.5배가 가합한 참참 타격입니다.'
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
        description: '음속 비번 선공권 보정(+2)을 동원해 기습 명격을 날려 대상을 정지 침수 처분합니다.'
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
        description: '지하 대지 폭진 붕괴를 일구어 맞선 불꽃 쇠들을 무참 매장 청소 완료합니다.'
      },
      {
        id: 'swords-dance',
        name: '벌크업', // bulk up surrogate via swords dance
        type: 'Normal',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '온 세포 털을 전기력다짐 기강을 굳힘으로써 아군 물리 공격 단갑력을 2단계 늘려 놓습니다.'
      }
    ]
  },
  {
    id: 803,
    nameKor: '아고용',
    nameEng: 'Naganadel',
    generation: '7세대 (SM - USUM)',
    metaReason: '맹독 비룡 벌레 침기. 특수 용성군 침격 정타 타설을 가하며 비스트부스트 가속 스피드를 끌어올려 무쌍 참살극을 펼친 울트라비스트였습니다.',
    types: ['Poison', 'Dragon'],
    ability: {
      name: '부요한검', // Beast boost special proxy: speed boost
      description: '상대를 침 사멸할 순간 비스트 기맥 촉진으로 스피드를 한계 돌파 1.5배 즉격 가동 수렵해 냅니다.'
    },
    item: {
      name: '생명의구슬',
      description: '맹독 방사 특수 파도 대미지를 1.3배 상승 조달하되 10% 생지 반동 소모가 후발 처리당합니다.'
    },
    nature: {
      name: '겁쟁이 (Timid)',
      buff: '스피드',
      nerf: '공격',
      description: '독침 날개 가속력을 완연히 손안 장악해 두고 선 용성군 타격을 가하고자 조율합니다.'
    },
    baseStats: {
      hp: 73,
      atk: 73,
      def: 73,
      spa: 127,
      spd: 73,
      spe: 121
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
        description: '이계 드래곤 영 별 조각 파투 세례를 폭사 투포합니다! 마친 뒤 특특공방 단갑력이 격강 2차 참쇠 하락되는 원상이 상존합니다.'
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
        description: '자속 보정 화색 독 수액 구체포를 사출해 참참 참살 장식을 행해 페어리 숲들을 전멸 처분 완료합니다.'
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
         description: '꼬리 비늘 가마에서 나오는 고열 화염 사선을 날려 맞 강철 장막들을 요화 절삭해 버립니다.'
      },
      {
        id: 'calm-mind',
        name: '명상', // Nasty plot proxy
        type: 'Psychic',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 20,
        maxPp: 20,
        description: '뇌 용성 기기 정렬을 통해 즉강 특폭 특내 수준을 1단계 기복 부스팅합니다.'
      }
    ]
  },
  {
    id: 802,
    nameKor: '마샤도',
    nameEng: 'Marshadow',
    generation: '7세대 (SM)',
    metaReason: '전설의 영혼 탈취 유령 마무사. 섀도스틸 자속 물리 공격으로 상대방의 칼춤 랭크 상승량을 빼앗고 고속 인파이트로 폭사시켰던 패왕이었습니다.',
    types: ['Fighting', 'Ghost'],
    ability: {
      name: '부요한검', // Technician proxy
      description: '테크니션 무예 성상으로 가해지는 물리 주먹 기예 파괴력을 전설의 보창처럼 1.5배나 단숨에 늘려 가강시킵니다.'
    },
    item: {
      name: '생명의구슬',
      description: '마무사 화공 참격력을 1.3배 추가 상승 확보하지만 타격 시 10%의 자성 생명 해손을 대가 감당합니다.'
    },
    nature: {
      name: '명랑 (Jolly)',
      buff: '스피드',
      nerf: '특수공격',
      description: '유령 복도 그림자 기동 가속력을 지표 스피드 장벽에 몰아 부스팅 장악 완료코자 배치합니다.'
    },
    baseStats: {
      hp: 90,
      atk: 125,
      def: 80,
      spa: 90,
      spd: 90,
      spe: 125
    },
    moves: [
      {
        id: 'sacred-sword', // Shadow steal high damage clone proxy via fighting
        name: '섀도스틸인파이트',
        type: 'Fighting',
        category: 'Physical',
        power: 120,
        accuracy: 100,
        pp: 5,
        maxPp: 5,
        description: '상대의 상승 기맥을 전율로 탈취 후 무차별 참 참 참수 화살 칼춤 난격을 가해 승기를 영원히 굳힙니다.'
      },
      {
        id: 'extreme-speed', // Shadow sneak prioritized surrogate
        name: '야습',
        type: 'Ghost',
        category: 'Physical',
        power: 50,
        accuracy: 100,
        pp: 30,
        maxPp: 30,
        description: '그림자 속을 음속 우선(+1) 선제 명격으로 관진 사출 돌격해 대상 심장을 참수 수렵합니다.'
      },
      {
        id: 'slash', // Shadow punch proxy
        name: '섀도버스트구체',
        type: 'Ghost',
        category: 'Physical',
        power: 80,
        accuracy: 100,
        pp: 15,
        maxPp: 15,
        description: '마무 정수 그림자 폭사 자속 1.5배 권을 상대 가슴 심장에 메다 철저히 참참 으스러뜨려 둡니다.'
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
        description: '그림자 검사 외뿔 예각을 다듬요 갈고 아군 물리 공격 단갑 수치를 격강 2단계 늘려버립니다.'
      }
    ]
  }
];
