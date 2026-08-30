/**
 * 앱 화면을 담는 기기 프레임.
 * 디자인시스템 5장: 앱 실화면은 폰 목업에 넣어 배치하고,
 * 기울이는 연출(tilt)은 히어로에서만 쓴다.
 */
export function PhoneFrame({
  children,
  tilt = false,
  className = '',
}: {
  children: React.ReactNode;
  tilt?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-[2.25rem] border border-line bg-white p-2.5 shadow-lift ${
        tilt ? 'rotate-[-4deg]' : ''
      } ${className}`}
    >
      {/* 노치 */}
      <div
        className="absolute left-1/2 top-4 z-10 h-4 w-20 -translate-x-1/2 rounded-pill bg-ink/90"
        aria-hidden
      />
      <div className="relative aspect-[393/893] w-full overflow-hidden rounded-[1.75rem] bg-canvas-tint">
        {children}
      </div>
    </div>
  );
}
