import { Container } from './Container';

/**
 * 섹션 배경으로 스크롤 리듬을 만든다.
 * 짙은 면(ink)과 색면(brand)은 홈에서만, 각각 한 번씩만 쓴다.
 */
const TONES = {
  plain: 'bg-white',
  /** 섹션을 나누는 아주 옅은 민트. */
  tint: 'bg-canvas-tint',
  /** 짙은 잉크. 홈 순환 도식 한 곳에만. */
  ink: 'bg-[#0C1413] text-[#E8EFEE]',
  /** 민트 색면. 한 줄만 크게 던지는 자리에만. */
  brand: 'bg-brand text-white',
} as const;

const SPACES = {
  sm: 'py-14 sm:py-16',
  md: 'py-20 sm:py-24',
  lg: 'py-24 sm:py-32',
  /** 홈 A-3처럼 가장 넓은 자리를 주는 섹션. */
  xl: 'py-28 sm:py-36 lg:py-44',
} as const;

export function Section({
  children,
  id,
  tone = 'plain',
  space = 'lg',
  className = '',
}: {
  children: React.ReactNode;
  id?: string;
  tone?: keyof typeof TONES;
  space?: keyof typeof SPACES;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`${TONES[tone]} ${SPACES[space]} ${className} scroll-mt-20`}
    >
      <Container>{children}</Container>
    </section>
  );
}
