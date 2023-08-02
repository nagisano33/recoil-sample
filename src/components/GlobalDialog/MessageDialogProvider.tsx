import React from "react";
import { useRecoilValue } from "recoil";
import { messageIdsState } from "./atoms/messageIdsState";
import { MessageDialog } from "./MessageDialog";

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
        <MessageDialog id={id} key={id} />
      ))}
    </>
  );
};
