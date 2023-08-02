import { useRecoilCallback } from "recoil";
import { IMessage } from "../../interfaces/IMessage";
import { messageStateFamily } from "../messageStateFamily";

/**
 * メッセージを recoil ストアで管理するためのカスタムフック
 */
export const useMessageStateFamily = () => {
  const add = useRecoilCallback(
    ({ set }) =>
      (message: IMessage) => {
        set(messageStateFamily(message.messageId), message);
      },
    []
  );

  return { add };
};
