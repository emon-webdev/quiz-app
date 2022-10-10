import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";
import Statistics from "./components/Statistics";
import Topics from "./components/Topics";
import Root from "./Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        // {
        //   path: "/",
        //   element: <Topics />,
        // },
        {
          path: "/topics",
          element: <Topics />,
          loader:() => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }
        },
        {
          path: "/statistics",
          element: <Statistics />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
      ],
    },
  ]);

  return (
    <div className="md:w-11/12 px-4 mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
