import { Post } from "../../types";
import PostCard from "../PostCard/PostCard";
import "./PostsList.css";

interface PostsListProps {
  posts: Post[];
}

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
  return (
    <div className="posts-container">
      <ul className="posts">
        {posts.map((post, index) => (
          <li key={post.id}>
            <PostCard post={post} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
