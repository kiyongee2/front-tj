import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const navigate = useNavigate() // 페이지 이동을 위한 훅
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: ''
  })

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,    // 기존 데이터 복사 (Spread Operator)
      [name]: value,  // 변경된 name 값만 업데이트
    });
  }

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // 입력값 검증
    if (!formData.name.trim() || !formData.price || 
          !formData.description.trim()) {
      alert('모든 필드를 입력해주세요.')
      return
    }

    if (isNaN(formData.price) || formData.price <= 0) {
      alert('가격은 0보다 큰 숫자를 입력해주세요.')
      return
    }

    // 상품 추가 처리 (실제로는 API 호출)
    console.log('상품 추가:', formData)
    alert('상품이 등록되었습니다.')
    
    // 초기화
    setFormData({
      name: '',
      price: '',
      description: ''
    })

    // 상품 리스트 페이지로 이동
    navigate('/products')
  }

  // 취소 버튼 핸들러
  const handleCancel = () => {
    navigate('/products')
  }

  return (
    <section className="add-product">
      <h2>상품 등록</h2>
      <form onSubmit={handleSubmit} className='add-form'>
        <div>
          <label htmlFor="name">상품명:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="상품명을 입력하세요"
          />
        </div>
        <div>
          <label htmlFor="price">가격:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="가격을 입력하세요"
            min="1"
          />
        </div>
        
        <div>
          <label htmlFor="description">설명:</label>
          <br />
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="상품 설명을 입력하세요"
            rows={5}
            cols={30}
          />
        </div>

        <div className="form-buttons">
          <button type="submit">등록</button>
          <button type="button" onClick={handleCancel}>취소</button>
        </div>
      </form>
    </section>
  )
}

export default AddProduct
