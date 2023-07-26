import { useRecoilCallback } from "recoil";
import { dialogOpenState } from "../atoms/dialogOpenState";
import { dialogTitleState } from "../atoms/dialogTitleState";
import { ReactNode } from "react";
import { dialogContentState } from "../atoms/dialogContentState";
import { dialogActionState } from "../atoms/dialogActionState";

/**
 * グローバルなダイアログを使用するためのカスタムフック
 */
export const useDialog = () => {
  /**
   * ダイアログを開く
   */
  const openDialog = useRecoilCallback(
    ({ set }) =>
      () =>
        set(dialogOpenState, true),
    []
  );

  /**
   * ダイアログを開く
   */
  const closeDialog = useRecoilCallback(
    ({ set }) =>
      () =>
        set(dialogOpenState, false),
    []
  );

  /**
   * タイトルをセットする
   * @param title タイトル
   */
  const setTitle = useRecoilCallback(
    ({ set }) =>
      (title: string) =>
        set(dialogTitleState, title),
    []
  );

  /**
   * コンテンツをセットする
   * @param contents コンテンツの JSX
   */
  const setContents = useRecoilCallback(
    ({ set }) =>
      (contents: ReactNode) =>
        set(dialogContentState, contents),
    []
  );

  const setActions = useRecoilCallback(
    ({ set }) =>
      (actions: ReactNode) =>
        set(dialogActionState, actions),
    []
  );

  return {
    openDialog,
    closeDialog,
    setTitle,
    setContents,
    setActions,
  };
};
