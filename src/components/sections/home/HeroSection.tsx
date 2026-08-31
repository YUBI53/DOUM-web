import { AppScreenMockup } from '@/components/mockups/AppScreenMockup';
import { Container } from '@/components/ui/Container';
import { HERO_HEADLINE, HERO_SUBLINE } from '@/lib/content/home';
import { PROGRAM_PARTNER_LINE } from '@/lib/constants';

/**
 * 홈 히어로. 화면 폭을 그대로 쓰는 펼쳐진 사각형이다.
 * 카테고리 페이지는 같은 뼈대에 글자와 여백만 줄여 구분한다.
 *
 * 들어오자마자 위에서부터 차례로 떠오른다.
 * 스크롤이 아니라 로드 시점이라 CSS 지연만으로 처리한다.
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <HeroField />

      <Container className="relative">
        <div className="grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:py-32">
          <div>
            <p
              className="animate-fade-up text-[13px] font-semibold tracking-tight text-muted sm:text-sm"
              style={{ animationDelay: '0ms' }}
            >
              {PROGRAM_PARTNER_LINE}
            </p>

            <h1 className="mt-6 text-[32px] font-bold leading-[1.32] tracking-tightest text-ink sm:text-[44px] lg:text-[52px]">
              {HERO_HEADLINE.map((line, i) => (
                <span
                  key={line}
                  className="block animate-fade-up"
                  style={{ animationDelay: `${120 + i * 110}ms` }}
                >
                  {i === HERO_HEADLINE.length - 1 ? (
                    <span className="text-brand">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            <p
              className="mt-7 animate-fade-up text-[19px] font-[450] leading-relaxed text-body sm:text-[21px]"
              style={{ animationDelay: '430ms' }}
            >
              {HERO_SUBLINE}
            </p>
          </div>

          <div
            className="flex animate-rise justify-center lg:justify-center"
            style={{ animationDelay: '260ms' }}
          >
            <div className="relative">
              <AppScreenMockup
                variant="requester-home"
                tilt
                priority
                className="w-[248px] animate-float sm:w-[280px]"
              />

              {/* 앱이 쓰는 그대로. 정기는 민트, 긴급은 앰버. */}
              <FloatingTag
                tone="brand"
                tag="정기"
                text="화·목 아이 픽업"
                className="-left-16 top-[6%] sm:-left-32"
                delay={700}
              />
              <FloatingTag
                tone="accent"
                tag="긴급"
                text="병원 진료 동행"
                className="-right-14 top-[70%] sm:-right-28"
                delay={840}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const TONES = {
  brand: 'border-brand/30 text-[#00706b]',
  accent: 'border-accent/40 text-accent-ink',
} as const;

const DOTS = {
  brand: 'bg-brand',
  accent: 'bg-accent',
} as const;

/** 폰 옆에 떠 있는 작은 표. 화면 안 배지가 작아 안 읽히는 것을 밖으로 꺼낸 것이다. */
function FloatingTag({
  tone,
  tag,
  text,
  className,
  delay,
}: {
  tone: keyof typeof TONES;
  tag: string;
  text: string;
  className: string;
  delay: number;
}) {
  return (
    <div
      className={`absolute hidden animate-fade-up items-center gap-2 rounded-pill border bg-white/95 py-2.5 pl-3 pr-4 shadow-soft backdrop-blur-sm sm:flex ${TONES[tone]} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className={`h-1.5 w-1.5 rounded-pill ${DOTS[tone]}`} aria-hidden />
      <span className="text-[12px] font-bold">{tag}</span>
      <span className="text-[13px] font-semibold text-ink">{text}</span>
    </div>
  );
}

/**
 * 히어로가 자기 구역으로 읽히게 하는 배경.
 * 민트 원 하나를 아주 옅게 깔아 오른쪽 폰 뒤가 비지 않게 한다.
 */
function HeroField() {
  return (
    <div
      className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white to-canvas-tint"
      aria-hidden
    >
      <div className="absolute -right-24 top-4 h-[520px] w-[520px] rounded-pill bg-brand/[0.07] blur-3xl" />
      <div className="absolute -left-16 bottom-0 h-[320px] w-[320px] rounded-pill bg-accent/[0.06] blur-3xl" />
    </div>
  );
}
