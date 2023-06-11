import React from "react";
import { Control } from "./components/Control";
import { Introduction } from "./components/Introduction";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { ThemeCss } from "../contexts/themeCss";
import {
  IDisplayable,
  RowHeaderTable,
} from "../components/MyTable/RowHeaderTable";

const StyledDiv = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.fontColor};
`;

interface ITest extends IDisplayable {
  id: number;
  data: string[];
  name: string;
  description?: string;
}

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
      <div style={{ width: "40%" }}>
        <RowHeaderTable<ITest>
          headerType={"row"}
          // ここに渡す順番で表示が変わる
          rows={{ id: 1, data: ["hoge", "fuga", "piyo"], name: "hoge" }}
          titles={{
            id: "ID",
            name: "名前",
            data: "データ",
            description: "説明",
          }}
        />
      </div>
    </StyledDiv>
  );
};
