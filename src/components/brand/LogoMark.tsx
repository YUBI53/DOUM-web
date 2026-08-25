/**
 * DOUM 로고 마크. refs/doum-key-visual.png.png의 민트 blob을 코드로 옮긴 것이다.
 *
 * TODO(placeholder): 원본 로고 SVG를 받으면 이 파일의 path만 교체한다.
 * 사용처는 전부 Logo를 거치므로 다른 파일은 손대지 않아도 된다.
 */
export function LogoMark({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role={title ? 'img' : 'presentation'}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {/* 둥근 몸통에서 오른쪽 아래로 꼬리가 빠지는 물방울/쉼표 형태 */}
      <path
        fill="currentColor"
        d="M20 2.5c9.665 0 17.5 7.835 17.5 17.5 0 4.05-1.376 7.779-3.687 10.744-1.79 2.297-3.03 3.79-4.79 5.036-1.6 1.132-3.29 1.72-4.71 1.72-2.13 0-3.63-1.35-3.63-3.29 0-1.53.86-2.79 2.4-3.87 1.02-.71 1.5-1.35 1.5-2.06 0-.93-.77-1.53-2.02-1.72-.85-.13-1.69-.19-2.563-.19C10.335 37.5 2.5 29.665 2.5 20S10.335 2.5 20 2.5Z"
      />
    </svg>
  );
}
