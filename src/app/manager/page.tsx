import type { Metadata } from 'next';

import { RegionMap } from '@/components/diagrams/RegionMap';
import { StatusStepMap } from '@/components/diagrams/StatusStepMap';
import { StepFlow } from '@/components/diagrams/StepFlow';
import { AppScreenMockup } from '@/components/mockups/AppScreenMockup';
import { PageHero } from '@/components/sections/PageHero';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Card, Surface } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { Section } from '@/components/ui/Section';
import { SectionLabel, SectionTitle } from '@/components/ui/SectionLabel';
import { APP_APPLY_URL } from '@/lib/constants';
import * as C from '@/lib/content/manager';

export const metadata: Metadata = {
  title: '돌봄매니저',
  description:
    '사는 마을에서 이웃을 돕고 활동한 만큼 활동비를 받습니다. 지원부터 첫 활동까지 다섯 단계와 활동 지역을 안내합니다.',
  openGraph: {
    title: '돌봄매니저 | DOUM',
    description:
      '사는 마을에서 이웃을 돕고 활동한 만큼 활동비를 받습니다. 지원부터 첫 활동까지 안내합니다.',
  },
};

export default function ManagerPage() {
  return (
    <>
      <PageHero
        title={C.HERO_TITLE}
        subline={C.HERO_SUBLINE}
        actions={
          <>
            <Button href={APP_APPLY_URL} size="lg" external>
              지원하기
            </Button>
            <Button href="#process" variant="secondary" size="lg">
              지원 절차 보기
            </Button>
          </>
        }
      />

      {/* C-2 하는 일 */}
      <Section>
        <SectionLabel>{C.WORK_LABEL}</SectionLabel>
        <SectionTitle>{C.WORK_TITLE}</SectionTitle>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {C.WORK_TYPES.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>

        <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-[1fr_280px] lg:gap-16">
          <ul className="space-y-3">
            {C.WORK_NOTES.map((note) => (
              <li
                key={note}
                className="flex items-start gap-3 text-[16px] leading-relaxed text-body sm:text-[17px]"
              >
                <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-brand" />
                {note}
              </li>
            ))}
          </ul>

          {/* 매니저가 앱에서 무엇을 보는지 */}
          <div className="flex justify-center lg:justify-end">
            <AppScreenMockup
              variant="helper-home"
              caption="오늘 갈 곳과 알림이 한눈에 보여요"
              className="w-[240px] sm:w-[272px]"
            />
          </div>
        </div>
      </Section>

      {/* C-4 지원 절차 — 이 페이지에서 가장 큰 자리 */}
      <Section id="process" tone="tint" space="xl">
        <SectionLabel>{C.PROCESS_LABEL}</SectionLabel>
        <SectionTitle>{C.PROCESS_TITLE}</SectionTitle>

        <div className="mt-12 sm:mt-14">
          <StepFlow steps={C.PROCESS_STEPS} />
        </div>

        <div className="mt-4">
          <StatusStepMap stepCount={C.PROCESS_STEPS.length} />
        </div>
      </Section>

      {/* C-5 활동비 */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <SectionLabel>{C.PAY_LABEL}</SectionLabel>
            <SectionTitle>{C.PAY_TITLE}</SectionTitle>

            <ol className="mt-10 space-y-3">
              {C.PAY_FLOW.map((step, i) => (
                <li
                  key={step.title}
                  className="flex items-center gap-4 rounded-card border border-line bg-white px-5 py-4 shadow-card"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-pill bg-brand-weak text-[13px] font-bold text-[#00706b]">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-[15px] font-bold tracking-tight text-ink">
                      {step.title}
                    </p>
                    <p className="mt-0.5 text-[13px] text-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-8 text-[15px] leading-relaxed text-body">
              {C.PAY_NOTE}
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <AppScreenMockup
              variant="helper-payments"
              className="w-[240px] sm:w-[272px]"
            />
          </div>
        </div>
      </Section>

      {/* C-6 활동 지역 */}
      <Section>
        <SectionLabel>{C.REGION_LABEL}</SectionLabel>
        <SectionTitle>{C.REGION_TITLE}</SectionTitle>
        <p className="mt-4 text-[16px] leading-relaxed text-body sm:text-[17px]">
          {C.REGION_NOTE}
        </p>

        <div className="mt-12">
          <RegionMap />
        </div>
      </Section>

      {/* C-7 자주 묻는 질문 — 아래 CTA와 한 덩어리로 읽히게 배경을 이어둔다 */}
      <Section tone="tint" space="md">
        <SectionLabel>{C.FAQ_LABEL}</SectionLabel>
        <SectionTitle>{C.FAQ_TITLE}</SectionTitle>

        <div className="mt-12">
          <Accordion items={C.FAQ} />
        </div>
      </Section>

      {/* 하단 CTA */}
      <Section tone="tint" space="md" className="pt-0 sm:pt-0">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTitle>{C.CTA_TITLE}</SectionTitle>
          <p className="mt-5 text-[16px] leading-relaxed text-body sm:text-lg">
            {C.CTA_DESCRIPTION}
          </p>
          <div className="mt-10 flex justify-center">
            <Button href={APP_APPLY_URL} size="lg" external>
              지원하기
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
