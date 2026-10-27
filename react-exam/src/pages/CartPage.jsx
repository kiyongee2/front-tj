import {useCart} from '../context/CartContext';

// CartPage 컴포넌트
const CartPage = () => {
  const {cart, dispatch, totalPrice} = useCart(); // useCart 커스텀 훅을 통해 cart와 dispatch를 가져옴

  if (cart.length === 0) {
    return <section><h2>장바구니</h2><p>장바구니가 비어 있습니다.</p></section>;
  }

  return (
    <div>
      <h2>장바구니</h2>
      <ul className="cart">
        {cart.map(product => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span>{product.price.toLocaleString()}원</span>
          </li>
        ))}
      </ul>
      <p className="total">총 합계: {totalPrice.toLocaleString()}원</p>
    </div>
  )
}

export default CartPage;