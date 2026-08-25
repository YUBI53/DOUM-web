import Link from 'next/link';

const VARIANTS = {
  /** 민트 채움. 페이지마다 한두 번만 쓴다. */
  primary: 'bg-brand text-white hover:bg-[#00c2b6] shadow-card',
  /** 흰 바탕 + 옅은 선. */
  secondary: 'bg-white text-ink border border-line hover:border-brand/40 shadow-card',
  /** 어두운 면 위에서 쓰는 흰 채움. */
  inverse: 'bg-white text-ink hover:bg-white/90',
  /** 배경 없이 글자만. 섹션 끝의 "자세히 보기 →" 같은 자리. */
  ghost: 'text-ink hover:text-brand',
} as const;

const SIZES = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-[15px]',
  lg: 'h-14 px-7 text-base',
  xl: 'h-[60px] px-9 text-[17px]',
} as const;

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  external,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  /** 새 탭으로 연다. 앱으로 넘어가는 링크는 전부 새 탭이다. */
  external?: boolean;
  className?: string;
}) {
  const isExternal = external ?? /^https?:\/\//.test(href);
  const base =
    'inline-flex items-center justify-center gap-1.5 rounded-pill font-semibold ' +
    'transition-colors focus-visible:outline-none focus-visible:ring-2 ' +
    'focus-visible:ring-brand focus-visible:ring-offset-2';

  const cls = `${base} ${VARIANTS[variant]} ${
    variant === 'ghost' ? 'h-auto px-0 text-[15px]' : SIZES[size]
  } ${className}`;

  const label = (
    <>
      {children}
      {isExternal && <span aria-hidden>↗</span>}
    </>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {label}
    </Link>
  );
}
