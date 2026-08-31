import { Reveal } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/Button';
import { Surface } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { Section } from '@/components/ui/Section';
import { SectionLabel, SectionTitle } from '@/components/ui/SectionLabel';
import { PREVIEW_BANDS } from '@/lib/content/home';
import type { IconName, PreviewBandData } from '@/lib/types';

/**
 * 홈 A-4 · A-5.
 *
 * 각 페이지로 넘어가는 미리보기라 두 카드가 완전히 같은 뼈대를 쓴다.
 * 본편은 SERVICE와 돌봄매니저 페이지에 있으므로 순환 도식보다 작게 둔다.
 */
export function PreviewSection() {
  return (
    <Section>
      <div className="grid gap-5">
        {PREVIEW_BANDS.map((band, i) => (
          <Reveal key={band.label} step={i}>
            <PreviewCard band={band} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function PreviewCard({ band }: { band: PreviewBandData }) {
  return (
    <Surface className="p-8 sm:p-12 lg:p-14">
      {/* 제목과 버튼을 한 행에 두고, 버튼은 우측 상단에 붙인다 */}
      <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
        <div className="min-w-0">
          <SectionLabel>{band.label}</SectionLabel>
          <SectionTitle accentLine={band.titleAccent}>{band.title}</SectionTitle>
        </div>

        <Button href={band.href} size="xl" className="shrink-0">
          {band.linkLabel}
          <span aria-hidden>→</span>
        </Button>
      </div>

      <ul className="mt-16 grid gap-6 sm:mt-20 sm:grid-cols-3 sm:gap-8">
        {band.points.map((point, i) => (
          <li key={point} className="flex items-start gap-4">
            <PointIcon name={band.icons[i]} />
            <span className="pt-2 text-[16px] font-semibold leading-relaxed tracking-tight text-ink">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </Surface>
  );
}

/**
 * 항목 앞에 놓이는 아이콘.
 *
 * TODO: 3D 아이콘 에셋을 받으면 이 컴포넌트만 <Image>로 바꾼다.
 * 지금은 옅은 그라데이션으로 입체감을 흉내 낸 선 아이콘이다.
 */
function PointIcon({ name }: { name: IconName }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-pill bg-[linear-gradient(145deg,#EFFDFC_0%,#CFF5F2_55%,#A9EBE6_100%)] text-[#00817a] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_4px_10px_-4px_rgba(0,150,140,0.35)]">
      <Icon name={name} className="h-6 w-6" />
    </span>
  );
}
