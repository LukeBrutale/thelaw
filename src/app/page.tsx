"use client";

import { RecoilRoot } from "recoil";
import Main from "./main/page";

export default function Home() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
}
