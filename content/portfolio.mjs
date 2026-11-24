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
  "youtube": "https://www.youtube.com/@hipebbles",
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
    "teamSize": "1명 | 개인 프로젝트",
    "cardTeamSize": "개인 프로젝트",
    "role": "기획 | 게임플레이 시스템 | 클라이언트 개발",
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
    "overview": "지속적으로 등장하는 몬스터를 처치해 경험치를 얻고, 무작위로 제공되는 액티브 스킬과 패시브 능력을 조합합니다. 웨이브와 라운드별 전투, 이벤트, 보스전에서 얻은 보상은 영구 성장에 사용합니다.",
    "features": [
      "몬스터 처치와 경험치 획득",
      "레벨업에 따른 스킬, 패시브 선택",
      "웨이브, 라운드, 이벤트, 보스 전투",
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
        "title": "캐릭터와 전투",
        "text": "플레이어 조작, 공격과 피격 처리, 몬스터 AI를 구현했습니다.",
        "stage": "구현 이력"
      },
      {
        "title": "스킬과 성장",
        "text": "액티브 스킬, 패시브 능력, 영구 능력 강화를 구현했습니다.",
        "stage": "구현 이력"
      },
      {
        "title": "게임 진행",
        "text": "웨이브, 라운드, 이벤트, 보스 전투를 하나의 진행 흐름으로 연결했습니다.",
        "stage": "구현 이력"
      },
      {
        "title": "사용자 경험과 데이터",
        "text": "UI 애니메이션, 사운드 설정, 한국어와 영어 로컬라이제이션, 사용자 정보 저장을 구현했습니다.",
        "stage": "구현 이력"
      }
    ],
    "systems": [
      {
        "title": "기능별 시스템 분리",
        "text": "캐릭터, 전투, 스킬, 게임 진행을 기능별로 나눠 유지보수를 고려했습니다."
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
      "전투와 스킬 선택",
      "승리 또는 패배",
      "능력 강화",
      "다음 전투"
    ],
    "problem": {
      "title": "반복되는 전투를, 이어지는 성장으로",
      "context": "이 게임은 한 번의 전투뿐 아니라 보상과 영구 성장이 다음 전투로 이어지는 구조를 갖습니다.",
      "approach": "전투, 스킬, 진행 기능을 분리하고 데이터 관리와 풀링을 적용했습니다.",
      "result": "타이틀에서 로비로 들어간 뒤 전투, 결과 확인, 보상을 거쳐 다음 전투로 이어지는 흐름을 구현했습니다. 구체적인 오류 재현 기록과 개선 전후 측정은 추가 자료가 필요합니다."
    },
    "testing": {
      "summary": "공개 README에서 기능 구현 범위와 게임 진행 흐름을 확인했습니다. 기기별 플레이 테스트 결과, 자동화 테스트 로그, 성능 측정 자료는 아직 제공되지 않았습니다.",
      "items": [
        "기능별 검증 기록과 재현 조건 정리",
        "Android 실기기 플레이 영상과 화면 추가",
        "출시 및 다운로드 상태 확인"
      ],
      "label": "공개 자료 추가 예정"
    },
    "sources": [
      {
        "label": "게임 개요, 구현 범위, 진행 흐름",
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
    "developmentPeriod": "개발 진행 중 | 시작일 미공개",
    "teamSize": "2명 | 팀 프로젝트",
    "role": "게임 클라이언트 | 상호작용 | 협동 시스템 담당 영역",
    "status": "개발 진행 중",
    "statusKind": "progress",
    "statusNote": "공개 소개의 담당 영역에는 구현 예정 기능이 포함됩니다. 개별 기능의 완료 상태는 추가 확인이 필요합니다.",
    "thumbnail": "assets/images/house-placeholder.svg",
    "thumbnailAlt": "하우스 훌러스 임시 커버. 실제 게임 화면이 아닌 세 플레이어의 협동을 표현한 그래픽.",
    "placeholder": true,
    "screenshots": [],
    "cardDescription": "운전, 수리, 자원 수집으로 집을 함께 옮기는 3인 온라인 협동 게임.",
    "description": "세 명이 함께, 한 채의 집을 목적지까지. 기계 다리가 달린 집을 운전하고 수리하며 자원을 모으는 온라인 협동 게임을 개발하고 있습니다.",
    "overview": "세 명의 플레이어가 기계 다리가 달린 집을 함께 운반합니다. 운전, 수리, 자원 수집을 나눠 맡으며 목적지로 이동하는 협동 게임을 2인 팀으로 만들고 있습니다.",
    "features": [
      "3인 플레이어의 역할 분담과 협동",
      "집 운전, 수리, 상태 관리",
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
        "title": "캐릭터와 상호작용",
        "text": "캐릭터 조작, 상호작용, 도구 장착과 애니메이션 시스템.",
        "stage": "담당 영역 | 목표 포함"
      },
      {
        "title": "멀티플레이",
        "text": "NGO (Netcode for GameObjects) 기반 동기화와 Steam P2P 연동.",
        "stage": "담당 영역 | 목표 포함"
      },
      {
        "title": "집과 협동 시스템",
        "text": "집 운전, 상태 관리, 수리와 물리 기반 협동 시스템.",
        "stage": "담당 영역 | 목표 포함"
      },
      {
        "title": "소통과 게임 콘텐츠",
        "text": "거리 기반 보이스 채팅과 무전기, UI, 콘텐츠 기획, 밸런스 관리.",
        "stage": "담당 영역 | 목표 포함"
      }
    ],
    "systems": [
      {
        "title": "네트워크 동기화",
        "text": "Unity NGO (Netcode for GameObjects) 기반 멀티플레이 동기화와 Steamworks.NET을 이용한 Steam P2P 연동을 개발 범위로 두고 있습니다."
      },
      {
        "title": "공유되는 집의 상태",
        "text": "집의 운전, 수리, 상태 관리를 협동 플레이에 연결하는 것이 목표입니다."
      },
      {
        "title": "플레이어 간 소통",
        "text": "거리 기반 보이스 채팅과 무전기를 개발 목표로 두고 있습니다. 사용 라이브러리와 구현 상태는 미공개입니다."
      }
    ],
    "architectureLabel": "협동 플레이 흐름",
    "flow": [
      "운전",
      "집의 이동과 상태 공유",
      "수리",
      "자원 수집",
      "함께 목적지로"
    ],
    "problem": {
      "title": "한 채의 집, 여러 플레이어의 상호작용",
      "context": "운전, 수리, 자원 수집이 하나의 집을 중심으로 이어지는 협동 플레이를 목표로 합니다.",
      "approach": "캐릭터 상호작용, 집 상태 관리, 온라인 동기화를 담당 개발 영역으로 정리했습니다. 구체적인 권한 구조와 데이터 흐름은 아직 공개되지 않았습니다.",
      "result": "현재 개발 진행 중입니다. 해결된 오류나 검증된 개선 성과는 자료를 확인한 뒤 추가할 예정입니다."
    },
    "testing": {
      "summary": "개발 진행 상태를 소개합니다. 멀티플레이 테스트 로그, 지연 및 연결 해제 시나리오, 기능별 검증 결과는 아직 공개되지 않았습니다.",
      "items": [
        "개별 기능의 구현 상태와 계획 구분",
        "협동 플레이 화면과 네트워크 검증 자료 추가",
        "팀 내 기여 범위와 공개 자료 확정"
      ],
      "label": "개발 진행 중"
    },
    "sources": [
      {
        "label": "담당 영역, 개발 목표, 진행 상태",
        "url": "https://github.com/mjoon31/mjoon31/blob/main/README.md"
      }
    ]
  },
  {
    "id": "03",
    "resources": [
      {"src":"assets/resources/ham-pocha/introduction.pdf","label":"소개문서 PDF","filename":"햄포차_소개문서.pdf"},
      {"src":"assets/resources/ham-pocha/introduction.pptx","label":"소개문서 PPTX","previewSrc":"assets/resources/ham-pocha/introduction.pdf","filename":"햄포차_소개문서.pptx"},
      {"src":"assets/resources/ham-pocha/game-design.pdf","label":"기획서 PDF","filename":"햄포차_기획서.pdf"},
      {"src":"assets/resources/ham-pocha/technical-development.pdf","label":"기술개발문서 PDF","filename":"햄포차_기술개발문서.pdf"},
      {"src":"assets/resources/ham-pocha/data-tables.pdf","label":"데이터테이블 PDF","filename":"햄포차_데이터테이블.pdf"}
    ],
    "slug": "ham-pocha",
    "title": "햄포차",
    "subtitle": "Ham Pocha",
    "cardSubtitle": "Ham Pocha",
    "genre": "캐주얼 | 경영 | 시뮬레이션",
    "platform": "Android | 가로 화면 | 싱글 플레이",
    "engine": "Unity 2022.3.62f3",
    "language": "C#",
    "additionalTechnologies": [
      "Firebase",
      "URP"
    ],
    "developmentPeriod": "2026년 11/5~11/6, 11/11~11/23\n(Google Play 비공개 테스트 준비 중)",
    "teamSize": "개인 프로젝트 | AI 협업",
    "role": "게임 설계 | AI 작업 지시와 검수 | Android 실기기 테스트",
    "status": "출시 준비 중",
    "showDetailStatus": false,
    "statusKind": "progress",
    "thumbnail": "assets/media/ham-pocha/app-icon.png",
    "thumbnailAlt": "햄포차 앱 아이콘",
    "cardIllustration": "assets/media/ham-pocha/card-illustration.png",
    "placeholder": false,
    "screenshots": [
      {
        "src": "assets/media/ham-pocha/01-open-for-business.png",
        "alt": "햄스터가 마을 포차에서 영업을 준비하는 화면",
        "caption": "포차 개점",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "assets/media/ham-pocha/02-cook-to-order.png",
        "alt": "실내 조리대에서 음식 재료와 조리 진행을 확인하는 화면",
        "caption": "주문에 맞춰 조리",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "assets/media/ham-pocha/04-forest-harvest.png",
        "alt": "계절 숲에서 채집 대상을 찾아 재료를 모으는 화면",
        "caption": "숲에서 재료 수집",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "assets/media/ham-pocha/05-night-hunt.png",
        "alt": "밤 숲에서 공격을 예고하는 몬스터와 햄스터가 마주한 화면",
        "caption": "야간 몬스터 사냥",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "assets/media/ham-pocha/07-outdoor-grill.png",
        "alt": "야시장 화로와 꼬치 진열대, 테이블이 보이는 화면",
        "caption": "야시장 꼬치 조리",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "assets/media/ham-pocha/06-recipe-growth.png",
        "alt": "성장 화면에서 음식을 강화하고 새 레시피를 확인하는 화면",
        "caption": "레시피 강화",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "assets/media/ham-pocha/09-home-decor.png",
        "alt": "햄스터의 집에서 가구를 배치하는 화면",
        "caption": "집 꾸미기",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "assets/media/ham-pocha/10-end-of-day.png",
        "alt": "영업을 마감하고 그날 판매 결과를 확인하는 화면",
        "caption": "자정 마감과 결산",
        "width": 1920,
        "height": 1080
      }
    ],
    "caseGroups": [
      {
        "title": "대표 사례",
        "cases": [
          {
            "title": "공개 동기화 기준을 다시 정하고 자동화",
            "paragraphs": [
              "초기에는 AI가 공개용 문서와 커밋 메시지를 따로 만드는 방법을 제안했습니다. 저는 개발 원본을 한 곳에 두고, 승인된 파일만 원본과 같은 작업 단위와 커밋 메시지로 공개하도록 기준을 바꿨습니다. 초기 원격 권한 설정과 push는 제가 직접 했습니다.",
              "AI는 이 기준에 맞춰 GitHub Actions와 비교 검사를 구현했습니다. 첫 실행 실패를 수정한 뒤 공개 dev 동기화에 성공했고, 당시 승인한 31개 파일이 가림 처리한 원본과 모두 일치했습니다. 공개용 기록을 별도로 작성하는 단계도 줄였습니다."
            ]
          },
          {
            "title": "프리팹 격자 등록을 한 번에 처리",
            "paragraphs": [
              "새 소품과 건물을 등록할 때마다 점유 칸과 바닥 기준점을 계산해야 했습니다. 저는 이 계산과 일괄 등록을 자동화하고, 기존 도구를 먼저 확인해 사용 안내와 함께 관리하도록 정했습니다.",
              "AI는 기존 등록 창에 계산과 일괄 등록을 추가했습니다. 집 입구 방향은 사람이 지정할 때까지 등록을 보류하도록 했습니다.",
              "Unity 격리 검사에서 유효한 새 규칙 3개를 저장했고, 같은 요청을 다시 실행했을 때 추가된 규칙은 0개였습니다. Undo 한 번으로 기존 규칙을 유지하면서 이번 추가분만 되돌렸습니다."
            ]
          },
          {
            "title": "토큰 로그로 대화 배분과 인계 기준 개선",
            "paragraphs": [
              "처음에는 제가 기능별 대화를 열고 공용 작업 메모로 기준과 진행 상태를 공유했습니다. 비교를 위해 HUD와 UI 수정은 한 대화에서 길게 이어갔습니다. 마무리 단계에는 우선순위와 작업 범위를 총괄 대화에 전달하고, 총괄이 기능별 대화를 만들어 지시를 나눴습니다."
            ],
            "table": {
              "caption": "대화 구간별 입력 토큰 비교",
              "headings": [
                "비교 구간",
                "모델 호출 수",
                "입력 토큰 합계",
                "호출당 평균 입력"
              ],
              "rows": [
                [
                  "긴 UI 대화 초반",
                  "20회",
                  "약 163만",
                  "8.13만"
                ],
                [
                  "같은 UI 대화 후반",
                  "20회",
                  "약 852만",
                  "42.61만"
                ],
                [
                  "제가 나눈 기능별 대화 5개의 초반",
                  "100회",
                  "약 662만",
                  "6.62만"
                ],
                [
                  "총괄이 나눈 기능별 대화 5개의 초반",
                  "100회",
                  "약 844만",
                  "8.44만"
                ]
              ]
            },
            "after": [
              "긴 UI 대화의 후반 20회와 총괄이 나눈 기능별 대화의 초반 100회가 비슷한 양의 입력을 처리했습니다. 제가 직접 나눈 기능별 대화도 초반 호출당 입력이 작았습니다. 표의 횟수는 모델 호출 기준입니다. 작업 범위와 단계가 달라 전체 토큰 절감률과 작업 시간은 따로 측정하지 않았습니다.",
              "기능별 대화는 작업 맥락을 관리하는 데 쓰고, 총괄 대화는 우선순위와 업무 배분, 의존성을 조율하는 데 썼습니다. 같은 화면의 검수는 기존 대화에서 이어가고, 대상이 바뀌면 확정 기준과 변경 파일, 남은 검수만 넘기도록 지침을 보완했습니다."
            ]
          }
        ]
      }
    ],
    "highlightVideo": {
      "title": "45초 하이라이트",
      "src": "assets/media/ham-pocha/store-45sec-full-frame.mp4",
      "poster": "assets/media/ham-pocha/store-45sec-full-frame.jpg"
    },
    "gameplayLinks": [
      { "label": "itch.io에서 게임 소개 보기", "url": "https://hipebbles.itch.io/ham-pocha" },
      { "label": "YouTube에서 플레이 영상 보기", "url": site.youtube }
    ],
    "featureVideo": {
      "title": "기능 소개 영상",
      "src": "assets/media/ham-pocha/overview-5min.mp4",
      "poster": "assets/media/ham-pocha/overview-5min.jpg"
    },
    "technicalVideo": {
      "title": "기술 설명 영상",
      "src": "assets/media/ham-pocha/techniques-5min.mp4",
      "poster": "assets/media/ham-pocha/techniques-5min.jpg"
    },
    "cardDescription": "숲에서 재료를 모으고, 직접 요리하고 서빙하며 나만의 포차를 키우는 3D 경영 게임.",
    "description": "숲에서 탐험과 영업으로 가게 성장이 햄스터의 일상인 3D 경영 게임입니다.",
    "overview": "낮에는 숲에 들어가 저녁 장사에 쓸 재료를 모읍니다.\n정오부터 포차를 열어 주문을 받고, 자정이 되면 남은 주문을 마무리합니다.\n장사로 번 골드와 경험치로 메뉴를 강화하고, 더 넓은 숲과 야시장을 엽니다. 밤에는 집에서 쉬며 다음 날을 준비합니다.",
    "features": [],
    "gameplayContent": [
      {
        "title": "계절 숲 탐험과 재료 수집",
        "text": "봄부터 겨울까지 숲마다 수집할 수 있는 재료가 다릅니다. 미니맵으로 채집 대상과 출구를 확인합니다.\n낮에는 몬스터가 배회하거나 도망갑니다. 밤에는 햄스터를 쫓아와 공격하므로 예고를 보고 피하거나 마을로 돌아갑니다."
      },
      {
        "title": "실내에서 주문받고 서빙하기",
        "text": "냉장고에 모아 둔 재료를 주문에 맞춰 조리대에 하나씩 넣습니다.\n여러 조리대의 진행 상황과 손님이 기다리는 시간을 보고 어떤 주문부터 완성할지 정합니다. 완성한 음식은 한 접시씩 들고 손님에게 전달합니다."
      },
      {
        "title": "메뉴 강화와 야시장 영업",
        "text": "골드를 써서 레시피를 강화하고 새 메뉴를 배웁니다. 일부 메뉴를 열면 필요한 재료가 있는 숲에도 들어갈 수 있습니다.\n야시장을 열면 화로에서 꼬치를 예약할 수 있습니다. 완성된 꼬치는 자동으로 진열되고, 손님은 구매한 뒤 배정된 자리에서 먹습니다."
      },
      {
        "title": "마을 산책과 집 꾸미기",
        "text": "마을에서 집과 포차, 계절 숲을 오갑니다. 밤이 되면 주민이 집으로 돌아가고, 햄스터도 침대에서 쉬며 피로를 회복합니다.\n가구 창고에서 가구를 꺼내 옮기거나 회전합니다. 벽 마감과 현관 카페트도 바꿀 수 있습니다."
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
    "gameplayVideoUrl": null,
    "downloadUrl": null,
    "contributionsTitle": "AI 협업 과정과 주요 사례",
    "contributionsNote": "1인 개발자로서 게임 방향과 우선순위를 정하고, AI에 조사와 대안 제시, 구현과 검사를 맡겼습니다. 작업을 요청할 때 현재 동작과 변경 범위, 유지할 조건, 완료 기준을 함께 전달했습니다.\n확정된 규칙은 공통 지침에 남겼습니다. 이슈별로 AI가 제안한 방법과 제가 선택한 방향, 실제 수정 내용과 재검증 범위를 기록했습니다. 플레이로 확인한 결과에 따라 다음 수정을 결정했습니다.",
    "contributions": [],
    "architectureLabel": "햄포차의 하루",
    "flow": [
      "숲에서 재료 수집",
      "냉장고에 보관",
      "주문, 조리와 서빙",
      "판매와 성장",
      "마감과 취침"
    ],
    "systems": [
      {
        "title": "씬이 바뀌어도 이어지는 진행",
        "text": "공통 시스템은 Main 씬에 두고, 집과 마을, 숲을 필요에 따라 불러옵니다.\n영업 중에는 마을과 포차 실내를 함께 유지합니다. 카메라와 조작 대상을 바꿔도 기존 조리와 손님 행동이 이어집니다."
      },
      {
        "title": "공용 시계와 조리대별 상태",
        "text": "WorldClock에서 경과 시간을 누적해 게임 시각을 계산하고, 야간 전투와 영업 마감에 같은 시계를 사용했습니다.\n조리대마다 선택 메뉴, 넣은 재료, 남은 시간을 따로 보관합니다. 실내외는 냉장고 재고를 공유하고, 야외 화로는 시작과 예약 시 재료를 차감합니다."
      },
      {
        "title": "레시피와 성장 데이터 연결",
        "text": "재료, 조리 시간, 가격과 아이콘을 ScriptableObject로 관리합니다.\n조리 화면과 성장 화면은 같은 콘텐츠 정의를 참조합니다. 실내 서빙 때 주문과 전달한 음식의 ID를 비교하고 정상 판매와 오배송을 구분합니다."
      },
      {
        "title": "숲 배치와 미니맵 좌표",
        "text": "숲에 들어갈 때 난수 시드로 배치 후보를 만들고 구조물이 점유한 칸을 제외합니다. 필요한 칸을 확보하지 못하면 이전 배치를 복원합니다.\n월드 좌표를 미니맵 좌표로 변환해 위치를 표시하고, 획득한 대상의 표식은 숨깁니다."
      },
      {
        "title": "가구 배치와 동선 검사",
        "text": "가구를 격자 좌표로 변환해 회전 뒤 점유할 칸이 비어 있는지 검사합니다.\n너비 우선 탐색으로 입구와 침대까지 길이 이어지는지 확인한 뒤 배치를 확정합니다."
      },
      {
        "title": "계정별 저장과 위치 복원",
        "text": "로컬 JSON 저장을 Firebase Authentication과 Cloud Firestore에 연결해 계정별 진행을 관리합니다.\n저장 ID로 씬에 배치된 대상을 찾아 주문, 숲의 수집 상태, 가구 위치와 회전을 복원합니다."
      }
    ],
    "cardTags": [
      "Android",
      "AI",
      "URP",
      "Firebase"
    ],
    "systemsTitle": "플레이를 받치는 구조"
  }
];

export const skills = [
  {
    "title": "Unity",
    "icon": "unity",
    "text": "캐릭터, 전투, 성장 시스템 구현.\nScriptableObject와 오브젝트 풀링으로 게임 데이터를 관리합니다."
  },
  {
    "title": "C#",
    "icon": "csharp",
    "text": "게임플레이 로직과 데이터 처리 구현.\n객체지향 설계, 자료구조, 알고리즘 학습."
  },
  {
    "title": "NGO (Netcode for GameObjects), Steam P2P",
    "icon": "network",
    "text": "온라인 협동 게임의 동기화와 Steam P2P 연동 개발 중.\n세부 기능은 개발 목표를 포함합니다."
  },
  {
    "title": "이해와 검증",
    "icon": "spark",
    "text": "AI를 활용한 학습 환경 구축.\n코드 구현, 자동 채점, 오류 분석을 반복하며 학습합니다."
  }
];

export const experience = [
  {
    "time": "2026.03 — 2026.09",
    "type": "개인 프로젝트",
    "title": "슬라임키우기",
    "summary": "기획부터 전투, 성장, 게임 진행까지 단독 개발.",
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
    "type": "개인 프로젝트 | AI 협업",
    "title": "햄포차",
    "summary": "숲 탐험과 포차 운영을 연결한 Android 경영 게임을 설계했습니다.\nAI 작업의 범위와 검수 기준을 정하고, 실기기에서 첫날 안내와 숲 탐험을 확인했습니다.",
    "text": "게임과 포차 운영 규칙을 설계하고 AI와 함께 구현했습니다. Android 실기기에서 플레이와 저장 복원을 확인하고 Unity Profiler로 지역 전환 구간을 측정했습니다.",
    "slug": "ham-pocha"
  },
  {
    "time": "지속 학습",
    "type": "개인 학습",
    "title": "GameDev Lab",
    "summary": "직접 구현하고 검증하며 기록하는 게임 개발 학습.",
    "text": "AI를 활용한 로컬 학습 플랫폼을 구축하고, 문제 분석, 코드 구현, 자동 채점, 오류 분석, GitHub 기록으로 이어지는 학습 과정을 운영합니다.",
    "url": "https://github.com/mjoon31/gamedev-lab"
  }
];
