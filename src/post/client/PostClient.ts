import { mapPostDtoToPost, mapPostsDtoToPosts } from "../dto/mappers";
import { PostDto, PostsInfoDto } from "../dto/types";
import { Post, PostFormData, PostsInfo } from "../types";
import { PostClientStructure } from "./types";

class PostClient implements PostClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  public getPostsInfo = async (pageNumber = 1): Promise<PostsInfo> => {
    if (pageNumber < 1) {
      throw new Error("Invalid page number: Cannot be less than 1");
    }

    const response = await fetch(
      `${this.apiUrl}/posts?pageNumber=${pageNumber}`,
    );

    if (!response.ok) {
      throw new Error("Error fetching posts");
    }

    const { posts: postsDto, postsTotal } =
      (await response.json()) as PostsInfoDto;

    const posts = mapPostsDtoToPosts(postsDto);

    return {
      posts,
      postsTotal,
    };
  };

  public addPost = async (postFormData: PostFormData): Promise<Post> => {
    const response = await fetch(`${this.apiUrl}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postFormData),
    });

    if (!response.ok) {
      throw new Error("Error creating post");
    }

    const { post } = (await response.json()) as { post: PostDto };

    return mapPostDtoToPost(post);
  };
}

export default PostClient;
