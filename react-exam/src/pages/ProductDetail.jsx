import { useNavigate, useParams } from "react-router-dom"
import { products } from "../datas/products";

export default function ProductDetail() {
  const {id} = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === Number(id));

  return(
    <section className="detail">
      <span className="category">{product.category}</span>
      <h2>{product.name}</h2>
      <p>{product.desc}</p>
      <p className="price">{product.price.toLocaleString()}원</p>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </section>
  )
}