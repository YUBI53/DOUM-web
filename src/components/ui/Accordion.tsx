import type { FaqItem } from '@/lib/types';

/**
 * FAQ 아코디언. details/summary라 JS 없이 동작하고 검색엔진에도 그대로 잡힌다.
 */
export function Accordion({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-card-lg border border-line bg-white shadow-card">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-[15px] font-semibold text-ink transition-colors hover:text-brand sm:px-8 sm:py-6 sm:text-base [&::-webkit-details-marker]:hidden">
            {item.question}
            <span
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-pill bg-chip text-body transition-transform group-open:rotate-45 group-open:bg-brand-weak group-open:text-brand"
              aria-hidden
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                className="h-4 w-4"
              >
                <path d="M12 6v12M6 12h12" />
              </svg>
            </span>
          </summary>
          <p className="px-6 pb-6 text-[15px] leading-relaxed text-body sm:px-8 sm:pb-7">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
