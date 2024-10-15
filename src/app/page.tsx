"use client";

import { RecoilRoot } from "recoil";
import PageMain from "./main/page";
// import Container from "@/components/container/Container";

export default function Home() {
  return (
    <RecoilRoot>
      {/* <Container> */}
      <PageMain />
      {/* </Container> */}
    </RecoilRoot>
  );
}
