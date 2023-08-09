import { Alert } from "@mui/material";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";

const SnackbarAlert = ({ message, isOpen, handleClose, type }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={isOpen}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;
