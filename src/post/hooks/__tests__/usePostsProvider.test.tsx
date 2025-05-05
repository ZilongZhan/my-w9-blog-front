import { renderHook, RenderHookResult } from "@testing-library/react";
import usePostsProvider from "../usePostsProvider";
import { PostsContextStructure } from "../../context/types";

describe("Given the usePostsProvider custom hook", () => {
  describe("When it is called outside of posts context", () => {
    test("Then it should throw error 'Missing context for posts provider'", () => {
      const expectedErrorMessage = "Missing context for posts provider";

      const renderUsePostsProvider = (): RenderHookResult<
        PostsContextStructure,
        PostsContextStructure
      > => renderHook(() => usePostsProvider());

      expect(renderUsePostsProvider).toThrow(expectedErrorMessage);
    });
  });
});
