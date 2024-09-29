"use client";

import React from "react";
import { useRecoilState } from "recoil";
import { burgerState } from "../../../state/burgerAtom";
import { SpriteSVG } from "../../../../public/SpriteSVG";

import CloseButton from "../../closeButton/CloseButton";
import Navigation from "../Navigation";
import SocialMedia from "@/components/socialVedia/SocialMedia";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useRecoilState(burgerState);

  const toggleMenu = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="">
      {/* Кнопка бургер меню */}
      <button className="w-10 h-10 bg-amber-gold rounded-full flex items-center justify-center cursor-pointer md:hidden" onClick={toggleMenu}>
        <SpriteSVG name="burger-menu" width={25} height={25} />
      </button>

      {/* Бургер меню */}
      <div className={`fixed top-0 right-[-10px] h-[100vh] w-[75vw] bg-background-100 shadow-lg transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden z-50`}>
        <div className=" bg-background-100">
          <div className="flex justify-end p-5">
            <CloseButton />
          </div>
          <Navigation />
        </div>
        <div className="flex justify-center mt-10">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
