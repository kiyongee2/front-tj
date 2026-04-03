import React, { useReducer, useState } from 'react';

const bankReducer = (state, action) => {
  console.log("reducer가 작동합니다.", state, action);
  
  switch (action.type) {
    case 'DEPOSIT':
      return state + action.payload; // 예금 시에는 현재 잔액에 액션의 payload를 더하여 새로운 상태를 반환합니다.
    case 'WITHDRAW':
      return state - action.payload; // 출금 시에는 현재 잔액에서 액션의 payload를 빼서 새로운 상태를 반환합니다. 
    default:
      return state; // 현재 상태를 그대로 반환합니다.
  }
};

const BankReducer = () => {
   const [amount, setAmount] = useState(0);
   // 초기 잔액을 0으로 설정합니다.
   const [state, dispatch] = useReducer(bankReducer, { balance: 0 }); 

  return (
    <div>
      <h3>현재 잔액: {state.balance}원</h3>
      <input 
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
        step="1000"
      />
      <button 
        onClick={() => {
          dispatch({ type: 'DEPOSIT', payload: amount })
        }}
      >
        예금
      </button>
      <button 
        onClick={() => {
          dispatch({ type: 'WITHDRAW', payload: amount })
        }}
      >
        출금
      </button>
    </div>
  )
}

export default BankReducer;