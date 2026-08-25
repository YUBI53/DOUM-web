import type { Config } from 'tailwindcss';

/**
 * 색·라운드·그림자 값은 전부 docs/디자인시스템.md에서 온 것이다.
 * 여기 없는 색을 컴포넌트에서 새로 만들지 않는다.
 *
 * 디자인시스템 토큰명 → Tailwind 토큰명 매핑
 *   bg        → canvas        (bg-canvas)
 *   bg-tint   → canvas-tint   (bg-canvas-tint)
 *   text      → body          (text-body)
 *   text-weak → muted         (text-muted)
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#00D5C8',
          weak: '#E6FAF8',
        },
        canvas: {
          DEFAULT: '#FFFFFF',
          tint: '#F2FBFC',
        },
        ink: '#111111',
        body: '#374151',
        muted: '#9CA3AF',
        line: '#EDEFF2',
        chip: '#F3F4F6',
        warn: {
          DEFAULT: '#FEF3C7',
          ink: '#B45309',
        },
        star: '#FBBF24',
      },
      borderRadius: {
        card: '18px',
        'card-lg': '24px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 8px 24px -12px rgba(17, 17, 17, 0.08)',
        soft: '0 20px 40px -16px rgba(17, 17, 17, 0.10)',
        lift: '0 28px 64px -24px rgba(17, 17, 17, 0.16)',
      },
      fontFamily: {
        sans: [
          'var(--font-pretendard)',
          '-apple-system',
          'BlinkMacSystemFont',
          'Apple SD Gothic Neo',
          'Pretendard',
          'Malgun Gothic',
          'sans-serif',
        ],
      },
      letterSpacing: {
        tightest: '-0.045em',
        tighter: '-0.03em',
      },
      maxWidth: {
        content: '1180px',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
