import { useRecoilCallback } from "recoil";
import { dialogOpenState } from "../dialogOpenState";

/**
 * ダイアログの開閉状態を管理するためのカスタムフック
 */
export const useDialogOpenState = () => {
  /**
   * ダイアログを開く
   */
  const open = useRecoilCallback(
    ({ set }) =>
      (id: string) => {
        set(dialogOpenState(id), true);
      },
    []
  );

  /**
   * ダイアログを閉じる
   */
  const close = useRecoilCallback(
    ({ set }) =>
      (id: string) => {
        set(dialogOpenState(id), false);
      },
    []
  );

  return { open, close };
};
