import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useRecoilValue } from "recoil";
import { useDialog } from "./hooks/useDialog";
import { messageDialogSelector } from "./selectors/messageDialogSelector";

interface IProps {
  id: string;
}

/**
 * グローバルな Dialog
 * @returns 関数コンポーネント
 */
export const GlobalDialog = ({ id }: IProps) => {
  const { open, message, action } = useRecoilValue(messageDialogSelector(id));
  const { closeDialog } = useDialog();

  return (
    <Dialog
      open={open}
      onClose={() => closeDialog(id)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{message?.messageType}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message?.content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>{action}</DialogActions>
    </Dialog>
  );
};
