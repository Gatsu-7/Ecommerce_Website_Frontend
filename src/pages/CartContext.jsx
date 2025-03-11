import { createContext, useContext, useReducer } from "react";

const getCartFromStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

const initialState = {
  cart: getCartFromStorage(),
};

const cartReducer = (state, action) => {
  let updatedCart;
  switch (action.type) {
    case "ADD_TO_CART":
      updatedCart = [...state.cart, action.payload];
      break;

    case "REMOVE_FROM_CART":
      updatedCart = state.cart.filter((item) => item.id !== action.payload);
      break;

    case "CLEAR_CART":
      updatedCart = [];
      break;

    default:
      return state;
  }
  localStorage.setItem("cart", JSON.stringify(updatedCart));

  return { ...state, cart: updatedCart };
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
