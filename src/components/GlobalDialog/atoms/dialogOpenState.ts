import { atom } from "recoil";

/**
 * ダイアログの開閉状態を管理する atom
 */
export const dialogOpenState = atom<boolean>({
  key: "dialog.shouldOpen",
  default: false,
});
