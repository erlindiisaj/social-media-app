import { useState } from "react";
import { Avatar, Typography } from "@mui/material";

import "./story.styles.scss";

const Story = ({ name, imageUrl, id }) => {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    setSelectedId(id);
  };

  return (
    <div
      style={{
        cursor: "pointer",
        padding: "15px 0",
        backgroundColor: "white.main",
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: "12px",
        width: "17.7%",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Avatar />
      <Typography color="white.main" fontWeight="600">
        {name}
      </Typography>
      <div className="dim-layer" animate={{ opacity: selectedId ? 1 : 0 }} />
    </div>
  );
};

export default Story;
