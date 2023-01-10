import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

export const MuiDialog = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>Open Dailog</Button>
      <Dialog open={open} aria-labelledby='dialog-title' aria-describedby="dialog-description">
        <DialogTitle id='dialog-title'>Are you sure !</DialogTitle>
        <DialogContent>
            <DialogContentText id='dialog-description'>The changes are cannot be reverted</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button autoFocus>Submic</Button>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
