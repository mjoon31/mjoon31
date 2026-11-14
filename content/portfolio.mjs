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
      "NGO",
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
        "text": "NGO 기반 동기화와 Steam P2P 연동.",
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
        "text": "Unity NGO 기반 멀티플레이 동기화와 Steamworks.NET·Steam P2P 연동을 개발 범위로 두고 있습니다."
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
      {
        "src": "assets/resources/ham-pocha/development-plan.pdf",
        "label": "개발기획서 PDF",
        "filename": "햄포차_개발기획서.pdf"
      }
    ],
    "slug": "ham-pocha",
    "title": "햄포차",
    "subtitle": "Ham Pocha",
    "cardSubtitle": "Ham Pocha",
    "genre": "탐험 · 요리 · 포장마차 경영",
    "platform": "Android · 싱글 플레이",
    "engine": "Unity 2022.3.62f3",
    "language": "C#",
    "additionalTechnologies": ["Firebase"],
    "developmentPeriod": "2026.11.05 — 2026.11.21 (계획)",
    "teamSize": "개인 프로젝트 · AI 협업",
    "role": "게임 방향·규칙 결정 · 설계·구현·검증 진행",
    "status": "개발 진행 중",
    "statusKind": "progress",
    "thumbnail": "assets/images/ham-pocha-placeholder.svg",
    "thumbnailAlt": "햄포차 임시 커버. 실제 게임 화면이 아닌 햄스터와 포장마차를 표현한 그래픽.",
    "placeholder": true,
    "screenshots": [],
    "cardDescription": "숲에서 모은 재료로 요리하고, 햄스터 포장마차를 운영하는 Android 솔로 게임.",
    "description": "숲에서 재료를 모으고, 작은 포장마차에서 하루를 마무리합니다. 탐험·채집·가벼운 전투와 요리·영업을 연결하는 햄스터 모바일 게임을 개발하고 있습니다.",
    "overview": "햄스터가 숲을 탐험하며 재료를 얻고, 마을의 포장마차에서 주문에 맞춰 조리하고 음식을 전달하는 솔로 게임입니다. 개발자의 Unity Editor 플레이 검수로 탐험·영업·수면의 핵심 루프 PoC를 확인했습니다. 로컬 저장·성장 기능과 Android 실기기 검증, Firebase 연동은 후속 개발 단계입니다.",
    "features": [
      "가상 조이스틱과 버튼을 사용하는 숲 탐험",
      "재료 채집·드롭과 가벼운 전투",
      "주문·재료 투입·조리·음식 전달을 연결한 영업",
      "탐험과 영업을 연결하는 시간·피로 관리",
      "숲과 포장마차를 확장하는 성장 구조 목표"
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
    "githubUrl": null,
    "gameplayVideoUrl": null,
    "downloadUrl": null,
    "contributionsTitle": "게임 방향을 결정하고, 프로토타입으로 연결하기",
    "contributionsNote": "게임의 방향·규칙·우선순위는 직접 결정하고, AI와 설계·구현·검증을 함께 진행합니다. 아래 내용은 초기 프로토타입의 구성 범위이며 전체 기능의 검증 완료를 의미하지 않습니다.",
    "contributions": [
      {
        "title": "탐험과 영업의 기획",
        "text": "숲에서 재료를 얻고 포장마차에서 요리·판매하는 핵심 루프와 모바일 조작 방향을 결정했습니다.",
        "stage": "직접 결정"
      },
      {
        "title": "이동·탐험 프로토타입",
        "text": "이동 입력, 가상 조이스틱, 채집·드롭과 가벼운 전투를 구성하고 있습니다.",
        "stage": "AI 협업 · 검증 진행"
      },
      {
        "title": "주문·조리·전달 프로토타입",
        "text": "주문을 받고 재료를 넣어 조리한 뒤, 가방에서 음식을 골라 손님에게 전달하는 흐름을 구성하고 있습니다.",
        "stage": "AI 협업 · 검증 진행"
      },
      {
        "title": "하루의 흐름과 게임 상태",
        "text": "월드 시계, 피로, 취침과 지역 이동을 연결하고 있습니다. 저장·복원과 전체 성장 흐름은 후속 구현·검증 대상입니다.",
        "stage": "개발 진행 중"
      }
    ],
    "architectureLabel": "목표 플레이 흐름",
    "flow": [
      "탐험·채집",
      "재료 준비",
      "조리",
      "주문·판매",
      "성장·다음 탐험"
    ],
    "systems": [
      {
        "title": "탐험과 영업의 역할 분리",
        "text": "이동·채집과 주문·조리의 입력 및 진행을 나누고, 공통 게임 상태와 연결하는 프로토타입을 구성하고 있습니다."
      },
      {
        "title": "Unity URP와 모바일 입력",
        "text": "URP 카툰풍 렌더링과 Input System 기반 입력을 사용합니다. 실제 Android 터치 조작과 성능은 별도 검증이 필요합니다."
      },
      {
        "title": "시간·피로와 영업 진행",
        "text": "게임의 시간, 활동에 따른 피로, 주문과 손님의 진행 속도를 관리하는 구성을 개발 중입니다."
      },
      {
        "title": "로컬 저장과 Firebase 연동 방향",
        "text": "로컬 JSON 저장을 우선 구성하고, Google/Firebase 계정 기반 저장을 도입하는 방향입니다. 클라우드 연동과 세션·보안 검증은 후속 개발 목표이며, 현재 적용 완료로 표시하지 않습니다."
      }
    ],
    "problem": {
      "title": "탐험과 포장마차 영업을 하나의 하루로",
      "context": "탐험에서는 이동·채집·전투를, 영업에서는 주문·조리·전달을 조작하므로 두 활동을 자연스럽게 연결하는 흐름이 필요합니다.",
      "approach": "게임 상태와 시간을 공통으로 관리하고, 탐험 입력과 영업 UI를 나누어 구성합니다. 개발자는 플레이 규칙과 우선순위를 결정하고 AI와 구현을 진행합니다.",
      "result": "개발자가 Unity Editor에서 탐험·영업·수면을 이어가는 핵심 루프를 직접 플레이해 PoC를 확인했습니다. 로컬 저장·복원, 전체 성장 루프, Android 실기기와 Firebase 연동·보안 검증은 남아 있습니다."
    },
        "cardTags": [
      "Android",
      "URP",
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
    "title": "NGO · Steam P2P",
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
    "time": "프로토타입 개발 중",
    "type": "개인 프로젝트 · AI 협업",
    "title": "햄포차",
    "summary": "탐험·채집과 요리·포장마차 영업을 연결하는 Android 게임.",
    "text": "게임 방향과 규칙을 직접 결정하고 AI와 초기 프로토타입을 개발하고 있습니다. Android 실기기와 전체 성장 흐름의 검증은 진행할 단계입니다.",
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
