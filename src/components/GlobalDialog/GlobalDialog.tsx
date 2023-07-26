import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { dialogOpenState } from "./atoms/dialogOpenState";
import { dialogProperty } from "./selectors/dialogProperty";

interface IProps {
  // no props.
}

/**
 * グローバルな Dialog
 * @returns
 */
export const GlobalDialog = ({ children }: React.PropsWithChildren<IProps>) => {
  const setShouldOpenDialog = useSetRecoilState(dialogOpenState);

  const { shouldOpen, title, contents, actions } =
    useRecoilValue(dialogProperty);

  return (
    <div>
      <Dialog
        open={shouldOpen}
        onClose={() => setShouldOpenDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {contents}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {actions}
        </DialogActions>
      </Dialog>
      {children}
    </div>
  );
};
