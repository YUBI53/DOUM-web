import type { CardItem, FaqItem, StepItem } from '@/lib/types';

/** 돌봄매니저 카피. docs/웹기획안.md의 C-1 ~ C-7. */

// ─── C-1 히어로 ────────────────────────────────────────────────────────────

export const HERO_TITLE = '마을에서 이웃을 돕는 일을 해요';
export const HERO_SUBLINE =
  '교육을 마치면 사는 곳 가까이에서 활동하고, 활동한 만큼 활동비를 받습니다.';

// ─── C-2 하는 일 ───────────────────────────────────────────────────────────

export const WORK_LABEL = '하는 일';
export const WORK_TITLE = '어떤 일을 하나요';

export const WORK_TYPES: readonly CardItem[] = [
  {
    icon: 'car',
    title: '병원 동행',
    description: '보건소나 병원까지 함께 다녀와요',
  },
  {
    icon: 'clock',
    title: '하교 후 돌봄',
    description: '부모님이 돌아올 때까지 아이 곁에 있어요',
  },
  {
    icon: 'broom',
    title: '집안일',
    description: '청소, 정리처럼 손이 필요한 일을 도와요',
  },
  {
    icon: 'chat',
    title: '말벗',
    description: '찾아가 이야기를 나누고 안부를 확인해요',
  },
] as const;

export const WORK_NOTES = [
  '본인에게 배정된 요청만 보여요',
  '일정이 안 맞으면 다른 시간을 제안할 수 있어요',
] as const;

// ─── C-4 지원 절차 ─────────────────────────────────────────────────────────

export const PROCESS_LABEL = '지원 절차';
export const PROCESS_TITLE = '지원부터 첫 활동까지 다섯 단계';

export const PROCESS_STEPS: readonly StepItem[] = [
  {
    title: '지원서 작성',
    description: '앱에서 사는 지역과 가능한 시간을 적어 보내요',
  },
  {
    title: '서류 확인',
    description: '운영자가 지원 내용을 확인해요',
  },
  {
    // TODO(placeholder): 교육 과정·기간 미확정. 확정되면 구체적으로 적는다.
    title: '교육 이수',
    description: '활동에 필요한 교육을 받아요',
  },
  {
    title: '활동 승인',
    description: '교육을 마치면 활동할 수 있는 상태가 돼요',
  },
  {
    title: '활동 시작',
    description: '배정된 요청을 받고 활동을 시작해요',
  },
] as const;

/**
 * 5단계 STEP과 앱의 실제 상태값(applied → trained → active)을 겹쳐 보여준다.
 * span은 STEP 인덱스 기준 [시작, 끝]이며 0-based로 닫힌 구간이다.
 */
export const PROCESS_STATUS_ZONES = [
  { status: 'applied', span: [0, 1] },
  { status: 'trained', span: [2, 3] },
  { status: 'active', span: [4, 4] },
] as const;

// ─── C-5 활동비 ────────────────────────────────────────────────────────────

export const PAY_LABEL = '활동비';
export const PAY_TITLE = '활동한 만큼 활동비를 받아요';

export const PAY_FLOW = [
  { title: '활동', description: '배정된 요청을 수행해요' },
  { title: '일지 작성', description: '무엇을 했는지 앱에 남겨요' },
  { title: '검토', description: '운영자가 일지를 확인해요' },
  { title: '월별 정산', description: '한 달치 활동을 모아 정산해요' },
  { title: '출금 신청', description: '앱에서 출금을 신청해요' },
] as const;

/**
 * TODO(placeholder): 활동 1회 기준 단가 미확정(앱의 20,000원은 데모값).
 * 확정 전까지 금액을 쓰지 않고 아래 문장으로 대신한다.
 */
export const PAY_NOTE = '활동 1회마다 정해진 활동비가 쌓이고, 월별로 정산해요.';

// ─── C-6 활동 지역 ─────────────────────────────────────────────────────────

export const REGION_LABEL = '활동 지역';
export const REGION_TITLE = '사는 곳 가까이에서 활동해요';
export const REGION_NOTE =
  '지원할 때 활동할 읍·면을 고르면 그 지역의 요청이 배정돼요.';

// ─── C-7 자주 묻는 질문 ────────────────────────────────────────────────────

export const FAQ_LABEL = '자주 묻는 질문';
export const FAQ_TITLE = '자주 묻는 질문';

/**
 * 질문 1~5는 docs/웹기획안.md 266행에 열거된 것이다.
 * TODO(확인 필요): 답변은 전부 작성한 것이고, 6번 질문도 추가한 것이다.
 * 교육 기간·정산 주기 등 확정값이 없는 항목은 두루뭉술하게 두었다. 확인되면 채운다.
 */
export const FAQ: readonly FaqItem[] = [
  {
    question: '자차가 없어도 지원할 수 있나요?',
    answer:
      '지원할 수 있어요. 병원·이동 라이딩은 자차가 있어야 하지만, 동행이나 집안일 도움, 말벗처럼 차가 필요 없는 활동도 있어요. 지원할 때 자차 여부를 적으면 그에 맞는 요청이 배정돼요.',
  },
  {
    // TODO(placeholder): 정산 마감일·지급일 미확정.
    question: '활동비는 언제 들어오나요?',
    answer:
      '활동이 끝나면 일지를 쓰고, 운영자가 검토한 활동이 월별로 정산돼요. 정산된 금액은 앱에서 직접 출금을 신청해요.',
  },
  {
    question: '일정은 직접 정하나요?',
    answer:
      '배정된 요청의 시간이 안 맞으면 다른 시간을 제안할 수 있어요. 이용자가 확정하면 그 시간으로 정해져요. 다만 이용자가 "이 시간에 꼭 가야 해요"를 켜둔 요청은 시간을 바꿀 수 없어요.',
  },
  {
    question: '활동을 못 하는 달이 있어도 되나요?',
    answer:
      '괜찮아요. 활동한 만큼 활동비를 받는 구조라 활동이 없는 달에는 정산할 내역이 없을 뿐이에요.',
  },
  {
    question: '어느 지역에서 활동하게 되나요?',
    answer:
      '지원할 때 고른 읍·면에서 활동해요. 사는 곳과 가까운 요청이 우선 배정돼요.',
  },
] as const;

// ─── 하단 CTA ──────────────────────────────────────────────────────────────

export const CTA_TITLE = '마을에서 시작해보세요';
export const CTA_DESCRIPTION =
  '지원서를 쓰고 교육을 마치면, 사는 곳 가까이에서 첫 활동을 시작해요.';
