import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { IMAGE_CDN } from "../util/constants";
import MenuItem from "./MenuItem";
import useRestaurantMenu from "../util/useRestaurantMenu";
import useOnlineStatus from "../util/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = (props) => {
  const [menuData, setMenuData] = useState(null);
  const [onlineStatus, setOnlineStatus] = useState(true);
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [menuItems, setMenuItems] = useState(null);
  const { restaurantId } = useParams();

  const onlineStatusValue = useOnlineStatus();
  useEffect(() => {
    setOnlineStatus(onlineStatusValue);
  }, [onlineStatusValue]);

  const restaurantData = useRestaurantMenu(restaurantId);
  useEffect(() => {
    setMenuData(restaurantData);
  }, [restaurantData]);

  useEffect(() => {
    console.log(menuData?.data.cards[2].card.card.info);

    setRestaurantInfo(menuData?.data.cards[2].card.card.info);
    const menuCategories =
      menuData?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (card) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    setMenuItems(menuCategories);
  }, [menuData]);

  if (!onlineStatus) {
    return (
      <div>
        <div>You seem to be offline</div>
        <div>Please check you internet connection</div>
      </div>
    );
  }

  return menuData ? (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">
        Welcome to {restaurantInfo?.name}
      </h1>
      <img
        src={IMAGE_CDN + restaurantInfo?.cloudinaryImageId}
        style={{ height: "150px", width: "150px" }}
      />
      <h4>{restaurantInfo?.areaName}</h4>
      <h4 className="font-bold text-lg">
        {restaurantInfo?.cuisines.join(", ")} -{" "}
        {restaurantInfo?.costForTwoMessage}
      </h4>
      <h4>
        {restaurantInfo?.avgRating} stars - {restaurantInfo?.sla.deliveryTime}{" "}
        mins
      </h4>
      <h2>Menu</h2>
      <ul>
        {menuItems?.map((menuItem) => (
          <RestaurantCategory
            key={menuItem?.card?.card?.title}
            menuItem={menuItem?.card?.card}
          />
        ))}
      </ul>
    </div>
  ) : (
    <Shimmer />
  );
};

{
  /* <MenuItem
        key={id}
        description={description}
        imageId={imageId}
        name={name}
        price={defaultPrice ? defaultPrice : price}
    /> */
}

export default RestaurantMenu;
