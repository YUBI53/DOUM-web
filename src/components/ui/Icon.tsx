import type { IconName } from '@/lib/types';

/**
 * 선이 얇고 끝이 둥근 계열의 아이콘 세트.
 * 디자인시스템의 아이콘 규칙(얇은 선, 둥근 끝)을 따르고 stroke 색은 상속받는다.
 */
const PATHS: Record<IconName, React.ReactNode> = {
  car: (
    <>
      <path d="M5 11.6 6.5 8a2.1 2.1 0 0 1 1.95-1.3h7.1A2.1 2.1 0 0 1 17.5 8L19 11.6" />
      <path d="M3.6 16.5v-2.4a2.5 2.5 0 0 1 2.5-2.5h11.8a2.5 2.5 0 0 1 2.5 2.5v2.4a1 1 0 0 1-1 1H4.6a1 1 0 0 1-1-1Z" />
      <path d="M6.6 17.5v1.4M17.4 17.5v1.4" />
      <path d="M6.7 14.3h1.1M16.2 14.3h1.1" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </>
  ),
  meal: (
    <>
      <path d="M4 4.5v5a2.5 2.5 0 0 0 5 0v-5M6.5 4.5v5M6.5 12v7.5" />
      <path d="M17.5 4.5c-1.6 1.2-2.4 3-2.4 5.2 0 1.4.8 2.3 2.4 2.3V4.5Z" />
      <path d="M17.5 12v7.5" />
    </>
  ),
  walk: (
    <>
      <circle cx="13" cy="4.8" r="1.8" />
      <path d="M11.4 20.5 13 15l-2.6-2.4.8-4.1 3 1.6 2.4 1.4" />
      <path d="M10.4 8.5 8 10.4l-1 3.2M13 15l2.6 5.5" />
    </>
  ),
  broom: (
    <>
      <path d="M16.5 4 11 9.5" />
      <path d="m9 8 4 4-4.6 1.6L6.4 11 9 8Z" />
      <path d="m7.6 12.6-3 5.2A1.6 1.6 0 0 0 6 20.3h7.6a1.6 1.6 0 0 0 1.5-2.2l-2-5.1" />
      <path d="M9 20.3v-3.4M12.4 20.3v-3.4" />
    </>
  ),
  chat: (
    <>
      <path d="M20 12.4c0 3.8-3.6 6.9-8 6.9-.9 0-1.8-.13-2.6-.37L4.5 20.4l1.2-3.4C4.6 15.8 4 14.2 4 12.4c0-3.8 3.6-6.9 8-6.9s8 3.1 8 6.9Z" />
      <path d="M9 12.2h.01M12 12.2h.01M15 12.2h.01" />
    </>
  ),
  plus: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 8.4v7.2M8.4 12h7.2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c3.7-4.2 5.6-7.3 5.6-9.6A5.6 5.6 0 0 0 12 5.8a5.6 5.6 0 0 0-5.6 5.6c0 2.3 1.9 5.4 5.6 9.6Z" />
      <circle cx="12" cy="11.3" r="2.1" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8.8h3.2l1.4-2.2h6.8l1.4 2.2H20a1.4 1.4 0 0 1 1.4 1.4v7.4A1.4 1.4 0 0 1 20 19H4a1.4 1.4 0 0 1-1.4-1.4v-7.4A1.4 1.4 0 0 1 4 8.8Z" />
      <circle cx="12" cy="13.7" r="3.1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.6 5.2 6.2v5.3c0 4 2.8 7.6 6.8 8.9 4-1.3 6.8-4.9 6.8-8.9V6.2L12 3.6Z" />
      <path d="m9.2 12 2 2 3.6-3.7" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.6 12.2 2.3 2.3 4.5-4.6" />
    </>
  ),
  home: (
    <>
      <path d="M4.4 10.6 12 4.4l7.6 6.2" />
      <path d="M6.3 9.7v8.4a1.4 1.4 0 0 0 1.4 1.4h8.6a1.4 1.4 0 0 0 1.4-1.4V9.7" />
      <path d="M10 19.5v-5h4v5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.8" y="5.6" width="16.4" height="14" rx="2.2" />
      <path d="M3.8 10h16.4M8.4 3.8v3.4M15.6 3.8v3.4" />
    </>
  ),
  wallet: (
    <>
      <rect x="3.6" y="6.2" width="16.8" height="12.6" rx="2.4" />
      <path d="M3.6 10.2h16.8" />
      <circle cx="16.4" cy="14.6" r="1.1" />
    </>
  ),
};

export function Icon({
  name,
  className = 'h-6 w-6',
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {PATHS[name]}
    </svg>
  );
}
