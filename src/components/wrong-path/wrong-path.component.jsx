import "./wrong-path.styles.scss";
import { Alert } from "@mui/material";

const WrongPath = () => {
  return (
    <div className="wrong-path-container">
      <Alert
        sx={{
          width: "50%",
          height: "50px",
          marginTop: "50px",
        }}
        variant="filled"
        severity="error"
      >
        Wrong path! - Please check the entered path again.
      </Alert>
    </div>
  );
};

export default WrongPath;
