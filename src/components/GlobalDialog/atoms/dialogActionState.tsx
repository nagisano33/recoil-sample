import { atom } from "recoil";

/**
 * ダイアログのフッターのコントロール部分を管理する atom
 */
export const dialogActionState = atom<React.ReactNode>({
  key: "dialog.action",
  default: <></>,
});
