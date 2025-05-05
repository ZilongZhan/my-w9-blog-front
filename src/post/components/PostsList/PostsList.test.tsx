import { render, screen } from "@testing-library/react";
import { chickenAndRice, fluffyPancakes, macAndCheese } from "../../fixtures";
import PostsList from "./PostsList";
import AllContextsProvider from "../../../test-utils/AllContextsProvider";

describe("Given the PostsList component", () => {
  describe("When it renders with 'Chicken and Rice', 'Fluffy Pancakes' and `Mac and Cheese` recipies", () => {
    test("Then it should show 'Chicken and Rice', 'Fluffy Pancakes' and `Mac and Cheese` inside a heading", () => {
      const posts = [chickenAndRice, fluffyPancakes, macAndCheese];
      const expectedChickenAndRiceTitle = chickenAndRice.title;
      const expectedFluffyPancakes = fluffyPancakes.title;
      const expectedMacAndCheese = macAndCheese.title;

      render(<PostsList posts={posts} />, { wrapper: AllContextsProvider });

      const chickenAndRiceTitle = screen.getByRole("heading", {
        name: new RegExp(expectedChickenAndRiceTitle, "i"),
      });
      const fluffyPancakesTitle = screen.getByRole("heading", {
        name: new RegExp(expectedFluffyPancakes, "i"),
      });
      const macAndCheeseTitle = screen.getByRole("heading", {
        name: new RegExp(expectedMacAndCheese, "i"),
      });

      expect(chickenAndRiceTitle).toBeInTheDocument();
      expect(fluffyPancakesTitle).toBeInTheDocument();
      expect(macAndCheeseTitle).toBeInTheDocument();
    });
  });
});
