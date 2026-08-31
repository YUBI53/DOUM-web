'use client';

import { useInView } from './useInView';

/**
 * 스크롤로 들어올 때 한 번만 떠오르는 껍데기.
 *
 * 과하지 않게 쓰는 것이 핵심이다.
 * 한 섹션에서 여러 개를 쓸 때는 step으로 조금씩 늦춰 순서만 만든다.
 * 모션을 줄이도록 설정한 사용자에게는 useInView가 바로 보여준다.
 */
export function Reveal({
  children,
  step = 0,
  className = '',
  as: Tag = 'div',
  variant = 'fade-up',
}: {
  children: React.ReactNode;
  /** 0, 1, 2… 순서. 한 칸에 140ms씩 늦춘다. 200ms를 넘기면 연출한 티가 난다. */
  step?: number;
  className?: string;
  as?: 'div' | 'li' | 'section';
  /** 폰·그림처럼 큰 것은 rise를 쓴다. */
  variant?: 'fade-up' | 'rise';
}) {
  const { ref, inView } = useInView<HTMLDivElement>('0px 0px -12% 0px');

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`${
        inView ? (variant === 'rise' ? 'animate-rise' : 'animate-fade-up') : 'opacity-0'
      } ${className}`}
      style={{ animationDelay: `${step * 140}ms` }}
    >
      {children}
    </Tag>
  );
}
