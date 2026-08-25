'use client';

import { useInView } from './useInView';
import { CYCLE_STEPS } from '@/lib/content/home';
import type { CycleStep } from '@/lib/types';

/**
 * 홈 A-3 순환 도식. 사이트에서 가장 큰 자리를 차지한다.
 *
 * 사업 영역(①④)과 서비스 영역(②③)이 한 원에서 맞물리는 구조라
 * 원 둘레를 두 구간으로 나눠 칠한다.
 * 모바일은 세로 4단, lg 이상에서 원형으로 바뀐다.
 *
 * 위치를 잡는 요소와 등장 애니메이션을 거는 요소를 반드시 나눈다.
 * 한 요소에 겹치면 애니메이션의 transform이 -translate-x-1/2를 덮어써
 * 카드가 원 위에 앉지 않는다.
 */
export function CycleDiagram({
  steps = CYCLE_STEPS,
}: {
  steps?: readonly CycleStep[];
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref}>
      {/* ── 모바일: 세로 4단 ── */}
      <ol className="relative mx-auto max-w-md space-y-3 lg:hidden">
        {/* 세로 연결선 */}
        <span
          className="absolute bottom-8 left-[19px] top-8 w-px bg-line"
          aria-hidden
        />
        {steps.map((step, i) => (
          <li
            key={step.index}
            className={`relative ${inView ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: `${i * 160}ms` }}
          >
            <div className="flex gap-4">
              <StepBadge step={step} />
              <div className="min-w-0 flex-1 rounded-card border border-line bg-white p-5 shadow-card">
                <ZoneLabel zone={step.zone} />
                <p className="mt-2 text-[17px] font-bold leading-[1.5] tracking-tight text-ink">
                  {step.lines[0]}
                  <br />
                  {step.lines[1]}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      {/* ── 데스크탑: 원형 ── */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-[720px] lg:block">
        <CycleRing />

        {steps.map((step, i) => (
          // 바깥 div는 위치만 잡는다. transform을 건드리지 않는다.
          <div
            key={step.index}
            className={`absolute w-[246px] ${POSITIONS[step.index]}`}
          >
            <div
              className={inView ? 'animate-fade-up' : 'opacity-0'}
              style={{ animationDelay: `${i * 220}ms` }}
            >
              <div className="rounded-card-lg border border-line bg-white p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <StepBadge step={step} />
                  <ZoneLabel zone={step.zone} />
                </div>
                <p className="mt-3 text-[18px] font-bold leading-[1.5] tracking-tight text-ink">
                  {step.lines[0]}
                  <br />
                  {step.lines[1]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** ① 위, ② 오른쪽, ③ 아래, ④ 왼쪽 */
const POSITIONS: Record<CycleStep['index'], string> = {
  1: 'left-[calc(50%-123px)] top-0',
  2: 'right-0 top-[calc(50%-72px)]',
  3: 'bottom-0 left-[calc(50%-123px)]',
  4: 'left-0 top-[calc(50%-72px)]',
};

function StepBadge({ step }: { step: CycleStep }) {
  return (
    <span
      className={`flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-pill text-[15px] font-bold ${
        step.zone === 'service'
          ? 'bg-brand text-white'
          : 'bg-ink text-white'
      }`}
    >
      {step.index}
    </span>
  );
}

function ZoneLabel({ zone }: { zone: CycleStep['zone'] }) {
  const isService = zone === 'service';
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[12px] font-bold ${
        isService ? 'text-brand' : 'text-muted'
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-pill ${
          isService ? 'bg-brand' : 'bg-muted'
        }`}
        aria-hidden
      />
      {isService ? '서비스' : '사업'}
    </span>
  );
}

/** 원 둘레와 진행 방향 화살표. 데스크탑에서만 그린다. */
function CycleRing() {
  // 위=0°, 시계 방향. 화살표는 마디와 마디 사이(45·135·225·315)에 놓는다.
  const arrows = [45, 135, 225, 315];

  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      {/* 사업 구간: ④ → ① (왼쪽 위 반원) */}
      <path
        d="M23.13 76.87 A38 38 0 0 1 76.87 23.13"
        fill="none"
        stroke="#E4E7EB"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* 서비스 구간: ② → ③ (오른쪽 아래 반원) */}
      <path
        d="M76.87 23.13 A38 38 0 0 1 23.13 76.87"
        fill="none"
        stroke="#00D5C8"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {arrows.map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x = 50 + 38 * Math.sin(rad);
        const y = 50 - 38 * Math.cos(rad);
        // 45·135도는 서비스 구간 위의 화살표다.
        const color = deg === 45 || deg === 135 ? '#00D5C8' : '#D5D9DF';
        return (
          <polygon
            key={deg}
            points="0,-2.6 2,1.6 -2,1.6"
            fill={color}
            transform={`translate(${x} ${y}) rotate(${deg + 90})`}
          />
        );
      })}
    </svg>
  );
}
