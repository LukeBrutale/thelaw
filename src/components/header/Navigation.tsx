// export default function Navigation() {
//   return (
//     <nav>
//       <ul className="md:flex">
//         <li className="p-3 border-b-[1px] border-background-300 sm:border-b-[1px] md:border-b-0 xl:mr-4 hover:bg-amber-gold/20 hover:text-amber-gold rounded-full transition-all duration-300">Головна</li>
//         <li className="p-3 border-b-[1px] border-background-300 sm:border-b-[1px] md:border-b-0 xl:mr-4 hover:bg-amber-gold/20 hover:text-amber-gold rounded-full transition-all duration-300">Про мене</li>
//         <li className="p-3 border-b-[1px] border-background-300 sm:border-b-[1px] md:border-b-0 xl:mr-4 hover:bg-amber-gold/20 hover:text-amber-gold rounded-full transition-all duration-300">Практика</li>
//         <li className="p-3 border-b-[1px] border-background-300 sm:border-b-[1px] md:border-b-0 xl:mr-4 hover:bg-amber-gold/20 hover:text-amber-gold rounded-full transition-all duration-300">Новини</li>
//         <li className="p-3 border-b-[1px] border-background-300 sm:border-b-[1px] md:border-b-0 xl:mr-4 hover:bg-amber-gold/20 hover:text-amber-gold rounded-full transition-all duration-300">Контакти</li>
//       </ul>
//     </nav>
//   );
// }
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [currentPath, setCurrentPath] = useState<string | null>(null);

  useEffect(() => {
    // Зберігаємо поточний шлях для активації сторінки
    setCurrentPath(window.location.pathname);
  }, []);

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
