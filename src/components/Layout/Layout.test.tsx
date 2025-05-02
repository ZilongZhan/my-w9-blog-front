import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import Layout from "./Layout";
import AppTestWrapper from "../../test-utils/AppTestWrapper";

window.scrollTo = vitest.fn();

describe("Given the Layout component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Rice Cooking' as heading level 1", () => {
      const expectedAppTitle = /rice cooking/i;

      render(<Layout />, { wrapper: MemoryRouter });

      const appTitle = screen.getByRole("heading", {
        name: expectedAppTitle,
        level: 1,
      });

      expect(appTitle).toBeInTheDocument();
    });

    test("Then it should show 'Recipes' and 'Add recipes' links", () => {
      const expectedLinkText1 = /^recipes/i;
      const expectedLinkText2 = /add recipe/i;

      render(<Layout />, { wrapper: MemoryRouter });

      const recipesLink = screen.getByRole("link", { name: expectedLinkText1 });
      const addRecipeLink = screen.getByRole("link", {
        name: expectedLinkText2,
      });

      expect(recipesLink).toBeInTheDocument();
      expect(addRecipeLink).toBeInTheDocument();
    });
  });

  describe("When it renders on recipes page and the user clicks the 'Next page' button", () => {
    test("Then it should go to the second page", async () => {
      const user = userEvent.setup();

      render(
        <AppTestWrapper location="/recipes">
          <Layout />
        </AppTestWrapper>,
      );

      const nextPageButton = screen.getByRole("button", { name: /next page/i });

      await user.click(nextPageButton);

      const currentPage = screen.getByRole("generic", {
        name: /current page/i,
      });

      expect(currentPage).toHaveTextContent("2");
    });
  });

  describe("When it renders on recipes page and the user clicks the 'Add recipe' link", () => {
    test("Then it should show 'Write a new recipe' inside a heading", async () => {
      const expectedPageTitle = /write a new recipe/i;
      const user = userEvent.setup();

      render(
        <AppTestWrapper location="/recipes">
          <Layout />
        </AppTestWrapper>,
      );

      const addRecipeLink = screen.getByRole("link", { name: /add recipe/i });

      await user.click(addRecipeLink);

      const pageTitle = screen.getByRole("heading", {
        name: expectedPageTitle,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
