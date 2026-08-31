import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { SectionLabel, SectionTitle } from '@/components/ui/SectionLabel';
import {
  DAILY_MOMENTS,
  DAILY_MOMENTS_LABEL,
  DAILY_MOMENTS_TITLE,
} from '@/lib/content/home';

export function DailyMomentsSection() {
  return (
    <Section>
      <SectionLabel>{DAILY_MOMENTS_LABEL}</SectionLabel>
      <SectionTitle>{DAILY_MOMENTS_TITLE}</SectionTitle>

      <div className="mt-12 grid gap-4 sm:mt-14 md:grid-cols-3">
        {DAILY_MOMENTS.map((item, i) => (
          <div key={item.title} data-animate data-delay={String(i + 2)}>
            <Card {...item} className="h-full" />
          </div>
        ))}
      </div>
    </Section>
  );
}
