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
          <svg width="38" height="38" viewBox="0 0 40 40">
            <path
              transform="rotate(-20 19 20)"
              fill="#00D5C8"
              d="M30.6 14A14.6 14.6 0 1 0 25.8 30.4C28.8 31.4 32.6 30.4 36.2 27.6C37.6 26.5 37.2 25.6 35.6 25.2C32.2 24.3 30.2 21.8 30.4 18.4Z"
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
