import { AppScreenMockup } from '@/components/mockups/AppScreenMockup';
import type { StepItem } from '@/lib/types';

/**
 * STEP 띠. SERVICE B-3(4단계)과 돌봄매니저 C-4(5단계)에서 함께 쓴다.
 * 모바일은 세로 목록, lg 이상에서 가로로 편다.
 */
export function StepFlow({
  steps,
  highlightIndex,
  highlightNote,
  withScreens = false,
}: {
  steps: readonly StepItem[];
  /** 강조 박스를 붙일 단계(0부터) */
  highlightIndex?: number;
  highlightNote?: string;
  /** 각 단계에 앱 화면을 함께 보여줄지 */
  withScreens?: boolean;
}) {
  if (withScreens) {
    return (
      <ol className="space-y-14 lg:space-y-20">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
          >
            {/*
              본문은 늘 가운데 경계 쪽에 붙인다.
              왼쪽 열에 올 때는 ml-auto로 오른쪽 끝에 붙여야
              오른쪽 열에 올 때(경계에서 바로 시작)와 화면까지의 거리가 같아진다.
            */}
            <div
              className={`lg:max-w-[460px] ${
                i % 2 === 1 ? 'lg:order-2' : 'lg:ml-auto'
              }`}
            >
              <StepNumber n={i + 1} />
              <h3 className="mt-5 text-[22px] font-bold tracking-tight text-ink sm:text-[26px]">
                {step.title}
              </h3>
              <p className="mt-3.5 text-[16.5px] leading-relaxed text-body sm:text-[17.5px]">
                {step.description}
              </p>
              {highlightIndex === i && highlightNote && (
                <p className="mt-6 rounded-card border border-brand/25 bg-brand-weak px-5 py-4 text-[16px] font-semibold leading-relaxed text-[#00706b]">
                  {highlightNote}
                </p>
              )}
            </div>

            {/* 화면은 양쪽 다 열 가운데에 둔다. 경계까지의 거리가 같아진다. */}
            <div
              className={`flex justify-center ${
                i % 2 === 1 ? 'lg:order-1' : ''
              }`}
            >
              {step.screen && (
                <AppScreenMockup
                  variant={step.screen}
                  className="w-[240px] sm:w-[268px]"
                />
              )}
            </div>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="relative rounded-card-lg border border-line bg-white p-6 shadow-card"
        >
          <StepNumber n={i + 1} />
          <h3 className="mt-4 text-[17px] font-bold tracking-tight text-ink">
            {step.title}
          </h3>
          <p className="mt-2.5 text-[14.5px] leading-relaxed text-body">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}

/** 숫자가 두 번 보이지 않게 STEP 표기 하나만 쓴다. */
function StepNumber({ n }: { n: number }) {
  return (
    <span className="inline-flex items-center rounded-pill bg-brand-weak px-4 py-1.5 text-[15px] font-bold tracking-tight text-[#00706b]">
      STEP {n}
    </span>
  );
}
