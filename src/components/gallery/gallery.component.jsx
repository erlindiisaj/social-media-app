import { useContext, useState } from "react";

import { userContext } from "../../contexts/user.context";
import { deletePost } from "../../utils/firebase/firebase.utils";

import SnackbarAlert from "../snackbar-alert/snackbar-alert.component";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MoreHoriz } from "@mui/icons-material";
import { Avatar, Box, Typography, IconButton } from "@mui/material";

const Gallery = ({ post, id }) => {
  const { user } = useContext(userContext);
  const { uid, displayName, photoURL } = user;
  const { imageUrl } = post;
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDeleteAndClose = async (e) => {
    e.preventDefault();

    setAnchorEl(null);
    try {
      await deletePost(uid, id);
      setIsOpen(true);
    } catch (err) {
      alert(err);
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    setAnchorEl(null);
  };

  const handleRemoveAlert = () => {
    setIsOpen(false);
  };

  return (
    <Box
      sx={{
        width: "45%",
        height: "450px",
        mb: "30px",
      }}
    >
      <SnackbarAlert
        isOpen={isOpen}
        handleClose={handleRemoveAlert}
        message="Post deleted successfully!"
        type="success"
      />
      <img
        alt="Post"
        style={{
          width: "100%",
          height: "90%",
          borderRadius: "12px",
          objectFit: "cover",
        }}
        src={imageUrl}
      />

      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Avatar
            src={photoURL}
            sx={{
              width: "20px",
              height: "20px",
              marginRight: "7px",
            }}
          />
          <Typography variant="h5" fontWeight={500}>
            {displayName}
          </Typography>
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
    </Box>
  );
};

export default Gallery;
