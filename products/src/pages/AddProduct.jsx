import { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target 

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('상품 추가:', formData);
  }

  return(
    <div className="add-product">
      <h2>상품 등록</h2>
      <form onSubmit={handleSubmit} className="add-form">
        <div>
          <label htmlFor="name">상품명 </label>
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
          <label htmlFor="price">가격 </label>
          <input 
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="가격을 입력하세요"
           />
        </div>
        <div>
          <label htmlFor="description">설명 </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            cols={30}
            placeholder="상품 설명을 입력하세요"
           />
        </div>
        <div>
          <button type="submit">등록</button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct;