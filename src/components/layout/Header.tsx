'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Logo } from '@/components/brand/Logo';
import { Container } from '@/components/ui/Container';
import { APP_LOGIN_URL, NAV_ITEMS } from '@/lib/constants';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // 페이지가 바뀌면 모바일 메뉴를 닫는다.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/85 backdrop-blur-md">
      <Container>
        <div className="flex h-[78px] items-center justify-between gap-4 sm:h-[88px]">
          <Link
            href="/"
            aria-label="DOUM 홈"
            className="shrink-0 rounded-pill focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            <Logo />
          </Link>

          <nav className="hidden md:block" aria-label="주요 메뉴">
            <ul className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={`text-[15px] font-semibold transition-colors ${
                        active ? 'text-brand' : 'text-body hover:text-ink'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={APP_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-1.5 rounded-pill bg-ink px-5 text-[13px] font-bold text-white transition-colors hover:bg-brand sm:h-12 sm:px-6 sm:text-sm"
            >
              DEMO
              <span aria-hidden>↗</span>
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-pill text-ink md:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                className="h-5 w-5"
                aria-hidden
              >
                {open ? (
                  <path d="M6 6l12 12M18 6 6 18" />
                ) : (
                  <path d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-line bg-white transition-[max-height] duration-300 ease-out md:hidden ${
          open ? 'max-h-64' : 'max-h-0 border-t-0'
        }`}
      >
        <Container>
          <ul className="flex flex-col py-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-3.5 text-base font-semibold ${
                    pathname === item.href ? 'text-brand' : 'text-ink'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
}
