import React, { useEffect } from "react";
import { Control } from "./components/Control";
import { Introduction } from "./components/Introduction";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { ThemeCss } from "../contexts/themeCss";
import {
  IDisplayable,
  RowHeaderTable,
} from "../components/MyTable/RowHeaderTable";
import { useDialog } from "../components/GlobalDialog/hooks/useDialog";
import { Button } from "@mui/material";

const StyledDiv = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.fontColor};
`;

interface ITest extends IDisplayable {
  id: number;
  // data: string[];
  name: string;
  description?: string;
}

/**
 * ページ
 * @returns 関数コンポーネント
 */
export const MyPage = () => {
  const themeCss = useRecoilValue(ThemeCss);

  const { openDialog, closeDialog, setTitle, setContents, setActions } =
    useDialog();

  /**
   * テストなので簡易的だが、ちゃんと書くならここをカスタムフックにすると良さそう
   * その場合は useDialog の openDialog と closeDialog だけを返すと良い
   */
  useEffect(() => {
    setTitle("test");
    setContents(
      <>
        <h3>global dialog desu</h3>
        <p>nakanaka een chauka</p>
      </>
    );
    setActions(
      <>
        <Button onClick={() => alert("test desu")}>OK</Button>
        <Button onClick={() => closeDialog()}>Cancel</Button>
      </>
    );
  }, []);

  return (
    <StyledDiv theme={themeCss}>
      MyPage
      <div>
        <Button onClick={openDialog}>open global dialog</Button>
      </div>
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
          // rows={{ id: 1, data: ["hoge", "fuga", "piyo"], name: "hoge" }}
          rows={{ id: 1, name: "hoge" }}
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
