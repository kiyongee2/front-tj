
import React, { useState } from 'react';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
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
    const newProducts = [...products, { id: Date.now(), name: productName }];
    console.log('상품 목록:', newProducts);
    setProducts(newProducts);
    setProductName(''); // 입력 필드 초기화
  };

  const handleDeleteProduct = (id) => {
    // 상품 삭제 로직을 여기에 작성
    // id를 기준으로 해당 상품을 제외한 새로운 배열을 생성하여 상태 업데이트
    setProducts(products.filter(product => product.id !== id));
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

      {/* 추가된 상품 목록 */}
      <div style={{ marginTop: '20px' }}>
        <h3>추가된 상품 목록</h3>
        {products.length === 0 ? (
          <p>추가된 상품이 없습니다.</p>
        ) : (
          <ul>
            {products.map((product) => (
              // key는 id를 사용하여 각 상품을 식별
              <li key={product.id}>
                {product.name}{' '}
                <button 
                  onClick={() => handleDeleteProduct(product.id)}
                  style={{ marginLeft: '10px', color: 'red' }}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AddProduct;