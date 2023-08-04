import { Alert } from "@mui/material";

const SuccessSnackbar = () => {
  return (
    <Alert severity="success" sx={{ width: "100%" }}>
      File uploaded successfully!
    </Alert>
  );
};

export default SuccessSnackbar;
