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
import yup from "../yupConfig";
import i18next from "../i18nextConfig";
import { ValidationError } from "yup";
import { MessageDialogProvider } from "../components/GlobalDialog/MessageDialogProvider";
import { IMessage } from "../components/GlobalDialog/interfaces/IMessage";
import { useMessageRegistration } from "../components/GlobalDialog/hooks/useMessageRegistration";

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

const messages: IMessage[] = [
  { messageId: "1", messageType: "error", content: "エラーだよ" },
  { messageId: "2", messageType: "warning", content: "注意だよ" },
  { messageId: "3", messageType: "info", content: "お知らせ" },
];

/**
 * ページ
 * @returns 関数コンポーネント
 */
export const MyPage = () => {
  const themeCss = useRecoilValue(ThemeCss);

  const { t, changeLanguage } = i18next;

  const { openDialog, closeDialog, setActions } = useDialog();

  const { register } = useMessageRegistration();

  useEffect(() => {
    // API から messages がとれた想定
    messages.forEach((message) => {
      register(message);
      openDialog(message.messageId);
    });
  }, []);

  return (
    <MessageDialogProvider>
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
    </MessageDialogProvider>
  );
};
