import { useReducer, useState } from 'react';

const initialState = { stock: 0 }; // 초기 상태를 정의합니다.

const stockReducer = (state, action) => {
  switch (action.type) {
    case 'STOCK_IN':
      // 입고 시에는 현재 재고에 액션의 payload를 더하여 새로운 상태를 반환합니다.
      return { ...state, stock: state.stock + action.payload };
    case 'STOCK_OUT':
      // 출고 시에는 현재 재고에서 액션의 payload를 빼서 새로운 상태를 반환합니다.
      // 재고가 0보다 클 때만 출고할 수 있도록 조건을 추가합니다.
      if (state.stock > 0) {
        return { ...state, stock: state.stock - action.payload };
      }
      return state; // 재고가 0이면 상태를 변경하지 않습니다. 
    default:
      return state;
  }
};

const StockReducer = () => {
  const [state, dispatch] = useReducer(stockReducer, initialState);
  const [inputValue, setInputValue] = useState(1);

  const handleInputChange = (e) => {
    // 입력값을 숫자로 변환하여 상태에 저장합니다.
    setInputValue(parseInt(e.target.value));
  };

  return (
    <div>
      <h3>현재 재고: {state.stock}</h3>
      <input 
        type="number"
        value={inputValue}
        onChange={handleInputChange}
      />
      {/* 입력한 값만큼 재고를 조정할 수 있도록 버튼 클릭 시 payload로 전달 */}
      <button onClick={() => dispatch({ type: 'STOCK_IN', payload: inputValue })}>입고</button>
      <button onClick={() => dispatch({ type: 'STOCK_OUT', payload: inputValue })}>출고</button>
    </div>
  )
}

export default StockReducer;