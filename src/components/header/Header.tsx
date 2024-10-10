"use client";

import Container from "../container/Container";
import Image from "next/image";
import { SpriteSVG } from "../../../public/SpriteSVG";
import BurgerMenu from "./burger/BurgerMenu";
import SocialMedia from "@/components/socialVedia/SocialMedia";
import Navigation from "@/components/header/Navigation";
import CustomButton from "../button/CustomButton";

export default function Header() {
  return (
    <header>
      <div className="bg-background-100">
        <Container>
          <div className="flex items-center justify-between md:hidden">
            <Image
              src="/icons/logo.png"
              alt="logo"
              width={120}
              height={60}
              priority // Використовуйте, якщо логотип важливий
            />
            <div className="flex">
              <div className="w-10 h-10 bg-amber-gold rounded-full flex items-center justify-center mr-2">
                <SpriteSVG name="phone" width={25} height={25} />
              </div>
              <BurgerMenu />
            </div>
          </div>
          <div className="sm:hidden md:flex justify-between items-center p-2 xl:justify-around">
            <div className="flex">
              <SpriteSVG name="map" width={18} height={18} />
              <a href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9A%D1%83%D1%80%D0%B5%D0%BD%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0,+21%D0%B3,+%D0%9A%D0%B8%D1%97%D0%B2,+02000/@50.492744,30.4931611,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4cdf9c7ea4cdf:0x5dffd47e13f5d1b8!8m2!3d50.492744!4d30.4931611!16s%2Fg%2F11rd28wddc?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-text-secondary font-sans text-sm pl-3">
                Україна | Київ, 04073 | вул. Куренівська, 21Г
              </a>
            </div>
            <div className="flex">
              <SpriteSVG name="phone" width={18} height={18} className="bg-amber-gold" />
              <a href="tel:+380969842528" className="text-text-secondary font-sans text-sm pl-3">
                +380 (96) 984-25-28
              </a>
            </div>
            <SocialMedia />
          </div>
        </Container>
      </div>

      <div className="sm:hidden md:block bg-background-200 ">
        <Container>
          <div className="p-8 flex items-center md:justify-between xl:justify-start">
            <div className="xl:mr-20">
              <Image
                src="/icons/logo.png"
                alt="logo"
                width={180}
                height={90}
                priority // Використовуйте, якщо логотип важливий
              />
            </div>
            <div className="xl:mr-[300px]">
              <Navigation />
            </div>
            <div>
              <CustomButton label="Консультація" onClick={() => (window.location.href = "tel:+380969842528")} />
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
