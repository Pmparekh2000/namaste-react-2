import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestuarants] = useState(null);
  const [displayRestaurants, setDisplayRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  const getRestaurantData = async () => {
    const restaurantsReadableStream = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.981607&lng=77.6958882&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const restaurantsData = await restaurantsReadableStream.json();
    setRestuarants(
      restaurantsData.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants
    );
  };

  useEffect(() => {
    getRestaurantData();
  }, []);

  useEffect(() => {
    const restaurantData = restaurants?.map((restaurant) => {
      const restaurantInfo = restaurant.info;
      return {
        id: restaurantInfo.id,
        name: restaurantInfo.name,
        areaName: restaurantInfo.areaName,
        cuisines: restaurantInfo.cuisines,
        eta: restaurantInfo.sla.slaString,
        avgRating: restaurantInfo.avgRating,
        cloudinaryImageId: restaurantInfo.cloudinaryImageId,
        costForTwo: restaurantInfo.costForTwo,
      };
    });
    setDisplayRestaurants(restaurantData);
    setFilteredRestaurants(restaurantData);
  }, [restaurants]);

  const getTopRatedRestuarants = () => {
    const topRatedRestaurants = displayRestaurants.filter(
      (restaurant) => restaurant.avgRating > 4.5
    );
    setFilteredRestaurants(topRatedRestaurants);
  };

  const removeAllFilters = () => {
    setFilteredRestaurants(displayRestaurants);
  };

  return (
    <div className="body">
      <div className="filter">
        {filteredRestaurants ? (
          <button
            className="filter-button"
            onClick={() => getTopRatedRestuarants()}
          >
            Top Rated Restaurants
          </button>
        ) : (
          <></>
        )}
      </div>
      <div>
        <button onClick={() => removeAllFilters()}>Remove Filter</button>
      </div>
      <div className="res-container">
        {filteredRestaurants ? (
          filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant.id}
                name={restaurant.name}
                areaName={restaurant.areaName}
                cuisines={restaurant.cuisines.join(", ")}
                avgRating={restaurant.avgRating + " rating"}
                eta={restaurant.eta}
                cloudinaryImageId={restaurant.cloudinaryImageId}
                costForTwo={restaurant.costForTwo}
              />
            );
          })
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Body;
