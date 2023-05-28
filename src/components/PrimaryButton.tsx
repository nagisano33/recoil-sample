import React, { FC } from "react";
import { IButtonProperty, MyButton } from "./MyButton";

interface IProps extends Omit<IButtonProperty, "theme"> {}

/**
 * プライマリーボタン
 * @param props 
 * @returns 
 */
export const PrimaryButton: FC<IProps> = (props) => {
  const theme = { backGround: "royalblue", fontColor: "white" };

  return <MyButton {...props} theme={theme} />;
};
