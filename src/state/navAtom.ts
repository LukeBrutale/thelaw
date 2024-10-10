import { atom } from "recoil";

export const navState = atom<string | null>({
  key: "navState", // Унікальний ключ для атома
  default: null, // Початкове значення
});
