import Image from 'next/image';

import { PhoneFrame } from './PhoneFrame';
import type { AppScreenVariant } from '@/lib/types';

/**
 * 앱 화면.
 *
 * 팀이 피그마에서 내보낸 실제 디자인을 public/app/에 두고 그대로 쓴다.
 * 파일 이름은 피그마 프레임 이름과 같다.
 *
 * 화면을 추가하려면 public/app/에 PNG를 넣고
 * lib/types.ts의 AppScreenVariant에 이름만 더하면 된다.
 */

/** 피그마 내보내기 기준 크기. 세로 폰 비율을 유지하는 데 쓴다. */
const SOURCE = { width: 393, height: 893 };

export function AppScreenMockup({
  variant,
  caption,
  tilt,
  priority,
  className = '',
}: {
  variant: AppScreenVariant;
  caption?: string;
  tilt?: boolean;
  /** 홈 히어로처럼 첫 화면에 보이는 것만 켠다 */
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={className}>
      <PhoneFrame tilt={tilt}>
        <Image
          src={`/app/${variant}.png`}
          alt={caption ?? ''}
          width={SOURCE.width}
          height={SOURCE.height}
          sizes="(max-width: 640px) 60vw, 290px"
          priority={priority}
          className="h-full w-full object-cover object-top"
        />
      </PhoneFrame>
      {caption && (
        <figcaption className="mt-5 text-center text-sm leading-relaxed text-body">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
