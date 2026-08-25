import type { Metadata, Viewport } from 'next';

import './globals.css';
import { pretendard } from './fonts';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

const DESCRIPTION =
  '돌봄이 필요한 사람도, 돌볼 수 있는 사람도 같은 마을 안에 있습니다. 청도군 마을돌봄 사업과 이어진 돌봄 매칭 서비스 DOUM.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — 마을 안에서 돌봄이 돌아갑니다`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'ko_KR',
    title: `${SITE_NAME} — 마을 안에서 돌봄이 돌아갑니다`,
    description: DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-pill focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          본문으로 건너뛰기
        </a>
        <div id="top" />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
