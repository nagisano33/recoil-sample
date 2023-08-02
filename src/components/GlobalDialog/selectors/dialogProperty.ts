import { selectorFamily } from "recoil";
import { dialogOpenState } from "../atoms/dialogOpenState";
import { dialogContentState } from "../atoms/dialogContentState";
import { dialogActionState } from "../atoms/dialogActionState";
import { dialogTitleState } from "../atoms/dialogTitleState";

interface IDialogProperty {
  /**
   * 開くべきかどうか
   */
  shouldOpen: boolean;

  /**
   * タイトル
   */
  title: string;

  /**
   * コンテンツ
   */
  contents: string;

  /**
   * フッターコントロール
   */
  actions: React.ReactNode;
}

/**
 * ダイアログのプロパティを返すセレクタ
 * 
 * @param param メッセージ ID
 */
export const dialogProperty = selectorFamily<IDialogProperty, string>({
  key: "dialog.property",
  get:
    (id: string) =>
    ({ get }) => {
      const shouldOpen = get(dialogOpenState(id));
      const title = get(dialogTitleState(id));
      const contents = get(dialogContentState(id));
      const actions = get(dialogActionState(id));

      return { shouldOpen, title, contents, actions };
    },
});
