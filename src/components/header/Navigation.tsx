"use client";

import Link from "next/link";
import { useRecoilState } from "recoil";
import { navState } from "@/state/navAtom";
import { useEffect } from "react";

export default function Navigation() {
  const [currentPath, setCurrentPath] = useRecoilState(navState);

  useEffect(() => {
    // Зберігаємо поточний шлях для активації сторінки
    setCurrentPath(window.location.pathname);
  }, [setCurrentPath]);

  const menuItems = [
    { label: "Головна", path: "/" },
    { label: "Про мене", path: "/about" },
    { label: "Практика", path: "/practice" },
    { label: "Новини", path: "/news" },
    { label: "Контакти", path: "/contacts" },
  ];

  return (
    <nav>
      <ul className="md:flex">
        {menuItems.map(item => (
          <li
            key={item.path}
            className={`p-3 border-b-[1px] border-background-300 sm:border-b-[1px] md:border-b-0 xl:mr-4 rounded-full transition-all duration-300 
            ${currentPath === item.path ? "bg-amber-gold/20 text-amber-gold" : "hover:bg-amber-gold/50 hover:text-amber-gold"}`}>
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
