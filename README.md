# 김명준 Myoungjoon Kim | Unity Client Developer

### 👋 About Me

Unity와 C#을 기반으로 게임 개발 역량을 쌓아가고 있는 신입 개발자입니다.

개인 모바일 게임 개발 경험을 바탕으로, 현재는 **NGO(Netcode for GameObjects)와 Steam P2P를 활용한 온라인 협동 게임**을 개발하고 있습니다.

🌐 **[My Website] [mjoon31.github.io/mjoon31](https://mjoon31.github.io/mjoon31)**

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

`Unity` `C#` `Android`

**개인 프로젝트** | **개발 기간** 2026.03 — 2026.09

<br clear="left" />

몬스터를 처치하고 경험치를 획득하여 다양한 스킬과 능력을 성장시키는 2D 모바일 액션 로그라이크 게임입니다.

**핵심 플레이**

몬스터 처치 | 경험치 획득 → 레벨업 | 스킬 선택 → 웨이브 생존 | 보스 도전 → 전투 보상 | 영구 능력 강화 → 다음 전투

**주요 구현**
- 캐릭터 조작 및 전투, 몬스터 AI 시스템
- 스킬, 패시브, 능력 강화 시스템
- 웨이브, 라운드, 보스 전투 및 게임 진행 관리
- UI, 사운드, 로컬라이제이션 및 유저 데이터 관리
- ScriptableObject 기반 데이터 설계 및 오브젝트 풀링

**[프로젝트 GitHub 저장소 보기](https://github.com/mjoon31/slime-raising)** | **[프로젝트 상세 소개](https://mjoon31.github.io/mjoon31/projects/slime-raising/)** | **[프로젝트 자료](https://mjoon31.github.io/mjoon31/projects/slime-raising/#resources)** | **[개발 위키](https://github.com/mjoon31/slime-raising/wiki)**

---

### 02. House Haulers (하우스 홀러스)

**3인 온라인 협동 캐주얼 생존 어드벤처**

`Unity` `C#` `NGO(Netcode for GameObjects)` `Steamworks.NET` `Steam P2P`

**2인 팀 프로젝트 | 개발 진행 중**

세 명의 플레이어가 기계 다리가 달린 집을 함께 운반하며 운전, 수리, 자원 수집을 통해 목적지까지 이동하는 온라인 협동 게임입니다.

**핵심 플레이**

팀원과 역할 분담 → 집 운전 → 연료 | 수리 재료 채집 → 집 수리 | 위험 대응 → 체크포인트 통과 | 정착지 도착

**주요 구현**
- **멀티플레이:** NGO와 Steam P2P를 연동하고, 서로 다른 PC 2대에서 Steam 로비 생성, 참가, 친구 초대를 확인했습니다.
- **캐릭터 조작:** 2인 테스트에서 캐릭터 중복 선택 차단과 이동, 점프, 애니메이션 전환을 확인했습니다.
- **아이템 데이터:** 도구와 재료의 공통 데이터를 구성했습니다.

**구현 예정**
- 집 운전과 연료 관리, 자원 채집, 도구 장착, 집 수리의 협동 흐름
- 체크포인트 저장과 복원, 거리 기반 음성 채팅과 무전기 통신

*3인 원정 전체 흐름은 통합 검증 예정입니다.*

*공개 저장소 준비중.*

---

<img src="docs/assets/media/ham-pocha/app-icon.png"
     alt="햄포차 앱 아이콘"
     width="140"
     align="left" />

### 03. 햄포차 (Ham Pocha)

**캐주얼 | 경영 | 시뮬레이션**

`Unity` `C#` `Android` `AI` `URP` `Firebase`

**개인 프로젝트 | AI 협업** | **개발 기간** 2026년 11/5&#126;11/6, 11/11&#126;11/23

<br clear="left" />

햄포차는 햄스터가 숲에서 재료를 모아, 마을의 포차를 운영하는 캐주얼 경영 시뮬레이션 게임입니다.  
영업으로 얻은 골드와 경험치로 레시피를 강화하고, 새 탐험 지역과 레시피를 엽니다.

**핵심 플레이**

숲 탐험 | 재료 수집 → 냉장고에 보관 → 조리 | 서빙 → 판매 | 성장 → 마감 | 수면

**주요 구현**
- **계절 숲과 야시장:** 미니맵으로 채집 대상을 찾고, 실내에서는 직접 조리하고 서빙하며, 야시장에서는 꼬치를 진열해 자동으로 판매합니다.
- **씬 전환과 영업 상태:** 실내와 마을 씬을 함께 유지해 화면을 오가는 동안에도 조리와 손님 행동이 이어집니다.
- **집 꾸미기와 저장:** 격자 점유와 접근 경로를 검사해 가구를 배치하고, Firebase와 로컬 JSON으로 계정별 진행을 저장합니다.

**AI 협업과 검수**

Codex와 Unity를 MCP로 연결하고, `AGENTS.md`에 참고 문서와 코드 규칙, 수정 범위를 정리했습니다.  
기능을 따로 검수할 수 있는 단위로 나눠 역할별 대화에 기대 동작과 완료 기준을 전달하고, 결정 사항과 변경 파일, 검사 결과는 공용 메모에 남겨 중복 작업을 줄였습니다.  
AI는 구현과 컴파일 검사를 맡았고, 개발자 본인은 Android에서 직접 플레이해 결과를 검수한 뒤 변경 내역과 이슈를 대조해 승인된 파일만 GitHub Actions로 공개했습니다.

**[프로젝트 GitHub 저장소 보기](https://github.com/mjoon31/ham-pocha)** | **[프로젝트 상세 소개](https://mjoon31.github.io/mjoon31/projects/ham-pocha/)** | **[프로젝트 자료](https://mjoon31.github.io/mjoon31/projects/ham-pocha/#resources)** | **[개발 위키](https://github.com/mjoon31/ham-pocha/wiki)**

---

## 📚 Learning & Development Log

### GameDev Lab

**AI를 활용해 자체 구축한 로컬 학습 플랫폼**을 기반으로 Unity와 C# 게임 클라이언트 개발 역량을 강화하는 개인 학습 프로젝트입니다.

게임 개발에 필요한 핵심 개념과 실무형 문제를 체계적으로 학습하기 위해 **문제 분석 → 코드 구현 → 자동 채점 → 오류 분석 및 개선 → GitHub 기록**으로 이어지는 학습 프로세스를 설계했습니다.

**주요 학습 및 성과**
- **학습 환경 구축:** AI를 활용한 C# 코드 편집, 자동 채점, 학습 기록 관리 환경 구성
- **프로그래밍 역량:** C# 객체지향 설계, 자료구조, 알고리즘 및 Unity 게임 시스템 구현 학습
- **문제 해결 역량:** 요구사항 분석, 예외 상황 검증 및 코드 개선 중심의 반복 학습
- **개발 기록 체계화:** 일일 학습 목표 관리 및 GitHub 커밋 기반 학습 과정 기록 체계 구축

단순한 문법 암기보다 **직접 구현한 코드를 검증하고, 문제의 원인과 개선 방향을 스스로 설명할 수 있는 개발 역량**을 기르는 데 중점을 두고 있습니다.

**[GameDev Lab GitHub 저장소 보기](https://github.com/mjoon31/gamedev-lab)**

---

## 📫 Contact

- **Website:** [mjoon31.github.io/mjoon31](https://mjoon31.github.io/mjoon31)
- **GitHub:** [github.com/mjoon31](https://github.com/mjoon31)
- **YouTube:** [youtube.com/@hipebbles](https://www.youtube.com/@hipebbles)
- **Itch.io:** [hipebbles.itch.io](https://hipebbles.itch.io)
- **Email:** [xxmj96@gmail.com](mailto:xxmj96@gmail.com)
