import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = (props) => {
  const { menuItem, index, isExpandedIndex, expandedIndex, setExpandedIndex } =
    props;

  const toggleItemsView = () => {
    setExpandedIndex(index === expandedIndex ? null : index);
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
          <span className="">{isExpandedIndex ? "⬆️" : "⬇️"}</span>
        </div>
        <div>
          {isExpandedIndex &&
            menuItem?.itemCards.map((itemCard) => {
              return (
                <div key={itemCard?.card?.info?.id}>
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
