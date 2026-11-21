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
      {"src": "assets/resources/ham-pocha/introduction.pptx", "label": "소개문서 PPTX", "previewSrc": "assets/resources/ham-pocha/introduction.pdf", "filename": "햄포차_소개문서.pptx"},
      {"src": "assets/resources/ham-pocha/game-design.pptx", "label": "기획서 PPTX", "previewSrc": "assets/resources/ham-pocha/game-design.pdf", "filename": "햄포차_기획서.pptx"},
      {"src": "assets/resources/ham-pocha/technical-development.pptx", "label": "기술개발문서 PPTX", "previewSrc": "assets/resources/ham-pocha/technical-development.pdf", "filename": "햄포차_기술개발문서.pptx"},
      {"src": "assets/resources/ham-pocha/data-tables.pptx", "label": "데이터테이블 PPTX", "previewSrc": "assets/resources/ham-pocha/data-tables.pdf", "filename": "햄포차_데이터테이블.pptx"}
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
      "Firebase",
      "URP"
    ],
    "developmentPeriod": "2026.11.05 — 2026.11.21 (계획)",
    "teamSize": "개인 프로젝트 · AI 협업",
    "role": "게임 설계 · AI 작업 범위·검수 기준 관리 · 실기기 검수",
    "status": "Android 테스트 빌드",
    "statusKind": "progress",
    "thumbnail": "assets/media/ham-pocha/app-icon.png",
    "thumbnailAlt": "햄포차 앱 아이콘",
    "cardIllustration": "assets/media/ham-pocha/card-illustration.png",
    "placeholder": false,
    "screenshots": [],
    "cardDescription": "숲에서 재료를 모으고, 직접 요리하고 서빙하며 나만의 포차를 키우는 3D 경영 게임.",
    "description": "숲에서 모은 식재료로 손님의 한 끼를 만듭니다. 채집과 직접 조리, 서빙과 가게 성장이 햄스터의 하루로 이어지는 3D 경영 게임입니다.",
    "overview": "숲과 마을을 오가며 포차 영업에 필요한 재료를 수집하고, 손님의 주문에 맞춰 음식을 조리합니다.\n자정이 되면 영업을 마감하고, 집에서 피로를 회복하며 다음 날을 준비합니다.\n영업으로 얻은 골드와 경험치를 바탕으로 레시피를 강화하고, 새로운 탐험 지역과 추가 레시피를 해금합니다.",
    "features": [],
    "gameplayContent": [
      {
        "title": "계절 숲 탐험과 재료 수집",
        "text": "사계절을 테마로 한 숲을 탐험하며 영업에 필요한 재료를 수집합니다.\n미니맵으로 현재 위치와 수집 대상을 확인하며 탐험을 진행합니다.\n몬스터는 낮에는 온순하게 행동하지만, 밤에는 난폭해져 플레이어를 공격합니다."
      },
      {
        "title": "실내 조리와 서빙",
        "text": "숲에서 수집한 재료를 냉장고에 보관합니다.\n주문을 받으면 레시피에 따라 조리대에 재료를 투입하고, 완성된 음식을 손님에게 전달합니다."
      },
      {
        "title": "포차 성장과 야시장 영업",
        "text": "포차가 성장할수록 레시피를 강화하거나 숨겨진 레시피를 배울 수 있습니다.\n야시장에서는 꼬치를 조리해 진열대에서 판매합니다.\n조리가 완료된 음식은 자동으로 진열되며, 방문한 손님은 음식을 구매한 뒤 테이블에서 식사합니다."
      },
      {
        "title": "마을의 하루와 집 꾸미기",
        "text": "개점과 마감, 주민 귀가와 야간 수면을 중심으로 하루가 진행됩니다.\n집에서는 창고에 보관한 가구를 배치하고 벽 마감을 바꿔 자신만의 공간을 꾸밀 수 있습니다."
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
        "label": "스크립트 연결 구조 · GitHub Wiki",
        "url": "https://github.com/mjoon31/ham-pocha/wiki/Script-Connections"
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
    "contributionsNote": "1인 개발자로서 게임의 방향, 구현 우선순위, 결과물의 채택 여부를 결정했습니다.\nAI에는 조사와 대안 제시, 코드 수정, 반복 작업을 줄이는 에디터 도구 제작을 맡겼습니다. 코드 명명과 데이터 참조, 완료 기준을 공통 지침으로 정해 변경 사항을 검사하도록 했습니다.\n저는 실제 플레이로 결과를 검수한 뒤 후속 수정을 지시했습니다.",
    "contributions": [
      {
        "title": "기능별 작업 분리와 맥락 관리",
        "text": "기능과 작업 주제에 따라 대화 세션을 나누고, 확정된 기획과 공통 규칙을 먼저 참조하도록 구성했습니다.\n공용 작업 메모에는 현재 상태, 영향 범위, 검증 결과와 후속 확인 항목을 기록했습니다. 다른 세션에서도 필요한 기록을 참조해 앞선 결정과 진행 상태를 이어받도록 했습니다."
      },
      {
        "title": "변경 범위와 완료 기준을 담은 작업 지시",
        "text": "원하는 플레이 흐름과 현재 문제, 확정된 규칙, 변경 범위와 완료 기준을 함께 전달했습니다.\n기능은 개별 검수가 가능한 단위로 나누고, 변경할 부분과 유지해야 할 동작을 구분했습니다.\n연관 기능과 저장 데이터에 미치는 영향도 검사 항목에 포함해, 구현 후 같은 기준으로 결과를 확인할 수 있도록 했습니다."
      },
      {
        "title": "이슈별 수정 과정과 재검증 기록",
        "text": "이슈 문서에는 요청한 내용, AI가 제안한 수정안, 제가 선택한 처리 방향을 기록했습니다.\n수정 후에는 실제 변경 사항과 검사 결과를 같은 문서에 추가해 수정 이유와 확인 범위를 함께 파악할 수 있도록 했습니다.\n재수정할 때는 최초 실패 내용과 재현 조건, 후속 검증 결과를 이어서 기록했습니다.\n커밋에는 제 판단과 직접 수행한 작업, AI가 수행한 변경, 검증 환경을 구분해 남기는 기준을 정했습니다."
      },
      {
        "title": "반복 작업의 도구화와 공개 자료 동기화",
        "text": "AI와 함께 저장 ID 부여, 프리팹 격자 배치, 레시피 참조 검사를 위한 에디터 도구를 제작했습니다.\n저장 ID 도구는 기존 식별자를 유지하면서 ID가 누락된 대상과 복제된 객체를 구분해 처리합니다.\n에셋의 시각적 일관성을 맞추기 위해 저폴리 모델 변환, 카툰 셰이더 적용, 그림자 굽기를 지원하는 도구도 제작했습니다. 큰 오브젝트에 햄스터가 가려지면 해당 오브젝트를 페이드 처리해 플레이어를 볼 수 있게 했습니다.\n미리보기 도구에서는 여러 시점의 햄스터 애니메이션을 비교합니다. 도구의 메뉴와 사용법은 문서로 남겨 후속 작업에서도 AI와 함께 재사용했습니다.\n\n실제 개발은 비공개 저장소에서 진행하고, 공개용 저장소에는 소개에 필요한 승인된 파일만 자동 반영하도록 구성했습니다.\n공개 범위와 승인 기준을 정한 뒤 GitHub Actions로 허용된 항목을 동기화해, 공개 자료를 별도로 복사하고 갱신하는 과정을 줄였습니다."
      }
    ],
    "architectureLabel": "햄포차의 하루",
    "flow": [
      "숲 탐험·재료 수집",
      "재료 입고",
      "조리·서빙",
      "판매·성장",
      "마감·수면"
    ],
    "systems": [
      {
        "title": "직접 조리와 자동 판매를 구분한 영업 구조",
        "text": "실내 조리는 재료를 직접 운반하고 조리대에 투입하는 방식으로 구성했습니다.\n야시장은 조리가 완료된 음식을 자동으로 진열·판매하도록 구분해 서로 다른 영업 방식을 제공합니다."
      },
      {
        "title": "공간이 바뀌어도 이어지는 게임 상태",
        "text": "공통 시스템을 담당하는 Main 씬을 유지하고, 집·마을·숲 씬을 필요에 따라 불러옵니다.\n영업 중에는 마을과 포차 씬을 함께 유지하면서 카메라와 조작 대상을 전환합니다. 조작하지 않는 공간에서도 조리와 손님 행동이 계속 진행되도록 구성했습니다.\n게임 내 시간에 맞춰 영업 마감, 주민 귀가, 수면과 다음 날로의 전환을 처리합니다."
      },
      {
        "title": "레시피·성장 데이터와 UI 연동",
        "text": "재료와 아이콘 정보는 레시피 데이터로, 메뉴 해금과 강화 정보는 콘텐츠 카탈로그로 관리합니다.\n조리·메뉴 선택·강화 화면이 같은 데이터를 참조하도록 구성했습니다."
      },
      {
        "title": "모바일 조작과 탐험 상태 관리",
        "text": "Input System으로 이동과 상호작용을 처리합니다.\n숲을 다시 방문하면 채집 대상과 몬스터를 정해진 규칙에 따라 재배치합니다.\n숲에서 저장한 진행을 이어갈 때는 해당 방문의 수집 상태를 복원합니다. 미니맵에도 같은 상태를 반영해 이미 획득한 대상의 표식을 숨깁니다."
      },
      {
        "title": "가구 배치와 창고 인벤토리 연동",
        "text": "창고 인벤토리에서 가구를 선택해 배치하고, 이동·회전하거나 다시 보관할 수 있도록 구성했습니다.\n배치할 영역의 격자 점유 상태와 입구·침대까지의 접근 경로를 검사해, 기존 가구와 겹치거나 주요 동선을 막는 배치를 제한합니다.\n배치한 가구의 위치와 회전 정보는 저장 데이터와 연결해 게임을 이어 할 때 복원합니다."
      },
      {
        "title": "계정별 저장과 씬 객체 복원",
        "text": "로컬 JSON 저장과 Firebase Authentication·Cloud Firestore를 연결해 계정별 진행 상태를 관리합니다.\n저장 ID를 기준으로 씬에 배치된 객체를 식별하고, 주문 상태와 가구 배치 등을 복원하도록 구성했습니다."
      }
    ],
    "problem": {
      "title": "비활성 테이블의 초기화와 저장 복원",
      "context": "계속하기로 저장 데이터를 적용할 때, 비활성 테이블에 필요한 참조가 준비되지 않아 복원 중 예외가 발생했습니다.",
      "approach": "AI가 복원 전에 필요한 참조를 준비하도록 초기화 경로를 분리했습니다.\n이후 테이블이 활성화돼도 이미 복원된 주문 상태를 다시 초기화하지 않도록 보완했습니다.",
      "validation": [
        [
          "Unity 편집 모드",
          "격리 검사 8개와 실제 씬의 테이블 16개를 대상으로 한 메모리 저장·복원 검사를 통과했습니다."
        ],
        [
          "이전 Android 빌드",
          "제가 실기기에서 기본 계속하기 동작을 확인했습니다."
        ],
        [
          "후속 편집 모드 검사",
          "마감 결산 화면이 한 번만 표시되는지, 야외 예약 복원 시 재료가 중복 차감되지 않는지, 동일한 숲 방문에서 획득 보상이 중복되지 않는지 확인했습니다."
        ]
      ],
      "apkVersion": "0.7.0",
      "validationNote": "해당 APK와 최신 작업본의 일치 여부 및 실기기 통합 검증 결과는 아직 확인하지 못했습니다."
    },
    "cardTags": [
      "Android",
      "AI",
      "URP",
      "Firebase"
    ],
    "systemsTitle": "플레이를 받치는 구조",
    "gameplayTitle": "플레이 콘텐츠"
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
