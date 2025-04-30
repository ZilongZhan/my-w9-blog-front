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

    if (pageNumber === 1) {
      const posts = microwaveRecipiesPostsDto.slice(0, 5);

      return HttpResponse.json({ posts, postsTotal });
    }

    if (pageNumber === 2) {
      const posts = microwaveRecipiesPostsDto.slice(6, 10);

      return HttpResponse.json({ posts, postsTotal });
    }

    return HttpResponse.json({ posts: [], postsTotal: 0 });
  }),

  http.post(`${apiUrl}/posts`, () => {
    return HttpResponse.json({ post: costillitasLekuePostDto });
  }),
];
