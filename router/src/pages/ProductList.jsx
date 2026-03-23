
import { Link } from "react-router-dom"

// 객체 리스트
const products = [
  {
    id: 1,
    name: '모니터', 
    price: 130000,
    description: '22인치 최신 모니터입니다.',
  },
  {
    id: 2,
    name: '마우스', 
    price: 30000,
    description: '무선 마우스입니다.',
  },
  {
    id: 3,
    name: '키보드',
    price: 50000,
    description: '무선 키보드입니다.',
  },
]

const ProductList = () => { 
  return (
    <section className="info">
      <h2>상품 리스트</h2>
      {products.map((item) => (
        <div key={item.id}>
          <h3>
            <Link to={`/products/${item.id}`}>{item.name}</Link>
          </h3>
          <p>가격: {item.price}원</p>
          <p>설명: {item.description}</p>
        </div>
      ))}
    </section>
  )
}

export default ProductList

