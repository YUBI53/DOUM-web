import type { Metadata } from 'next';

import { StepFlow } from '@/components/diagrams/StepFlow';
import { AdminDashboardMockup } from '@/components/mockups/AdminDashboardMockup';
import { PageHero } from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { Card, Surface } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { Section } from '@/components/ui/Section';
import { SectionLabel, SectionTitle } from '@/components/ui/SectionLabel';
import { APP_LOGIN_URL } from '@/lib/constants';
import * as C from '@/lib/content/service';

export const metadata: Metadata = {
  title: 'SERVICE',
  description:
    '병원 동행부터 집안일까지, 필요한 도움을 요청하면 같은 마을 돌봄매니저가 찾아옵니다. 신청부터 방문, 활동 기록까지 안내합니다.',
  openGraph: {
    title: 'SERVICE | DOUM',
    description:
      '병원 동행부터 집안일까지, 필요한 도움을 요청하면 같은 마을 돌봄매니저가 찾아옵니다.',
  },
};

export default function ServicePage() {
  return (
    <>
      <PageHero
        title={C.HERO_TITLE}
        subline={C.HERO_SUBLINE}
        actions={
          <Button href={APP_LOGIN_URL} size="lg">
            DEMO
          </Button>
        }
        scene="visit"
      />

      {/* B-2 도움 종류 */}
      <Section>
        <SectionLabel>{C.HELP_TYPES_LABEL}</SectionLabel>
        <SectionTitle>{C.HELP_TYPES_TITLE}</SectionTitle>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {C.HELP_TYPES.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </Section>

      {/* B-3 이용 방법 */}
      <Section tone="tint" space="xl">
        <SectionLabel>{C.HOW_LABEL}</SectionLabel>
        <SectionTitle>{C.HOW_TITLE}</SectionTitle>

        <div className="mt-16 sm:mt-20">
          <StepFlow
            steps={C.HOW_STEPS}
            highlightIndex={1}
            highlightNote={C.HOW_HIGHLIGHT}
            withScreens
          />
        </div>
      </Section>

      {/* B-4 활동 기록 */}
      <Section>
        <SectionLabel>{C.RECORD_LABEL}</SectionLabel>
        <SectionTitle>{C.RECORD_TITLE}</SectionTitle>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2">
          {C.RECORD_POINTS.map((item) => (
            <Surface key={item.title} className="flex gap-5 p-7 sm:p-8">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-pill bg-brand-weak text-brand">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-[17px] font-bold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-body">
                  {item.description}
                </p>
              </div>
            </Surface>
          ))}
        </div>
      </Section>

      {/* B-5 운영 — 페이지를 닫는 자리라 배경을 옅게 깐다 */}
      <Section tone="tint">
        <SectionLabel>{C.OPERATION_LABEL}</SectionLabel>
        <SectionTitle>{C.OPERATION_TITLE}</SectionTitle>

        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          {C.OPERATION_POINTS.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2 text-[15px] text-body"
            >
              <span className="h-1.5 w-1.5 rounded-pill bg-brand" aria-hidden />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <AdminDashboardMockup />
        </div>
      </Section>
    </>
  );
}
