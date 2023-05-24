import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Posts, { loader as postsLoader } from "./routes/Posts.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost, { action as newpostAction } from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import PostDetail, {
  loader as postDetailLoader,
} from "./routes/Postdetail.jsx";
import Editor from './Editor.jsx';

const router = createBrowserRouter([
  { id: 'root',
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: "/newpost", element: <NewPost />, action: newpostAction },
        ],
      },
      { path: "post/:id", element: <PostDetail />, loader: postDetailLoader },
    ],
  
    
  },        { path: "test", element: < Editor/>} /* 에디터 API 테스트용 */
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);