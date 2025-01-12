import { IMAGE_CDN } from "../util/constants";

const RestaurantCard = (props) => {
  const {
    name,
    areaName,
    cuisines,
    avgRating,
    eta,
    cloudinaryImageId,
    costForTwo,
  } = props;
  return (
    <div className="m-4 p-4 w-[250px] rounded-xl h-[500px] hover:shadow-2xl hover:scale-105 transition-transform hover:-translate-y-2 bg-gray-100 hover:bg-gray-200">
      <div className="flex justify-center">
        <img
          className="h-44 w-44 border-red-500 border-4 rounded-xl"
          alt="res-logo"
          src={IMAGE_CDN + cloudinaryImageId}
        ></img>
      </div>
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4 className="py-[3.5px]">{areaName}</h4>
      <h4 className="py-[3.5px]">{cuisines}</h4>
      <h4 className="py-[3.5px]">{avgRating} stars</h4>
      <h4 className="py-[3.5px]">{eta} mins</h4>
      <h4 className="py-[3.5px]">{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
