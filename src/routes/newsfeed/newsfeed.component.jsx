import { useContext } from "react";

import { userContext } from "../../contexts/user.context";

import LinearProgress from "@mui/material/LinearProgress";
import Post from "../../components/post/post.component";

const Newsfeed = () => {
  const { postsList } = useContext(userContext);
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
