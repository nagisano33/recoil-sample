import { atomFamily } from "recoil";

/**
 * ダイアログのフッターのコントロール部分を管理する atomFamily
 *
 * @param param メッセージ ID
 */
export const dialogActionState = atomFamily<React.ReactNode, string>({
  key: "dialog.action",
  default: <></>,
});
