import { PostDto } from "../dto/types";
import { Post, PostFormData, PostsInfo } from "../types";

export interface PostClientStructure {
  getPostsInfo: () => Promise<PostsInfo>;
  addPost: (postFormData: PostFormData) => Promise<Post>;
  deletePostById: (postId: string) => Promise<Post>;
}

export interface PostResponse {
  post: PostDto;
}
