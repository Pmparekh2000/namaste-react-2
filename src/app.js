import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

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
      <Body />
      {/* <Footer /> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
