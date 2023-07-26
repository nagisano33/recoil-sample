import { selector } from "recoil";
import { dialogOpenState } from "../atoms/dialogOpenState";
import { dialogTitleState } from "../atoms/dialogTitleState";
import { dialogContentState } from "../atoms/dialogContentState";
import { dialogActionState } from "../atoms/dialogActionState";

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
  contents: React.ReactNode;

  /**
   * フッターコントロール
   */
  actions: React.ReactNode;
}

/**
 * ダイアログのプロパティを返すセレクタ
 */
export const dialogProperty = selector<IDialogProperty>({
  key: "dialog.property",
  get: ({ get }) => {
    const shouldOpen = get(dialogOpenState);
    const title = get(dialogTitleState);
    const contents = get(dialogContentState);
    const actions = get(dialogActionState);

    return { shouldOpen, title, contents, actions };
  },
});
