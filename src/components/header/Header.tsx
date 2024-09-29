import Container from "../container/Container";
import Image from "next/image";
import { SpriteSVG } from "../../../public/SpriteSVG";
import BurgerMenu from "./burger/BurgerMenu";

export default function Header() {
  return (
    <header className="bg-background-100">
      <Container>
        <div className="flex items-center justify-between">
          <Image
            src="/icons/logo.png" // Шлях до вашого логотипа
            alt="logo"
            width={120} // Вкажіть бажану ширину
            height={60} // Вкажіть бажану висоту
            priority // Використовуйте, якщо логотип важливий
          />
          <div className="flex">
            <div className="w-10 h-10 bg-amber-gold rounded-full flex items-center justify-center mr-2">
              <SpriteSVG name="phone" width={25} height={25} />
            </div>
            <BurgerMenu />
            {/* <div className="w-10 h-10 bg-amber-gold rounded-full flex items-center justify-center">
              <SpriteSVG name="burger-menu" width={25} height={25} />
            </div> */}
          </div>
        </div>
      </Container>
    </header>
  );
}
