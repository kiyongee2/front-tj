import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
}

const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.balance += action.payload;
    },
    withdraw: (state, action) => {
      if(state.balance < action.payload){
        alert("잔액이 부족합니다.");
        return;
      }
      state.balance -= action.payload;
    }
  }
})

export const {
  deposit,
  withdraw,
} = bankSlice.actions;

export default bankSlice.reducer;