import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '@/lib/og';

export const alt = '가까운 이웃이 찾아갑니다 — SERVICE';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'SERVICE',
    lines: ['필요한 도움을 요청하면', '가까운 이웃이', '찾아갑니다'],
  });
}
