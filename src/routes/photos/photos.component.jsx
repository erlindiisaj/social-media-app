import { Box } from "@mui/material";
import { useContext } from "react";
import { userPosts } from "../../contexts/userPosts.context";
import LinearProgress from "@mui/material/LinearProgress";

import ProfilePost from "../../components/gallery/gallery.component";

const Photos = () => {
  const { postsList } = useContext(userPosts);

  if (postsList) {
    return (
      <Box
        width="100%"
        display="flex"
        justifyContent="space-around"
        flexWrap="wrap"
      >
        {postsList.map((post) => (
          <ProfilePost key={post.id} post={post.data} />
        ))}
      </Box>
    );
  }
  return <LinearProgress />;
};

export default Photos;
