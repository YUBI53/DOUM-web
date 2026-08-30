import type { CardItem, StepItem } from '@/lib/types';

/** SERVICE 카피. docs/웹기획안.md의 B-1 ~ B-6. */

// ─── B-1 히어로 ────────────────────────────────────────────────────────────

export const HERO_TITLE = '가까운 이웃이 찾아갑니다';
export const HERO_SUBLINE =
  '필요한 도움을 요청하면 같은 마을 돌봄매니저가 정해진 시간에 방문합니다.';

// ─── B-2 도움 종류 ─────────────────────────────────────────────────────────

export const HELP_TYPES_LABEL = '도움 종류';
export const HELP_TYPES_TITLE = '이런 도움을 요청할 수 있어요';

export const HELP_TYPES: readonly CardItem[] = [
  {
    icon: 'car',
    title: '병원·이동 라이딩',
    description: '보건소나 병원까지 차로 모셔다드려요',
  },
  {
    icon: 'walk',
    title: '동행',
    description: '장 보기, 관공서 방문 등 함께 다녀와요',
  },
  {
    icon: 'broom',
    title: '집안일 도움',
    description: '청소, 정리 등 손이 필요한 일을 도와드려요',
  },
  {
    icon: 'meal',
    title: '식사 지원',
    description: '반찬을 만들거나 배달해드려요',
  },
  {
    icon: 'plus',
    title: '그 외',
    description: '하교 후 돌봄, 말벗 등 필요한 도움을 적어주세요',
  },
] as const;

// ─── B-3 이용 방법 ─────────────────────────────────────────────────────────

export const HOW_LABEL = '이용 방법';
export const HOW_TITLE = '신청부터 방문까지 네 단계';

export const HOW_STEPS: readonly StepItem[] = [
  {
    title: '어떤 도움이 필요한지 고르기',
    description: '도움 종류와 원하는 날짜·시간을 선택해요',
    screen: 'new-request-emergency',
  },
  {
    title: '매니저가 시간을 맞춰요',
    description:
      '시간이 어려우면 다른 시간을 제안하고, 이용자가 확정하면 정해져요',
    screen: 'request-detail',
  },
  {
    title: '정해진 시간에 방문',
    description: '매니저가 직접 찾아와 활동을 진행해요',
    screen: 'activity',
  },
  {
    title: '활동 기록',
    description: '오늘 무엇을 했는지 기록으로 남아요',
    screen: 'log-new',
  },
] as const;

/** 기능 설명에 묻지 않게 따로 꺼내 보여주는 문장. STEP 2에 붙는다. */
export const HOW_HIGHLIGHT =
  '"이 시간에 꼭 가야 해요"를 켜두면 시간은 바뀌지 않아요.';

// ─── B-4 활동 기록 ─────────────────────────────────────────────────────────

export const RECORD_LABEL = '활동 기록';
export const RECORD_TITLE = '모든 활동은 기록으로 남아요';

export const RECORD_POINTS: readonly CardItem[] = [
  {
    icon: 'pin',
    title: '도착 확인',
    description: '도착한 시각과 위치가 자동으로 기록돼요',
  },
  {
    icon: 'camera',
    title: '활동일지',
    description: '무엇을 했는지 사진과 함께 남아요',
  },
  {
    icon: 'shield',
    title: '운영자 확인',
    description: '남은 기록은 운영자가 확인해요',
  },
  {
    icon: 'calendar',
    title: '약속한 시간',
    description: '약속한 시간은 임의로 바뀌지 않아요',
  },
] as const;

// ─── B-5 운영 ──────────────────────────────────────────────────────────────

export const OPERATION_LABEL = '운영';
export const OPERATION_TITLE = '활동일지는 운영자가 검토해요';

export const OPERATION_POINTS = [
  '읍·면별 수요와 매니저 배치를 지도에서 봐요',
  '올라온 활동일지를 하나씩 검토해요',
  '예산 집행과 활동비 정산을 관리해요',
] as const;
