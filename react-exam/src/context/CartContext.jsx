import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";

// CartContext 생성
const CartContext = createContext();

// 로컬스토리지에서 장바구니 데이터 불러오기
function loadCart(){
  const cartData = localStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : [];
}

// cartReducer 함수 정의
function cartReducer(state, action){
  switch(action.type){
    case "ADD":
      return [...state, action.product];
    case "REMOVE":
      return state.filter(p => p.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

/*
앱이 처음 켜지면 loadCart([])가 실행되어 localStorage에 저장된 장바구니를 불러옵니다.
불러온 값이 cart의 초기 상태가 됩니다.
dispatch({type: "ADD", product})를 실행하면 cartReducer가 새 배열을 반환하고 cart가 바뀝니다.
useEffect가 바뀐 cart를 localStorage에 저장합니다.
새로고침하면 1번부터 다시 실행되어 장바구니가 유지됩니다.
*/
export function CartProvider({ children }){
  const [cart, dispatch] = useReducer(cartReducer, [], loadCart);

  // cart 상태가 변경될 때마다 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const totalCount = cart.length; // 총 상품 개수 계산

  // 총 합계 계산
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

// CartContext.Provider를 통해 cart와 dispatch를 하위 컴포넌트에 전달
  return(
    <CartContext.Provider value={{cart, dispatch, totalPrice, totalCount}}>
      {children}
    </CartContext.Provider>
  );
}

// useCart 커스텀 훅
export function useCart(){
  return useContext(CartContext)
}