import { Section } from '@/components/ui/Section';
import { CYCLE_CLOSING } from '@/lib/content/home';

/**
 * 색면 한 줄 띠.
 *
 * 앞의 짙은 순환 도식이 구조를 보여주고, 여기서 그 결론을 한 줄로 받는다.
 * 다른 것을 넣지 않는다. 한 문장과 여백뿐이라 세다.
 */
export function ClosingBandSection() {
  return (
    <Section tone="brand" space="md">
      <p data-animate className="mx-auto max-w-3xl text-center text-[20px] font-bold leading-[1.5] tracking-tighter sm:text-[26px] lg:text-[30px]">
        {CYCLE_CLOSING}
      </p>
    </Section>
  );
}
