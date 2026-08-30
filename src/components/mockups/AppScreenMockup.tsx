import Image from 'next/image';

import { PhoneFrame } from './PhoneFrame';
import type { AppScreenVariant } from '@/lib/types';

/**
 * 앱 화면 목업.
 *
 * 팀에서 만든 실제 프로토타입(preview.html, 30개 화면)의 디자인 문법을 그대로 옮겼다.
 * 영문 eyebrow → 굵은 2행 제목 → 얇은 행 목록 → 알약 배지, 그리고 하단 탭.
 * 화면에 쓰인 이름·시간·금액도 프로토와 같은 값을 쓴다.
 *
 * TODO(placeholder): 프로토가 최종 디자인이 되면 캡처로 교체한다.
 * imageSrc만 넘기면 그대로 바뀐다.
 *   <AppScreenMockup variant="new-request" imageSrc="/app/new-request.png" />
 *
 * 프레임 폭 240~290px를 전제로 글자 크기를 맞췄다.
 */
export function AppScreenMockup({
  variant,
  caption,
  imageSrc,
  tilt,
  className = '',
}: {
  variant: AppScreenVariant;
  caption?: string;
  imageSrc?: string;
  tilt?: boolean;
  className?: string;
}) {
  return (
    <figure className={className}>
      <PhoneFrame tilt={tilt}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={caption ?? ''}
            fill
            sizes="290px"
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-white" aria-hidden>
            {SCREENS[variant]}
          </div>
        )}
      </PhoneFrame>
      {caption && (
        <figcaption className="mt-5 text-center text-sm leading-relaxed text-body">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ─── 화면 조각 ─────────────────────────────────────────────────────────────

/** 화면 위쪽 영문 라벨. 프로토가 전 화면에서 쓰는 방식이다. */
function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-1.5 text-[6.5px] font-bold uppercase tracking-[0.14em] text-[#9aa5a3]">
      {children}
    </p>
  );
}

/** 굵은 2행 제목. */
function Title({ lines }: { lines: readonly [string, string?] }) {
  return (
    <h3 className="text-[14px] font-extrabold leading-[1.32] tracking-[-0.03em] text-[#0d1a18]">
      {lines[0]}
      {lines[1] && (
        <>
          <br />
          {lines[1]}
        </>
      )}
    </h3>
  );
}

function Sub({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-1.5 text-[7px] leading-[1.6] text-[#7c8a88]">{children}</p>
  );
}

/** 오른쪽에 값이 붙는 얇은 행. */
function Row({
  label,
  value,
  strong,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-center justify-between border-b border-[#f0f3f2] py-[7px]">
      <span className="text-[7.5px] text-[#8b9997]">{label}</span>
      <span
        className={`text-[7.5px] ${
          strong ? 'font-bold text-[#0d1a18]' : 'font-medium text-[#26332f]'
        }`}
      >
        {value}
      </span>
    </div>
  );
}

const PILL = {
  brand: 'border-brand/40 bg-brand-weak text-[#00706b]',
  plain: 'border-[#dfe5e4] bg-white text-[#5f6d6b]',
  warn: 'border-[#f0d9a8] bg-warn text-warn-ink',
} as const;

function Pill({
  children,
  tone = 'plain',
}: {
  children: string;
  tone?: keyof typeof PILL;
}) {
  return (
    <span
      className={`shrink-0 rounded-pill border px-[5px] py-[1.5px] text-[6px] font-bold ${PILL[tone]}`}
    >
      {children}
    </span>
  );
}

/** 요청·일정 한 줄. 제목 + 배지 / 아래 잔글씨. */
function ListItem({
  title,
  meta,
  badge,
  badgeTone,
  tag,
}: {
  title: string;
  meta: string;
  badge?: string;
  badgeTone?: keyof typeof PILL;
  tag?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-2 border-b border-[#f0f3f2] py-2.5">
      <div className="min-w-0">
        <p className="flex items-center gap-1 text-[8.5px] font-bold text-[#0d1a18]">
          <span className="truncate">{title}</span>
          {tag && (
            <span className="shrink-0 rounded-pill border border-[#dfe5e4] px-[4px] py-px text-[5.5px] font-semibold text-[#7c8a88]">
              {tag}
            </span>
          )}
        </p>
        <p className="mt-[3px] truncate text-[6.5px] text-[#8b9997]">{meta}</p>
      </div>
      {badge && <Pill tone={badgeTone}>{badge}</Pill>}
    </div>
  );
}

/** 섹션 제목 + 오른쪽 보조 링크. */
function SectionHead({ title, aside }: { title: string; aside?: string }) {
  return (
    <div className="mb-1 mt-4 flex items-baseline justify-between">
      <p className="text-[9.5px] font-extrabold tracking-[-0.02em] text-[#0d1a18]">
        {title}
      </p>
      {aside && <span className="text-[6.5px] text-[#8b9997]">{aside}</span>}
    </div>
  );
}

/** 입력 칸. */
function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-2.5">
      <p className="mb-1 text-[6.5px] font-bold text-[#5f6d6b]">{label}</p>
      <div className="flex h-[22px] items-center rounded-[7px] border border-[#e4eae9] px-2 text-[7.5px] font-medium text-[#26332f]">
        {value}
      </div>
    </div>
  );
}

/** 하단 탭. 프로토의 요청자 탭 구성을 따른다. */
function TabBar({ active }: { active: string }) {
  const tabs = ['내 요청', '이용 내역', '마이페이지', '알림'];
  return (
    <div className="mt-auto flex items-center justify-around border-t border-[#eef1f0] pb-2.5 pt-2">
      {tabs.map((t) => (
        <span
          key={t}
          className={`text-[6px] font-semibold ${
            t === active ? 'text-brand' : 'text-[#a7b2b0]'
          }`}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

/** 화면을 감싸는 껍데기. 프로토처럼 여백을 넉넉히 준다. */
function Screen({
  children,
  tab,
  back,
}: {
  children: React.ReactNode;
  tab?: string;
  back?: string;
}) {
  return (
    <div className="flex h-full flex-col bg-white">
      {back && (
        <p className="px-4 pb-1 pt-4 text-[7px] text-[#8b9997]">← {back}</p>
      )}
      <div className={`flex-1 overflow-hidden px-4 ${back ? '' : 'pt-5'}`}>
        {children}
      </div>
      {tab && <TabBar active={tab} />}
    </div>
  );
}

// ─── 화면별 구성 ───────────────────────────────────────────────────────────

const SCREENS: Record<AppScreenVariant, React.ReactNode> = {
  /** requester-home — 요청자 홈 */
  'requester-home': (
    <Screen tab="내 요청">
      <p className="text-[6.5px] text-[#8b9997]">경상북도 청도군 다로리</p>

      <div className="mt-3 rounded-[10px] bg-canvas-tint px-3 py-3 text-center">
        <p className="text-[8.5px] font-bold text-[#0d1a18]">
          다음 매니저 방문 예정은
        </p>
        <p className="mt-0.5 text-[11px] font-extrabold text-[#0d1a18]">
          08. 29 (토) 11:00
        </p>
        <p className="mt-1 text-[6.5px] text-[#8b9997]">
          긴급 돌봄이 필요하신가요?
        </p>
      </div>

      <SectionHead title="나의 요청" aside="더 보기 →" />
      <ListItem
        title="화·목 아이 픽업"
        tag="정기"
        meta="화양읍 00길 · 8월 25일 오전 11:00"
        badge="검토 중"
      />
      <ListItem
        title="월·수 등하원 동행"
        tag="정기"
        meta="화양읍 00길 · 8월 25일 오후 4:30"
        badge="반려"
        badgeTone="warn"
      />
      <ListItem
        title="병원 진료 동행"
        tag="긴급"
        meta="화양읍 00길 · 9월 1일 오후 2:00"
        badge="승인"
        badgeTone="brand"
      />
    </Screen>
  ),

  /** new-request — 새 요청 */
  'new-request': (
    <Screen back="내 요청">
      <Eyebrow>NEW REQUEST</Eyebrow>
      <Title lines={['어떤 도움이', '필요한가요?']} />

      <p className="mb-1.5 mt-3.5 text-[6.5px] font-bold text-[#5f6d6b]">
        돌봄 유형
      </p>
      <div className="grid grid-cols-2 gap-1.5">
        {[
          ['동행', true],
          ['병원·이동 라이딩', false],
          ['집안일 도움', false],
          ['식사 지원', false],
        ].map(([label, on]) => (
          <div
            key={label as string}
            className={`flex h-[26px] items-center justify-center rounded-[8px] text-[7px] font-semibold ${
              on
                ? 'bg-brand-weak text-[#00706b]'
                : 'border border-[#e4eae9] text-[#5f6d6b]'
            }`}
          >
            {label as string}
          </div>
        ))}
      </div>

      <Field label="희망 날짜" value="2026. 09. 01 (화)" />
      <Field label="희망 시간" value="오전 11:00" />

      <div className="mt-2.5 flex items-center gap-1.5">
        <span className="h-[7px] w-[7px] rounded-[2px] border border-[#c9d3d1]" />
        <span className="text-[6.5px] text-[#5f6d6b]">
          이 시간에 꼭 가야 해요
        </span>
      </div>
    </Screen>
  ),

  /** request-detail — 요청 상세 */
  'request-detail': (
    <Screen back="내 요청">
      <Eyebrow>REQUEST DETAIL</Eyebrow>
      <div className="flex items-start justify-between gap-2">
        <Title lines={['병원 진료 동행']} />
        <Pill>접수됨</Pill>
      </div>

      <div className="mt-3">
        <Row label="희망 일시" value="09. 01 (화) 14:00" />
        <Row label="돌봄 유형" value="동행" />
        <Row label="대상자" value="김아이 · 아동" />
        <Row label="담당 매니저" value="이민지" strong />
      </div>

      <p className="mt-2.5 text-[7px] leading-relaxed text-[#5f6d6b]">
        병원 진료 후 귀가 동행이 필요합니다.
      </p>

      <SectionHead title="메시지" />
      <p className="text-[6.5px] text-[#8b9997]">아직 메시지가 없어요.</p>
      <div className="mt-1.5 flex h-[20px] items-center rounded-[7px] border border-[#e4eae9] px-2 text-[6.5px] text-[#a7b2b0]">
        메시지를 입력해 주세요
      </div>
    </Screen>
  ),

  /** helper-home — 매니저 홈 */
  'helper-home': (
    <Screen tab="마이페이지">
      <p className="text-[11px] font-extrabold tracking-[-0.03em] text-[#0d1a18]">
        안녕하세요, 김도움님
      </p>

      <SectionHead title="긴급 돌봄 요청" aside="1건" />
      <ListItem
        title="김아이 · 동행"
        meta="09. 01 14:00 · 청도읍 · 꼭 해당 시간"
        badge="확인"
      />

      <SectionHead title="오늘·다가오는 돌봄" aside="2건" />
      <ListItem
        title="오늘 11:00 · 김아이"
        meta="화양읍 · 아이 픽업"
        badge="예정"
        badgeTone="brand"
      />
      <ListItem
        title="내일 16:30 · 김어르신"
        meta="청도읍 · 병원 동행"
        badge="확정"
      />

      <SectionHead title="돌봄 관련 알림" aside="3건" />
      <ListItem
        title="정기 일정 변경 요청"
        meta="김아이 · 수·금 11:00으로 변경 요청"
        badge="확인"
      />
    </Screen>
  ),

  /** activity — 활동 인증 */
  activity: (
    <Screen back="배정 요청">
      <Eyebrow>ACTIVITY</Eyebrow>
      <Title lines={['활동 인증']} />
      <Sub>김아이 · 09. 01 14:00 · 동행</Sub>

      <div className="mt-4 space-y-2">
        <div className="rounded-[10px] border border-[#e4eae9] p-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[8px] font-bold text-[#0d1a18]">① 활동 시작</p>
            <Pill>대기</Pill>
          </div>
          <p className="mt-1 text-[6.5px] text-[#8b9997]">
            GPS 위치와 시작 시각을 기록해요.
          </p>
        </div>

        <div className="rounded-[10px] border border-[#e4eae9] p-2.5 opacity-60">
          <div className="flex items-center justify-between">
            <p className="text-[8px] font-bold text-[#0d1a18]">② 활동 종료</p>
            <Pill>잠김</Pill>
          </div>
          <p className="mt-1 text-[6.5px] text-[#8b9997]">
            종료 후 활동일지를 작성해요.
          </p>
        </div>
      </div>
    </Screen>
  ),

  /** log-new — 활동일지 작성 */
  'log-new': (
    <Screen back="활동일지">
      <Eyebrow>NEW LOG</Eyebrow>
      <Title lines={['활동일지 작성']} />

      <Field label="대상자" value="김아이" />
      <Field label="활동 유형" value="일반" />
      <Field label="활동 장소" value="청도읍" />

      <div className="mt-2.5">
        <p className="mb-1 text-[6.5px] font-bold text-[#5f6d6b]">활동 내용</p>
        <div className="h-[34px] rounded-[7px] border border-[#e4eae9] px-2 py-1.5 text-[6.5px] leading-relaxed text-[#a7b2b0]">
          활동 내용을 작성해 주세요
        </div>
      </div>

      <p className="mt-3 text-[6px] leading-relaxed text-[#8b9997]">
        제출 후 검토 대기 상태가 되며, 관리자 승인 후 활동비 정산에 반영돼요.
      </p>
    </Screen>
  ),

  /** helper-payments — 출금·정산 */
  'helper-payments': (
    <Screen tab="마이페이지">
      <Eyebrow>PAYMENTS</Eyebrow>
      <Title lines={['출금·정산']} />

      <div className="mt-3.5">
        <p className="text-[6.5px] text-[#8b9997]">출금 가능 잔액</p>
        {/* 프로토와 같은 값. 실제 단가는 아직 확정 전이다. */}
        <p className="mt-0.5 text-[17px] font-extrabold tracking-[-0.03em] text-[#0d1a18]">
          ₩180,000
        </p>
      </div>

      <div className="mt-3 flex h-[24px] items-center justify-center rounded-pill bg-brand text-[8px] font-bold text-[#04211f]">
        출금 요청
      </div>

      <SectionHead title="월별 정산 내역" />
      <ListItem title="2026년 8월" meta="활동 8건 · 승인" badge="₩240,000" />
    </Screen>
  ),

  /** helper-care — 돌봄방 */
  'helper-care': (
    <Screen tab="마이페이지">
      <Eyebrow>CARE ROOMS</Eyebrow>
      <Title lines={['돌봄 관리']} />
      <Sub>요청자별 돌봄방에서 일정, 돌봄 내용, 채팅, 활동일지를 관리해요.</Sub>

      <div className="mt-3.5 space-y-2">
        {[
          ['김아이 돌봄방', '김하늘 요청자 · 아동', '화·목 아이 픽업 · 11:00 · 화양읍'],
          ['김어르신 돌봄방', '박서연 요청자 · 어르신', '월·수 병원 동행 · 16:30 · 청도읍'],
        ].map(([title, who, when]) => (
          <div
            key={title}
            className="rounded-[10px] border border-[#e4eae9] p-2.5"
          >
            <p className="text-[8.5px] font-bold text-[#0d1a18]">{title}</p>
            <p className="mt-[3px] text-[6.5px] text-[#8b9997]">{who}</p>
            <p className="mt-[2px] text-[6.5px] text-[#8b9997]">{when}</p>
          </div>
        ))}
      </div>
    </Screen>
  ),
};
