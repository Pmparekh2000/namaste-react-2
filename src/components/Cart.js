import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((store) => store?.cart);
  const [cartTotalValue, setCartTotalValue] = useState(0);

  const getCartTotal = () => {
    let cartTotal = 0;
    for (let i = 0; i < cart?.length; i++) {
      const element = cart[i];
      for (let j = 0; j < element?.items?.length; j++) {
        cartTotal +=
          element?.items?.[j]?.price / 100 ||
          element?.items?.[j]?.defaultPrice / 100;
      }
    }
    setCartTotalValue(cartTotal);
  };

  useEffect(() => {
    getCartTotal();
  }, [cart]);

  return (
    <div className="text-center m-10 p-10">
      <h1 className="text-2xl font-bold">Cart contents are:</h1>
      <div>
        {cart.map((item) => {
          return (
            <div className="flex" key={item?.id}>
              <p>{item?.items?.[0]?.name} - </p>
              <p>
                {(item?.items?.[0]?.price / 100 ||
                  item?.items?.[0]?.defaultPrice / 100) * item.items.length}
              </p>
            </div>
          );
        })}
        <div>Cart total is: {cartTotalValue}</div>
      </div>
    </div>
  );
};

export default Cart;
