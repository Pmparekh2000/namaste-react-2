import React from "react";
import ReactDOM from "react-dom/client";

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

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-clipart/20230106/original/pngtree-simple-and-modern-food-logo-vector-design-png-image_8876455.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const IMAGE_CDN =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/";

const RestaurantCard = (props) => {
  const { resname, cuisine, ratings, eta, photoId } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" alt="res-logo" src={IMAGE_CDN + photoId}></img>
      <h3>{resname}</h3>
      <h4>{cuisine}</h4>
      <h4>{ratings} stars</h4>
      <h4>{eta} mins</h4>
    </div>
  );
};

const restaurants = [
  {
    data: {
      resname: "Andhra Biryani",
      cuisine: ["Andhra style Biryani", "Paneer Starters", "Corn Starters"],
      ratings: 4.8,
      eta: 15,
      photoId: "ttmz3ojcun9ghqksp8hy",
    },
  },
  {
    data: undefined,
  },
  {
    data: {
      resname: "Rameshwaram Cafe",
      cuisine: ["South Indian", "Dosa", "Idli"],
      ratings: 4.6,
      eta: 30,
      photoId: "c58b85509b8cc4440f9aa2252ca98e04",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurants.map((restaurant, index) => {
          return (
            <RestaurantCard
              key={index}
              resname={restaurant.data?.resname || "Punjab Bistro"}
              cuisine={
                restaurant.data?.cuisine.join(", ") ||
                "North Indian, Paneer Starter"
              }
              ratings={restaurant.data?.ratings || 4.5 + " rating"}
              eta={restaurant.data?.eta || 15}
              photoId={
                restaurant.data?.photoId || "c58b85509b8cc4440f9aa2252ca98e04"
              }
            />
          );
        })}
      </div>
    </div>
  );
};

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
