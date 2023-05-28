import React from "react";
import { Control } from "./components/Control";
import { Introduction } from "./components/Introduction";

/**
 * ページ
 * @returns 関数コンポーネント
 */
export const MyPage = () => {
  return (
    <div>
      MyPage
      <div>
        <Control />
      </div>
      <div>
        <Introduction />
      </div>
    </div>
  );
};
