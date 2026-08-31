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
        /**
         * 두 번째 색. 장식이 아니라 뜻이 있다.
         * 앱이 정기는 민트, 긴급·반려는 주황 계열로 쓰므로 사이트도 그대로 따른다.
         *   정기 = brand / 긴급 = accent
         */
        accent: {
          DEFAULT: '#F59A3C',
          weak: '#FFF3E5',
          ink: '#A85E10',
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
        /**
         * 스크롤 등장. 값은 감이 아니라 통용되는 권장치를 따랐다.
         *   이동 20~30px / 재생 400~700ms / GPU가 처리하는 transform·opacity만
         * blur 같은 필터는 쓰지 않는다. 매 프레임 다시 계산해 버벅인다.
         */
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        /** 폰이나 그림처럼 큰 것. 살짝 작게 시작해 제자리를 찾는다. */
        rise: {
          from: { opacity: '0', transform: 'translateY(30px) scale(0.97)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        /** 히어로의 폰이 아주 느리게 떠 있는 정도. 눈에 띄면 과하다. */
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        // 강한 ease-out. 빠르게 들어와 부드럽게 멈춘다.
        'fade-up': 'fade-up 0.62s cubic-bezier(0.16, 1, 0.3, 1) both',
        rise: 'rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
