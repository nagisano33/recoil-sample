import React from "react";
import { Control } from "./components/Control";
import { Introduction } from "./components/Introduction";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { ThemeCss } from "../contexts/themeCss";

const StyledDiv = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.fontColor};
`;

/**
 * ページ
 * @returns 関数コンポーネント
 */
export const MyPage = () => {
  const themeCss = useRecoilValue(ThemeCss);
  return (
    <StyledDiv theme={themeCss}>
      MyPage
      <div>
        <Control />
      </div>
      <div>
        <Introduction />
      </div>
    </StyledDiv>
  );
};
