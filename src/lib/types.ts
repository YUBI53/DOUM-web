import type {
  CHEONGDO_REGIONS,
  MANAGER_STATUS_FLOW,
  REQUEST_STATUS_FLOW,
} from './constants';

export type ManagerStatus = (typeof MANAGER_STATUS_FLOW)[number];
export type RequestStatus = (typeof REQUEST_STATUS_FLOW)[number];
export type CheongdoRegion = (typeof CHEONGDO_REGIONS)[number];

/** 아이콘 + 제목 + 설명으로 이뤄진 카드. A-2, B-2, C-2에서 쓴다. */
export interface CardItem {
  /** components/ui/icons.tsx의 아이콘 키 */
  icon: IconName;
  title: string;
  description: string;
}

/** STEP 띠 한 칸. B-3(4단계), C-4(5단계)에서 쓴다. */
export interface StepItem {
  title: string;
  description: string;
  /** 이 단계에 곁들일 앱 화면 목업 */
  screen?: AppScreenVariant;
}

/** 홈 A-4 · A-5. 각 페이지로 넘어가는 미리보기. */
export interface PreviewBandData {
  label: string;
  title: string;
  titleAccent: string;
  /** 한 줄짜리 요약 세 개 */
  points: readonly string[];
  icons: readonly IconName[];
  href: string;
  linkLabel: string;
}

/** 홈 A-3 순환 도식의 한 마디. */
export interface CycleStep {
  /** ① ② ③ ④ */
  index: 1 | 2 | 3 | 4;
  /** 사업 영역(①④)인지 서비스 영역(②③)인지 */
  zone: 'program' | 'service';
  lines: readonly [string, string];
}

/** 팀 프로토타입(preview.html)의 화면 이름을 그대로 쓴다. */
export type AppScreenVariant =
  | 'requester-home'
  | 'new-request-emergency'
  | 'request-detail'
  | 'helper-home'
  | 'activity'
  | 'log-new'
  | 'helper-payments'
  | 'helper-care'
  | 'signup-role'
  | 'account-link'
  | 'schedule-detail';

export type IconName =
  | 'car'
  | 'clock'
  | 'meal'
  | 'walk'
  | 'broom'
  | 'chat'
  | 'plus'
  | 'pin'
  | 'camera'
  | 'shield'
  | 'check'
  | 'home'
  | 'calendar'
  | 'wallet';

export interface FaqItem {
  question: string;
  answer: string;
}
