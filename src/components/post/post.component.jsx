import { useState } from "react";

import moment from "moment"; //? Posts date library
import { motion } from "framer-motion";

import { Typography, Box, Avatar, Button } from "@mui/material";

import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";

import "./post.styles.scss";

const Post = ({ post, id }) => {
  const {
    userName,
    dateCreated,
    description,
    avatarURL,
    likes,
    comments,
    imageUrl,
  } = post;
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (e) => {
    e.preventDefault();
    console.log(dateCreated);
    setIsLiked(!isLiked);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="posts-container"
    >
      <Box
        sx={{
          width: "100%",
        }}
        display="flex"
        justifyContent="space-between"
      >
        <Box alignItems="center" display="flex">
          <Avatar src={avatarURL} />
          <Box marginLeft={1.2}>
            <Typography fontWeight="600" variant="h4">
              {userName}
            </Typography>
            <Typography color="gray.main" variant="h5">
              {moment(dateCreated).fromNow()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box mt={2.5}>
        <Typography color="black.light" variant="h5">
          {description}
        </Typography>
        <Box
          mt={4}
          sx={{
            borderRadius: "12px",
            width: "100%",
            minHeight: "600px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage: `url(${imageUrl})`,
          }}
        ></Box>
        <Box mt={2} display="flex">
          <Button
            onClick={handleLike}
            variant="soft"
            startIcon={
              isLiked ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />
            }
          >
            {likes}
          </Button>
          <Button
            sx={{
              marginLeft: "20px",
            }}
            variant="soft"
            startIcon={<ChatBubbleOutlineRoundedIcon />}
          >
            {comments}
          </Button>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Post;
