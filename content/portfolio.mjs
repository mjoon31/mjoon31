export const site = {
  "name": "김명준",
  "englishName": "Myoungjoon Kim",
  "role": "Game Client Developer",
  "birthDate": "1996.09.16",
  "portrait": "assets/images/profile.png",
  "portraitPlaceholder": false,
  "portraitAlt": "김명준 프로필 사진",
  "email": "xxmj96@gmail.com",
  "github": "https://github.com/mjoon31",
  "url": "https://mjoon31.github.io/mjoon31/",
  "verifiedOn": "2026-11-06",
  "introduction": "Unity와 C#을 기반으로 게임 개발 역량을 쌓아가고 있는 신입 개발자입니다.",
  "introductionDetails": [
    "개인 모바일 게임 제작 경험을 바탕으로 현재는 온라인 협동 게임을 개발하고 있습니다.",
    "문제를 분석하고 직접 해결하며 더 나은 코드와 게임플레이를 고민하는 개발을 지향합니다."
  ],
  "approach": "문제를 분석하고, 직접 구현하고, 검증하며 개선합니다. AI를 학습과 개발의 협업 도구로 활용하며 코드의 동작과 개선 이유를 이해하는 데 집중합니다.",
  "source": "https://github.com/mjoon31/mjoon31/blob/main/README.md"
};

