import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../util/dummyRestaurantData";

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

export default Body;
