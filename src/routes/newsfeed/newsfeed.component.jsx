import { useContext } from "react";

import Post from "../../components/post/post.component";
import { Alert } from "@mui/material";
import { postsListContext } from "../../contexts/social-media-posts.context";

const Newsfeed = () => {
  const { postsList } = useContext(postsListContext);

  if (postsList.length === 0) {
    return (
      <Alert
        sx={{
          height: "50px",
        }}
        severity="warning"
      >
        There are no posts to show!
      </Alert>
    );
  }
  return (
    <div>
      {postsList.map((post) => (
        <Post key={post.id} id={post.id} post={post.data} />
      ))}
    </div>
  );
};

export default Newsfeed;
