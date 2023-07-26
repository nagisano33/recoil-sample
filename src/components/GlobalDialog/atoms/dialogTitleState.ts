import { atom } from "recoil";

/**
 * ダイアログのタイトルを管理する atom
 */
export const dialogTitleState = atom({
  key: "dialog.title",
  default: "",
});
