import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Heading1 from "./Heading1";
import Details from "./Details";
import UpdatePage from "./UpdatePage";
import Fulldetails from "./Fulldetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/heading1",
    element: <Heading1 />,
  },
  {
    path: "heading1/details",
    element: <Details />,
  },
  {
    path: "heading1/details/update/:id",
    element: <UpdatePage />,
  },
  {
    path: "heading1/details/Fulldetails/:id",
    element: <Fulldetails />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
