import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, dispatch, totalPrice } = useCart();

  if (cart.length === 0) {
    return <section><h2>장바구니</h2><p>장바구니가 비어 있습니다.</p></section>;
  }

  return (
    <section>
      <h2>장바구니</h2>
      <ul className="cart">
        {cart.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{(item.price * item.qty).toLocaleString()}원</span>
            <button onClick={() => dispatch({ type: "DECREASE", id: item.id })}>−</button>
            <span>{item.qty}</span>
            <button onClick={() => dispatch({ type: "INCREASE", id: item.id })}>+</button>
            <button onClick={() => dispatch({ type: "REMOVE", id: item.id })}>삭제</button>
          </li>
        ))}
      </ul>
      <p className="total">총액: {totalPrice.toLocaleString()}원</p>
      <button onClick={() => dispatch({ type: "CLEAR" })}>장바구니 비우기</button>
    </section>
  );
}
