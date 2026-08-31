'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * 스크롤 등장. 레퍼런스(grooforai.com)와 같은 방식이다.
 *
 * 쓰는 쪽은 속성만 붙인다.
 *   <p data-animate>                  바로
 *   <p data-animate data-delay="1">   0.1초 뒤
 *
 * 라벨·제목·문단·카드에 하나씩 걸고 순서를 조금씩 늦추면
 * 한 섹션 안에서 여러 요소가 줄줄이 들어온다.
 */
export function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      '[data-animate]:not(.is-visible)',
    );
    if (targets.length === 0) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
