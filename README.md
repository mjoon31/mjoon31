# 김명준 Myoungjoon Kim | Unity Client Developer

### 👋 About Me

Unity와 C#을 기반으로 게임 개발 역량을 쌓아가고 있는 신입 개발자입니다.

개인 모바일 게임 개발 경험을 바탕으로, 현재는 **NGO(Netcode for GameObjects)와 Steam P2P를 활용한 온라인 협동 게임**을 개발하고 있습니다.

🌐 **[My Website](https://mjoon31.github.io/mjoon31)**

---

## 🛠 Tech Stack

| Category | Technologies |
|---|---|
| Engine | Unity 2022.3 LTS |
| Language | C# |
| Networking | NGO(Netcode for GameObjects), Steamworks.NET |
| Backend | Firebase |

---

## 🎮 Projects

<img src="https://raw.githubusercontent.com/mjoon31/slime-raising/main/Assets/04_Images/Sprites/UI/Icon/AppIcon.png"
     alt="슬라임키우기 앱 아이콘"
     width="140"
     align="left" />

### 01. 슬라임키우기 (Slime Raising)

**2D 모바일 액션 로그라이크 RPG**

`Unity` `C#` `Android` `Single Player`

**개인 프로젝트** · 2026.03 ~ 2026.09

<br clear="left" />

몬스터를 처치하고 경험치를 획득하여 다양한 스킬과 능력을 성장시키는 2D 모바일 액션 로그라이크 게임입니다.

**주요 구현 기능**
- 캐릭터 조작 및 전투·몬스터 AI 시스템
- 스킬·패시브·능력 강화 시스템
- 웨이브·라운드·보스 전투 및 게임 진행 관리
- UI·사운드·로컬라이제이션 및 유저 데이터 관리
- ScriptableObject 기반 데이터 설계 및 오브젝트 풀링

**[프로젝트 GitHub 저장소 보기](https://github.com/mjoon31/slime-raising)**

---

### 02. House Haulers (하우스 홀러스)

**3인 온라인 협동 캐주얼 생존 어드벤처**

`Unity` `C#` `NGO(Netcode for GameObjects)` `Steamworks.NET` `Steam P2P`

**2인 팀 프로젝트 | 개발 진행 중**

세 명의 플레이어가 기계 다리가 달린 집을 함께 운반하며 운전, 수리, 자원 수집을 통해 목적지까지 이동하는 온라인 협동 게임입니다.

**담당 개발 영역 및 주요 개발 목표**
- 캐릭터 조작·상호작용·도구 장착 및 애니메이션 시스템
- NGO(Netcode for GameObjects) 기반 멀티플레이 동기화 및 Steam P2P 연동
- 집 운전·상태 관리·수리 및 물리 기반 협동 시스템
- 거리 기반 보이스 채팅 및 무전기 통신 시스템
- 게임 UI·콘텐츠 기획 및 밸런스 관리

*현재 개발 중이며, 위 항목에는 구현 예정 기능이 포함되어 있습니다.*

**[프로젝트 GitHub 저장소 보기]()**

---

<img src="docs/assets/media/ham-pocha/app-icon.png"
     alt="햄포차 앱 아이콘"
     width="140"
     align="left" />

### 03. 햄포차 (Ham Pocha)

**3D 탐험·요리·포장마차 경영 게임**

`Unity` `C#` `URP` `Input System` `Firebase` `Android`

**개인 프로젝트 · AI 협업 | Android 테스트 빌드**

<br clear="left" />

햄스터가 되어 계절 숲에서 식재료를 모으고, 마을 포차에서 주문에 맞춰 직접 조리하고 서빙합니다. 영업 수익으로 메뉴와 화로를 늘려 야외 꼬치 판매를 시작하고, 새 숲에서 다음 메뉴의 재료를 찾습니다.

**주요 구현**
- **탐험과 재방문:** 숲의 채집·전투와 미니맵을 연결하고, 저장을 이어갈 때 같은 방문에서 이미 수집한 상태를 복원합니다.
- **실내외 영업:** 공유 냉장고에서 재료를 꺼내 실내 주문을 처리하고, 야외 화로에는 조리를 예약합니다. 화면을 바꿔도 조리와 판매가 이어지며, 마감 시 미완성 예약의 재료를 돌려줍니다.
- **진행 저장:** 로컬 JSON, Firebase Authentication, Cloud Firestore를 연결해 계정별 진행을 저장합니다. 주문·재고·가구 배치는 씬 객체의 저장 ID를 기준으로 복원합니다.

**개발과 검수**

게임 규칙과 작업 범위, 검수 기준을 직접 정하고, AI에 구현·도구 제작·검사를 맡겼습니다. 요청부터 피드백, 수정, 재검증까지 이슈와 커밋에 기록했습니다. 이전 Android 빌드에서는 실기기로 플레이와 기본 저장 복원을 확인했고, 이후 변경된 영업·저장 흐름은 Unity 편집 모드에서 항목별로 검사했습니다.

**[프로젝트 상세 소개](https://mjoon31.github.io/mjoon31/projects/ham-pocha/)** · **[프로젝트 자료](https://mjoon31.github.io/mjoon31/projects/ham-pocha/#resources)** · **[공개 저장소](https://github.com/mjoon31/ham-pocha)** · **[개발 위키](https://github.com/mjoon31/ham-pocha/wiki)**

---

## 📚 Learning & Development Log

### GameDev Lab

**AI를 활용해 자체 구축한 로컬 학습 플랫폼**을 기반으로 Unity와 C# 게임 클라이언트 개발 역량을 강화하는 개인 학습 프로젝트입니다.

게임 개발에 필요한 핵심 개념과 실무형 문제를 체계적으로 학습하기 위해 **문제 분석 → 코드 구현 → 자동 채점 → 오류 분석 및 개선 → GitHub 기록**으로 이어지는 학습 프로세스를 설계했습니다.

**주요 학습 및 성과**
- **학습 환경 구축:** AI를 활용한 C# 코드 편집·자동 채점·학습 기록 관리 환경 구성
- **프로그래밍 역량:** C# 객체지향 설계, 자료구조, 알고리즘 및 Unity 게임 시스템 구현 학습
- **문제 해결 역량:** 요구사항 분석, 예외 상황 검증 및 코드 개선 중심의 반복 학습
- **개발 기록 체계화:** 일일 학습 목표 관리 및 GitHub 커밋 기반 학습 과정 기록 체계 구축

단순한 문법 암기보다 **직접 구현한 코드를 검증하고, 문제의 원인과 개선 방향을 스스로 설명할 수 있는 개발 역량**을 기르는 데 중점을 두고 있습니다.

**[GameDev Lab GitHub 저장소 보기](https://github.com/mjoon31/gamedev-lab)**

---

## 📫 Contact

- **Portfolio:** [mjoon31.github.io/mjoon31](https://mjoon31.github.io/mjoon31)
- **GitHub:** [github.com/mjoon31](https://github.com/mjoon31)
- **Email:** [xxmj96@gmail.com](mailto:xxmj96@gmail.com)
