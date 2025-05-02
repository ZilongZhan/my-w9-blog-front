import { render, screen } from "@testing-library/react";
import PostsPage from "./PostsPage";
import AllContextsProvider from "../../../test-utils/AllContextsProvider";

describe("Given the PostsPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'All our recipies' in a heading", () => {
      const expectedHeadingText = /all our recipies/i;

      render(<PostsPage />, { wrapper: AllContextsProvider });

      const postsPageTitle = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(postsPageTitle).toBeInTheDocument();
    });
  });
});
