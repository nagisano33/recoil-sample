import { useRecoilCallback } from "recoil";
import { messageIdsState } from "../messageIdsState";

/**
 * メッセージの ID 一覧を管理する recoil ストア
 */
export const useMessageIdCollection = () => {
  /**
   * ID のリストをセット
   */
  const set = useRecoilCallback(
    ({ set }) =>
      (ids: string[]) => {
        set(messageIdsState, ids);
      },
    []
  );

  /**
   * ID を追加
   */
  const add = useRecoilCallback(
    ({ set }) =>
      (id: string) => {
        set(messageIdsState, (prev) => [...prev, id]);
      },
    []
  );

  return { set, add };
};
