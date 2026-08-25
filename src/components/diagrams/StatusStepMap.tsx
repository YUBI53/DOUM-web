import { PROCESS_STATUS_ZONES } from '@/lib/content/manager';

/**
 * C-4 하단. 다섯 단계 위에 앱의 실제 상태값(applied → trained → active)을 겹쳐 보여준다.
 * 웹의 절차 안내와 앱의 상태값이 어긋나지 않는다는 것을 한눈에 보이게 하는 자리다.
 */
export function StatusStepMap({ stepCount }: { stepCount: number }) {
  return (
    <div className="rounded-card-lg border border-line bg-white p-6 shadow-card sm:p-8">
      <p className="text-[13px] font-semibold text-muted">
        앱에 기록되는 상태
      </p>

      <div
        className="mt-5 grid gap-2"
        style={{ gridTemplateColumns: `repeat(${stepCount}, minmax(0, 1fr))` }}
      >
        {PROCESS_STATUS_ZONES.map((zone) => {
          const [start, end] = zone.span;
          const isLast = end === stepCount - 1;
          return (
            <div
              key={zone.status}
              style={{ gridColumn: `${start + 1} / ${end + 2}` }}
              className={`rounded-pill px-3 py-2.5 text-center ${
                isLast ? 'bg-brand text-white' : 'bg-brand-weak text-[#00706b]'
              }`}
            >
              <span className="text-[13px] font-bold tracking-tight sm:text-sm">
                {zone.status}
              </span>
            </div>
          );
        })}
      </div>

      <div
        className="mt-2 grid gap-2"
        style={{ gridTemplateColumns: `repeat(${stepCount}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: stepCount }).map((_, i) => (
          <span
            key={i}
            className="text-center text-[11px] font-semibold text-muted"
          >
            STEP {i + 1}
          </span>
        ))}
      </div>
    </div>
  );
}
