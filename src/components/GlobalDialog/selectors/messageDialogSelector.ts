import { selector, selectorFamily } from "recoil";
import { messageStateFamily } from "../atoms/messageStateFamily";
import { dialogOpenState } from "../atoms/dialogOpenState";
import { dialogActionState } from "../atoms/dialogActionState";

/**
 * メッセージダイアログを取得するための selector
 */
export const messageDialogSelector = selectorFamily({
  key: "message.dialog",
  get:
    (id: string) =>
    ({ get }) => {
      return {
        open: get(dialogOpenState(id)),
        message: get(messageStateFamily(id)),
        action: get(dialogActionState(id)),
      };
    },
});
