"use client";

import Link from "next/link";
import { useRecoilState } from "recoil";
// import { useRouter } from "next/router";
import { navState } from "@/state/navAtom";
import { selectState } from "@/state/selectAtom";
import { useEffect } from "react";
import { SpriteSVG } from "../../../public/SpriteSVG";

export default function Navigation() {
  const [currentPath, setCurrentPath] = useRecoilState(navState);
  const [showSelect, setShowSelect] = useRecoilState(selectState);
  // const router = useRouter();

  const handleMouseDown = () => {
    setShowSelect(true); // Відкрито
  };

  const handleBlur = () => {
    setShowSelect(false); // Закрито
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPath = event.target.value;
    if (selectedPath !== currentPath) {
      // router.push(selectedPath);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Зберігаємо поточний шлях для активації сторінки
      setCurrentPath(window.location.pathname);
      // if (event.target instanceof HTMLSelectElement) {
      //   event.target.blur(); // Знімаємо фокус
      // }
    }
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
      <ul className="md:hidden xl:flex">
        {menuItems.map(item => (
          <li
            key={item.path}
            className={`p-3 border-b-[1px] border-background-300 sm:border-b-[1px] md:border-b-0 xl:mr-4 rounded-full transition-all duration-300
            ${currentPath === item.path ? "bg-amber-gold/20 text-amber-gold" : "hover:bg-amber-gold/50 hover:text-amber-gold"}`}>
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <div className="hidden relative md:flex md:items-center xl:hidden">
        {/* Випадаючий список для інших сторінок */}
        <select
          onMouseDown={handleMouseDown}
          onBlur={handleBlur}
          onChange={handleSelectChange}
          className="appearance-none py-2 pl-[15px] pr-[40px] border-0 rounded-full bg-amber-gold/20 text-text-secondary focus:outline-none focus:bg-amber-gold/10"
          defaultValue={currentPath ?? ""} // Якщо currentPath null, використовуємо порожній рядок
        >
          <option value="/" className="bg-amber-gold text-background-100 focus:bg-amber-gold/10">
            Головна
          </option>
          {menuItems
            .filter(item => item.path !== "/")
            .map(item => (
              <option key={item.path} value={item.path} className="bg-amber-gold mt-2 text-background-100 ">
                {item.label}
              </option>
            ))}
        </select>
        <span className="absolute right-3 pointer-events-none" style={{ top: "0.655rem" }}>
          {showSelect ? (
            <SpriteSVG name="dots-open" color="grey" width={20} height={20} /> // Іконка для відкритого списку
          ) : (
            <SpriteSVG name="dots-close" color="grey" width={20} height={20} /> // Іконка для закритого списку
          )}
        </span>
      </div>
    </nav>
  );
}

// "use client";

// import Link from "next/link";
// import { useRecoilState } from "recoil";
// import { navState } from "@/state/navAtom";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import React from "react";

// export default function Navigation() {
//   const [currentPath, setCurrentPath] = useRecoilState(navState);
//   const router = useRouter();
//   const [isClient, setIsClient] = useState(false); // Перевірка на клієнтське оточення

//   useEffect(() => {
//     // Виконуємо лише на клієнтській стороні
//     setIsClient(true);
//     setCurrentPath(window.location.pathname); // Зберігаємо поточний шлях
//   }, [setCurrentPath]);

//   const menuItems = [
//     { label: "Головна", path: "/" },
//     { label: "Про мене", path: "/about" },
//     { label: "Практика", path: "/practice" },
//     { label: "Новини", path: "/news" },
//     { label: "Контакти", path: "/contacts" },
//   ];

// const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//   const selectedPath = event.target.value;
//   router.push(selectedPath);
// };

//   if (!isClient) return null; // Повертаємо null, поки компонент не змонтовано на клієнті

//   return (
//     <nav>
//       <ul className="md:hidden">
//         {menuItems.map(item => (
//           <li
//             key={item.path}
//             className={`p-3 border-b-[1px] border-background-300 sm:border-b-[1px] md:border-b-0 xl:mr-4 rounded-full transition-all duration-300
//               ${currentPath === item.path ? "bg-amber-gold/20 text-amber-gold" : "hover:bg-amber-gold/50 hover:text-amber-gold"}`}>
//             <Link href={item.path}>{item.label}</Link>
//           </li>
//         ))}
//       </ul>
//       <div className="hidden md:block">
//         {/* Випадаючий список для інших сторінок */}
//         <select
//           onChange={handleSelectChange}
//           className="p-2 border rounded bg-white text-black"
//           defaultValue={currentPath ?? ""} // Якщо currentPath null, використовуємо порожній рядок
//         >
//           <option value="/">Головна</option>
//           {menuItems
//             .filter(item => item.path !== "/")
//             .map(item => (
//               <option key={item.path} value={item.path}>
//                 {item.label}
//               </option>
//             ))}
//         </select>
//       </div>
//     </nav>
//   );
// }
