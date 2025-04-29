import { MemoryRouter } from "react-router";
import { PropsWithChildren } from "react";
import PostsContextProvider from "../post/context/PostsContextProvider";
import AppRouter from "../router/AppRouter";

interface AppTestWrapperProps {
  location: string;
}

const AppTestWrapper: React.FC<PropsWithChildren<AppTestWrapperProps>> = ({
  children,
  location,
}) => {
  return (
    <PostsContextProvider>
      <MemoryRouter initialEntries={[location]}>
        <AppRouter>{children}</AppRouter>
      </MemoryRouter>
    </PostsContextProvider>
  );
};

export default AppTestWrapper;
