import { Box } from "@mui/material";
import { useContext } from "react";
import { userPosts } from "../../contexts/userPosts.context";
import POSTS_DATA from "../../datas/POSTS_DATA";
import ProfilePost from "../../components/gallery/gallery.component";

const Photos = () => {
  const { postsList } = useContext(userPosts);
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="space-around"
      flexWrap="wrap"
    >
      {postsList.map((post) => (
        <ProfilePost key={post.id} user={post.user} post={post} />
      ))}
    </Box>
  );
};

export default Photos;
