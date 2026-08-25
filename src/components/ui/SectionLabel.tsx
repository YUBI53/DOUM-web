/** 섹션 머리의 `/ 라벨` 표기. */
export function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-5 text-sm font-semibold tracking-tight text-muted">
      <span className="mr-1.5 text-brand">/</span>
      {children}
    </p>
  );
}

/**
 * 섹션 제목. 뒷줄만 포인트 컬러를 주는 2행 카피를 지원한다.
 * accentLine을 넘기면 그 줄만 민트로 찍힌다.
 */
export function SectionTitle({
  children,
  accentLine,
  className = '',
}: {
  children: React.ReactNode;
  accentLine?: string;
  className?: string;
}) {
  return (
    <h2
      className={`text-[26px] font-bold leading-[1.35] tracking-tighter text-ink sm:text-[32px] lg:text-[38px] ${className}`}
    >
      {children}
      {accentLine && (
        <>
          <br />
          <span className="text-brand">{accentLine}</span>
        </>
      )}
    </h2>
  );
}

/** 제목 바로 아래 한 줄 설명. */
export function SectionLead({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`mt-4 text-[15px] leading-relaxed text-body sm:text-base ${className}`}
    >
      {children}
    </p>
  );
}
