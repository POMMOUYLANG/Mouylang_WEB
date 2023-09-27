import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, About, Service, ErrorPage } from "./Pages/index";
import "./Pages/Style.css";
import RootLayout from "./Layouts/RootLayout";
import AboutLayout from "./Layouts/AboutLayout";
import UserLayout from "./Layouts/UserLayout";
import User, { UserLoader } from "./Pages/User/User";
import UserDetail, { UserDetailLoader } from "./Pages/User/UserDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutLayout />,
        children: [
          {
            path: "vision",
            element: <h4>Vision...</h4>,
          },
          {
            path: "Mision",
            element: <h4>Mision...</h4>,
          },
          {
            path: "goal",
            element: <h4>Goal...</h4>,
          },
        ],
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "user",
        element: <UserLayout />,
        children: [
          {
            index: true,
            element: <User />,
            loader: UserLoader,
          },
          {
            path: ":id",
            element: <UserDetail />,
            loader: UserDetailLoader,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
