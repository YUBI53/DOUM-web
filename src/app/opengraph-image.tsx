import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '@/lib/og';

export const alt = '돌봄이 필요한 사람도, 돌볼 수 있는 사람도 같은 마을 안에 있습니다';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: '마을 돌봄 매칭 서비스',
    lines: ['돌봄이 필요한 사람도,', '돌볼 수 있는 사람도', '같은 마을 안에 있습니다'],
  });
}
