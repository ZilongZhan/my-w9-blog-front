import { Post, PostFormData } from "../types";

export interface PostsContextStructure {
  posts: Post[];
  postsTotal: number;
  loadPostsInfo: (pageNumber?: number) => Promise<void>;
  addNewPost: (postFormData: PostFormData) => Promise<void>;
  deletePost: (postId: string) => Promise<void>;
  getPost: (postId: string) => Promise<Post>;
}
