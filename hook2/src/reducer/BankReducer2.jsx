import React, { useReducer, useState } from 'react';

const initialState = {
  balance: 0,  //
  transactions: [] // 거래 내역을 저장하는 배열입니다.
};

const bankReducer = (state, action) => {
  console.log("reducer가 작동합니다.", state, action);
  
  switch (action.type) {
    case 'DEPOSIT':
      return {
        ...state,
        balance: state.balance + action.payload,
        transactions: [
          ...state.transactions,
          {
            type: '예금',
            amount: action.payload,
            balance: state.balance + action.payload,
            date: new Date().toLocaleTimeString('ko-KR')
          }
        ]
      };
    case 'WITHDRAW':
      return {
        ...state,
        balance: state.balance - action.payload,
        transactions: [
          ...state.transactions,
          {
            type: '출금',
            amount: action.payload,
            balance: state.balance - action.payload,
            date: new Date().toLocaleTimeString('ko-KR')
          }
        ]
      };
    default:
      return state;
  }
};

const BankReducer2 = () => {
  const [amount, setAmount] = useState(0);
  const [state, dispatch] = useReducer(bankReducer, initialState);

  return (
    <div>
      <h2>은행 시스템 (거래내역 포함)</h2>
      
      {/* 잔액 표시 */}
      <div className='balance'>
        현재 잔액: <span>{state.balance}원</span>
      </div>

      {/* 입력 및 버튼 */}
      <div>
        <input 
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value) || 0)}
          placeholder="금액 입력"
          step="1000"
        />
        <button 
          onClick={() => {
            if (amount > 0) {
              dispatch({ type: 'DEPOSIT', payload: amount });
              setAmount(0);
            }
          }}
        >
          예금
        </button>
        <button 
          onClick={() => {
            if (amount > 0 && state.balance >= amount) {
              dispatch({ type: 'WITHDRAW', payload: amount });
              setAmount(0);
            } else if (amount > state.balance) {
              alert('잔액이 부족합니다.');
            }
          }}
        >
          출금
        </button>
      </div>

      {/* 거래내역 표시 */}
      <div className='transaction-list'>
        <h3>거래내역</h3>
        {state.transactions.length === 0 ? (
          <p style={{ color: '#999' }}>거래 내역이 없습니다.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th >거래유형</th>
                <th >거래액</th>
                <th >거래후잔액</th>
                <th >시간</th>
              </tr>
            </thead>
            <tbody>
              {state.transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.type}</td>
                  <td>{transaction.amount.toLocaleString()}원</td>
                  <td>{transaction.balance.toLocaleString()}원</td>
                  <td>{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default BankReducer2;