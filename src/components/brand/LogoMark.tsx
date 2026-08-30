/**
 * DOUM 로고 마크.
 *
 * 앱 프로토타입이 쓰는 것과 같은 모양이다. 프로토는 CSS 도형으로 만든다.
 *   width:18px; height:18px; background:#59cfcc;
 *   border-radius: 50% 50% 50% 0;
 *   transform: rotate(-45deg);
 *
 * 세 모서리는 둥글고 한 모서리만 각진 물방울인데, -45도로 돌려
 * 각진 꼭짓점이 아래를 향한다. 여기서도 같은 방식으로 그린다.
 */
export function LogoMark({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <span
      className={`inline-block shrink-0 rotate-[-45deg] rounded-[50%_50%_50%_0] bg-current ${className ?? ''}`}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    />
  );
}
