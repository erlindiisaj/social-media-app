import { Box } from "@mui/material";

import CreatePost from "../../components/upload-image/upload-image.component";
import Post from "../../components/post/post.component";

import POSTS_DATA from "../../datas/POSTS_DATA";
import StoriesContainer from "../../components/stories-container/stories-container.component";

const Homepage = () => {
  return (
    <Box
      sx={{
        gridColumn: "2/3",
      }}
    >
      <StoriesContainer />
      <Box
        sx={{
          width: "100%",
          backgroundColor: "white.main",
          borderRadius: "12px",
          height: "80px",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <CreatePost />
      </Box>
      <Box>
        {POSTS_DATA.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Box>
    </Box>
  );
};

export default Homepage;
