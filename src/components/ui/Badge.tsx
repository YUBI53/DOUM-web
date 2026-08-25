const TONES = {
  brand: 'bg-brand-weak text-[#00807a]',
  warn: 'bg-warn text-warn-ink',
  neutral: 'bg-chip text-body',
  outline: 'border border-line bg-white text-body',
} as const;

/** 알약 배지. 상태 표기, 사업 연계 표기 등에 쓴다. */
export function Badge({
  children,
  tone = 'brand',
  className = '',
}: {
  children: React.ReactNode;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-pill px-3.5 py-1.5 text-[13px] font-semibold ${TONES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

/** 돌봄매니저 모집 상태처럼 앞에 점이 붙는 배지. */
export function StatusBadge({
  label,
  tone = 'brand',
}: {
  label: string;
  tone?: keyof typeof TONES;
}) {
  return (
    <Badge tone={tone}>
      <span className="h-1.5 w-1.5 rounded-pill bg-current" aria-hidden />
      {label}
    </Badge>
  );
}

/** 필터 칩 형태의 작은 태그. 읍·면 목록 등에 쓴다. */
export function Chip({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-pill px-4 py-2 text-sm font-medium transition-colors ${
        active ? 'bg-brand text-white' : 'bg-chip text-body'
      }`}
    >
      {children}
    </span>
  );
}
