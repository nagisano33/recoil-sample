import { FC } from "react";
import styled, { ThemeProvider } from "styled-components";

/**
 * ボタンのスタイル
 */
export const MyButtonStyle = styled.button`
  padding: 1em;
  border-radius: 30px;
  border: 0;
  min-width: 10ch;

  background: ${(props) => props.theme.backGround};
  color: ${(props) => props.theme.fontColor};
`;

/**
 * ボタンプロパティ
 */
export interface IButtonProperty {
  /**
   * ボタンのラベル
   */
  label: string;

  /**
   * クリック時の処理
   * @param event - イベントオブジェクト
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * スタイル
   */
  theme?: {
    /**
     * 背景色
     */
    backGround?: string;
    /**
     * 文字色
     */
    fontColor?: string;
  };
}

/**
 * ボタン
 * @returns 関数コンポーネント
 */
export const MyButton: FC<IButtonProperty> = ({ label, onClick, theme }) => {
  return (
    <MyButtonStyle theme={theme} onClick={onClick}>
      {label}
    </MyButtonStyle>
  );
};
