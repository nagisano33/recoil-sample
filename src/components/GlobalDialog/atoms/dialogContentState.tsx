import React from "react";
import { atom } from "recoil";

/**
 * ダイアログのコンテンツ部分を管理する atom
 */
export const dialogContentState = atom<React.ReactNode>({
  key: "dialog.content",
  default: <></>,
});
