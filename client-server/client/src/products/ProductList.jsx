
import api from '../api/api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'


const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // 상품 목록 조회 API 호출
    api.get('/products')
      .then(response => {
        setProducts(response.data) // 응답 데이터로 상태 업데이트
      })
      .catch(error => {
        console.error('상품 목록 조회 에러:', error)
      })
  }, [])

  return (
    <div className="product-list">
      <h2>상품 리스트</h2>
      <div className="card-container">
        {products.map(product => (
          <Link to={`/products/${product.id}`} key={product.id} className="card-link">
            <div className="product-card">
              <div className="card-image">
                <img
                  src={product.image_file ? `http://localhost:8000${product.image_file}` : 'https://placehold.co/300x200?text=No+Image'}
                  alt={product.product_name}
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">{product.product_name}</h3>
                <p className="card-price">{Number(product.price).toLocaleString()}원</p>
                <p className="card-date">{dayjs(product.created_at).format('YYYY-MM-DD')}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductList

