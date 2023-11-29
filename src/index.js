/*import React from "react";
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
*/

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
import { useSwipeable } from "react-swipeable";

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

const handleSwipe = (deltaX) => {
  if (deltaX < 0) {
    // Свайп влево - переход на следующую страницу
    router.navigateNext();
  } else if (deltaX > 0) {
    // Свайп вправо - переход на предыдущую страницу
    router.navigateBack();
  }
};

const SwipeableApp = () => {
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(-1),
    onSwipedRight: () => handleSwipe(1),
  });

  return <App {...swipeHandlers} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <SwipeableApp />
    </RouterProvider>
  </React.StrictMode>
);
