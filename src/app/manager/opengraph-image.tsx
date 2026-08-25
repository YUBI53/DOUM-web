import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '@/lib/og';

export const alt = '마을에서 이웃을 돕는 일을 해요 — 돌봄매니저';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: '돌봄매니저',
    lines: ['마을에서 이웃을 돕고', '활동한 만큼', '활동비를 받습니다'],
  });
}
