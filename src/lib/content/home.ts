import type { CardItem, CycleStep, PreviewBandData } from '@/lib/types';

/**
 * 홈 카피. docs/웹기획안.md의 A-1 ~ A-5를 그대로 옮긴 것이다.
 * 기획안 원문의 옛 편의명 '다로리'는 확정 서비스명 'DOUM'으로 바꿔 적었다.
 */

// ─── A-1 히어로 ────────────────────────────────────────────────────────────

export const HERO_HEADLINE = [
  '돌봄이 필요한 사람도,',
  '돌볼 수 있는 사람도',
  '같은 마을 안에 있습니다',
] as const;

export const HERO_SUBLINE = 'DOUM은 그 둘을 잇습니다. 돌봄은 이웃에게, 일은 마을에.';

// ─── A-1.5 개요 ────────────────────────────────────────────────────────────
//
// 히어로 바로 다음에 둔다. 이 서비스가 무엇이고 어떤 문제에서 출발했는지
// 알고 나야 아래의 '마을의 하루'와 순환 도식이 읽힌다.
// 공식 설명문이라 이 섹션만 `~습니다`체를 쓴다.

export const OVERVIEW_LABEL = '개요';

/** 이 서비스가 왜 필요했는지. 사이트 전체의 전제다. */
export const OVERVIEW_THESIS = [
  '농촌의 돌봄은',
  '짧고 자주 필요한 도움에서 비어 있었습니다',
] as const;

/**
 * TODO(확인 필요): 사업 정식 명칭이 확정되지 않았다.
 * 앱에는 '청도군 돌봄매니저 양성사업'으로 되어 있고,
 * 확인되는 공식 명칭은 '마을돌봄공동체 육성 지원사업'이다. (CLAUDE.md §9)
 */
export const OVERVIEW_BODY = [
  'DOUM은 청도군 마을돌봄공동체 육성 지원사업과 연계해, 마을 주민을 돌봄매니저로 양성하고 도움이 필요한 이웃과 연결하는 지역 돌봄 서비스입니다.',
  '병원 동행, 하교 후 돌봄, 집안일, 식사 지원 등의 요청을 받아 같은 마을의 돌봄매니저가 방문하며, 모든 활동은 방문 시각과 위치, 활동일지로 기록되고 운영자의 검토를 거쳐 활동비로 정산됩니다.',
] as const;

export const OVERVIEW_GOAL =
  '돌봄의 공백을 메우는 동시에, 마을 안에 일자리를 만드는 것을 목표로 합니다.';

// ─── A-2 마을의 하루 ───────────────────────────────────────────────────────

export const DAILY_MOMENTS_LABEL = '마을의 하루';
export const DAILY_MOMENTS_TITLE = '이런 순간에 도움이 필요해요';

export const DAILY_MOMENTS: readonly CardItem[] = [
  {
    icon: 'car',
    title: '병원 가는 길',
    description: '버스는 하루 세 대, 혼자 나서기엔 먼 길이에요',
  },
  {
    icon: 'clock',
    title: '하교 후 세 시간',
    description: '부모님이 돌아오기 전까지 아이는 혼자 있어요',
  },
  {
    icon: 'meal',
    title: '혼자 차리는 저녁',
    description: '반찬 한 가지가 하루를 바꾸기도 해요',
  },
] as const;

// ─── A-3 순환 도식 ─────────────────────────────────────────────────────────

export const CYCLE_LABEL = 'DOUM이 도는 방식';
export const CYCLE_TITLE = '마을 안에서 돌봄이 돌아가요';

/** ①④는 사업 영역, ②③은 서비스 영역. */
export const CYCLE_STEPS: readonly CycleStep[] = [
  {
    index: 1,
    zone: 'program',
    lines: ['마을에 사는 사람이', '돌봄매니저가 됩니다'],
  },
  {
    index: 2,
    zone: 'service',
    lines: ['앱으로 필요한', '이웃과 연결됩니다'],
  },
  {
    index: 3,
    zone: 'service',
    lines: ['활동한 만큼', '활동비를 받습니다'],
  },
  {
    index: 4,
    zone: 'program',
    lines: ['그 소득이', '마을에 남습니다'],
  },
] as const;

export const CYCLE_CLOSING = '돌봄의 공백은 메워지고, 일자리는 마을에 남습니다.';

// ─── A-4 · A-5 미리보기 띠 ─────────────────────────────────────────────────
//
// 두 블록은 본편이 아니라 각 페이지로 넘어가는 미리보기 축소판이다.
// 완전히 같은 뼈대를 쓰고, 순환 도식보다 작게 둔다.

export const PREVIEW_BANDS: readonly PreviewBandData[] = [
  {
    label: '돌봄 서비스',
    title: '필요한 도움을 요청하면',
    titleAccent: '매니저가 찾아와요',
    href: '/service',
    linkLabel: 'SERVICE 자세히 보기',
    // TODO: 3D 아이콘을 받으면 이 문구와 짝지어 오른쪽에 놓는다.
    points: [
      '필요한 도움을 골라 요청을 보내요',
      '매니저와 시간을 맞춰 확정해요',
      '활동이 끝나면 기록으로 남아요',
    ],
    icons: ['plus', 'calendar', 'camera'],
  },
  {
    label: '돌봄매니저',
    title: '이웃을 돕고',
    titleAccent: '활동비를 받는 일이에요',
    href: '/manager',
    linkLabel: '돌봄매니저 알아보기',
    // TODO: 3D 아이콘을 받으면 이 문구와 짝지어 오른쪽에 놓는다.
    points: [
      '살고 있는 마을에서 활동해요',
      '교육을 마치면 시작할 수 있어요',
      '활동한 만큼 활동비를 받아요',
    ],
    icons: ['home', 'check', 'wallet'],
  },
] as const;
