import { useSelector } from "react-redux";
import { selectPostsList } from "../../store/posts-list/post-list.selector";

import Post from "../../components/post/post.component";
import { Alert } from "@mui/material";

const Newsfeed = () => {
  const postsList = useSelector(selectPostsList);

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
