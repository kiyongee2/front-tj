import { useSelector, useDispatch } from "react-redux"
import { deposit, withdraw } from "../store/bankSlice"
import { useState } from "react"

const ReduxBank = () => {
  // 입금/출금할 금액을 관리하는 state
  const [amount, setAmount] = useState(0) 
  // bankSlice의 balance 값을 가져옴
  const balance = useSelector(state => state.bank.balance) 
  // bankSlice의 transactions 값을 가져옴
  const transactions = useSelector(state => state.bank.transactions) 

  const dispatch = useDispatch();  // dispatch 함수를 가져옴

  // 입금 버튼 클릭 시 deposit 액션을 dispatch
  const handleDeposit = () => {
    dispatch(deposit(Number(amount)))
  }

  // 출금 버튼 클릭 시 withdraw 액션을 dispatch
  const handleWithdraw = () => {
    dispatch(withdraw(Number(amount)))
  }

  return (
    <div>
      <h2>Bank System</h2>
      <h3>잔액: {balance}원</h3>
      <input 
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        step="1000" 
      />
      <button onClick={handleDeposit}>입금</button>
      <button onClick={handleWithdraw}>출금</button>
      <h3>거래 내역</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            [{transaction.timestamp}]{' '} 
              {transaction.type === 'deposit' ? '입금' : '출금'}: {transaction.amount}원
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReduxBank

