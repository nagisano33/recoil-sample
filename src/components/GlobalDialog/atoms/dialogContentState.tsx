import React from "react";
import { atomFamily } from "recoil";

/**
 * ダイアログのコンテンツ部分を管理する atomFamily
 *
 * @param param メッセージ ID
 */
export const dialogContentState = atomFamily<string, string>({
  key: "dialog.content",
  default: "",
});
