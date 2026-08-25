import fs from 'node:fs/promises';
import path from 'node:path';

import { ImageResponse } from 'next/og';

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

/**
 * OG 이미지 템플릿.
 * Satori는 woff2를 읽지 못해 웹폰트와 별도로 ttf를 쓴다.
 * 사이트 본문과 같은 Pretendard이므로 글자 모양은 같다.
 */
export async function renderOgImage({
  eyebrow,
  lines,
  accentLastLine = true,
}: {
  eyebrow: string;
  lines: string[];
  accentLastLine?: boolean;
}) {
  const fontDir = path.join(process.cwd(), 'src/fonts');
  const [bold, regular] = await Promise.all([
    fs.readFile(path.join(fontDir, 'Pretendard-Bold.ttf')),
    fs.readFile(path.join(fontDir, 'Pretendard-Regular.ttf')),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(160deg, #FFFFFF 45%, #F2FBFC 100%)',
          padding: '76px 80px',
          fontFamily: 'Pretendard',
        }}
      >
        {/* 로고 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <svg width="42" height="42" viewBox="0 0 40 40">
            <path
              fill="#00D5C8"
              d="M20 2.5c9.665 0 17.5 7.835 17.5 17.5 0 4.05-1.376 7.779-3.687 10.744-1.79 2.297-3.03 3.79-4.79 5.036-1.6 1.132-3.29 1.72-4.71 1.72-2.13 0-3.63-1.35-3.63-3.29 0-1.53.86-2.79 2.4-3.87 1.02-.71 1.5-1.35 1.5-2.06 0-.93-.77-1.53-2.02-1.72-.85-.13-1.69-.19-2.563-.19C10.335 37.5 2.5 29.665 2.5 20S10.335 2.5 20 2.5Z"
            />
          </svg>
          <span
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: '#111111',
              letterSpacing: '-0.04em',
            }}
          >
            DOUM
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 26, color: '#9CA3AF', marginBottom: 26 }}>
            {eyebrow}
          </span>

          {lines.map((line, i) => (
            <span
              key={line}
              style={{
                fontSize: 68,
                fontWeight: 700,
                lineHeight: 1.32,
                letterSpacing: '-0.045em',
                color:
                  accentLastLine && i === lines.length - 1
                    ? '#00D5C8'
                    : '#111111',
              }}
            >
              {line}
            </span>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontSize: 22,
            color: '#9CA3AF',
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: '#00D5C8',
            }}
          />
          청도군 마을돌봄공동체 육성 지원사업 · ㈜다로리인 연계
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: 'Pretendard', data: bold, weight: 700, style: 'normal' },
        { name: 'Pretendard', data: regular, weight: 400, style: 'normal' },
      ],
    },
  );
}
