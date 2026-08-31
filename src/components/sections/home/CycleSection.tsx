import { CycleDiagram } from '@/components/diagrams/CycleDiagram';
import { Section } from '@/components/ui/Section';
import { SectionLabel, SectionTitle } from '@/components/ui/SectionLabel';
import { CYCLE_LABEL, CYCLE_TITLE } from '@/lib/content/home';

/**
 * 홈에서 가장 큰 자리를 차지하는 섹션.
 * 바로 다음에 오는 색면 띠가 이 도식의 결론을 한 줄로 받는다.
 *
 * TODO: 배경을 무슨 색으로 뒤집을지는 아직 정하지 않았다.
 * 검은 면은 이 서비스와 안 어울려 뺐다.
 */
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
    </Section>
  );
}
