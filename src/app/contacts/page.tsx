"use client";
import Header from "@/components/header/Header";
import Contacts from "@/modules/Contacts/Contacts";
import { RecoilRoot } from "recoil";

export default function PageContacts() {
  return (
    <RecoilRoot>
      <Header />
      <Contacts />
    </RecoilRoot>
  );
}
