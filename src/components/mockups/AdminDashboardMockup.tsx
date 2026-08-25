import { CHEONGDO_REGIONS } from '@/lib/constants';

/**
 * 관리자 대시보드 목업. SERVICE B-5에서 쓴다.
 *
 * TODO(placeholder): 관리자 실화면 캡처를 받으면 이 컴포넌트를 이미지로 바꾼다.
 * 배치된 수치는 화면 구조를 보여주기 위한 예시이며 실적이 아니다.
 */
export function AdminDashboardMockup() {
  return (
    <div className="overflow-hidden rounded-card-lg border border-line bg-white shadow-lift">
      {/* 창 상단 */}
      <div className="flex items-center gap-1.5 border-b border-line bg-canvas-tint px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-pill bg-line" />
        <span className="h-2.5 w-2.5 rounded-pill bg-line" />
        <span className="h-2.5 w-2.5 rounded-pill bg-line" />
        <span className="ml-3 text-[11px] font-semibold text-muted">
          DOUM 관리자
        </span>
      </div>

      <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[1.1fr_1fr]">
        {/* 읍·면별 수요·매니저 배치 */}
        <Panel title="읍·면별 수요와 매니저 배치">
          <div className="grid grid-cols-3 gap-1.5">
            {CHEONGDO_REGIONS.map((region, i) => {
              // 화면 구조를 보여주기 위한 배치 예시일 뿐 실제 수요가 아니다.
              const level = [2, 1, 0, 1, 2, 0, 1, 0, 1][i];
              const bg = ['bg-chip', 'bg-brand-weak', 'bg-brand/25'][level];
              return (
                <div
                  key={region}
                  className={`rounded-[10px] ${bg} px-2 py-2.5 text-center`}
                >
                  <p className="text-[11px] font-bold text-ink">{region}</p>
                  <div className="mt-1.5 flex items-center justify-center gap-0.5">
                    {Array.from({ length: level + 1 }).map((_, d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 rounded-pill bg-brand"
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Panel>

        <div className="grid gap-4">
          {/* 활동일지 검토 */}
          <Panel title="활동일지 검토">
            <ul className="space-y-1.5">
              {[
                ['병원 진료 동행 · 화양읍', '검토 대기'],
                ['마루 청소 · 청도읍', '검토 대기'],
                ['말벗 · 매전면', '승인'],
              ].map(([label, status]) => (
                <li
                  key={label}
                  className="flex items-center justify-between rounded-[10px] border border-line px-3 py-2.5"
                >
                  <span className="truncate text-[12px] font-medium text-body">
                    {label}
                  </span>
                  <span
                    className={`shrink-0 rounded-pill px-2 py-0.5 text-[10px] font-bold ${
                      status === '승인'
                        ? 'bg-brand-weak text-[#00807a]'
                        : 'bg-warn text-warn-ink'
                    }`}
                  >
                    {status}
                  </span>
                </li>
              ))}
            </ul>
          </Panel>

          {/* 예산 집행과 활동비 정산 */}
          <Panel title="예산 집행과 활동비 정산">
            <div className="space-y-2.5">
              {['이번 달 정산 예정', '집행 누계'].map((label) => (
                <div key={label}>
                  <div className="flex items-center justify-between text-[11px] text-muted">
                    <span>{label}</span>
                    {/* TODO(placeholder): 활동비 단가·예산 규모 미확정. 금액을 쓰지 않는다. */}
                    <span className="h-2.5 w-14 rounded-[3px] bg-chip" />
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-pill bg-chip">
                    <div
                      className="h-full rounded-pill bg-brand"
                      style={{ width: label === '집행 누계' ? '46%' : '68%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-card border border-line p-4">
      <p className="mb-3 text-[12px] font-bold text-ink">{title}</p>
      {children}
    </div>
  );
}
