import Link from 'next/link';

import { Logo } from '@/components/brand/Logo';
import { Container } from '@/components/ui/Container';
import {
  APP_LOGIN_URL,
  NAV_ITEMS,
  PARTNER_NAME,
  PROGRAM_NAME,
  SITE_NAME,
} from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <Container>
        <div className="flex flex-col gap-12 pb-16 pt-24 sm:pb-20 sm:pt-28 lg:flex-row lg:justify-between lg:gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-[15px] font-medium text-ink">
              마을의 돌봄을 잇습니다
            </p>

            <p className="mt-7 text-sm leading-relaxed text-muted">
              {PROGRAM_NAME}
              <br />
              {PARTNER_NAME} 연계
            </p>

          </div>

          <nav aria-label="푸터 메뉴">
            <ul className="flex flex-col gap-3.5 text-[15px] font-semibold text-body lg:items-end">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-brand">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={APP_LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-brand"
                >
                  앱 체험하기
                  <span aria-hidden>↗</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-7 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <Link href="/privacy" className="hover:text-body">
            개인정보처리방침
          </Link>
          <p>
            © {new Date().getFullYear()} {SITE_NAME}
          </p>
          <a href="#top" className="inline-flex items-center gap-1 hover:text-body">
            TOP <span aria-hidden>↑</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
