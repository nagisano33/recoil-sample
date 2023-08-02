import { atom } from "recoil";

/**
 * 管理しているメッセージ ID の一覧
 */
export const messageIdsState = atom<string[]>({
  key: "dialog.messageIds",
  default: [],
});
