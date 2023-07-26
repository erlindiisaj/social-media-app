import Post from "../../components/post/post.component";

import { useContext } from "react";
import { userPosts } from "../../contexts/userPosts.context";

const Newsfeed = () => {
  const { postsList } = useContext(userPosts);
  return (
    <div>
      {postsList.map((post) => (
        <Post key={post.id} id={post.id} post={post.data} />
      ))}
    </div>
  );
};

export default Newsfeed;
