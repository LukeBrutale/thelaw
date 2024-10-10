"use client";

import { SpriteSVG } from "../../../public/SpriteSVG";

export default function SocialMedia() {
  return (
    <ul className="flex">
      <li className="flex items-center justify-center mr-2 w-[24px] h-[24px] hover:bg-custom-gradient transition-all ease-in-out duration-[400ms] rounded-full">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center justify-center w-full h-full">
          <SpriteSVG name="instagram" width={24} height={24} color="#9f9f9f" className="hover:fill-current hover:text-white" />
        </a>
      </li>

      <li>
        <a href="https://www.facebook.com/bemainna?rdid=wm2bk9xR8OxXUp7B&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FJL13xnu7KguWo9kv%2F" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <SpriteSVG name="facebook" width={24} height={24} color="#9f9f9f" className="facebook" />
        </a>
      </li>
      <li></li>
      <li></li>
    </ul>
  );
}
