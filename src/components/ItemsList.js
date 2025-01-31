import { useEffect, useState } from "react";
import { IMAGE_CDN } from "../util/constants";
// import UserContext from "../util/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItem } from "../redux/slices/cartSlice";

const ItemsList = (props) => {
  const { itemInfo } = props;
  // const userData = useContext(UserContext);
  const dispatch = useDispatch();
  const cart = useSelector((store) => store?.cart);
  const [hideRemoveButton, setHideRemoveButton] = useState("hidden");
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    const itemInCart = cart.filter(
      (cartItem) => cartItem?.id === selectedItemId
    );
    setHideRemoveButton(itemInCart.length === 0 ? "hidden" : "");
  }, [cart]);

  const addItemToCart = (itemInfo, itemId) => {
    setSelectedItemId(itemId);
    dispatch(addItems(itemInfo));
  };

  const removeItemFromCart = (itemId) => {
    setSelectedItemId(itemId);
    dispatch(removeItem(itemId));
  };

  return (
    <div className="border-b-2 border-gray-400 text-left">
      <div className="py-3 flex justify-between">
        <div className="font-bold">{itemInfo?.name}</div>
        <div>₹ {(itemInfo?.price | itemInfo?.defaultPrice) / 100}</div>
      </div>
      <div className="py-3 flex justify-between">
        <div className="text-xs w-10/12">{itemInfo?.description}</div>
        <div className="w-2/12">
          <button
            className="p-2 mx-1 my-11 bg-white shadow-lg m-auto absolute rounded-lg"
            onClick={() => addItemToCart(itemInfo, itemInfo?.id)}
          >
            Add +{" "}
          </button>
          <button
            className={`p-2 mx-12 my-11 bg-white shadow-lg m-auto absolute rounded-lg ${hideRemoveButton}`}
            onClick={() => removeItemFromCart(itemInfo?.id)}
          >
            Remove
          </button>
          <img
            src={IMAGE_CDN + itemInfo?.imageId}
            style={{ height: "75px", width: "125px" }}
            className="w-full"
          />
          {/* <p className="font-bold">{userData?.loggedInUser}</p> */}
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
