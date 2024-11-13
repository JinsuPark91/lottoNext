import Link from "next/link";
import { useEffect, useState } from "react";
import Home from "./home";


async function getHtmlText() {
  const response = await fetch("https://www.dhlottery.co.kr/gameResult.do?method=statByNumber", {
    next: {revalidate : 36000}
  })
  const text = response.text();
  return text;
}

export default async function HomePage() {
  const htmlText = await getHtmlText();
  return <Home HtmlText={htmlText}>
  </Home>
}