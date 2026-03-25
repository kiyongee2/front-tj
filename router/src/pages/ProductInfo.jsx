
import { useParams } from 'react-router-dom'

const ProductInfo = () => { 
  // URL 파라미터에서 id 값을 추출
  // useParams 훅을 사용하여 URL에서 id 값을 가져옵니다.
  // 예를 들어, URL이 /products/1 이면 id는 1이 됩니다.
  const { id } = useParams()

  return (
    <section className="product-info">
      <h2>상품 정보</h2>
      <p>상품 ID: {id}</p>
    </section>
  )
}

export default ProductInfo

