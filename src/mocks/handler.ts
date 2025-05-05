import { http, HttpResponse } from "msw";
import {
  costillitasLekuePostDto,
  microwaveMacAndCheesePostDto,
  microwaveRecipiesPostsDto,
} from "../post/dto/fixturesDto";
import { PostsInfoDto } from "../post/dto/types";
import { PostResponse } from "../post/client/types";

const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  throw new Error("URL not found for the test");
}

export const handlers = [
  http.get(`${apiUrl}/posts`, ({ request }) => {
    const url = new URL(request.url);

    const pageNumber = Number(url.searchParams.get("pageNumber"));

    const postsTotal = microwaveRecipiesPostsDto.length;

    const pages = [];

    for (
      let postsCount = 0;
      postsCount < microwaveRecipiesPostsDto.length;
      postsCount += 5
    ) {
      pages.push(microwaveRecipiesPostsDto.slice(postsCount, postsCount + 5));
    }

    const doesPageExist = pageNumber <= pages.length;

    const posts = doesPageExist ? pages[pageNumber - 1] : [];

    return HttpResponse.json<PostsInfoDto>({
      posts,
      postsTotal,
    });
  }),

  http.get(`${apiUrl}/posts/${microwaveMacAndCheesePostDto._id}`, () => {
    return HttpResponse.json<PostResponse>({
      post: microwaveMacAndCheesePostDto,
    });
  }),

  http.post(`${apiUrl}/posts`, () => {
    return HttpResponse.json<PostResponse>({ post: costillitasLekuePostDto });
  }),

  http.delete(`${apiUrl}/posts/${microwaveMacAndCheesePostDto._id}`, () => {
    return HttpResponse.json<PostResponse>({
      post: microwaveMacAndCheesePostDto,
    });
  }),
];
