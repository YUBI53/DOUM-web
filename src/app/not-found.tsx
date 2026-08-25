import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="text-sm font-bold tracking-tight text-brand">404</p>
        <h1 className="mt-5 text-[26px] font-bold tracking-tighter text-ink sm:text-[32px]">
          찾으시는 페이지가 없어요
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-body">
          주소가 바뀌었거나 지워진 페이지예요.
        </p>
        <div className="mt-10">
          <Button href="/" size="lg">
            홈으로
          </Button>
        </div>
      </div>
    </Container>
  );
}
