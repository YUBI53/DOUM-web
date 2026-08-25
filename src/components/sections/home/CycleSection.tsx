import { CycleDiagram } from '@/components/diagrams/CycleDiagram';
import { Section } from '@/components/ui/Section';
import { SectionLabel, SectionTitle } from '@/components/ui/SectionLabel';
import { CYCLE_CLOSING, CYCLE_LABEL, CYCLE_TITLE } from '@/lib/content/home';

/** 홈에서 가장 넓은 면적과 여백을 갖는 섹션. */
export function CycleSection() {
  return (
    <Section tone="tint" space="xl">
      <div className="text-center">
        <SectionLabel>{CYCLE_LABEL}</SectionLabel>
        <SectionTitle className="mx-auto">{CYCLE_TITLE}</SectionTitle>
      </div>

      <div className="mt-16 sm:mt-20 lg:mt-24">
        <CycleDiagram />
      </div>

      <p className="mx-auto mt-16 max-w-xl text-center text-[17px] font-bold leading-relaxed tracking-tight text-ink sm:mt-20 sm:text-xl">
        {CYCLE_CLOSING}
      </p>
    </Section>
  );
}
