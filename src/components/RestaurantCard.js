import { IMAGE_CDN } from "../util/constants";

const RestaurantCard = (props) => {
  const { resname, cuisine, ratings, eta, photoId } = props;
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" alt="res-logo" src={IMAGE_CDN + photoId}></img>
      <h3>{resname}</h3>
      <h4>{cuisine}</h4>
      <h4>{ratings} stars</h4>
      <h4>{eta} mins</h4>
    </div>
  );
};

export default RestaurantCard;
