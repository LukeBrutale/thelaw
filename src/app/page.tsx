"use client";

import { RecoilRoot } from "recoil";
import Main from "./main/page";
import About from "./about/page";
import Contacts from "./contacts/page";
import News from "./news/page";
import Practice from "./practice/page";

export default function Home() {
  return (
    <RecoilRoot>
      <Main />
      <About />
      <Contacts />
      <News />
      <Practice />
    </RecoilRoot>
  );
}
