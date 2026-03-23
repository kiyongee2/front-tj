

import { useState } from 'react';

const AddProduct = () => {
  // productName 상태와 setProductName 함수를 useState 훅을 사용하여 정의
  const [productName, setProductName] = useState('');
  // products 상태와 setProducts 함수를 useState 훅을 사용하여 정의
  const [products, setProducts] = useState([]);

  const handleInputChange = (event) => {
    // console.log(event);
    // 입력된 상품 이름을 상태로 업데이트
    setProductName(event.target.value);
  };

  const handleAddProduct = () => {
    // 상품 추가 로직을 여기에 작성
    if (productName.trim() === '') {
      alert('상품 이름을 입력해주세요.');
      return;
    }
    //id는 고유한 값이 필요하므로 Date.now()를 사용하여 생성
    const newProducts = [...products, { id: Date.now(), name: productName }];
    console.log('상품 목록:', newProducts);
    setProducts(newProducts);
    setProductName(''); // 입력 필드 초기화
  };

  return (
    <div> 
      <h2>상품 추가</h2>
      <p>상품 추가 컴포넌트입니다.</p>
      <input
        type="text"
        placeholder="상품 이름을 입력하세요"
        value={productName}
        onChange={handleInputChange}
      />{" "}
      <button onClick={handleAddProduct}>추가</button>
    </div>
  );
}

export default AddProduct;