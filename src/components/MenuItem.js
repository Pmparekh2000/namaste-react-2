import { IMAGE_CDN } from "../util/constants";

const MenuItem = (props) => {
  const { description, imageId, name, price } = props;
  return (
    <div className="menu-data">
      <img
        src={IMAGE_CDN + imageId}
        style={{ height: "150px", width: "150px" }}
      />
      <div className="menu-info">
        <p>
          {name} - {price / 100}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
