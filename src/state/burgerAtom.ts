import { atom } from "recoil";

export const burgerState = atom({
  key: "burgerState", // Унікальний ключ для атома
  default: false, // Значення за замовчуванням
});