export const projects = [
  {
    "id": "01",
    "cardTags": ["Solo", "ScriptableObject", "Object Pooling"],
    "resources": [{"src": "assets/resources/slime-raising/introduction.pdf", "label": "소개문서 PDF", "filename": "슬라임키우기_소개문서.pdf"}, {"src": "assets/resources/slime-raising/introduction.pptx", "label": "소개문서 PPTX", "previewSrc": "assets/resources/slime-raising/introduction.pdf", "filename": "슬라임키우기_소개문서.pptx"}, {"src": "assets/resources/slime-raising/game-design.pdf", "label": "기획서 PDF", "filename": "슬라임키우기_기획서.pdf"}, {"src": "assets/resources/slime-raising/technical-development.pdf", "label": "기술개발문서 PDF", "filename": "슬라임키우기_기술개발문서.pdf"}, {"src": "assets/resources/slime-raising/data-tables.pdf", "label": "데이터테이블 PDF", "filename": "슬라임키우기_데이터테이블.pdf"}, {"src": "assets/resources/slime-raising/gameplay.mp4", "label": "플레이 영상 MP4", "filename": "슬라임키우기_플레이영상.mp4"}],
    "fullVideo": {"src":"assets/resources/slime-raising/gameplay.mp4","poster":"assets/resources/slime-raising/gameplay-poster.jpg"},
    "slug": "slime-raising",
    "title": "슬라임키우기",
    "subtitle": "Slime Raising",
    "genre": "2D 액션 로그라이크 RPG",
    "platform": "Android",
    "engine": "Unity 2022.3.60f1",
    "language": "C#",
    "developmentPeriod": "2026.03.18 — 2026.09.30",
    "teamSize": "1명 · 개인 프로젝트",
    "role": "기획 · 게임플레이 시스템 · 클라이언트 개발",
    "status": "개발 이력",
    "statusKind": "history",
    "statusNote": "핵심 시스템 구현 이력을 소개합니다. 스토어 출시 여부와 배포 빌드는 아직 확인되지 않았습니다.",
    "thumbnail": "assets/media/slime-raising/app-icon.png",
    "thumbnailAlt": "슬라임키우기 앱 아이콘",
    "placeholder": false,
    "screenshots": [
      {
        "src": "assets/media/slime-raising/screenshot-1.jpg",
        "alt": "슬라임을 원하는 스타일로 키우세요!",
        "caption": "슬라임 육성",
        "width": 720,
        "height": 1560
      },
      {
        "src": "assets/media/slime-raising/screenshot-2.jpg",
        "alt": "몰려오는 적들을 사냥하세요!",
        "caption": "몰려오는 적",
        "width": 720,
        "height": 1560
      },
      {
        "src": "assets/media/slime-raising/screenshot-4.jpg",
        "alt": "시간 내에 미션을 달성하세요!",
        "caption": "미션 도전",
        "width": 720,
        "height": 1560
      },
      {
        "src": "assets/media/slime-raising/screenshot-5.jpg",
        "alt": "보스에 도전하세요!",
        "caption": "보스 도전",
        "width": 720,
        "height": 1560
      },
      {
        "src": "assets/media/slime-raising/screenshot-6.png",
        "alt": "다음 전투를 위해 능력을 강화하세요!",
        "caption": "영구 강화",
        "width": 720,
        "height": 1560
      }
    ],
    "cardDescription": "전투와 스킬 조합, 영구 성장을 연결한 Android 액션 로그라이크.",
    "description": "몬스터를 처치하고, 스킬을 조합하고, 더 강한 슬라임으로 성장합니다. 매번의 전투와 영구 성장을 연결한 모바일 로그라이크 RPG입니다.",
    "overview": "지속적으로 등장하는 몬스터를 처치해 경험치를 얻고, 무작위로 제공되는 액티브 스킬과 패시브 능력을 조합합니다. 웨이브·라운드별 전투와 이벤트, 보스전을 거쳐 얻은 보상은 다음 플레이를 위한 영구 성장으로 이어집니다.",
    "features": [
      "몬스터 처치와 경험치 획득",
      "레벨업에 따른 스킬·패시브 선택",
      "웨이브·라운드·이벤트·보스 전투",
      "보상과 영구 능력 강화"
    ],
    "technologies": [
      "Unity",
      "C#",
      "Visual Studio"
    ],
    "tags": [
      "Android",
      "개인 개발",
      "ScriptableObject",
      "Object Pooling"
    ],
    "githubUrl": "https://github.com/mjoon31/slime-raising",
    "gameplayVideoUrl": null,
    "downloadUrl": null,
    "contributionsTitle": "기획부터 핵심 플레이 흐름까지",
    "contributionsNote": "기획부터 게임플레이 시스템까지 단독으로 개발했습니다.",
    "contributions": [
      {
        "title": "캐릭터·전투",
        "text": "플레이어 조작, 공격·피격 처리, 몬스터 AI를 구현했습니다.",
        "stage": "구현 이력"
      },
      {
        "title": "스킬·성장",
        "text": "액티브 스킬, 패시브 능력, 영구 능력 강화를 구현했습니다.",
        "stage": "구현 이력"
      },
      {
        "title": "게임 진행",
        "text": "웨이브, 라운드, 이벤트, 보스 전투를 하나의 진행 흐름으로 연결했습니다.",
        "stage": "구현 이력"
      },
      {
        "title": "사용자 경험·데이터",
        "text": "UI 애니메이션, 사운드 설정, 한국어·영어 로컬라이제이션과 사용자 정보 저장을 구현했습니다.",
        "stage": "구현 이력"
      }
    ],
    "systems": [
      {
        "title": "기능별 시스템 분리",
        "text": "캐릭터·전투·스킬·게임 진행을 기능별로 나눠 유지보수를 고려했습니다."
      },
      {
        "title": "ScriptableObject 기반 데이터",
        "text": "게임 데이터를 ScriptableObject로 관리하는 구조를 적용했습니다."
      },
      {
        "title": "오브젝트 풀링",
        "text": "오브젝트 풀링을 적용해 리소스 관리를 고려했습니다. 성능 측정 수치는 공개 자료에 없습니다."
      }
    ],
    "architectureLabel": "플레이 흐름",
    "flow": [
      "로비",
      "전투 / 스킬 선택",
      "승리 / 패배",
      "능력 강화",
      "다음 전투"
    ],
    "problem": {
      "title": "반복되는 전투를, 이어지는 성장으로",
      "context": "이 게임은 한 번의 전투뿐 아니라 보상과 영구 성장이 다음 전투로 이어지는 구조를 갖습니다.",
      "approach": "전투·스킬·진행 기능을 분리하고, 데이터 관리와 풀링을 적용했습니다.",
      "result": "타이틀에서 로비·전투·결과·보상·다음 전투로 이어지는 플레이 흐름을 구현했습니다. 구체적인 오류 재현 기록과 개선 전후 측정은 추가 자료가 필요합니다."
    },
    "testing": {
      "summary": "공개 README에서 기능 구현 범위와 게임 진행 흐름을 확인했습니다. 기기별 플레이 테스트 결과, 자동화 테스트 로그, 성능 측정 자료는 아직 제공되지 않았습니다.",
      "items": [
        "기능별 검증 기록과 재현 조건 정리",
        "Android 실기기 플레이 영상과 화면 추가",
        "출시·다운로드 상태 확인"
      ],
      "label": "공개 자료 추가 예정"
    },
    "sources": [
      {
        "label": "게임 개요·구현 범위·진행 흐름",
        "url": "https://github.com/mjoon31/slime-raising/blob/main/README.md"
      }
    ],
    "videos": [
      {
        "src": "assets/media/slime-raising/gameplay-1.mp4",
        "title": "플레이 영상 1"
      },
      {
        "src": "assets/media/slime-raising/gameplay-2.mp4",
        "title": "플레이 영상 2"
      },
      {
        "src": "assets/media/slime-raising/gameplay-3.mp4",
        "title": "플레이 영상 3"
      },
      {
        "src": "assets/media/slime-raising/gameplay-4.mp4",
        "title": "플레이 영상 4"
      }
    ],
    "cardArtwork": true
  },
  {
    "id": "02",
    "cardTags": ["2인 팀", "3인 협동", "Steam", "NGO (Netcode for GameObjects)"],
    "additionalTechnologies": ["NGO (Netcode for GameObjects)", "Steam P2P", "Steamworks.NET"],
    "resources": [{"src": "assets/resources/house-haulers/development-plan.pdf", "label": "개발기획서 PDF", "filename": "하우스홀러스_기획서.pdf"}],
    "slug": "house-haulers",
    "title": "하우스 훌러스",
    "subtitle": "House Haulers",
    "cardSubtitle": "House Haulers",
    "genre": "온라인 협동 생존 어드벤처",
    "platform": "Steam P2P 개발 목표",
    "engine": "Unity",
    "language": "C#",
    "developmentPeriod": "개발 진행 중 · 시작일 미공개",
    "teamSize": "2명 · 팀 프로젝트",
    "role": "게임 클라이언트 · 상호작용 · 협동 시스템 담당 영역",
    "status": "개발 진행 중",
    "statusKind": "progress",
    "statusNote": "공개 소개의 담당 영역에는 구현 예정 기능이 포함됩니다. 개별 기능의 완료 상태는 추가 확인이 필요합니다.",
    "thumbnail": "assets/images/house-placeholder.svg",
    "thumbnailAlt": "하우스 훌러스 임시 커버. 실제 게임 화면이 아닌 세 플레이어의 협동을 표현한 그래픽.",
    "placeholder": true,
    "screenshots": [],
    "cardDescription": "운전·수리·자원 수집으로 집을 함께 옮기는 3인 온라인 협동 게임.",
    "description": "세 명이 함께, 한 채의 집을 목적지까지. 기계 다리가 달린 집을 운전하고 수리하며 자원을 모으는 온라인 협동 게임을 개발하고 있습니다.",
    "overview": "세 명의 플레이어가 기계 다리가 달린 집을 함께 운반합니다. 운전·수리·자원 수집으로 역할을 나누며 목적지로 이동하는 협동 경험을 목표로 하는 2인 팀 프로젝트입니다.",
    "features": [
      "3인 플레이어의 역할 분담과 협동",
      "집 운전·수리·상태 관리",
      "상호작용과 도구 활용",
      "온라인 통신과 음성 소통 목표"
    ],
    "technologies": [
      "Unity",
      "C#",
      "Visual Studio"
    ],
    "tags": [
      "2인 팀",
      "3인 협동",
      "NGO (Netcode for GameObjects)",
      "Steamworks.NET"
    ],
    "githubUrl": null,
    "gameplayVideoUrl": null,
    "downloadUrl": null,
    "contributionsTitle": "협동 플레이를 위한 담당 영역과 목표",
    "contributionsNote": "캐릭터 상호작용과 집의 협동 시스템, 멀티플레이를 담당하고 있습니다. 아래에는 개발 목표가 포함됩니다.",
    "contributions": [
      {
        "title": "캐릭터·상호작용",
        "text": "캐릭터 조작, 상호작용, 도구 장착과 애니메이션 시스템.",
        "stage": "담당 영역 · 목표 포함"
      },
      {
        "title": "멀티플레이",
        "text": "NGO (Netcode for GameObjects) 기반 동기화와 Steam P2P 연동.",
        "stage": "담당 영역 · 목표 포함"
      },
      {
        "title": "집과 협동 시스템",
        "text": "집 운전·상태 관리·수리와 물리 기반 협동 시스템.",
        "stage": "담당 영역 · 목표 포함"
      },
      {
        "title": "소통·게임 콘텐츠",
        "text": "거리 기반 보이스 채팅·무전기, UI·콘텐츠 기획·밸런스 관리.",
        "stage": "담당 영역 · 목표 포함"
      }
    ],
    "systems": [
      {
        "title": "네트워크 동기화",
        "text": "Unity NGO (Netcode for GameObjects) 기반 멀티플레이 동기화와 Steamworks.NET·Steam P2P 연동을 개발 범위로 두고 있습니다."
      },
      {
        "title": "공유되는 집의 상태",
        "text": "집의 운전·수리·상태 관리를 협동 플레이에 연결하는 것이 목표입니다."
      },
      {
        "title": "플레이어 간 소통",
        "text": "거리 기반 보이스 채팅과 무전기를 개발 목표로 두고 있습니다. 사용 라이브러리와 구현 상태는 미공개입니다."
      }
    ],
    "architectureLabel": "협동 플레이 흐름",
    "flow": [
      "운전",
      "집의 이동·상태 공유",
      "수리",
      "자원 수집",
      "함께 목적지로"
    ],
    "problem": {
      "title": "한 채의 집, 여러 플레이어의 상호작용",
      "context": "운전·수리·자원 수집이 하나의 집을 중심으로 이어지는 협동 플레이를 목표로 합니다.",
      "approach": "캐릭터 상호작용, 집 상태 관리, 온라인 동기화를 담당 개발 영역으로 정리했습니다. 구체적인 권한 구조와 데이터 흐름은 아직 공개되지 않았습니다.",
      "result": "현재 개발 진행 중입니다. 해결된 오류나 검증된 개선 성과는 자료를 확인한 뒤 추가할 예정입니다."
    },
    "testing": {
      "summary": "개발 진행 상태를 소개합니다. 멀티플레이 테스트 로그, 지연·연결 해제 시나리오, 기능별 검증 결과는 아직 공개되지 않았습니다.",
      "items": [
        "개별 기능의 구현·계획 상태 구분",
        "협동 플레이 화면과 네트워크 검증 자료 추가",
        "팀 내 기여 범위와 공개 자료 확정"
      ],
      "label": "개발 진행 중"
    },
    "sources": [
      {
        "label": "담당 영역·개발 목표·진행 상태",
        "url": "https://github.com/mjoon31/mjoon31/blob/main/README.md"
      }
    ]
  },
  {
    "id": "03",
    "resources": [
      {"src": "assets/resources/ham-pocha/introduction.pdf", "label": "소개문서 PDF", "filename": "햄포차_소개문서.pdf"},
      {"src": "assets/resources/ham-pocha/introduction.pptx", "label": "소개문서 PPTX", "previewSrc": "assets/resources/ham-pocha/introduction.pdf", "filename": "햄포차_소개문서.pptx"},
      {"src": "assets/resources/ham-pocha/game-design.pdf", "label": "기획서 PDF", "filename": "햄포차_기획서.pdf"},
      {"src": "assets/resources/ham-pocha/technical-development.pdf", "label": "기술개발문서 PDF", "filename": "햄포차_기술개발문서.pdf"},
      {"src": "assets/resources/ham-pocha/data-tables.pdf", "label": "데이터테이블 PDF", "filename": "햄포차_데이터테이블.pdf"}
    ],
    "slug": "ham-pocha",
    "title": "햄포차",
    "subtitle": "Ham Pocha",
    "cardSubtitle": "Ham Pocha",
    "genre": "탐험 · 요리 · 포장마차 경영",
    "platform": "Android · 가로 화면 · 싱글 플레이",
    "engine": "Unity 2022.3.62f3",
    "language": "C#",
    "additionalTechnologies": [
      "Firebase"
    ],
    "developmentPeriod": "2026.11.05 — 2026.11.21 (계획)",
    "teamSize": "개인 프로젝트 · AI 협업",
    "role": "게임 설계 · AI 작업 범위·검수 기준 관리 · 실기기 검수",
    "status": "Android 테스트 빌드",
    "statusKind": "progress",
    "thumbnail": "assets/images/ham-pocha-placeholder.svg",
    "thumbnailAlt": "햄포차 임시 커버. 실제 게임 화면이 아닌 햄스터와 포장마차를 표현한 그래픽.",
    "placeholder": true,
    "screenshots": [],
    "cardDescription": "숲에서 재료를 모으고, 직접 요리하고 서빙하며 나만의 포차를 키우는 3D 경영 게임.",
    "description": "숲에서 모은 식재료로 손님의 한 끼를 만듭니다. 채집과 직접 조리, 서빙과 가게 성장이 햄스터의 하루로 이어지는 3D 경영 게임입니다.",
    "overview": "오늘 팔고 싶은 메뉴가 숲에서 무엇을 찾을지 정하고, 장사로 번 골드와 경험치가 다음 탐험과 영업의 선택지를 넓혀 줍니다. 플레이어는 숲과 마을을 오가며 재료를 준비하고, 손님의 주문에 맞춰 직접 한 끼를 만듭니다. 하루가 끝나면 영업을 정리하고 집에서 쉬며 다음 날을 준비합니다.",
    "features": [],
    "gameplayContent": [
      {
        "title": "계절 숲 탐험과 재료 수집",
        "text": "계절마다 풍경과 재료가 다른 숲을 탐험합니다. 채집과 가벼운 전투로 메뉴에 필요한 재료를 얻고, 미니맵에서 출입구와 수집 대상을 확인합니다. 밤에는 몬스터가 추격하고 공격 전에 경고가 나타납니다. 채집을 더 이어갈지, 모은 재료를 지켜 마을로 돌아갈지 판단해야 합니다."
      },
      {
        "title": "실내에서 직접 조리하고 서빙하기",
        "text": "숲에서 가져온 재료를 공유 냉장고에 넣습니다. 주문을 받은 뒤 필요한 재료를 조리대에 하나씩 넣고, 완성된 음식을 손님에게 직접 가져갑니다. 여러 주문이 겹치면 재료 준비, 조리, 음식 전달의 순서를 정합니다."
      },
      {
        "title": "야외 판매와 포차 성장",
        "text": "야외에서는 화로마다 꼬치 조리를 예약할 수 있습니다. 조리가 끝난 꼬치는 자동 진열되고, 찾아온 손님이 구매해 테이블에서 식사합니다. 판매 수익과 경험치는 새 메뉴, 음식 강화, 화로와 탐험 지역 확장으로 이어집니다."
      },
      {
        "title": "마을의 하루와 집 꾸미기",
        "text": "개점과 마감, 주민의 귀가와 밤 수면이 하루의 흐름을 만듭니다. 집에서는 가구의 위치와 방향을 바꾸거나 창고에 보관하고, 벽 마감을 바꿔 공간을 꾸밀 수 있습니다."
      }
    ],
    "technologies": [
      "Unity",
      "C#",
      "Visual Studio",
      "Firebase"
    ],
    "tags": [
      "Android",
      "개인 개발",
      "URP",
      "Input System",
      "AI 협업",
      "Firebase"
    ],
    "githubUrl": "https://github.com/mjoon31/ham-pocha",
    "referenceLinks": [
      {
        "label": "게임 규칙과 영업 흐름 · GitHub Wiki",
        "url": "https://github.com/mjoon31/ham-pocha/wiki/Core-Loop-and-Business"
      },
      {
        "label": "시스템 아키텍처 · GitHub Wiki",
        "url": "https://github.com/mjoon31/ham-pocha/wiki/System-Architecture"
      },
      {
        "label": "AI 구현과 변경 관리 · GitHub Wiki",
        "url": "https://github.com/mjoon31/ham-pocha/wiki/AI-Implementation-Management"
      },
      {
        "label": "AI 에디터 도구 · GitHub Wiki",
        "url": "https://github.com/mjoon31/ham-pocha/wiki/AI-Editor-Tools"
      },
      {
        "label": "검증 현황 · GitHub Wiki",
        "url": "https://github.com/mjoon31/ham-pocha/wiki/Validation-and-Status"
      }
    ],
    "gameplayVideoUrl": null,
    "downloadUrl": null,
    "contributionsTitle": "AI 작업의 범위를 정하고 결과를 검수하는 방식",
    "contributionsNote": "1인 개발자로서 게임의 방향, 구현 우선순위, 결과의 채택 여부를 결정했습니다. AI는 조사와 대안 제시, 코드 수정, 에디터 도구 제작과 검사를 맡았고, 저는 실제 플레이를 확인한 뒤 후속 수정을 지시했습니다.",
    "contributions": [
      {
        "title": "기획·기능·아트·검증의 작업 맥락 관리",
        "text": "작업 주제별로 대화를 나누고, 확정된 기획과 공통 규칙을 먼저 확인하도록 구성했습니다. 작업 메모에는 현재 상태, 영향 범위, 다음에 확인할 항목을 기록해 다른 작업에서도 같은 결정을 이어갈 수 있게 했습니다."
      },
      {
        "title": "변경 범위와 완료 기준을 담은 작업 지시",
        "text": "원하는 플레이 결과와 현재 문제, 이미 확정한 규칙, 변경 범위, 검사 조건을 함께 제시했습니다. 예를 들어 야외 영업 개편은 메뉴 표시뿐 아니라 공유 재고의 차감, 조리와 진열, 판매 보상, 기존 저장에 미치는 영향까지 한 작업의 확인 항목으로 정했습니다."
      },
      {
        "title": "변경 검토와 재검증 이력",
        "text": "이슈에는 요청, AI의 제안, 개발자 결정, 실제 수정과 검사 결과를 연결했습니다. 피드백으로 재수정할 때는 첫 실패와 재현 조건을 같은 이슈에 남겼습니다. 커밋에는 개발자 판단과 직접 작업, AI가 수행한 변경, 검증 환경을 구분해 기록했습니다."
      },
      {
        "title": "반복 작업을 도구와 자동화로 관리",
        "text": "AI와 함께 저장 ID 부여, 프리팹 격자 배치, 레시피 참조 검사 도구를 만들었습니다. 저장 ID 도구는 기존 식별자를 유지하면서 누락과 복제 객체를 구분해 처리합니다. 공개 기록은 개발자가 승인한 파일과 변경 이력을 선별해 동기화하도록 구성했습니다."
      }
    ],
    "architectureLabel": "햄포차의 하루",
    "flow": [
      "숲 탐험·수집",
      "재료 입고",
      "조리·서빙",
      "판매·성장",
      "마감·수면"
    ],
    "systems": [
      {
        "title": "직접 조리하는 손맛을 만드는 영업 구조",
        "text": "플레이 피드백에서 주문과 서빙은 직접 하는데 조리가 버튼으로 끝난다는 점을 확인했습니다. 실내 조리를 재료 운반과 투입으로 바꾸고, 야외에서는 진열품을 자동으로 판매하도록 역할을 나눴습니다. 실내 주문과 조리대는 각자 진행 상태를 가집니다. 야외 화로는 예약할 때 공유 냉장고에서 재료를 차감하고, 저장에서 예약을 복원하거나 다음 꼬치를 구울 때 중복으로 차감하지 않습니다. 마감하면 미완성 예약의 재료는 돌려주고 이미 진열한 음식은 다음 영업에 남깁니다."
      },
      {
        "title": "공간이 바뀌어도 이어지는 게임 상태",
        "text": "공통 시스템이 있는 Main 씬을 유지하고 집·마을·숲을 필요할 때 불러옵니다. 실내외 영업 중에는 마을과 포차 씬을 함께 두고 카메라와 조작 대상을 전환해 다른 공간의 조리와 손님 행동을 계속 진행합니다. 월드 시계는 영업 마감, 주민 귀가, 수면과 다음 날의 시작을 연결합니다."
      },
      {
        "title": "레시피·성장 데이터와 화면의 연결",
        "text": "재료와 아이콘은 레시피 데이터에, 메뉴 해금과 강화는 콘텐츠 카탈로그에 담았습니다. 조리와 메뉴 선택, 강화 화면은 같은 데이터를 참조합니다. 이미 확정된 주문 보상과 이전에 조리한 꼬치의 판매가는 가격을 바꾼 뒤에도 유지하도록 구성했습니다."
      },
      {
        "title": "모바일 조작과 탐험 정보",
        "text": "Input System으로 이동과 상호작용을 처리합니다. 숲을 다시 방문하면 채집 대상과 몬스터를 재배치합니다. 숲에서 저장한 진행을 이어갈 때는 현재 방문의 수집 상태를 복원하고, 미니맵도 같은 상태를 읽어 이미 획득한 표식을 숨깁니다. 가구 배치에는 격자 점유와 입구·침대까지의 접근 경로 검사를 연결했습니다."
      },
      {
        "title": "계정별 저장과 씬 객체의 복원",
        "text": "로컬 JSON과 Firebase Authentication·Cloud Firestore를 연결해 계정별 진행을 저장합니다. 저장 ID로 씬에 배치된 대상을 찾아 주문 상태와 가구 배치 등을 이어갈 수 있게 구성했습니다."
      }
    ],
    "problem": {
      "title": "비활성 테이블도 이어지는 저장 복원",
      "context": "계속하기로 불러온 저장을 적용할 때 비활성 테이블에 필요한 참조가 준비되지 않아 복원 중 예외가 발생했습니다.",
      "approach": "AI가 복원 직전에 필요한 참조를 준비하도록 초기화 경로를 분리했습니다. 나중에 테이블이 활성화돼도 이미 복원된 주문 상태를 다시 초기화하지 않도록 보완했습니다.",
      "result": "Unity 편집 모드에서 격리 검사 8개와 실제 씬의 테이블 16개에 대한 메모리 저장·복원 검사를 통과했습니다. 이전 Android 빌드에서는 개발자가 기본 계속하기를 실기기에서 확인했습니다. 후속 편집 모드 검사에서는 마감 결산이 한 번만 열리는지, 야외 예약을 복원할 때 재료가 다시 차감되지 않는지, 같은 숲 방문의 획득 보상이 중복되지 않는지 확인했습니다. 보관된 Android 테스트 APK는 0.7.0입니다. 이 APK의 최신 작업본 일치 여부와 실기기 통합 검증 결과는 아직 확인하지 못했습니다."
    },
    "cardTags": [
      "Android",
      "AI",
      "Firebase"
    ]
  }
];

