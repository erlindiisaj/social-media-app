import { useState } from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { MoreHoriz } from "@mui/icons-material";
import { Typography, Box, Avatar, Button, IconButton } from "@mui/material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import "./post.styles.scss";

const options = ["Edit", "Delete"];

const ITEM_HEIGHT = 48;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
];

const srcset = (image, size, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
};

const Post = ({ post }) => {
  const { user, dateCreated, description, likes, comments } = post;
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLike = (e) => {
    e.preventDefault();
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
          <Avatar />
          <Box marginLeft={1.2}>
            <Typography fontWeight="600" variant="h4">
              {user}
            </Typography>
            <Typography color="gray.main" variant="h5">
              {dateCreated}
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
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === "Pyxis"}
                onClick={handleClose}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Box>
      <Box mt={2.5}>
        <Typography color="black.light" variant="h5">
          {description}
        </Typography>
        <Box mt={4}>
          <ImageList
            sx={{
              width: "100%",
              height: "100%",
            }}
            variant="quilted"
            cols={4}
            rowHeight={200}
          >
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                  height="100%"
                  style={{
                    borderRadius: "12px",
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Box mt={2} display="flex">
          <Button
            onClick={handleLike}
            color="primary.main"
            variant="soft"
            sx={{
              color: "#5632fa",
            }}
            startIcon={
              isLiked ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />
            }
          >
            {likes}
          </Button>
          <Button
            sx={{
              color: "#5632fa",
              marginLeft: "20px",
            }}
            color="primary.main"
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
