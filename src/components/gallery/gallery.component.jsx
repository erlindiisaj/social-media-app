import { Avatar, Box, Typography } from "@mui/material";
import { useContext } from "react";
import { userContext } from "../../contexts/user.context";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
const ProfilePost = ({ post }) => {
  const { user } = useContext(userContext);
  const { photoURL, displayName } = user;
  const { likes, comments, imageUrl } = post;
  return (
    <Box
      sx={{
        width: "45%",
        height: "450px",
        mb: "30px",
      }}
    >
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
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mt={1.5}
      >
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
        <Box display="flex">
          <Box mr={1.2} display="flex" alignItems="center">
            <FavoriteBorderRoundedIcon
              sx={{ color: "primary.main", marginRight: "6px" }}
            />
            <Typography variant="h5"> {likes}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <ChatBubbleOutlineRoundedIcon
              sx={{ color: "primary.main", marginRight: "6px" }}
            />
            <Typography variant="h5"> {comments} </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePost;
