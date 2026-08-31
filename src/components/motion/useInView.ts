'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * 요소가 화면에 들어오면 한 번만 true가 된다.
 * 스크롤 진입 시 순차 등장에 쓴다.
 */
export function useInView<T extends HTMLElement>(rootMargin = '-15% 0px') {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}
