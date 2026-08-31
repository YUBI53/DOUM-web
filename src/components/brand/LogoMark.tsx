import Image from 'next/image';

/**
 * DOUM 로고 마크.
 *
 * 디자인에서 받은 이미지를 그대로 쓴다.
 * public/brand/logo-mark.png — 격자와 선택 테두리를 걷어내고 배경을 투명하게 만든 것이다.
 *
 * TODO: 피그마 접근 권한이 풀려 SVG를 받으면 그걸로 바꾸면 더 선명하다.
 * 쓰는 곳은 전부 Logo를 거치므로 이 파일만 손대면 된다.
 */

/** 내보낸 이미지의 가로세로 비율. */
const RATIO = 314 / 272;

export function LogoMark({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <span className={`relative inline-block ${className ?? ''}`}>
      <Image
        src="/brand/logo-mark.png"
        alt={title ?? ''}
        fill
        sizes="32px"
        priority
        className="object-contain"
        aria-hidden={title ? undefined : true}
      />
    </span>
  );
}

export { RATIO as LOGO_MARK_RATIO };
