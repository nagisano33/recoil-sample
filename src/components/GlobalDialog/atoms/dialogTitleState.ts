import { atomFamily } from "recoil";

/**
 * ダイアログのタイトルを管理する atomFamily
 *
 * @param param メッセージ ID
 */
export const dialogTitleState = atomFamily<string, string>({
  key: "dialog.title",
  default: "",
});
