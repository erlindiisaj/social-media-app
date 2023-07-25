import Post from "../../components/post/post.component";

import { useContext } from "react";
import { userPosts } from "../../contexts/userPosts.context";
import { v4 as uuidv4 } from "uuid";

const Newsfeed = () => {
  const { postsList } = useContext(userPosts);
  return (
    <div>
      {postsList.map((post) => (
        <Post key={uuidv4()} post={post} />
      ))}
    </div>
  );
};

export default Newsfeed;
