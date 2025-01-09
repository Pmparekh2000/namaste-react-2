import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMeu";

/**
 * Header
 *  - Logo
 *  - Nav Bar
 * Body
 *  - Search Bar
 *  - RestaurantComponent
 *    - RestaurantCard
 *      - Image
 *      - Name of Restaurants
 *      - Cuisines
 *      - Star Ratings
 *      - Expected Delivery Time
 * Footer
 *  - Links
 *  - Contact
 *  - About Us
 *  - Location
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={appRouter}>
    <AppLayout />
  </RouterProvider>
);