export const skills = [
  {
    "title": "Unity",
    "icon": "unity",
    "text": "캐릭터·전투·성장 시스템 구현.\nScriptableObject와 오브젝트 풀링으로 게임 데이터를 관리합니다."
  },
  {
    "title": "C#",
    "icon": "csharp",
    "text": "게임플레이 로직과 데이터 처리 구현.\n객체지향 설계·자료구조·알고리즘 학습."
  },
  {
    "title": "NGO (Netcode for GameObjects) · Steam P2P",
    "icon": "network",
    "text": "온라인 협동 게임의 동기화와 Steam P2P 연동 개발 중.\n세부 기능은 개발 목표를 포함합니다."
  },
  {
    "title": "이해와 검증",
    "icon": "spark",
    "text": "AI를 활용한 학습 환경 구축.\n직접 코드 구현·자동 채점·오류 분석을 반복하며 학습합니다."
  }
];

export const experience = [
  {
    "time": "2026.03 — 2026.09",
    "type": "개인 프로젝트",
    "title": "슬라임키우기",
    "summary": "기획부터 전투·성장·게임 진행까지 단독 개발.",
    "text": "기획부터 게임플레이, UI, 사운드, 로컬라이제이션, 데이터 저장까지. 하나의 게임 흐름을 단독으로 연결한 경험입니다.",
    "slug": "slime-raising"
  },
  {
    "time": "개발 진행 중",
    "type": "팀 프로젝트",
    "title": "하우스 훌러스",
    "summary": "2인 팀으로 만드는 3인 온라인 협동 게임.",
    "text": "2인 팀으로 3인 온라인 협동 게임을 개발하고 있습니다. 캐릭터 상호작용과 멀티플레이, 집의 협동 시스템을 담당 영역으로 두고 있습니다.",
    "slug": "house-haulers"
  },
  {
    "time": "2026.11",
    "type": "개인 프로젝트 · AI 협업",
    "title": "햄포차",
    "summary": "숲 탐험과 직접 조리·서빙을 연결하고, AI 협업을 작업 지시·검수·변경 기록으로 관리한 Android 경영 게임.",
    "text": "게임과 포차 운영 규칙을 설계하고 AI와 함께 구현했습니다. Android 실기기에서 플레이와 저장 복원을 확인하고 Unity Profiler로 지역 전환 구간을 측정했습니다.",
    "slug": "ham-pocha"
  },
  {
    "time": "지속 학습",
    "type": "개인 학습",
    "title": "GameDev Lab",
    "summary": "직접 구현하고 검증하며 기록하는 게임 개발 학습.",
    "text": "AI를 활용한 로컬 학습 플랫폼을 구축하고, 문제 분석·코드 구현·자동 채점·오류 분석·GitHub 기록으로 이어지는 학습 과정을 운영합니다.",
    "url": "https://github.com/mjoon31/gamedev-lab"
  }
];
