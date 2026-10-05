
import { useNavigate, useParams } from 'react-router-dom'
import products from '../data/products.js'

const ProductInfo = () => { 
  // URL 파라미터에서 id 값을 추출
  // useParams 훅을 사용하여 URL에서 id 값을 가져옵니다.
  const { id } = useParams();
  const navigate = useNavigate();

  // products 배열에서 id와 일치하는 상품을 찾습니다.
  // id는 숫자형으로 반드시 변환하기
  const product = products.find((p) => p.id === Number(id))

  return (
    <section className="product-info">
      <h2>상품 정보</h2>
      <div className="product-details">
        <p>상품 ID: {id}</p>
        <p>상품 이름: {product.name}</p>
        <p>상품 가격: {product.price}</p>
        <p>상품 설명: {product.description}</p>
      </div>
      <div className='btn-list'>
        <button onClick={() => {navigate('/products')}}>목록보기</button>
      </div>
    </section>
  ) 
}

export default ProductInfo

