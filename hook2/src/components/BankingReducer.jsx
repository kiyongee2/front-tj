import { useReducer, useState } from "react";

const initialState = {
  balance: 0
}

const reducer = (state, action) => {

  switch(action.type){

  }
}


const BankingReducer = () => {
  const [amount, setAmount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  return(
    <div>
      <h2>현재 잔액:{state.balance}</h2>
    </div>
  )
}

export default BankingReducer;