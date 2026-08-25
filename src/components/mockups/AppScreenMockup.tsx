import Image from 'next/image';

import { PhoneFrame } from './PhoneFrame';
import { LogoMark } from '@/components/brand/LogoMark';
import type { AppScreenVariant } from '@/lib/types';

/**
 * 앱 화면 목업.
 *
 * TODO(placeholder): 앱 실화면 캡처가 아직 없어 화면을 코드로 그려두었다.
 * 캡처를 받으면 imageSrc만 넘기면 그대로 교체된다. 이 파일 밖은 손대지 않아도 된다.
 *   <AppScreenMockup variant="request-send" imageSrc="/app/request-send.png" />
 *
 * 프레임 폭은 240~290px 사이를 전제로 글자 크기를 맞췄다.
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

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-4 pb-1 pt-3.5 text-[8px] font-semibold text-ink">
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-pill bg-ink/70" />
        <span className="h-1.5 w-4 rounded-[2px] bg-ink/70" />
      </span>
    </div>
  );
}

function AppBar({ title }: { title?: string }) {
  return (
    <div className="flex items-center gap-1.5 px-4 py-2.5">
      {title ? (
        <>
          <span className="text-[11px] text-muted">←</span>
          <span className="text-[11px] font-bold text-ink">{title}</span>
        </>
      ) : (
        <>
          <LogoMark className="h-3 w-3 text-brand" />
          <span className="text-[11px] font-extrabold tracking-tighter text-ink">
            DOUM
          </span>
        </>
      )}
    </div>
  );
}

function Chip({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <span
      className={`whitespace-nowrap rounded-pill px-2.5 py-1 text-[8px] font-semibold ${
        active ? 'bg-brand text-white' : 'bg-chip text-body'
      }`}
    >
      {children}
    </span>
  );
}

function RequestRow({
  title,
  who,
  meta,
  badge,
  isNew,
}: {
  title: string;
  who: string;
  meta: string;
  badge?: string;
  isNew?: boolean;
}) {
  return (
    <div className="rounded-[10px] border border-line bg-white p-2.5 shadow-card">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="flex items-center gap-1 text-[9.5px] font-bold text-ink">
            <span className="truncate">{title}</span>
            {isNew && (
              <span className="shrink-0 rounded-pill bg-brand px-1 py-px text-[6px] font-bold text-white">
                NEW
              </span>
            )}
          </p>
          <p className="mt-1 truncate text-[7.5px] text-muted">{who}</p>
          <p className="mt-0.5 truncate text-[7.5px] text-muted">{meta}</p>
        </div>
        {badge && (
          <span className="shrink-0 rounded-pill bg-brand-weak px-1.5 py-0.5 text-[7px] font-bold text-[#00807a]">
            {badge}
          </span>
        )}
      </div>
    </div>
  );
}

function PrimaryBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-auto px-3.5 pb-4 pt-3">
      <div className="flex h-8 items-center justify-center rounded-pill bg-brand text-[9.5px] font-bold text-white">
        {children}
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-1 text-[8px] font-semibold text-muted">{label}</p>
      <div className="flex h-7 items-center rounded-[9px] border border-line bg-white px-2.5 text-[9px] font-medium text-ink">
        {value}
      </div>
    </div>
  );
}

// ─── 화면별 구성 ───────────────────────────────────────────────────────────

const SCREENS: Record<AppScreenVariant, React.ReactNode> = {
  /** 홈 목록 — 키비주얼의 추천 도움 요청 화면 */
  'request-list': (
    <div className="flex h-full flex-col bg-white">
      <StatusBar />
      <AppBar />
      <div className="px-4">
        <p className="text-[12px] font-bold text-ink">안녕하세요, 민수님</p>
        <p className="mt-0.5 flex items-center gap-0.5 text-[7.5px] text-muted">
          경상북도 청도군 화양읍
        </p>
        <div className="mt-2.5 flex h-6 items-center rounded-pill bg-chip px-2.5 text-[8px] text-muted">
          어떤 일이 있는지 찾아볼까요?
        </div>
        <div className="mt-2 flex gap-1 overflow-hidden">
          <Chip active>전체</Chip>
          <Chip>이동</Chip>
          <Chip>일손</Chip>
          <Chip>생활</Chip>
        </div>
      </div>
      <div className="mt-3 flex-1 space-y-1.5 overflow-hidden bg-canvas-tint px-3 pt-3">
        <RequestRow
          title="병원 진료 동행"
          who="김복자 어르신"
          meta="6월 4일 오전 9:00 · 1.0km"
          badge="1/2명"
          isNew
        />
        <RequestRow
          title="마루 청소"
          who="최분이 할머니"
          meta="6월 2일 오전 9:00 · 600m"
          badge="1/3명"
        />
        <RequestRow
          title="시장 짐 들어주기"
          who="강복현 어르신"
          meta="6월 6일 오후 4:00 · 1.4km"
        />
      </div>
    </div>
  ),

  /** STEP 1 — 어떤 도움이 필요한지 고르기 */
  'request-send': (
    <div className="flex h-full flex-col bg-white">
      <StatusBar />
      <AppBar title="도움 요청" />
      <div className="space-y-3 px-4 pt-1">
        <div>
          <p className="mb-1.5 text-[8px] font-semibold text-muted">도움 종류</p>
          <div className="grid grid-cols-2 gap-1.5">
            {[
              ['병원·이동', true],
              ['동행', false],
              ['집안일', false],
              ['식사 지원', false],
            ].map(([label, active]) => (
              <div
                key={label as string}
                className={`flex h-8 items-center justify-center rounded-[10px] text-[9px] font-semibold ${
                  active
                    ? 'border border-brand bg-brand-weak text-[#00807a]'
                    : 'border border-line bg-white text-body'
                }`}
              >
                {label as string}
              </div>
            ))}
          </div>
        </div>
        <Field label="날짜" value="6월 4일 (화)" />
        <Field label="시간" value="오전 9:00" />
        <div>
          <p className="mb-1 text-[8px] font-semibold text-muted">
            남기고 싶은 말
          </p>
          <div className="h-11 rounded-[9px] border border-line bg-white px-2.5 py-1.5 text-[8px] leading-relaxed text-muted">
            보건소까지만 태워주시면 됩니다
          </div>
        </div>
      </div>
      <PrimaryBar>요청 보내기</PrimaryBar>
    </div>
  ),

  /** STEP 2 — 매니저가 시간을 맞춰요 */
  'visit-confirm': (
    <div className="flex h-full flex-col bg-white">
      <StatusBar />
      <AppBar title="시간 조율" />
      <div className="space-y-2 px-4 pt-1">
        <div className="rounded-[10px] border border-line bg-white p-2.5 shadow-card">
          <p className="text-[8px] font-semibold text-muted">요청한 시간</p>
          <p className="mt-1 text-[10px] font-bold text-ink line-through decoration-muted">
            6월 4일 오전 9:00
          </p>
        </div>
        <div className="rounded-[10px] border border-brand bg-brand-weak p-2.5">
          <p className="text-[8px] font-semibold text-[#00807a]">
            매니저가 제안한 시간
          </p>
          <p className="mt-1 text-[11px] font-bold text-ink">
            6월 4일 오전 10:30
          </p>
          <p className="mt-1.5 text-[7.5px] leading-relaxed text-body">
            앞 일정이 있어 조금 늦게 도착합니다
          </p>
        </div>
        <div className="flex items-start gap-1.5 rounded-[10px] bg-warn p-2.5">
          <span className="text-[9px] leading-none text-warn-ink">!</span>
          <p className="text-[7.5px] font-medium leading-relaxed text-warn-ink">
            &ldquo;이 시간에 꼭 가야 해요&rdquo;를 켜두면 시간은 바뀌지 않아요
          </p>
        </div>
      </div>
      <PrimaryBar>이 시간으로 확정</PrimaryBar>
    </div>
  ),

  /** STEP 3 — 정해진 시간에 방문 */
  'manager-assigned': (
    <div className="flex h-full flex-col bg-white">
      <StatusBar />
      <AppBar title="방문 예정" />
      <div className="space-y-2.5 px-4 pt-1">
        <div className="rounded-[10px] border border-line bg-white p-3 shadow-card">
          <div className="flex items-center gap-2">
            <span className="h-7 w-7 rounded-pill bg-brand-weak" />
            <div>
              <p className="text-[10px] font-bold text-ink">이정미 매니저</p>
              <p className="text-[7.5px] text-muted">화양읍 · 활동 중</p>
            </div>
          </div>
          <div className="mt-2.5 flex items-center justify-between rounded-[8px] bg-canvas-tint px-2.5 py-2">
            <span className="text-[8px] text-muted">방문 시간</span>
            <span className="text-[9px] font-bold text-ink">
              6월 4일 오전 10:30
            </span>
          </div>
        </div>
        <div className="relative h-24 overflow-hidden rounded-[10px] bg-canvas-tint">
          <svg viewBox="0 0 200 100" className="h-full w-full">
            <path
              d="M-10 70 Q40 40 80 62 T210 40"
              fill="none"
              stroke="#EDEFF2"
              strokeWidth="10"
            />
            <path
              d="M20 -10 Q50 40 40 110"
              fill="none"
              stroke="#EDEFF2"
              strokeWidth="8"
            />
            <circle cx="118" cy="52" r="16" fill="#00D5C8" opacity="0.14" />
            <circle cx="118" cy="52" r="5" fill="#00D5C8" />
          </svg>
          <span className="absolute bottom-2 left-2 rounded-pill bg-white/90 px-2 py-0.5 text-[7px] font-semibold text-body">
            도착까지 약 8분
          </span>
        </div>
      </div>
      <PrimaryBar>도착 확인하기</PrimaryBar>
    </div>
  ),

  /** STEP 4 — 활동 기록 */
  'activity-complete': (
    <div className="flex h-full flex-col bg-white">
      <StatusBar />
      <AppBar title="활동일지" />
      <div className="px-4 pt-1">
        <div className="flex flex-col items-center rounded-[12px] bg-brand-weak px-3 py-3.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-pill bg-brand text-[11px] font-bold text-white">
            ✓
          </span>
          <p className="mt-1.5 text-[10px] font-bold text-ink">활동 완료</p>
          <p className="mt-0.5 text-[7.5px] text-body">6월 4일 · 1시간 20분</p>
        </div>
        <div className="mt-2.5 space-y-1.5">
          <div className="flex items-center justify-between rounded-[9px] border border-line bg-white px-2.5 py-2">
            <span className="text-[8px] text-muted">도착 시각</span>
            <span className="text-[8.5px] font-semibold text-ink">
              오전 10:28
            </span>
          </div>
          <div className="flex items-center justify-between rounded-[9px] border border-line bg-white px-2.5 py-2">
            <span className="text-[8px] text-muted">위치 확인</span>
            <span className="text-[8.5px] font-semibold text-[#00807a]">
              자동 기록됨
            </span>
          </div>
        </div>
        <div className="mt-2.5">
          <p className="mb-1 text-[8px] font-semibold text-muted">활동 사진</p>
          <div className="grid grid-cols-3 gap-1.5">
            <span className="aspect-square rounded-[8px] bg-chip" />
            <span className="aspect-square rounded-[8px] bg-chip" />
            <span className="flex aspect-square items-center justify-center rounded-[8px] border border-dashed border-line text-[11px] text-muted">
              +
            </span>
          </div>
        </div>
      </div>
      <PrimaryBar>일지 제출</PrimaryBar>
    </div>
  ),

  /** 활동비 정산 — 금액은 확정 전이라 비워 둔다 */
  settlement: (
    <div className="flex h-full flex-col bg-white">
      <StatusBar />
      <AppBar title="활동비" />
      <div className="space-y-2.5 px-4 pt-1">
        <div className="rounded-[12px] bg-ink p-3 text-white">
          <p className="text-[8px] text-white/60">이번 달 정산 예정</p>
          {/* TODO(placeholder): 활동비 단가 확정 전까지 금액을 쓰지 않는다. */}
          <div className="mt-2 h-4 w-24 rounded-[4px] bg-white/20" />
          <p className="mt-2 text-[7.5px] text-white/60">검토 완료 6건</p>
        </div>
        {[
          ['병원 진료 동행', '6월 4일', '검토 완료'],
          ['마루 청소', '6월 2일', '검토 완료'],
          ['말벗', '6월 1일', '검토 중'],
        ].map(([title, date, status]) => (
          <div
            key={title}
            className="flex items-center justify-between rounded-[10px] border border-line bg-white px-2.5 py-2 shadow-card"
          >
            <div>
              <p className="text-[9px] font-bold text-ink">{title}</p>
              <p className="mt-0.5 text-[7.5px] text-muted">{date}</p>
            </div>
            <span
              className={`rounded-pill px-1.5 py-0.5 text-[7px] font-bold ${
                status === '검토 중'
                  ? 'bg-warn text-warn-ink'
                  : 'bg-brand-weak text-[#00807a]'
              }`}
            >
              {status}
            </span>
          </div>
        ))}
      </div>
      <PrimaryBar>출금 신청</PrimaryBar>
    </div>
  ),
};
