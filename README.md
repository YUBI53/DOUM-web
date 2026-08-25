# DOUM 웹사이트

청도군 마을돌봄 사업과 이어진 돌봄 매칭 서비스 **DOUM**의 소개 사이트.
입력과 처리는 전부 앱으로 넘기고, 이 저장소는 소개와 유입만 담당한다.

기획·규칙은 다음 문서를 따른다.

- `CLAUDE.md` — 전체 규칙
- `docs/웹기획안.md` — 섹션별 상세 기획
- `docs/디자인시스템.md` — 색·모양·타이포

## 실행

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

Next.js (App Router) + TypeScript + Tailwind CSS. Vercel 배포 전제.

## 구조

```
src/
├── app/                 페이지·메타데이터·OG 이미지
├── components/
│   ├── brand/           로고
│   ├── ui/              버튼·카드·배지·아코디언 등 공용 조각
│   ├── mockups/         앱 화면·관리자 화면 목업
│   ├── diagrams/        순환 도식, STEP 띠, 읍·면 배치, 히어로 배경
│   └── sections/        페이지별 섹션
└── lib/
    ├── constants.ts     앱 URL·연락처·플래그
    └── content/         페이지별 카피
```

**카피는 전부 `src/lib/content/`에 있다.** 문구를 고칠 때 컴포넌트를 열지 않아도 된다.

## 아직 채워야 하는 것

미확정 값은 코드에 `TODO(placeholder)` 주석으로 표시해 두었다.
남은 항목은 아래로 한 번에 확인할 수 있다.

```bash
grep -rn "TODO(placeholder)" src/
```

| 항목 | 위치 | 확정되면 할 일 |
|---|---|---|
| 앱 배포 URL | `lib/constants.ts` `APP_BASE_URL` | `.env`에 `NEXT_PUBLIC_APP_BASE_URL` 지정 |
| 배포 도메인 | `lib/constants.ts` `SITE_URL` | `.env`에 `NEXT_PUBLIC_SITE_URL` 지정 |
| 문의 메일 | `lib/constants.ts` `CONTACT_EMAIL` | 값 교체 |
| 활동비 단가 | `lib/constants.ts` `MANAGER_PAY_PER_ACTIVITY` | 값을 넣고 `content/manager.ts`의 `PAY_NOTE` 문장에 금액을 넣을지 정한다 |
| 모집 시기 | `lib/constants.ts` `MANAGER_RECRUITING_STATUS_LABEL` | 배지 문구 교체 |
| 교육 과정·기간 | `content/manager.ts` `PROCESS_STEPS`, `FAQ` | 구체 기간을 적는다 |
| 정산 주기 | `content/manager.ts` `FAQ` | 마감일·지급일을 적는다 |
| 파트너 로고 | `lib/constants.ts` `SHOW_PARTNER_LOGOS` | 사용 승인 후 `true` |
| 팀 소개 | `lib/constants.ts` `SHOW_TEAM_SECTION`, `content/about.ts` `TEAM_MEMBERS` | 명단을 채우고 `true`. 지금은 섹션이 렌더되지 않는다 |
| 개인정보처리방침 | `app/privacy/page.tsx` | 확정 문안으로 교체 |
| ABOUT 시작 문단 | `content/about.ts` `START_PARAGRAPHS` | 2문단(방향을 옮긴 계기)은 초안이라 실제 이야기로 바꾸는 편이 좋다 |

### 앱 화면 캡처로 바꾸기

지금 앱 화면은 코드로 그린 목업이다. 실제 캡처를 받으면 `imageSrc`만 넘기면 된다.

```tsx
<AppScreenMockup variant="request-send" imageSrc="/app/request-send.png" />
```

`components/mockups/AppScreenMockup.tsx` 밖은 손대지 않아도 된다.
관리자 화면은 `AdminDashboardMockup.tsx`를 통째로 이미지로 바꾼다.

### 로고 파일로 바꾸기

로고는 키비주얼을 보고 코드로 재현해 둔 것이다.
원본 SVG를 받으면 `components/brand/LogoMark.tsx`의 `path`만 교체한다.
사용처는 전부 `Logo`를 거치므로 다른 파일은 손대지 않는다.

## 지켜야 할 것

- 앱으로 가는 링크는 전부 새 탭.
- 웹에서 지원 폼·요청 폼을 자체 구현하지 않는다.
- 실적 수치(누적 이용 건수, 참여자 수)를 만들어 넣지 않는다.
- 파트너는 청도군과 ㈜다로리인뿐이다.
- 포인트 컬러는 민트 하나. 두 번째 강조색을 만들지 않는다.
