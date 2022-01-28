import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogContentText,
  DialogContent,
  DialogTitle,
  IconButton,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";

interface Props {
  title: string;
  showDialog: boolean;
  setShowDialog: (state: boolean) => void;
  children?: React.ReactNode;
}
function ModalDialog(props: Props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className="rlv-modal-dialog">
      <Dialog
        fullScreen={fullScreen}
        maxWidth="md"
        open={props.showDialog}
        onClose={() => props.setShowDialog(false)}
        aria-labelledby="responsive-dialog-title"
        sx={{
          "& .MuiPaper-root": {
            overflowY: "hidden",
          },
        }}
      >
        <DialogTitle
          id="responsive-dialog-title"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: theme.typography.h3.fontSize,
          }}
        >
          <Typography
            component="span"
            variant="h3"
            dangerouslySetInnerHTML={{ __html: props.title }}
          />
          <IconButton
            aria-label="close dialog"
            size="large"
            onClick={() => props.setShowDialog(false)}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {/* This defaults to p but our content can be any element. */}
          <DialogContentText component="div">
            {props.children}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ModalDialog;
