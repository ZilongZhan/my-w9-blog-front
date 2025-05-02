import { http, HttpResponse } from "msw";
import {
  costillitasLekuePostDto,
  microwaveRecipiesPostsDto,
} from "../post/dto/fixturesDto";

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

    return HttpResponse.json({
      posts: pages[pageNumber - 1],
      postsTotal,
    });
  }),

  http.post(`${apiUrl}/posts`, () => {
    return HttpResponse.json({ post: costillitasLekuePostDto });
  }),
];
