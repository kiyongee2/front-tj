
const AddProduct = () => {
  const [productName, setProductName] = useState('');

  const handleInputChange = (event) => {
    console.log(event);
    setProductName(event.target.value);
  };

  const handleAddProduct = () => {
    // 상품 추가 로직을 여기에 작성
    console.log('추가된 상품:', productName);
    setProductName(''); // 입력 필드 초기화
  };

  return (
    <div> 
      <h2>상품 추가</h2>
      <p>상품 추가 컴포넌트입니다.</p>
      <input
        type="text"
        value={productName}
        onChange={handleInputChange}
        placeholder="상품 이름을 입력하세요"
      />
      <button onClick={handleAddProduct}>추가</button>
    </div>
  );
}

export default AddProduct;