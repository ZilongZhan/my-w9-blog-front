import { Link } from "react-router";
import Button from "../../../components/Button/Button";
import usePostsProvider from "../../hooks/usePostsProvider";
import { Post } from "../../types";
import "./PostCard.css";

interface PostCardProps {
  post: Post;
  index: number;
}

const PostCard: React.FC<PostCardProps> = ({
  post: { id, title, publishDate, author, imageUrl, imageAlt, content, tags },
  index,
}) => {
  const { deletePost } = usePostsProvider();

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(publishDate);

  const wordsLimit = 100;
  const contentPreview = content.split(" ").slice(0, wordsLimit).join(" ");

  const handleDelete = (): void => {
    deletePost(id);
  };

  const loadingMode = index > 1 ? "lazy" : "eager";

  return (
    <article className="post">
      <Button
        modifier="delete"
        action={handleDelete}
        children="✖"
        aria-label={`Delete ${title} recipe`}
      />
      <img
        className="post__image"
        src={imageUrl}
        alt={imageAlt}
        loading={loadingMode}
        width={400}
        height={400}
      />
      <div className="post-details">
        <h3 className="post__title">{title}</h3>
        <span>
          <time dateTime={publishDate.toISOString()}>{formattedDate}</time> by{" "}
          {author}
        </span>
        <p className="post__content post__content--preview">{contentPreview}</p>
        <Link className="details-link" to={`/recipe/${id}`}>
          See more...
        </Link>
        <ul className="post__tags-list">
          {tags.map((tag) => (
            <li key={tag}>
              <span className="post__tag">#{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default PostCard;
