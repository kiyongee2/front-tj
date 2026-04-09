
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  balance: 0, // 은행 잔액을 저장하는 state
  transactions: [] // 거래 내역을 저장하는 배열
}

const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.balance += action.payload  // 입금액을 잔액에 더함
      // 거래 내역에 입금 기록을 추가
      // push()를 사용하여 transactions 배열에 새로운 거래 객체를 추가
      state.transactions.push({ 
        type: 'deposit', 
        amount: action.payload,
        // timestamp는 거래가 발생한 시간을 문자열로 저장
        timestamp: new Date().toLocaleString('ko-KR')
      })
    },
    withdraw: (state, action) => {
      if (state.balance >= action.payload) {
        state.balance -= action.payload  // 출금액을 잔액에서 뺌
        // 거래 내역에 출금 기록을 추가
        state.transactions.push({ 
          type: 'withdraw', 
          amount: action.payload,
          timestamp: new Date().toLocaleString('ko-KR')
        })
      } else {
        alert("잔액이 부족합니다.")
      }
    }
  }
})

export const { deposit, withdraw } = bankSlice.actions
export default bankSlice.reducer

