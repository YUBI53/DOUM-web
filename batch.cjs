const fs = require('fs');
const apply = (p, pairs) => {
  let s = fs.readFileSync(p, 'utf8');
  for (const [from, to] of pairs) {
    if (!s.includes(from)) { console.log('NOT FOUND in', p, '→', JSON.stringify(from.slice(0, 55))); continue; }
    s = s.split(from).join(to);
  }
  fs.writeFileSync(p, s);
};

// GNB: 흰 띠를 아래로 늘리고, DEMO 글자는 처음 크기로 되돌린다
apply('src/components/layout/Header.tsx', [
  ['flex h-[72px] items-center justify-between gap-4 sm:h-20',
   'flex h-[78px] items-center justify-between gap-4 sm:h-[88px]'],
  ['px-5 text-sm font-bold text-white transition-colors hover:bg-brand sm:h-12 sm:px-6 sm:text-[15px]',
   'px-5 text-[13px] font-bold text-white transition-colors hover:bg-brand sm:h-12 sm:px-6 sm:text-sm'],
]);

// 카테고리 히어로: 세 페이지 여백 통일 + 지금 ABOUT보다 조금 더 크게
apply('src/components/sections/PageHero.tsx', [
  ['gap-12 py-14 sm:py-20', 'gap-12 py-16 sm:py-24'],
]);

// SERVICE·돌봄매니저 히어로에서 앱 화면 제거
apply('src/app/service/page.tsx', [[
`        aside={
          <AppScreenMockup
            variant="request-list"
            className="w-[220px] sm:w-[248px]"
          />
        }
      />`, `      />`]]);

apply('src/app/manager/page.tsx', [[
`        aside={
          <AppScreenMockup
            variant="manager-assigned"
            className="w-[220px] sm:w-[248px]"
          />
        }
      />`, `      />`]]);

// STEP: 화면 카드가 본문에서 멀어지지 않게 안쪽으로 붙인다
apply('src/components/diagrams/StepFlow.tsx', [[
`            <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
              {step.screen && (
                <AppScreenMockup
                  variant={step.screen}
                  className="mx-auto w-[240px] sm:w-[268px]"
                />
              )}
            </div>`,
`            {/* 화면은 늘 본문 쪽 가장자리에 붙여 홀수·짝수 단계의 간격을 맞춘다 */}
            <div
              className={`+'`'+`flex justify-center ${
                i % 2 === 1 ? 'lg:order-1 lg:justify-end' : 'lg:justify-start'
              }`+'`'+`}
            >
              {step.screen && (
                <AppScreenMockup
                  variant={step.screen}
                  className="w-[240px] sm:w-[268px]"
                />
              )}
            </div>`]]);

// ABOUT: 함께하는 곳 제목에서 연세대 부분을 덜어낸다 (팀 이야기는 위로 올라간다)
apply('src/lib/content/about.ts', [[
`export const PARTNERS_TITLE =
  '연세대 테크포임팩트 캠퍼스 학생들과 청도군, 다로리인이 함께합니다';`,
`export const PARTNERS_TITLE = '청도군, 다로리인이 함께합니다';`]]);

console.log('done');
