import { LogoMark } from './LogoMark';

const SIZES = {
  sm: { mark: 'h-5 w-5', word: 'text-lg' },
  // GNB에서 쓴다. 옆 메뉴(15px)와 위계가 벌어지도록 크게 잡았다.
  md: { mark: 'h-[26px] w-[26px]', word: 'text-[25px]' },
  lg: { mark: 'h-8 w-8', word: 'text-3xl' },
} as const;

/**
 * 마크 + DOUM 워드마크.
 * 로고를 쓰는 곳은 전부 이 컴포넌트를 거친다.
 */
export function Logo({
  size = 'md',
  className = '',
}: {
  size?: keyof typeof SIZES;
  className?: string;
}) {
  const s = SIZES[size];

  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <LogoMark className={`${s.mark} text-brand`} />
      <span
        className={`${s.word} font-extrabold leading-none tracking-tighter text-ink`}
      >
        DOUM
      </span>
    </span>
  );
}
