import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '@/lib/og';

export const alt = '작은 일손에서 돌봄으로 — ABOUT';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'ABOUT',
    lines: ['작은 일손에서', '돌봄으로'],
  });
}
