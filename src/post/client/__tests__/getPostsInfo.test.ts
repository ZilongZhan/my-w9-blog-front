import { microwaveRecipiesPostsDto } from "../../dto/fixturesDto";
import { mapPostsDtoToPosts } from "../../dto/mappers";
import { PostDto } from "../../dto/types";
import PostClient from "../PostClient";

describe("Given the getPostsInfo method from PostClient class", () => {
  const postClient = new PostClient();

  describe("When it's called", () => {
    test("The it should return Mug cake, Scrambled eggs, Mac & Cheese, Costillitas lekue, and Baked potato recipes", async () => {
      const postsPerPage = 5;

      const expectedPosts = mapPostsDtoToPosts(
        microwaveRecipiesPostsDto.slice(0, postsPerPage),
      );

      const postsInfo = await postClient.getPostsInfo();

      const posts = postsInfo.posts;

      expect(posts).toStrictEqual(expectedPosts);
    });

    test("Then it should return 10 as total number of posts", async () => {
      const expectedPostsTotal = mapPostsDtoToPosts(
        microwaveRecipiesPostsDto,
      ).length;

      const postsInfo = await postClient.getPostsInfo();

      const postsTotal = postsInfo.postsTotal;

      expect(postsTotal).toStrictEqual(expectedPostsTotal);
    });
  });

  describe("When it receives -1 non valid page number", () => {
    test("Then it should throw error with message 'Invalid page number: Cannot be less than 1'", async () => {
      const pageNumber = -1;

      const getPostsInfo = async (): Promise<void> => {
        await postClient.getPostsInfo(pageNumber);
      };

      await expect(getPostsInfo).rejects.toThrow(
        "Invalid page number: Cannot be less than 1",
      );
    });
  });

  describe("When it receives 99 page number for non existent page", () => {
    const pageNumber = 99;

    test("Then it should not return any posts", async () => {
      const emptyArray: PostDto[] = [];

      const { posts } = await postClient.getPostsInfo(pageNumber);

      expect(posts).toStrictEqual(emptyArray);
    });

    test("Then it should return 10 as total number of posts", async () => {
      const expectedPostsTotal = 10;

      const { postsTotal } = await postClient.getPostsInfo(pageNumber);

      expect(postsTotal).toBe(expectedPostsTotal);
    });
  });
});
