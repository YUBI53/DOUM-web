import Image from 'next/image';

/**
 * 팀 사진.
 *
 * 원본은 4000px대라 public/team/에 1600px로 줄여 넣어두었다.
 * 사진마다 가로세로가 달라 카드 비율을 고정하고 object-cover로 채운다.
 */
const PHOTOS = [
  {
    src: '/team/team-work.jpg',
    alt: '노트북을 펼쳐 두고 함께 작업하는 팀원들',
  },
  {
    src: '/team/cheongdo-orchard.jpg',
    alt: '청도의 과수원 길을 걸어 들어가는 사람들',
  },
  {
    src: '/team/team-table.jpg',
    alt: '둘러앉아 함께 밥을 먹는 자리',
  },
] as const;

export function TeamPhotos() {
  return (
    <ul className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-3">
      {PHOTOS.map((photo) => (
        <li key={photo.src}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-card-lg bg-chip shadow-card">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, 380px"
              className="object-cover"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
