import type { Metadata } from 'next';

import { PageHero } from '@/components/sections/PageHero';
import { TeamPhotos } from '@/components/sections/about/TeamPhotos';
import { Badge } from '@/components/ui/Badge';
import { Surface } from '@/components/ui/Card';
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

      {/* 만든 사람들 — ABOUT의 첫 섹션이자 가장 넓은 자리 */}
      <Section tone="tint" space="xl">
        <SectionLabel>{C.TEAM_LABEL}</SectionLabel>
        <SectionTitle accentLine={C.TEAM_TITLE_ACCENT}>
          {C.TEAM_TITLE}
        </SectionTitle>

        <div className="mt-12 max-w-3xl space-y-7 sm:mt-14">
          {C.TEAM_PARAGRAPHS.map((lines, i) => (
            <p
              key={lines[0]}
              data-animate
              data-delay={String(Math.min(i + 2, 5))}
              className="text-[16px] leading-[1.85] text-body sm:text-[17px]"
            >
              {/* 넓은 화면에서는 적어둔 대로 끊고, 좁으면 자연스럽게 흐르게 둔다 */}
              {lines.map((line) => (
                <span key={line} className="lg:block">
                  {line}{' '}
                </span>
              ))}
            </p>
          ))}
        </div>

        {/* 사진을 받으면 TeamPhotos.tsx의 PHOTOS만 채우면 여기에 나온다 */}
        <TeamPhotos />

        <ul className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 sm:mt-14">
          {C.TEAM_MEMBERS.map((name, i) => (
            <li key={name} className="flex items-center gap-3">
              {i > 0 && (
                <span className="text-muted" aria-hidden>
                  ·
                </span>
              )}
              <span className="text-[15px] font-bold tracking-tight text-ink">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 함께하는 곳 — 팀 섹션보다 좁혀 마무리한다 */}
      <Section space="md">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>{C.PARTNERS_LABEL}</SectionLabel>
          <SectionTitle>{C.PARTNERS_TITLE}</SectionTitle>

          <div className="mt-12 grid gap-8 sm:mt-14 sm:grid-cols-2 lg:gap-10">
            {C.PARTNERS.map((partner) => (
              <Surface key={partner.name} data-animate className="p-8 sm:p-10">
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
