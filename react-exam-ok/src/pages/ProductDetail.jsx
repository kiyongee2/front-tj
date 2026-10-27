import { useNavigate, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <section>
        <p>상품을 찾을 수 없습니다.</p>
        <button onClick={() => navigate("/")}>목록으로</button>
      </section>
    );
  }

  return (
    <section className="detail">
      <span className="category">{product.category}</span>
      <h2>{product.name}</h2>
      <p>{product.desc}</p>
      <p className="price">{product.price.toLocaleString()}원</p>
      <button onClick={() => dispatch({ type: "ADD", product })}>장바구니 담기</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </section>
  );
}
