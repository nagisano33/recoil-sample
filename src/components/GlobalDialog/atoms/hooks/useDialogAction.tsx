import { useRecoilCallback } from "recoil";
import { useDialogOpenState } from "./useDialogOpenState";
import { dialogActionState } from "../dialogActionState";
import { Button } from "@mui/material";
import { ReactNode } from "react";

/**
 * ダイアログのアクション部分を管理するカスタムフック
 */
export const useDialogAction = () => {
  const { close } = useDialogOpenState();

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
          <Button onClick={() => close(id)}>OK</Button>
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
