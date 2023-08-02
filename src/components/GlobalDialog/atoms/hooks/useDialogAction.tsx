import { useRecoilCallback } from "recoil";
import { useDialogOpenState } from "./useDialogOpenState";
import { dialogActionState } from "../dialogActionState";
import { Button } from "@mui/material";
import { ReactNode } from "react";
import { useMessageIdCollection } from "./useMessageIdCollection";

/**
 * ダイアログのアクション部分を管理するカスタムフック
 */
export const useDialogAction = () => {
  const { close } = useDialogOpenState();
  const messageIds = useMessageIdCollection();

  const defaultCloseHandler = (id: string) => {
    close(id);
    messageIds.remove(id);
  };

  /**
   * デフォルトをセットする
   *
   * @param id メッセージ ID
   */
  const setDefault = useRecoilCallback(
    ({ set }) =>
      (id: string) => {
        set(
          dialogActionState(id),
          <Button onClick={() => defaultCloseHandler(id)}>OK</Button>
        );
      },
    []
  );

  /**
   * セットする
   * @param id メッセージ ID
   * @param node コンポーネントノード
   */
  const set = useRecoilCallback(
    ({ set }) =>
      (id: string, node: ReactNode) => {
        set(dialogActionState(id), node);
      },
    []
  );

  return { setDefault, set };
};
