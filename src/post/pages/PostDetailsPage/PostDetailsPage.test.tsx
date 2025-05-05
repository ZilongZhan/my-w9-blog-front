import PostDetailsPage from "./PostDetailsPage";
import { render, screen } from "@testing-library/react";
import AppTestWrapper from "../../../test-utils/AppTestWrapper";
import { microwaveMacAndCheesePostDto } from "../../dto/fixturesDto";

describe("Given the PostDetailsPage component", () => {
  describe("When it receives Mac & Cheese recipe's ID", () => {
    test("Then it should show only 1 heading", async () => {
      render(
        <AppTestWrapper
          location={`/recipe/${microwaveMacAndCheesePostDto._id}`}
        >
          <PostDetailsPage />
        </AppTestWrapper>,
      );

      const headings = await screen.findAllByRole("heading");

      expect(headings).toHaveLength(1);
    });

    test(`Then it should show ${microwaveMacAndCheesePostDto.title} inside a heading`, async () => {
      render(
        <AppTestWrapper
          location={`/recipe/${microwaveMacAndCheesePostDto._id}`}
        >
          <PostDetailsPage />
        </AppTestWrapper>,
      );

      const pageTitle = await screen.findByRole("heading", {
        name: new RegExp(microwaveMacAndCheesePostDto.title, "i"),
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
