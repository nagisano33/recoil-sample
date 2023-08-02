import { useCallback } from "react";
import { IMessage } from "../interfaces/IMessage";
import { useMessageIdCollection } from "../atoms/hooks/useMessageIdCollection";
import { useMessageStateFamily } from "../atoms/hooks/useMessageStateFamily";
import { useDialogAction } from "../atoms/hooks/useDialogAction";

/**
 * メッセージを recoil ストアで管理するためのカスタムフック
 */
export const useMessageRegistration = () => {
  const messageIdCollection = useMessageIdCollection();
  const messageStateFamily = useMessageStateFamily();
  const dialogAction = useDialogAction();

  /**
   * メッセージをストアに登録する
   */
  const register = useCallback((message: IMessage) => {
    messageIdCollection.add(message.messageId);
    messageStateFamily.add(message);
    dialogAction.setDefault(message.messageId);
  }, []);

  return { register };
};
