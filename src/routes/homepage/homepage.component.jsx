import { Box } from "@mui/material";
import { useContext } from "react";
import { userPosts } from "../../contexts/userPosts.context";
import CreatePost from "../../components/upload-image/upload-image.component";
import Post from "../../components/post/post.component";
import { v4 as uuidv4 } from "uuid";
import StoriesContainer from "../../components/stories-container/stories-container.component";

const Homepage = () => {
  const { postsList } = useContext(userPosts);
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
          height: "220px",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <CreatePost />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        {postsList.map((post) => (
          <Post key={uuidv4()} post={post} />
        ))}
      </Box>
    </Box>
  );
};

export default Homepage;
