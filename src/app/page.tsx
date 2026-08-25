import { CycleSection } from '@/components/sections/home/CycleSection';
import { DailyMomentsSection } from '@/components/sections/home/DailyMomentsSection';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { PreviewSection } from '@/components/sections/home/PreviewSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DailyMomentsSection />
      <CycleSection />
      <PreviewSection />
    </>
  );
}
