import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { state, dispatch } = useCart();

  const totalPrice = state.cart.reduce((acc, item) => {
    const itemQuantity = item.quantity || 1;
    return acc + item.price * itemQuantity;
  }, 0);

  return (
    <div className=" flex justify-center items-start bg-zinc-200 h-auto p-20 gap-10">
      <div className="w-3/5">
        {state.cart.length === 0 ? (
          <p className="text-2xl uppercase text-center">Cart is empty</p>
        ) : (
          state.cart.map((item) => (
            <div
              key={item.id}
              className="m-[20px] p-[10px] border-indigo-300 border-t-2 flex gap-8 items-center"
            >
              <img
                src={item.image}
                alt="error.image"
                height={110}
                width={90}
                className="rounded-lg border-2"
              />
              <div className="w-[400px]">
                <h4 className="text-2xl font-mono">{item.name}</h4>
                <p className="text-lg">₹{item.price}</p>
                <p className="text-lg"> Quantity: {item.quantity || 1}</p>
              </div>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                }
                className="bg-red-600 text-white w-[120px] h-[50px] rounded-full"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      <div className="w-2/5 flex flex-col items-center justify-center p-10 rounded-lg h-[300px]">
        {state.cart.length > 0 ? (
          <>
            <h3 className="text-3xl font-bold">Total Price:</h3>
            <p className="text-2xl text-green-600 font-semibold">
              ₹{Number(totalPrice)}
            </p>

            <button
              className="bg-red-600 text-white w-[150px] h-[50px] rounded-full mt-6"
              onClick={() => dispatch({ type: "CLEAR_CART" })}
            >
              CLEAR CART
            </button>
          </>
        ) : (
          <h3 className="text-xl">Your cart is empty.</h3>
        )}
      </div>
    </div>
  );
};

export default Cart;
