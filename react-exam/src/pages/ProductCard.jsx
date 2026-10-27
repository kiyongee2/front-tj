import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({product}) => {
  // useCart 커스텀 훅을 통해 dispatch 함수를 가져옴
  const {dispatch} = useCart(); 

  // 장바구니에 담기 버튼 클릭 시 dispatch를 통해 ADD 액션을 발생시킴
  const handleAddToCart = () => {
    dispatch({type: "ADD", product});
  }

  return(
    <div className="card">
      <span>{product.category}</span>
      <h3>
        <Link to={`/product/${product.id}`}>{product.name}</Link>
      </h3>
      <p>{product.price.toLocaleString()}원</p>
      <button onClick={handleAddToCart}>담기</button>
    </div>
  )
}

export default ProductCard;