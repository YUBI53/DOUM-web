import { AppScreenMockup } from '@/components/mockups/AppScreenMockup';
import { Container } from '@/components/ui/Container';
import { HERO_HEADLINE, HERO_SUBLINE } from '@/lib/content/home';
import { PROGRAM_PARTNER_LINE } from '@/lib/constants';

/**
 * 홈 히어로. 화면 폭을 그대로 쓰는 펼쳐진 사각형이다.
 * 카테고리 페이지는 같은 뼈대에 글자와 여백만 줄여 구분한다.
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <HeroField />

      <Container className="relative">
        <div className="grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:py-32">
          <div>
            <p className="text-[13px] font-semibold tracking-tight text-muted sm:text-sm">
              {PROGRAM_PARTNER_LINE}
            </p>

            <h1 className="mt-6 text-[32px] font-bold leading-[1.32] tracking-tightest text-ink sm:text-[44px] lg:text-[52px]">
              {HERO_HEADLINE[0]}
              <br />
              {HERO_HEADLINE[1]}
              <br />
              <span className="text-brand">{HERO_HEADLINE[2]}</span>
            </h1>

            <p className="mt-7 text-[19px] font-[450] leading-relaxed text-body sm:text-[21px]">
              {HERO_SUBLINE}
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <AppScreenMockup
              variant="requester-home"
              tilt
              className="w-[248px] sm:w-[280px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * 히어로가 자기 구역으로 읽히게 하는 배경.
 *
 * TODO: 여기에 들어갈 그래픽을 아직 정하지 않았다.
 * 자리와 여백만 잡아두었으니 정해지면 이 컴포넌트만 채우면 된다.
 */
function HeroField() {
  return (
    <div
      className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white to-canvas-tint"
      aria-hidden
    />
  );
}
