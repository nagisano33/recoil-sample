import { atom } from "recoil";

export const themeState = atom({
  key: "themeMode",
  default: "light",
});
