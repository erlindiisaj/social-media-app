import { useState } from "react";
import { Avatar, Typography } from "@mui/material";
import { motion } from "framer-motion";
import "./story.styles.scss";

const Story = ({ name, imageUrl, id }) => {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (e) => {
    console.log(e);
    e.preventDefault();
    setSelectedId(id);
  };

  return (
    <motion.div
      onClick={handleClick}
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
      <motion.div
        className="dim-layer"
        animate={{ opacity: selectedId ? 1 : 0 }}
      />
    </motion.div>
  );
};

export default Story;
