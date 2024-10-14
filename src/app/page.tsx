"use client";

import { RecoilRoot } from "recoil";
import PageMain from "./main/page";

export default function Home() {
  return (
    <RecoilRoot>
      <PageMain />
    </RecoilRoot>
  );
}
