import LottoPage from "../../components/lottoPage";
import { JSDOM } from 'jsdom';


// 동행복권 페이지에서 숫자별 당첨횟수 가져오기
async function getHtmlText() { 
  const response = await fetch("https://www.dhlottery.co.kr/gameResult.do?method=statByNumber", {
    next: { revalidate: 36000 }
  })
  const html = await response.text();
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const lottoMap = {};
  document.querySelectorAll('#printTarget>tbody td:nth-child(3)').forEach((td, index) => {
    const num = td.textContent;
    lottoMap[index + 1] = num;

  })

  return lottoMap;
}

export default async function HomePage() {
  const data = await getHtmlText();
  return <LottoPage data={data}>
  </LottoPage>
}