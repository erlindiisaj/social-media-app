import Post from "../../components/post/post.component";
import POSTS_DATA from "../../datas/POSTS_DATA";

const Newsfeed = () => {
  return (
    <div>
      {POSTS_DATA.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Newsfeed;
