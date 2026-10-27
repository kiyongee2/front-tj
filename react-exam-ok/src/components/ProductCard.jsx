import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { dispatch } = useCart();
  return (
    <div className="card">
      <span className="category">{product.category}</span>
      <h3><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
      <p className="price">{product.price.toLocaleString()}원</p>
      <button onClick={() => dispatch({ type: "ADD", product })}>담기</button>
    </div>
  );
}
