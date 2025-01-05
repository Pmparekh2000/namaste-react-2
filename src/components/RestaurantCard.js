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
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={IMAGE_CDN + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{areaName}</h4>
      <h4>{cuisines}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{eta} mins</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
