import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../api/api'

const UpdateProduct = () => {
  const { id } = useParams()
  const [formData, setFormData] = useState({
    productName: '',
    price: ''
  })
  const { productName, price } = formData
  const [imageFile, setImageFile] = useState(null) // 새로 업로드할 이미지
  const [preview, setPreview] = useState(null) // 이미지 미리보기 URL
  const navigate = useNavigate()

  // 컴포넌트가 마운트될 때 상품 정보를 조회하여 폼에 초기값 설정
  useEffect(() => {
    api.get(`/products/${id}`)
      .then(response => {
        setFormData({
          productName: response.data.product_name,
          price: response.data.price
        })
        // 기존 이미지가 있으면 미리보기 표시
        if (response.data.image_url) {
          setPreview(`http://localhost:8000${response.data.image_url}`)
        }
      })
      .catch(error => {
        console.error('상품 조회 에러:', error)
      })
  }, [id])

  // 입력값 변경 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // 이미지 파일 선택 핸들러
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImageFile(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // FormData로 파일과 텍스트 데이터 전송
    const data = new FormData()
    data.append('productName', productName)
    data.append('price', price)
    if (imageFile) {
      data.append('image', imageFile)
    }
    api.put(`/products/${id}`, data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(() => {
        alert('상품이 성공적으로 수정되었습니다.')
        navigate(`/products/${id}`)
      })
      .catch(error => {
        console.error('상품 수정 에러:', error)
        alert('상품 수정 중 오류가 발생했습니다.')
      })
  }

  const handleCancel = () => {
    setFormData({
      productName: '',
      price: ''
    })
    setImageFile(null)
    setPreview(null)
  }

  return (
    <div className='update-product'>
      <h2>상품 수정</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productName">상품명</label>
          <input
            type="text"
            name="productName"
            value={productName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="price">가격</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="image">상품 이미지</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          {preview && (
            <div className="image-preview">
              <img src={preview} alt="미리보기" />
            </div>
          )}
        </div>
        <button type="submit">수정</button>
        <button 
          type="button" 
          onClick={handleCancel}
          style={{background: '#aaa', color: '#fff'}}
        >
          취소
        </button>
      </form>
    </div>
  )
}

export default UpdateProduct
