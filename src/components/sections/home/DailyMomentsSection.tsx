import { Reveal } from '@/components/motion/Reveal';
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
          <Reveal key={item.title} step={i}>
            <Card {...item} className="h-full" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
