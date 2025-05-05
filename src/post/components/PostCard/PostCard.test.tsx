import { render, screen } from "@testing-library/react";
import PostCard from "./PostCard";
import { macAndCheese } from "../../fixtures";
import AllContextsProvider from "../../../test-utils/AllContextsProvider";

describe("Given the PostCard component", () => {
  describe("When it receives a mac and cheese post", () => {
    test("Then it should show 'Mac and Cheese' inside a heading", () => {
      const expectedTitle = /mac and cheese/i;

      render(<PostCard post={macAndCheese} />, {
        wrapper: AllContextsProvider,
      });

      const postTitle = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(postTitle).toBeInTheDocument();
    });

    test("Then it should show creamy mac and cheese in a bowl", () => {
      const expectedImage = /creamy mac and cheese in a bowl/i;

      render(<PostCard post={macAndCheese} />, {
        wrapper: AllContextsProvider,
      });

      const postImage = screen.getByAltText(expectedImage);

      expect(postImage).toBeInTheDocument();
    });

    test("Then it should show the first 100 words of the mac and cheese recipe", () => {
      const wordsLimit = 100;
      const expectedText = macAndCheese.content
        .split(" ")
        .slice(0, wordsLimit)
        .join(" ");

      render(<PostCard post={macAndCheese} />, {
        wrapper: AllContextsProvider,
      });

      const postContent = screen.getByRole("paragraph");
      const contentText = postContent.textContent;

      expect(contentText).toBe(expectedText);
    });

    test("Then it should have been posted on April 16, 2025", () => {
      render(<PostCard post={macAndCheese} />, {
        wrapper: AllContextsProvider,
      });

      const postPublishDate = screen.getByText(/april 3, 2025/i);

      expect(postPublishDate).toBeInTheDocument();
    });

    test("Then it should show a delete recipe button", () => {
      const buttonText = /delete recipe/i;

      render(<PostCard post={macAndCheese} />, {
        wrapper: AllContextsProvider,
      });

      const deleteRecipeButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(deleteRecipeButton).toBeInTheDocument();
    });
  });
});
