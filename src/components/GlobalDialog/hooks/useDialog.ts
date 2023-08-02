import { useRecoilCallback } from "recoil";
import { dialogOpenState } from "../atoms/dialogOpenState";
import { ReactNode } from "react";
import { dialogActionState } from "../atoms/dialogActionState";

/**
 * グローバルなダイアログを使用するためのカスタムフック
 */
export const useDialog = () => {
  /**
   * ダイアログを開く
   *
   * @param id メッセージ ID
   */
  const openDialog = useRecoilCallback(
    ({ set }) =>
      (id: string) =>
        set(dialogOpenState(id), true),
    []
  );

  /**
   * ダイアログを開く
   *
   * @param id メッセージ ID
   */
  const closeDialog = useRecoilCallback(
    ({ set }) =>
      (id: string) =>
        set(dialogOpenState(id), false),
    []
  );

  /**
   * アクションをセットする
   */
  const setActions = useRecoilCallback(
    ({ set }) =>
      (id: string, actions: ReactNode) =>
        set(dialogActionState(id), actions),
    []
  );

  return {
    openDialog,
    closeDialog,
    setActions,
  };
};
