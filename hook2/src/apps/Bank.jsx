import { useSelector, useDispatch } from "react-redux";
import {
  deposit,
  withdraw,
} from "../store/bankSlice"
import { useState } from "react";

const Bank = () => {
  const balance = useSelector(state => state.bank.balance);
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();

  const handleDeposit = () => {
    dispatch(deposit(Number(amount)));
  }

  const handleWithDraw = () => {
    dispatch(withdraw(Number(amount)))
  }

  return(
    <div>
      <h2>Bank System</h2>
      <h3>잔액: {balance}원</h3>
      <input 
        type="number" 
        step={1000}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleDeposit}>입금</button>
      <button onClick={handleWithDraw}>출금</button>
    </div>
  )
}

export default Bank;