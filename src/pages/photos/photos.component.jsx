import { Box } from "@mui/material";
import POSTS_DATA from "../../POSTS_DATA";
import ProfilePost from "../../components/profile-post/profile-post.component";

const Photos = () => {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="space-around"
      flexWrap="wrap"
    >
      {POSTS_DATA.map((post) => (
        <ProfilePost key={post.id} user={post.user} post={post} />
      ))}
    </Box>
  );
};

export default Photos;
