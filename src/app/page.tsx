import { ClosingBandSection } from '@/components/sections/home/ClosingBandSection';
import { CycleSection } from '@/components/sections/home/CycleSection';
import { DailyMomentsSection } from '@/components/sections/home/DailyMomentsSection';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { OverviewSection } from '@/components/sections/home/OverviewSection';
import { PreviewSection } from '@/components/sections/home/PreviewSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <DailyMomentsSection />
      <CycleSection />
      <ClosingBandSection />
      <PreviewSection />
    </>
  );
}
