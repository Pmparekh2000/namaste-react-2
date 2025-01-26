import RestaurantCard, {
  restaurantCardWithRecommendedLabel,
} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {
  COMMA,
  RATING,
  REMOVE_FILTER,
  SEARCH,
  SPACE,
  TOP_RATED_RESTAURANTS,
} from "../util/constants";
import { Link } from "react-router";

const Body = () => {
  const [restaurants, setRestuarants] = useState(null);
  const [displayRestaurants, setDisplayRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardWithRecommendedLabel =
    restaurantCardWithRecommendedLabel(RestaurantCard);

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
        cuisines: restaurantInfo.cuisines.slice(0, 2),
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
    const topRatedRestaurants = filteredRestaurants.filter(
      (restaurant) => restaurant.avgRating >= 4.5
    );
    setFilteredRestaurants(topRatedRestaurants);
  };

  const searchRestaurants = () => {
    const searchedRestaurants = displayRestaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(searchedRestaurants);
  };

  const removeAllFilters = () => {
    setFilteredRestaurants(displayRestaurants);
  };

  return (
    <div className="body">
      <div className="flex">
        <div className="flex">
          {filteredRestaurants ? (
            <div className="flex">
              <button
                className="px-4 py-2 bg-green-200 my-6 rounded-xl"
                onClick={() => getTopRatedRestuarants()}
              >
                {TOP_RATED_RESTAURANTS}
              </button>
              <div className="">
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="m-4 p-4 border-black"
                />
              </div>
              <button
                className="px-4 py-2 bg-green-200 m-4 rounded-xl"
                onClick={() => searchRestaurants()}
              >
                {SEARCH}
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div>
          <button
            className="px-4 py-2 bg-green-200 my-6 rounded-xl"
            onClick={() => removeAllFilters()}
          >
            {REMOVE_FILTER}
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants ? (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant.id} key={restaurant.id}>
                {restaurant.avgRating >= 4.4 ? (
                  <RestaurantCardWithRecommendedLabel
                    name={restaurant.name}
                    areaName={restaurant.areaName}
                    cuisines={restaurant.cuisines.join(COMMA + SPACE)}
                    avgRating={restaurant.avgRating + SPACE + RATING}
                    eta={restaurant.eta}
                    cloudinaryImageId={restaurant.cloudinaryImageId}
                    costForTwo={restaurant.costForTwo}
                  />
                ) : (
                  <RestaurantCard
                    name={restaurant.name}
                    areaName={restaurant.areaName}
                    cuisines={restaurant.cuisines.join(COMMA + SPACE)}
                    avgRating={restaurant.avgRating + SPACE + RATING}
                    eta={restaurant.eta}
                    cloudinaryImageId={restaurant.cloudinaryImageId}
                    costForTwo={restaurant.costForTwo}
                  />
                )}
              </Link>
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
