import type { Metadata } from 'next';

import { Container } from '@/components/ui/Container';
import { CONTACT_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: '개인정보처리방침',
  robots: { index: false },
};

/**
 * TODO(placeholder): 실제 개인정보처리방침 내용이 필요하다.
 * 법적 문구는 임의로 쓰지 않는다. 확정된 문안을 받아 이 페이지를 채운다.
 */
export default function PrivacyPage() {
  return (
    <Container>
      <div className="max-w-2xl py-24 sm:py-32">
        <h1 className="text-[26px] font-bold tracking-tighter text-ink sm:text-[32px]">
          개인정보처리방침
        </h1>
        <p className="mt-6 text-[15px] leading-relaxed text-body sm:text-base">
          개인정보처리방침을 준비하고 있어요. 궁금한 점은 아래 메일로 연락 주세요.
        </p>
        <p className="mt-6">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-[15px] font-semibold text-brand underline-offset-4 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </Container>
  );
}
