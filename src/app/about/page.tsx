import type { Metadata } from 'next';

import { PageHero } from '@/components/sections/PageHero';
import { TeamPhotos } from '@/components/sections/about/TeamPhotos';
import { Badge } from '@/components/ui/Badge';
import { Surface } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionLabel, SectionTitle } from '@/components/ui/SectionLabel';
import * as C from '@/lib/content/about';

export const metadata: Metadata = {
  title: 'ABOUT',
  description:
    '작은 일손을 잇는 앱에서 마을 돌봄으로. DOUM을 만든 포로리팀과 청도군·㈜다로리인과의 연계를 소개합니다.',
  openGraph: {
    title: 'ABOUT | DOUM',
    description:
      '작은 일손을 잇는 앱에서 마을 돌봄으로. DOUM을 만든 포로리팀을 소개합니다.',
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero title={C.HERO_TITLE} subline={C.HERO_SUBLINE} />

      {/* D-1 시작 */}
      <Section space="md">
        <SectionLabel>{C.START_LABEL}</SectionLabel>

        <div className="max-w-2xl space-y-6">
          {C.START_PARAGRAPHS.map((paragraph) => (
            <p
              key={paragraph}
              className="text-[16px] leading-[1.85] text-body sm:text-[17px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {/* D-2 만든 사람들 — ABOUT에서 가장 넓은 자리 */}
      <Section tone="tint" space="xl">
        <SectionLabel>{C.TEAM_LABEL}</SectionLabel>
        <SectionTitle accentLine={C.TEAM_TITLE_ACCENT}>
          {C.TEAM_TITLE}
        </SectionTitle>

        <div className="mt-12 max-w-3xl space-y-7 sm:mt-14">
          {C.TEAM_PARAGRAPHS.map((paragraph) => (
            <p
              key={paragraph}
              className="text-[17px] leading-[1.85] text-body sm:text-[18px]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* 사진을 받으면 TeamPhotos.tsx의 PHOTOS만 채우면 여기에 나온다 */}
        <TeamPhotos />

        <ul className="mt-14 grid gap-3 sm:mt-16 sm:grid-cols-3 lg:grid-cols-5">
          {C.TEAM_MEMBERS.map((name) => (
            <li key={name}>
              {/* 나중에 한 줄 소개가 붙을 수 있게 아래 여백을 미리 잡아둔다 */}
              <Surface className="flex h-full flex-col justify-between px-6 pb-10 pt-7">
                <p className="text-[19px] font-bold tracking-tight text-ink">
                  {name}
                </p>
              </Surface>
            </li>
          ))}
        </ul>
      </Section>

      {/* D-3 함께하는 곳 — D-2보다 좁혀 마무리한다 */}
      <Section space="md">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>{C.PARTNERS_LABEL}</SectionLabel>
          <SectionTitle>{C.PARTNERS_TITLE}</SectionTitle>

          <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2">
            {C.PARTNERS.map((partner) => (
              <Surface key={partner.name} className="p-8 sm:p-10">
                <Badge tone="neutral">{partner.role}</Badge>
                <h3 className="mt-5 text-[19px] font-bold tracking-tight text-ink sm:text-xl">
                  {partner.name}
                </h3>
                <ul className="mt-6 space-y-3">
                  {partner.points.map((point) => (
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
        </div>
      </Section>
    </>
  );
}
