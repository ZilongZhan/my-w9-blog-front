import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PostsPage from "../post/pages/PostsPage/PostsPage";
import PostFormPage from "../post/pages/PostFormPage/PostFormPage";
import { PropsWithChildren } from "react";
import PostDetailsPage from "../post/pages/PostDetailsPage/PostDetailsPage";

const AppRouter: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Routes>
      <Route path="/" element={children ?? <App />}>
        <Route index element={<Navigate to={"/recipes"} />} />
        <Route path="/recipes" element={<PostsPage />} />
        <Route path="/recipe/:postId" element={<PostDetailsPage />} />
        <Route path="/add-recipe" element={<PostFormPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
