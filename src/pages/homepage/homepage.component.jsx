import { Box } from "@mui/material";

import CreatePost from "../../components/create-post/create-post.component";
import Post from "../../components/post/post.component";
import Story from "../../components/story/story.component";

import STORY_DATA from "../../STORY_DATA";
import POSTS_DATA from "../../POSTS_DATA";

const Homepage = () => {
  return (
    <Box
      sx={{
        gridColumn: "2/3",
      }}
    >
      <Box display="flex" justifyContent="space-between">
        {STORY_DATA.map((story) => {
          const { name, imageUrl, id } = story;
          return <Story name={name} imageUrl={imageUrl} key={id} />;
        })}
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "white.main",
          borderRadius: "12px",
          height: "80px",
          marginTop: "30px",
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
