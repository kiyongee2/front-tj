import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0, //잔고
  transactions: []  //거래 내역
}

const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.balance += action.payload;
      state.transactions.push({
        type: 'deposit',
        amount: action.payload,
        timestamp: new Date().toLocaleString("ko-KR")
      })
    },
    withdraw: (state, action) => {
      if(state.balance < action.payload){
        alert("잔액이 부족합니다.");
        return;
      }
      state.balance -= action.payload;
      state.transactions.push({
        type: 'withdraw',
        amount: action.payload,
        timestamp: new Date().toLocaleString("ko-KR")
      })
    }
  }
})

export const {
  deposit,
  withdraw,
} = bankSlice.actions;

export default bankSlice.reducer;