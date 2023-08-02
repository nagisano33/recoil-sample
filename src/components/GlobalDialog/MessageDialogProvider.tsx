import React from "react";
import { useRecoilValue } from "recoil";
import { messageIdsState } from "./atoms/messageIdsState";
import { GlobalDialog } from "./GlobalDialog";

/**
 * メッセージダイアログ提供コンポーネント
 */
export const MessageDialogProvider = ({
  children,
}: React.PropsWithChildren) => {
  const ids = useRecoilValue(messageIdsState);
  return (
    <>
      {children}
      {ids.map((id) => (
        <GlobalDialog id={id} key={id} />
      ))}
    </>
  );
};
