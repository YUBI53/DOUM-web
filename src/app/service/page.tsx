import type { Metadata } from 'next';

import { StepFlow } from '@/components/diagrams/StepFlow';
import { AppScreenMockup } from '@/components/mockups/AppScreenMockup';
import { PageHero } from '@/components/sections/PageHero';
import { Badge } from '@/components/ui/Badge';
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
          <Button href={APP_LOGIN_URL} size="lg" external>
            DEMO
          </Button>
        }
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

      {/* 돌봄 방식 — 정기가 기본이고 긴급이 따로 있다는 것을 먼저 밝힌다 */}
      <Section space="md">
        <SectionLabel>{C.MODE_LABEL}</SectionLabel>
        <SectionTitle>{C.MODE_TITLE}</SectionTitle>

        <div className="mt-12 grid items-start gap-10 lg:mt-14 lg:grid-cols-[1fr_280px] lg:gap-16">
          <div className="grid gap-5">
          {C.MODES.map((mode) => (
            <Surface key={mode.tag} className="p-8 sm:p-10">
              <Badge tone={mode.tag === '정기' ? 'brand' : 'warn'}>
                {mode.tag}
              </Badge>
              <h3 className="mt-5 text-[20px] font-bold tracking-tight text-ink sm:text-[22px]">
                {mode.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-body sm:text-base">
                {mode.description}
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                {mode.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-[15px] leading-relaxed text-body"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-pill bg-brand"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </Surface>
          ))}
          </div>

          {/* 정기 일정이 앱에서 어떻게 보이는지 */}
          <div className="hidden justify-center lg:flex">
            <AppScreenMockup
              variant="schedule-detail"
              caption="정해둔 일정은 앱에서 이렇게 이어져요"
              className="w-[272px]"
            />
          </div>
        </div>
      </Section>

      {/* 요청하는 사람 — 본인 계정과 보호자 계정 */}
      <Section space="md">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <SectionLabel>{C.WHO_LABEL}</SectionLabel>
            <SectionTitle>{C.WHO_TITLE}</SectionTitle>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {C.WHO_TYPES.map((item) => (
                <Card key={item.title} {...item} />
              ))}
            </div>

            <p className="mt-8 text-[16px] leading-relaxed text-body sm:text-[17px]">
              {C.WHO_NOTE}
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <AppScreenMockup
              variant="account-link"
              className="w-[240px] sm:w-[272px]"
            />
          </div>
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

        <ul className="mt-12 grid gap-4 sm:mt-14 lg:grid-cols-3">
          {C.OPERATION_POINTS.map((point, i) => (
            <li key={point}>
              <Surface className="h-full p-7 sm:p-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-pill bg-brand-weak text-[15px] font-bold text-[#00706b]">
                  {i + 1}
                </span>
                <p className="mt-5 text-[16px] font-semibold leading-relaxed text-ink sm:text-[17px]">
                  {point}
                </p>
              </Surface>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
