import Home from "./home";
import { JSDOM } from 'jsdom';

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
  return <Home data={data}>
  </Home>
}