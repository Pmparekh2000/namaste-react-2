const RestaurantCategory = (props) => {
  const { menuItem } = props;
  console.log("menuItem", menuItem);

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between">
        <span className="font-bold text-lg">
          {menuItem?.title} ({menuItem?.itemCards.length || 0})
        </span>
        <span>⬇️</span>
      </div>
    </div>
  );
};

export default RestaurantCategory;
