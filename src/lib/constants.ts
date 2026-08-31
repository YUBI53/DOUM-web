/**
 * 사이트 전역 상수.
 *
 * 아직 확정되지 않은 값은 전부 `TODO(placeholder)` 주석을 달아둔다.
 * 남은 미확정 항목은 아래 명령으로 한 번에 확인할 수 있다.
 *   grep -rn "TODO(placeholder)" src/
 */

// ─── 사이트 ────────────────────────────────────────────────────────────────

export const SITE_NAME = 'DOUM';

/**
 * 배포 주소. 카톡에 공유했을 때 뜨는 미리보기 이미지의 절대경로 계산에 쓴다.
 * 나중에 직접 산 도메인을 붙이면 여기만 바꾸면 된다.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://doum-web.vercel.app';

// ─── 앱 연결 ───────────────────────────────────────────────────────────────
// 웹의 모든 입력·처리는 앱으로 넘긴다. 웹에서 폼을 자체 구현하지 않는다.

/**
 * 앱이 아직 배포되지 않아, 팀이 만든 프로토타입을 사이트 안에 함께 두고 그리로 보낸다.
 * public/prototype/index.html 이 그 파일이다.
 *
 * TODO(placeholder): 앱이 배포되면 NEXT_PUBLIC_APP_BASE_URL만 지정하면
 * 아래 두 주소가 실제 앱을 가리킨다.
 */
export const APP_BASE_URL = process.env.NEXT_PUBLIC_APP_BASE_URL ?? '';

/** GNB의 DEMO, SERVICE 하단 CTA. */
export const APP_LOGIN_URL = APP_BASE_URL
  ? `${APP_BASE_URL}/login`
  : '/prototype/index.html';

/** 돌봄매니저 히어로·하단 CTA. 지원서. */
export const APP_APPLY_URL = APP_BASE_URL
  ? `${APP_BASE_URL}/apply`
  : '/prototype/index.html';

// ─── 사업·파트너 ───────────────────────────────────────────────────────────

export const PROGRAM_NAME = '청도군 마을돌봄공동체 육성 지원사업';
export const PARTNER_NAME = '㈜다로리인';

/** 히어로 상단과 푸터, 두 곳에만 노출한다. */
export const PROGRAM_PARTNER_LINE = `${PROGRAM_NAME} · ${PARTNER_NAME} 연계`;

/** TODO(placeholder): 청도군·다로리인 로고 사용 승인 확인 전까지 false. */
export const SHOW_PARTNER_LOGOS = false;

// ─── 연락처 ────────────────────────────────────────────────────────────────

/**
 * TODO(placeholder): 문의 메일 주소 미정.
 * 가짜 주소를 내보내지 않으려고 지금은 화면 어디에도 쓰지 않는다.
 * 실제 주소가 정해지면 여기에 넣고 푸터에 문의 줄을 되살린다.
 */
export const CONTACT_EMAIL = '';

// ─── 돌봄매니저 ────────────────────────────────────────────────────────────

/**
 * TODO(placeholder): 활동비 단가 미확정. 앱의 20,000원은 데모값이다.
 * 확정 전까지 화면에 금액을 노출하지 않는다.
 */
export const MANAGER_PAY_PER_ACTIVITY: number | null = null;

/** TODO(placeholder): 모집 시기 미확정. 확정되면 '모집 중' 등으로 교체한다. */
export const MANAGER_RECRUITING_STATUS_LABEL = '모집 안내 준비 중';

// ─── 앱과 공유하는 값 ──────────────────────────────────────────────────────
// 웹의 절차 안내가 앱의 실제 흐름과 어긋나면 안 된다.

/** 돌봄매니저 등록 상태값. */
export const MANAGER_STATUS_FLOW = ['applied', 'trained', 'active'] as const;

/** 돌봄 요청 상태값. */
export const REQUEST_STATUS_FLOW = [
  'requested',
  'proposed',
  'confirmed',
  'completed',
  'cancelled',
] as const;

/** 청도군 9개 읍·면. */
export const CHEONGDO_REGIONS = [
  '청도읍',
  '화양읍',
  '각남면',
  '풍각면',
  '각북면',
  '이서면',
  '운문면',
  '금천면',
  '매전면',
] as const;

// ─── 내비게이션 ────────────────────────────────────────────────────────────

export const NAV_ITEMS = [
  { label: 'SERVICE', href: '/service' },
  { label: '돌봄매니저', href: '/manager' },
  { label: 'ABOUT', href: '/about' },
] as const;
