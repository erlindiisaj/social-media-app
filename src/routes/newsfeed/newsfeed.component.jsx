import { useContext } from "react";
import { userPosts } from "../../contexts/userPosts.context";

import LinearProgress from "@mui/material/LinearProgress";
import Post from "../../components/post/post.component";

const Newsfeed = () => {
  const { postsList } = useContext(userPosts);
  if (postsList) {
    return (
      <div>
        {postsList.map((post) => (
          <Post key={post.id} id={post.id} post={post.data} />
        ))}
      </div>
    );
  }
  return <LinearProgress />;
};

export default Newsfeed;
