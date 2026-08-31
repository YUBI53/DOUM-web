import { Icon } from './Icon';
import type { IconName } from '@/lib/types';

/**
 * 카드 겉모양. 진한 선 대신 옅은 선 + 넓고 흐린 그림자로 띄운다.
 * 정보를 촘촘히 채우지 않고 안쪽 여백을 넉넉히 준다.
 */
export function Surface({
  children,
  className = '',
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...rest}
      className={`rounded-card-lg border border-line bg-white shadow-card ${className}`}
    >
      {children}
    </div>
  );
}

/** 아이콘 + 제목 + 설명 카드. */
export function Card({
  icon,
  title,
  description,
  className = '',
}: {
  icon?: IconName;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <Surface className={`p-7 sm:p-8 ${className}`}>
      {icon && (
        <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-pill bg-brand-weak text-brand">
          <Icon name={icon} className="h-6 w-6" />
        </span>
      )}
      <h3 className="text-lg font-bold tracking-tight text-ink sm:text-xl">
        {title}
      </h3>
      <p className="mt-2.5 text-[15px] leading-relaxed text-body">
        {description}
      </p>
    </Surface>
  );
}
