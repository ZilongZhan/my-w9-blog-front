import { microwaveRecipiesPostsDto } from "../../dto/fixturesDto";
import { mapPostsDtoToPosts } from "../../dto/mappers";
import PostClient from "../PostClient";

describe("Given the getPostsInfo method from PostClient class", () => {
  describe("When it's called", () => {
    test("The it should return following posts: 5-Minute Microwave Mug Cake, Microwave Scrambled Eggs and Microwave Mac and Cheese", async () => {
      const postsPerPage = 5;

      const expectedPosts = mapPostsDtoToPosts(
        microwaveRecipiesPostsDto.slice(0, postsPerPage),
      );

      const postClient = new PostClient();
      const postsInfo = await postClient.getPostsInfo();

      const posts = postsInfo.posts;

      expect(posts).toStrictEqual(expectedPosts);
    });

    test("Then it should return 10 as total number of posts", async () => {
      const expectedPostsTotal = mapPostsDtoToPosts(
        microwaveRecipiesPostsDto,
      ).length;

      const postClient = new PostClient();
      const postsInfo = await postClient.getPostsInfo();

      const postsTotal = postsInfo.postsTotal;

      expect(postsTotal).toStrictEqual(expectedPostsTotal);
    });
  });
});
