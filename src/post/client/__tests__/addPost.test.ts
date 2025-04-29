import { costillitasLekuePostDto } from "../../dto/fixturesDto";
import { mapPostDtoToPost } from "../../dto/mappers";
import { costillitasLekuePostFormData } from "../../fixtures";
import PostClient from "../PostClient";

describe("Given the addPost method from PostClient", () => {
  describe("When it receives the 'Pork ribs with green pepper and spring garlic' post form reciepe", () => {
    test("Then it should return the 'Pork ribs with green pepper and spring garlic' post reciepe", async () => {
      const post = mapPostDtoToPost(costillitasLekuePostDto);

      const postClient = new PostClient();
      const newPost = await postClient.addPost(costillitasLekuePostFormData);

      expect(newPost).toStrictEqual(post);
    });
  });
});
