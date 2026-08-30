import { LogoMark } from './LogoMark';

/** 프로토타입의 비율(마크 18 : 글자 21)을 따른다. */
const SIZES = {
  sm: { mark: 'h-[15px] w-[15px]', word: 'text-[17px]' },
  // GNB에서 쓴다. 옆 메뉴(15px)와 위계가 벌어지도록 크게 잡았다.
  md: { mark: 'h-[21px] w-[21px]', word: 'text-[25px]' },
  lg: { mark: 'h-[27px] w-[27px]', word: 'text-[32px]' },
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
        className={`${s.word} font-extrabold leading-none tracking-[-0.06em] text-ink`}
      >
        DOUM
      </span>
    </span>
  );
}
