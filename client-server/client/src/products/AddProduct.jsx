
import { useState } from 'react'
import api from '../api/api'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: '',
    price: ''
  })
  const { productName, price } = formData
  const [imageFile, setImageFile] = useState(null) // 업로드할 이미지 파일
  const [preview, setPreview] = useState(null) // 이미지 미리보기 URL
  const navigate = useNavigate();

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
      setPreview(URL.createObjectURL(file)) // 미리보기 생성
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
    api.post('/products', data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(response => {
        alert('상품이 성공적으로 등록되었습니다.')
        navigate('/products')
      })
      .catch(error => {
        console.error('상품 등록 에러:', error)
        alert('상품 등록 중 오류가 발생했습니다.')
      })
  } 
  // 취소 버튼 클릭시 입력상자 초기화
  const handleCancel = () => {
    setFormData({
      productName: '',
      price: ''
    })
    setImageFile(null)
    setPreview(null)
  }

  return (
    <div className='add-product'>
      <h2>상품 등록</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productName">상품명</label>
          <input
            type="text"
            name="productName"
            value={productName}
            onChange={handleInputChange}
            placeholder='상품명을 입력하세요'
          />
        </div>
        <div>
          <label htmlFor="price">가격</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={handleInputChange}
            placeholder='가격을 입력하세요'
          />
        </div>
        <div>
          <label htmlFor="image">상품 이미지</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
          />
          {preview && (
            <div className="image-preview">
              <img src={preview} alt="미리보기" />
            </div>
          )}
        </div>
        <button type="submit">등록</button>
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

export default AddProduct