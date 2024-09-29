"use client";

// import Image from "next/image";
import { RecoilRoot } from "recoil";
import Header from "../components/header/Header";

export default function Home() {
  return (
    <RecoilRoot>
      <Header />
    </RecoilRoot>
  );
}
