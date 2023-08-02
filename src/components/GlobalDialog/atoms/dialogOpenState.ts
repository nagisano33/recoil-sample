import { atomFamily } from "recoil";

/**
 * ダイアログの開閉状態を管理する atomFamily
 *
 * @param param メッセージ ID
 */
export const dialogOpenState = atomFamily<boolean, string>({
  key: "dialog.shouldOpen",
  default: false,
});
