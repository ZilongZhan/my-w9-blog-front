import { render, screen } from "@testing-library/react";
import Paginator from "./Paginator";
import AllContextsProvider from "../../../test-utils/AllContextsProvider";

describe("Given the Paginator component", () => {
  const postsTotal = 15;

  describe("When the user is on page 2 with a total of 15 posts", () => {
    const pageNumber = 2;

    test("Then it should show a 'Previous page' button and a 'Next page' button", () => {
      const previousPageButtonText = /previous page/i;
      const nextPageButtonText = /next page/i;

      render(<Paginator pageNumber={pageNumber} postsTotal={postsTotal} />, {
        wrapper: AllContextsProvider,
      });

      const previousPageButton = screen.getByRole("button", {
        name: previousPageButtonText,
      });
      const nextPageButton = screen.getByRole("button", {
        name: nextPageButtonText,
      });

      expect(previousPageButton).toBeInTheDocument();
      expect(nextPageButton).toBeInTheDocument();
    });

    test("Then it should show previous, current, and next page as 1, 2, 3", () => {
      const previousPage = (pageNumber - 1).toString();
      const currentPage = pageNumber.toString();
      const nextPage = (pageNumber + 1).toString();

      render(<Paginator pageNumber={pageNumber} postsTotal={postsTotal} />, {
        wrapper: AllContextsProvider,
      });

      const previousPageIndicator = screen.getByText(previousPage);
      const currentPageInidcator = screen.getByText(currentPage);
      const nextPageIndicator = screen.getByText(nextPage);

      expect(previousPageIndicator).toBeInTheDocument();
      expect(currentPageInidcator).toBeInTheDocument();
      expect(nextPageIndicator).toBeInTheDocument();
    });
  });

  describe("When the user is on page 1 with a total of 15 posts", () => {
    const pageNumber = 1;

    test("Then it shouldn't show a 'Previous page' button", () => {
      const previousPageButtonText = /previous page/i;

      render(<Paginator pageNumber={pageNumber} postsTotal={postsTotal} />, {
        wrapper: AllContextsProvider,
      });

      const previousPageButton = screen.queryByRole("button", {
        name: previousPageButtonText,
      });

      expect(previousPageButton).not.toBeInTheDocument();
    });
  });

  describe("When the user is on page 3 with a total of 15 posts", () => {
    const pageNumber = 3;

    test("Then it shouldn't show a 'Next page' button", () => {
      const nextPageButtonText = /next page/i;

      render(<Paginator pageNumber={pageNumber} postsTotal={postsTotal} />, {
        wrapper: AllContextsProvider,
      });

      const nextPageButton = screen.queryByRole("button", {
        name: nextPageButtonText,
      });

      expect(nextPageButton).not.toBeInTheDocument();
    });
  });
});
