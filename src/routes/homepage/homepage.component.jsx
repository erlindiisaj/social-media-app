import { useSelector } from "react-redux";
import { selectPostsList } from "../../store/posts-list/post-list.selector";

import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

import Post from "../../components/post/post.component";
import CreatePost from "../../components/upload-image/upload-image.component";
import StoriesContainer from "../../components/stories-container/stories-container.component";

const Homepage = () => {
  const postsList = useSelector(selectPostsList);

  if (postsList) {
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
  }

  return <LinearProgress />;
};

export default Homepage;
