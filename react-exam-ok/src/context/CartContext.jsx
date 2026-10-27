import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const found = state.find((item) => item.id === action.product.id);
      if (found) {
        return state.map((item) =>
          item.id === action.product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...state, { ...action.product, qty: 1 }];
    }
    case "INCREASE":
      return state.map((item) =>
        item.id === action.id ? { ...item, qty: item.qty + 1 } : item
      );
    case "DECREASE":
      return state
        .map((item) => (item.id === action.id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0);
    case "REMOVE":
      return state.filter((item) => item.id !== action.id);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], loadCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, dispatch, totalCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
