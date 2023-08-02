import { selector } from "recoil";
import { IMessage } from "../interfaces/IMessage";
import { messageIdsState } from "../atoms/messageIdsState";
import { messageStateFamily } from "../atoms/messageStateFamily";
import { isMessage } from "../interfaces/IMessage";

/**
 * ストア内の全メッセージを取得する selector
 */
export const allMessagesSelector = selector<IMessage[]>({
  key: "message.all",
  get: ({ get }) => {
    const ids = get(messageIdsState);
    return ids
      .map((id) => get(messageStateFamily(id)))
      .filter((message): message is IMessage => isMessage(message));
  },
});
