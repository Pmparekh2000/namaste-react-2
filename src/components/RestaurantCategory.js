import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = (props) => {
  const { menuItem } = props;
  const [hiddenState, setHiddenState] = useState("hidden");
  const [arrowValue, setArrowValue] = useState(true);

  const toggleItemsView = () => {
    setHiddenState((prevValue) => (prevValue === "hidden" ? "" : "hidden"));
    setArrowValue((prevValue) => !prevValue);
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex flex-col">
        <div
          className="flex flex-row justify-between hover:cursor-pointer"
          onClick={() => toggleItemsView()}
        >
          <span className="font-bold text-lg">
            {menuItem?.title} ({menuItem?.itemCards?.length || 0})
          </span>
          <span className="">{arrowValue ? "⬇️" : "⬆️"}</span>
        </div>
        <div>
          {menuItem?.itemCards.map((itemCard) => {
            return (
              <div key={itemCard?.card?.info?.id} className={hiddenState}>
                <ItemsList itemInfo={itemCard?.card?.info} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
