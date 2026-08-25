import localFont from 'next/font/local';

/**
 * Pretendard 가변 폰트. node_modules/pretendard에서 src/fonts로 복사해 쓴다.
 * 디자인시스템 3장: 숫자·영문도 같은 서체 안에서 처리한다.
 */
export const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  weight: '45 920',
  style: 'normal',
  display: 'swap',
  variable: '--font-pretendard',
});
