import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { userContext } from "../../contexts/user.context";
import { userPosts } from "../../contexts/userPosts.context";
import CreatePost from "../../components/upload-image/upload-image.component";
import Post from "../../components/post/post.component";
import { v4 as uuidv4 } from "uuid";
import StoriesContainer from "../../components/stories-container/stories-container.component";
import { usersDataListener } from "../../utils/firebase/firebase.utils";

const Homepage = () => {
  const { postsList } = useContext(userPosts);

  const { user } = useContext(userContext);
  const { uid } = user;

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
          flexDirection: "column",
        }}
      >
        {postsList.map((post) => (
          <Post key={post.id} id={post.id} post={post.data} />
        ))}
      </Box>
    </Box>
  );
};

export default Homepage;
