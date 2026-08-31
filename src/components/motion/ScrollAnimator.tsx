'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * 스크롤 등장을 한 곳에서 관리한다.
 *
 * 쓰는 쪽은 감싸는 컴포넌트 없이 속성만 붙인다.
 *   <p data-animate>                  바로
 *   <p data-animate data-delay="1">   0.1초 뒤
 *
 * 라벨·제목·문단·버튼·카드에 하나씩 걸고 순서를 조금씩 늦추면
 * 한 섹션 안에서 여러 요소가 줄줄이 들어온다.
 * 덩어리째 한 번만 걸면 그냥 깜박이고 만다.
 *
 * 두 가지를 지켜야 실제로 전환이 보인다.
 *  1. 시작 상태가 한 번 그려진 뒤에 전환을 켠다(.motion-ready).
 *     처음부터 켜져 있으면 브라우저가 시작 상태를 잡지 못하고 그냥 나타난다.
 *  2. 클래스는 그 다음 프레임에 붙인다. 같은 프레임에 붙이면 전환이 생략된다.
 */
export function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-animate]'),
    );
    if (targets.length === 0) return;

    // 모션을 줄이도록 설정한 사용자에게는 움직임 없이 바로 보여준다.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    let observer: IntersectionObserver | undefined;

    // 시작 상태가 한 번 그려지길 기다린 뒤 전환을 켜고 관찰을 시작한다.
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        root.classList.add('motion-ready');

        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add('is-visible');
              observer?.unobserve(entry.target);
            });
          },
          { threshold: 0.12 },
        );

        targets.forEach((el) => observer?.observe(el));
      });
      cancelIds.push(raf2);
    });

    const cancelIds: number[] = [raf1];

    return () => {
      cancelIds.forEach((id) => cancelAnimationFrame(id));
      observer?.disconnect();
      // 페이지가 바뀌면 다음 페이지 요소가 시작 상태부터 그려지도록 되돌린다.
      root.classList.remove('motion-ready');
    };
  }, [pathname]);

  return null;
}
