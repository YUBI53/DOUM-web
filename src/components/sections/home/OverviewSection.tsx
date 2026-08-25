import { Section } from '@/components/ui/Section';
import { SectionLabel } from '@/components/ui/SectionLabel';
import {
  OVERVIEW_BODY,
  OVERVIEW_GOAL,
  OVERVIEW_LABEL,
  OVERVIEW_THESIS,
} from '@/lib/content/home';

/**
 * A-1.5 개요. 히어로 바로 다음 자리다.
 *
 * 이 서비스가 무엇이고 어떤 문제에서 출발했는지 먼저 밝힌다.
 * 아래의 '마을의 하루'와 순환 도식은 이 문단을 읽은 뒤라야 읽힌다.
 *
 * 공식 설명문이라 이 섹션만 `~습니다`체를 쓴다.
 * 다른 섹션처럼 라벨-제목-카드로 짜지 않고 좌우 두 단으로 두어,
 * 같은 말을 반복하는 것이 아니라 성격이 다른 글임을 형태로 알린다.
 */
export function OverviewSection() {
  return (
    <Section space="lg">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div>
          <SectionLabel>{OVERVIEW_LABEL}</SectionLabel>

          <h2 className="text-[25px] font-bold leading-[1.4] tracking-tighter text-ink sm:text-[30px] lg:text-[34px]">
            {OVERVIEW_THESIS[0]}
            <br />
            <span className="text-brand">{OVERVIEW_THESIS[1]}</span>
          </h2>
        </div>

        <div className="lg:pt-1">
          <div className="space-y-5">
            {OVERVIEW_BODY.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[16px] leading-[1.85] text-body sm:text-[17px]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <p className="mt-8 border-t border-line pt-8 text-[16px] font-semibold leading-relaxed tracking-tight text-ink sm:text-[17px]">
            {OVERVIEW_GOAL}
          </p>
        </div>
      </div>
    </Section>
  );
}
