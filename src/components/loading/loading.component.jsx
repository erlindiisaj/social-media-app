import CircularProgress from "@mui/material/CircularProgress";

import "./loading.styles.scss";
const Loading = () => {
  return (
    <div className="loading-container">
      <CircularProgress />
    </div>
  );
};

export default Loading;
