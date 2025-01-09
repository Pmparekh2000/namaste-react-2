import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { IMAGE_CDN } from "../util/constants";
import MenuItem from "./MenuItem";

const RestaurantMenu = (props) => {
  const [menuData, setMenuData] = useState(null);
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [menuItems, setMenuItems] = useState(null);
  const { restaurantId } = useParams();

  const getRestaurantData = async () => {
    const readableStream = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.981607&lng=77.6958882&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const restaurantMenuData = await readableStream.json();
    console.log("restaurantMenuData menu data obtained is", restaurantMenuData);

    setMenuData(restaurantMenuData);
  };
  useEffect(() => {
    getRestaurantData();
  }, []);

  useEffect(() => {
    console.log(menuData?.data.cards[2].card.card.info);

    setRestaurantInfo(menuData?.data.cards[2].card.card.info);
    setMenuItems(
      menuData?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card
        .card.itemCards
    );
  }, [menuData]);

  return menuData ? (
    <div className="menu">
      <h1>Welcome to {restaurantInfo?.name}</h1>
      <img
        src={IMAGE_CDN + restaurantInfo?.cloudinaryImageId}
        style={{ height: "150px", width: "150px" }}
      />
      <h4>{restaurantInfo?.areaName}</h4>
      <h4>
        {restaurantInfo?.cuisines.join(", ")} -{" "}
        {restaurantInfo?.costForTwoMessage}
      </h4>
      <h4>
        {restaurantInfo?.avgRating} stars - {restaurantInfo?.sla.deliveryTime}{" "}
        mins
      </h4>
      <h2>Menu</h2>
      <ul>
        {menuItems?.map((menuItem) => {
          const { id, description, imageId, name, price, defaultPrice } =
            menuItem.card.info;
          return (
            <li key={id}>
              {name} - Rs. {defaultPrice ? defaultPrice / 100 : price / 100}
            </li>
          );
        })}
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
