import { Container } from './Container';

const TONES = {
  plain: 'bg-white',
  /** 섹션을 나누는 아주 옅은 민트. 사이트 전체에서 한두 번만 쓴다. */
  tint: 'bg-canvas-tint',
} as const;

const SPACES = {
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
