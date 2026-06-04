import { useParams, useNavigate } from "react-router-dom";
import {products} from "../datas/products"

const ProductInfo = () => {
  const {id} = useParams()
  const navigate = useNavigate();

  return(
    <div className="product-info">
      <h2>상품 정보</h2>
      <h3>상품 ID: {id}</h3>
      <p>가격: {products[id-1].price}</p>
      <p>설명: {products[id-1].description}</p>
      <button onClick={() => {navigate('/products')}}>목록보기</button>
    </div>
  )
}

export default ProductInfo;