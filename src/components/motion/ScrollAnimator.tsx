'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * 스크롤 등장을 한 곳에서 관리한다.
 *
 * 쓰는 쪽은 감싸는 컴포넌트 없이 속성만 붙인다.
 *   <p data-animate>            바로
 *   <p data-animate data-delay="1">   0.1초 뒤
 *
 * 라벨·제목·문단·버튼·카드에 하나씩 걸고 순서를 조금씩 늦추면
 * 한 섹션 안에서 여러 요소가 줄줄이 들어온다.
 * 덩어리째 한 번만 걸면 그냥 깜박이고 만다.
 *
 * 값과 방식은 레퍼런스(grooforai.com)에서 확인한 것을 따랐다.
 * 관찰자 하나로 모든 요소를 보고, 한 번 나타난 것은 관찰을 끊는다.
 */
export function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('[data-animate]');
    if (targets.length === 0) return;

    // 모션을 줄이도록 설정한 사용자에게는 움직임 없이 바로 보여준다.
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
