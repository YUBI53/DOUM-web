/**
 * DOUM 로고 마크.
 *
 * 피그마 디자인 기준이다. 프로토타입 HTML은 CSS 도형으로 만든 지도 핀 모양이지만
 * 실제 디자인은 동그란 몸통 오른쪽에 작은 부리 같은 꼬리가 붙은 형태다.
 * public/app/ 의 내보내기 화면 왼쪽 위에서 확인할 수 있다.
 *
 * TODO(placeholder): 피그마에서 로고를 SVG로 내보내 받으면 이 path만 교체한다.
 * 지금 것은 내보내기 화면을 보고 맞춘 근사치다.
 * 쓰는 곳은 전부 Logo를 거치므로 다른 파일은 손대지 않아도 된다.
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
      <path
        transform="rotate(-20 19 20)"
        fill="currentColor"
        d="M30.6 14A14.6 14.6 0 1 0 25.8 30.4C28.8 31.4 32.6 30.4 36.2 27.6C37.6 26.5 37.2 25.6 35.6 25.2C32.2 24.3 30.2 21.8 30.4 18.4Z"
      />
    </svg>
  );
}
