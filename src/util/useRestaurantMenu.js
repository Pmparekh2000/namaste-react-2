import { useEffect, useState } from "react";

const useRestaurantMenu = (restaurantId) => {
  const [restaurantData, setRestuarantData] = useState(null);

  const getRestaurantData = async () => {
    try {
      const readableStream = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.981607&lng=77.6958882&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const restaurantMenuData = await readableStream.json();
      setRestuarantData(restaurantMenuData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRestaurantData();
  }, []);

  return restaurantData;
};

export default useRestaurantMenu;
