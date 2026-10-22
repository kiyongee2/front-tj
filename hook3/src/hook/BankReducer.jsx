import { useReducer, useState } from "react";

const initialState = {balance: 0};

const bankReducer = (state, action) => {

  switch(action.type){
    case 'DEPOSIT':
      // return {balance: state.balance + action.payload};
      return {...state, balance: state.balance + action.payload};
    case 'WITHDRAW':
      if(state.balance < action.payload){
        alert('잔액이 부족합니다.');
        return state;
      }
      return {...state, balance: state.balance - action.payload};
    default:
      return state;
  }
}

const BankReducer = () => {
  const [state, dispatch] = useReducer(bankReducer, initialState);
  const [amount, setAmount] = useState(0);

  return(
    <div>
      <h3>현재 잔액: {state.balance} </h3>
      <input 
        type="number" 
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value) || 0)}
        step={1000}
      />
      <button onClick={() => 
        dispatch({ type: 'DEPOSIT', payload: amount})}>예금</button>
      <button onClick={() => 
        dispatch({ type: 'WITHDRAW', payload: amount})}>출금</button>
    </div>
  )
}

export default BankReducer;