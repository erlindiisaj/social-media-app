import { useState, useContext } from "react";

import moment from "moment"; //? Posts date library

import { userContext } from "../../contexts/user.context";

import { deletePost } from "../../utils/firebase/firebase.utils";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MoreHoriz } from "@mui/icons-material";
import { Typography, Box, Avatar, Button, IconButton } from "@mui/material";

import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";

import "./post.styles.scss";

const Post = ({ post, id }) => {
  const { user } = useContext(userContext);
  const { uid } = user;
  const { userName, dateCreated, description, likes, comments, imageUrl } =
    post;
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const { photoURL } = user;

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDeleteAndClose = async (e) => {
    e.preventDefault();
    setAnchorEl(null);
    deletePost(uid, id);
  };

  const handleClose = async (e) => {
    e.preventDefault();
    setAnchorEl(null);
  };

  const handleLike = (e) => {
    e.preventDefault();
    console.log(dateCreated);
    setIsLiked(!isLiked);
  };

  return (
    <div className="posts-container">
      <Box
        sx={{
          width: "100%",
        }}
        display="flex"
        justifyContent="space-between"
      >
        <Box alignItems="center" display="flex">
          <Avatar src={photoURL} />
          <Box marginLeft={1.2}>
            <Typography fontWeight="600" variant="h4">
              {userName}
            </Typography>
            <Typography color="gray.main" variant="h5">
              {moment(dateCreated).fromNow()}
            </Typography>
          </Box>
        </Box>
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreHoriz />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: 20 * 4.5,
                width: "20ch",
              },
            }}
          >
            <MenuItem onClick={handleDeleteAndClose}>Delete</MenuItem>
          </Menu>
        </div>
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
    </div>
  );
};

export default Post;
