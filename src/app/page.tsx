"use client";

// import Image from "next/image";
import { RecoilRoot } from "recoil";
import Header from "../components/header/Header";
import Main from "./main/page";
import About from "./about/page";
import Contacts from "./contacts/page";
import News from "./news/page";
import Practice from "./practice/page";

export default function Home() {
  return (
    <RecoilRoot>
      <Header />
      <Main />
      <About />
      <Contacts />
      <News />
      <Practice />
    </RecoilRoot>
  );
}
