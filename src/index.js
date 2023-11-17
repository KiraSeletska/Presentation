import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { Experience } from "./Pages/Experience";
import { PhotoGallery } from "./Pages/PhotoGallery";
import { ContactsPage } from "./Pages/ContactsPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //  errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Experience",
        element: <Experience />,
      },
      {
        path: "/Photo",
        element: <PhotoGallery />,
      },{
        path: "/ContactsPage",
        element: <ContactsPage/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
