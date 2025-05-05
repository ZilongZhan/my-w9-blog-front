import { useParams } from "react-router";
import usePostsProvider from "../../hooks/usePostsProvider";
import { useEffect, useState } from "react";
import { Post } from "../../types";
import "./PostDetailsPage.css";

const PostDetailsPage: React.FC = () => {
  const { getPost } = usePostsProvider();
  const [post, setPost] = useState<Post | null>(null);
  const { postId } = useParams<{ postId: string }>();

  useEffect(() => {
    if (!postId) {
      return;
    }

    (async () => {
      const post = await getPost(postId);

      setPost(post);
    })();
  }, [getPost, postId]);

  if (!post) {
    return <span>Post not available</span>;
  }

  const { title, tags, content, publishDate, author, imageUrl, imageAlt } =
    post;

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(publishDate);

  return (
    <>
      <h2 className="page-title">{title}</h2>
      <time
        className="post-details__publish-date"
        dateTime={publishDate.toString()}
      >
        {formattedDate}
      </time>
      <ul className="post__tags-list">
        {tags.map((tag) => (
          <li key={tag}>
            <span className="post__tag">#{tag}</span>
          </li>
        ))}
      </ul>
      <img
        className="post-details__image"
        src={imageUrl}
        alt={imageAlt}
        height={500}
        width={1100}
      />
      <p>{content}</p>
      <span className="post-details__author">by {author}</span>
    </>
  );
};

export default PostDetailsPage;
