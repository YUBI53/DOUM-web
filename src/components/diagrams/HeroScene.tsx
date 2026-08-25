/**
 * 카테고리 페이지 히어로의 장면 일러스트.
 *
 * 세 페이지가 같은 선 굵기와 같은 민트를 쓰고 장면만 달라진다.
 * 면을 칠하지 않고 선으로만 그려, 나중에 사진이 들어와도 부딪히지 않는다.
 */
export type HeroSceneName = 'visit' | 'village' | 'land';

const STROKE = '#00D5C8';

export function HeroScene({ name }: { name: HeroSceneName }) {
  return (
    <svg
      viewBox="0 0 420 300"
      className="h-auto w-full max-w-[420px]"
      fill="none"
      stroke={STROKE}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="presentation"
      aria-hidden
    >
      {SCENES[name]}
    </svg>
  );
}

const SCENES: Record<HeroSceneName, React.ReactNode> = {
  /** SERVICE — 집 앞에 선 두 사람. 찾아가는 장면. */
  visit: (
    <>
      {/* 땅 */}
      <path d="M20 250h380" strokeOpacity="0.35" />

      {/* 집 */}
      <path d="M228 250v-92l62-44 62 44v92" />
      <path d="M214 166l76-54 76 54" />
      <path d="M272 250v-46h36v46" />
      <rect x="316" y="182" width="24" height="22" rx="3" strokeOpacity="0.55" />

      {/* 찾아온 사람 */}
      <circle cx="128" cy="150" r="14" />
      <path d="M128 164v46" />
      <path d="M128 178l-22 14M128 178l22 10" />
      <path d="M128 210l-14 40M128 210l14 40" />
      {/* 들고 있는 것 */}
      <rect x="150" y="184" width="22" height="18" rx="3" strokeOpacity="0.55" />

      {/* 맞이하는 사람 */}
      <circle cx="204" cy="164" r="12" strokeOpacity="0.55" />
      <path d="M204 176v34" strokeOpacity="0.55" />
      <path d="M204 188l16 8M204 188l-14 10" strokeOpacity="0.55" />
      <path d="M204 210l-10 40M204 210l10 40" strokeOpacity="0.55" />

      {/* 둘 사이에 오가는 것 */}
      <circle cx="166" cy="120" r="4" fill={STROKE} stroke="none" />
      <circle cx="182" cy="112" r="2.5" fill={STROKE} stroke="none" opacity="0.6" />
      <circle cx="196" cy="108" r="1.8" fill={STROKE} stroke="none" opacity="0.4" />
    </>
  ),

  /** 돌봄매니저 — 마을 집들 사이를 걸어 도는 사람. */
  village: (
    <>
      <path d="M20 250h380" strokeOpacity="0.35" />

      {/* 마을 집 세 채 */}
      <path d="M40 250v-52l34-26 34 26v52" />
      <path d="M30 200l44-34 44 34" strokeOpacity="0.7" />
      <path d="M62 250v-28h24v28" strokeOpacity="0.55" />

      <path d="M170 250v-70l40-30 40 30v70" />
      <path d="M158 182l52-40 52 40" strokeOpacity="0.7" />
      <path d="M196 250v-34h28v34" strokeOpacity="0.55" />

      <path d="M310 250v-46l30-24 30 24v46" />
      <path d="M300 206l40-32 40 32" strokeOpacity="0.7" />
      <path d="M330 250v-24h20v24" strokeOpacity="0.55" />

      {/* 집을 잇는 길 */}
      <path
        d="M74 250c26-28 62-28 88-2s72 24 96-6"
        strokeDasharray="5 8"
        strokeOpacity="0.6"
      />

      {/* 걸어 도는 사람 */}
      <circle cx="140" cy="196" r="12" />
      <path d="M140 208v34" />
      <path d="M140 218l-18 12M140 218l16 8" />
      <path d="M140 242l-12 30M140 242l14 28" />

      {/* 들른 곳 표시 */}
      <circle cx="74" cy="250" r="4" fill={STROKE} stroke="none" />
      <circle cx="340" cy="250" r="4" fill={STROKE} stroke="none" opacity="0.5" />
    </>
  ),

  /** ABOUT — 언덕과 과수원 줄. 청도의 결. */
  land: (
    <>
      {/* 먼 산 */}
      <path d="M20 150l64-52 46 38 40-32 58 46" strokeOpacity="0.45" />
      <path d="M188 150l52-40 62 50 58-42 20 16" strokeOpacity="0.3" />

      {/* 밭 경계 */}
      <path d="M20 186h380" strokeOpacity="0.35" />
      <path d="M20 250h380" strokeOpacity="0.35" />

      {/* 과수원 줄 — 같은 간격으로 늘어선 나무 */}
      {[62, 118, 174, 230, 286, 342].map((x, i) => (
        <g key={x} strokeOpacity={i % 2 === 0 ? 0.85 : 0.55}>
          <path d={`M${x} 218v-24`} />
          <path d={`M${x} 200c-11 0-18-7-18-15s7-14 18-14 18 6 18 14-7 15-18 15z`} />
        </g>
      ))}

      {/* 밭 사이 길 */}
      <path d="M112 250c34-22 70-26 116-26s86 6 118 26" strokeOpacity="0.5" />

      {/* 다로리 마을 자리 */}
      <circle cx="228" cy="224" r="4.5" fill={STROKE} stroke="none" />
    </>
  ),
};
