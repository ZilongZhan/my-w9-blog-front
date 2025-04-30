import { useCallback, useMemo, useState } from "react";
import { PostsContextStructure } from "../context/types";
import { PostFormData, PostsInfo } from "../types";
import PostClient from "../client/PostClient";

const usePosts = (): PostsContextStructure => {
  const [postsInfo, setPostsInfo] = useState<PostsInfo>({
    posts: [],
    postsTotal: 0,
  });

  const postClient = useMemo(() => new PostClient(), []);

  const loadPostsInfo = useCallback(
    async (pageNumber?: number): Promise<void> => {
      const apiPostsInfo = await postClient.getPostsInfo(pageNumber);

      setPostsInfo(apiPostsInfo);
    },
    [postClient],
  );

  const addNewPost = async (postFormData: PostFormData): Promise<void> => {
    const post = await postClient.addPost(postFormData);

    setPostsInfo(({ posts, postsTotal }) => ({
      posts: [...posts, post],
      postsTotal,
    }));
  };

  return { ...postsInfo, loadPostsInfo, addNewPost };
};

export default usePosts;
