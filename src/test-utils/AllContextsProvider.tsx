import { MemoryRouter } from "react-router";
import { PropsWithChildren } from "react";
import PostsContextProvider from "../post/context/PostsContextProvider";

interface AllContextsProviderProps {
  initialEntries?: string[];
}

const AllContextsProvider: React.FC<
  PropsWithChildren<AllContextsProviderProps>
> = ({ children, initialEntries }) => {
  return (
    <PostsContextProvider>
      <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
    </PostsContextProvider>
  );
};

export default AllContextsProvider;
