import { Button, Snackbar, Alert, AlertProps } from "@mui/material";
import { useState, forwardRef } from "react";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Submit
      </Button>
      {/* <Snackbar
        message="Submited successfully !"
        open={open}
        onClose={handleClose}
        autoHideDuration={5000}
        anchorOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
      /> */}
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={5000}
        anchorOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
      >
        <SnackbarAlert severity="error">Submited successfully !</SnackbarAlert>
      </Snackbar>
    </>
  );
};
