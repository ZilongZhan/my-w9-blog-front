import { microwaveMacAndCheesePostDto } from "../../dto/fixturesDto";
import { mapPostDtoToPost } from "../../dto/mappers";
import PostClient from "../PostClient";

describe("Given the deletePostById method of PostClient", () => {
  describe("When it receives Mac & Cheese recipe's ID", () => {
    test("Then it should return the Mac & Cheese recipe", async () => {
      const expectedPost = mapPostDtoToPost(microwaveMacAndCheesePostDto);

      const postClient = new PostClient();

      const post = await postClient.deletePostById(
        microwaveMacAndCheesePostDto._id,
      );

      expect(post).toStrictEqual(expectedPost);
    });
  });
});
