'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * 스크롤 등장.
 *
 * 쓰는 쪽은 속성만 붙인다.
 *   <p data-animate>                  바로
 *   <p data-animate data-delay="1">   0.1초 뒤
 *
 * CSS 전환 대신 브라우저에 직접 재생을 시킨다(Web Animations API).
 * 전환은 "이전 상태가 그려져 있어야" 도는데, 그 조건이 언제 깨지는지
 * 확실히 잡히지 않아 재생을 명령하는 쪽으로 바꿨다.
 * 이 방식은 CSS 우선순위나 첫 렌더 시점에 영향을 받지 않는다.
 *
 * 운영체제의 '모션 줄이기' 설정은 보지 않는다.
 * 그 설정이 켜진 컴퓨터에서는 화면이 멈춘 것처럼 보이는데,
 * 발표·심사 자리에서 어떤 컴퓨터를 쓸지 알 수 없어 항상 재생하기로 했다.
 */
const DURATION = 700;
const EASING = 'cubic-bezier(0.16, 1, 0.3, 1)';
const DISTANCE = 28;

export function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-animate]'),
    ).filter((el) => el.dataset.animated !== 'done');

    if (targets.length === 0) return;

    const reveal = (el: HTMLElement) => {
      el.dataset.animated = 'done';
      el.style.opacity = '1';
      el.style.transform = 'none';
      if (typeof el.animate !== 'function') return;

      const step = Number(el.dataset.delay ?? 0);
      el.animate(
        [
          { opacity: 0, transform: `translateY(${DISTANCE}px)` },
          { opacity: 1, transform: 'none' },
        ],
        {
          duration: DURATION,
          delay: step * 100,
          easing: EASING,
          fill: 'both',
        },
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target as HTMLElement);
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
