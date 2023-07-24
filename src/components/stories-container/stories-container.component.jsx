import "./stories-container.styles.scss";
import { useState } from "react";
import { Avatar, Typography } from "@mui/material";
import { motion } from "framer-motion";
import STORY_DATA from "../../datas/STORY_DATA";

const StoriesContainer = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {STORY_DATA.map((story) => {
        const { name, imageUrl, id } = story;
        return (
          <motion.div
            transition={{ delay: 1 }}
            onClick={() => {
              selectedId ? setSelectedId(null) : setSelectedId(id);
            }}
            key={id}
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
            className={selectedId === id ? "opened-story" : ""}
          >
            <Avatar />
            <Typography color="white.main" fontWeight="600">
              {name}
            </Typography>
          </motion.div>
        );
      })}
      <motion.div
        className="dim-layer"
        animate={{ opacity: selectedId ? 0.7 : 0 }}
      />
    </div>
  );
};

export default StoriesContainer;
