/**
 * 청도군 9개 읍·면 안내.
 *
 * TODO(placeholder): 실제 행정경계 데이터가 없어 대략의 방위만 맞춘 배치다.
 * 정확한 경계 지도가 필요해지면 GeoJSON을 받아 SVG로 교체한다.
 */
const LAYOUT = [
  ['각북면', '이서면', '운문면'],
  ['풍각면', '화양읍', '금천면'],
  ['각남면', '청도읍', '매전면'],
] as const;

/** 다로리 마을이 있는 곳. 사업의 거점이라 눈에 띄게 둔다. */
const BASE_REGION = '화양읍';

export function RegionMap() {
  return (
    <div className="rounded-card-lg border border-line bg-canvas-tint p-5 shadow-card sm:p-8">
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {LAYOUT.flat().map((region, i) => {
          const isBase = region === BASE_REGION;
          // 타일마다 높이를 조금씩 달리해 격자 느낌을 덜어낸다.
          const pad = [0, 8, 4][i % 3];
          return (
            <div
              key={region}
              style={{ marginTop: pad }}
              className={`flex flex-col items-center justify-center rounded-card px-2 py-6 text-center transition-colors sm:py-8 ${
                isBase
                  ? 'bg-brand text-white shadow-card'
                  : 'bg-white text-ink shadow-card'
              }`}
            >
              <span className="text-[15px] font-bold tracking-tight sm:text-base">
                {region}
              </span>
              {isBase && (
                <span className="mt-1.5 text-[11px] font-semibold text-white/80">
                  다로리 마을
                </span>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-center text-[13px] text-muted">
        청도군 9개 읍·면에서 활동해요
      </p>
    </div>
  );
}
