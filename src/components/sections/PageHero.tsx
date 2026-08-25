import { HeroScene, type HeroSceneName } from '@/components/diagrams/HeroScene';
import { Container } from '@/components/ui/Container';

/**
 * SERVICE·돌봄매니저·ABOUT의 히어로.
 *
 * 홈과 같은 펼쳐진 사각형을 쓰되, 제목을 한 단계 작게 하고 위아래 여백을 좁힌다.
 * 형태를 바꾸지 않고 크기와 여백만으로 홈과 구분한다.
 * 히어로 카피는 `~습니다`체를 쓴다.
 */
export function PageHero({
  title,
  subline,
  actions,
  scene,
}: {
  title: string;
  subline?: string;
  actions?: React.ReactNode;
  /** 오른쪽에 놓을 장면 일러스트 */
  scene?: HeroSceneName;
}) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white to-canvas-tint"
        aria-hidden
      />

      <Container className="relative">
        <div
          className={`gap-12 py-16 sm:py-24 ${
            scene ? 'grid items-center lg:grid-cols-[1.1fr_1fr]' : ''
          }`}
        >
          <div className={scene ? '' : 'max-w-2xl'}>
            <h1 className="text-[27px] font-bold leading-[1.36] tracking-tightest text-ink sm:text-[36px] lg:text-[40px]">
              {title}
            </h1>

            {subline && (
              <p className="mt-6 max-w-lg text-[18px] font-[450] leading-relaxed text-body sm:text-[19px]">
                {subline}
              </p>
            )}

            {actions && (
              <div className="mt-9 flex flex-wrap gap-3">{actions}</div>
            )}
          </div>

          {scene && (
            <div className="hidden justify-end lg:flex">
              <HeroScene name={scene} />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
