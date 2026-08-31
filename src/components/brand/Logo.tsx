import { LogoMark } from './LogoMark';

/**
 * 마크 + DOUM 워드마크.
 * 로고를 쓰는 곳은 전부 이 컴포넌트를 거친다.
 *
 * 마크는 가로가 세로보다 조금 넓다(314:272). 그 비율로 폭을 잡는다.
 */
const SIZES = {
  sm: { mark: 'h-[15px] w-[17px]', word: 'text-[17px]' },
  md: { mark: 'h-[21px] w-[24px]', word: 'text-[25px]' },
  lg: { mark: 'h-[27px] w-[31px]', word: 'text-[32px]' },
} as const;

export function Logo({
  size = 'md',
  className = '',
}: {
  size?: keyof typeof SIZES;
  className?: string;
}) {
  const s = SIZES[size];

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark className={s.mark} />
      <span
        className={`${s.word} font-extrabold leading-none tracking-[-0.06em] text-ink`}
      >
        DOUM
      </span>
    </span>
  );
}
