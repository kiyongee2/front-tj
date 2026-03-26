
import { useParams } from 'react-router-dom'
import { products } from '../data/products'

const ProductInfo = () => { 
  // URL 파라미터에서 id 값을 추출
  // useParams 훅을 사용하여 URL에서 id 값을 가져옵니다.
  const { id } = useParams()

  // products 배열에서 id와 일치하는 상품을 찾습니다.
  // products 배열에서 조건에 맞는 첫 번째 요소를 찾습니다
  const product = products.find((p) => p.id === parseInt(id))

  return (
    <section className="product-info">
      <h2>상품 정보</h2>
      <p>상품 ID: {id}</p>
      <p>상품 이름: {product.name}</p>
      <p>상품 가격: {product.price}</p>
      <p>상품 설명: {product.description}</p>
    </section>
  ) 
}

export default ProductInfo

