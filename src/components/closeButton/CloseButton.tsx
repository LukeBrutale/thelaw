import React from "react";
import { useRecoilState } from "recoil";
import { burgerState } from "../../state/burgerAtom";
import { SpriteSVG } from "../../../public/SpriteSVG";

export default function CloseButton() {
  const [isOpen, setIsOpen] = useRecoilState(burgerState);

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <button className={`${isOpen ? "translate-x-0" : "translate-x-full"}`} onClick={closeMenu}>
      <SpriteSVG name="close-button" width={20} height={20} color="white" />
    </button>
  );
}
