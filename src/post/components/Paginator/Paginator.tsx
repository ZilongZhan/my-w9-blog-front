import { useNavigate } from "react-router";
import "./Paginator.css";
import Button from "../../../components/Button/Button";

interface PaginatorProps {
  pageNumber: number;
  postsTotal: number;
}

const Paginator: React.FC<PaginatorProps> = ({ pageNumber, postsTotal }) => {
  const navigate = useNavigate();

  const pagesTotal = Math.ceil(postsTotal / 5);
  const previousPage = pageNumber - 1;
  const nextPage = pageNumber + 1;
  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber === pagesTotal;

  const goToPage = (pageNumber: number): void => {
    navigate(`/recipes?page=${pageNumber}`);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="paginator">
      {!isFirstPage && (
        <Button
          modifier="paginator"
          action={() => goToPage(previousPage)}
          children="<"
          aria-label="Previous page"
        />
      )}
      <ul className="page-indicators-list">
        {!isFirstPage && <span className="page-indicator">{previousPage}</span>}
        <span
          className="page-indicator page-indicator--current"
          aria-label="Current page"
        >
          {pageNumber}
        </span>
        {!isLastPage && <span className="page-indicator">{nextPage}</span>}
      </ul>
      {!isLastPage && (
        <Button
          modifier="paginator"
          action={() => goToPage(nextPage)}
          children=">"
          aria-label="Next page"
        />
      )}
    </div>
  );
};

export default Paginator;
