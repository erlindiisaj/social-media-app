import { Alert } from "@mui/material";

const AlertSnackbar = () => {
  return (
    <Alert severity="success" sx={{ width: "100%" }}>
      File uploaded successfully!
    </Alert>
  );
};

export default AlertSnackbar;
