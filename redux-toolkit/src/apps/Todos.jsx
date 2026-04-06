
import { use, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, toggleTodo, removeTodo } from '../store/todoSlice'

const Todos = () => {
  const [inputValue, setInputValue] = useState('')
  const todos = useSelector(state => state.todo.todos)
  const dispatch = useDispatch()

  console.log(todos);
  
  // 할 일 입력 핸들러
  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value)
  }

  // 할 일 추가 핸들러
  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      dispatch(addTodo({
        id: Date.now(), // 고유한 id 생성
        text: inputValue,
        completed: false
      }))
      setInputValue('')
    }
  }

  // 할 일 체크 기능 추가
  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id))
  }

  // 할 일 삭제 기능 추가
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id))
  }

  return (
    <div>
      <h2>할 일 관리</h2>
      <input 
        type="text" 
        placeholder="할 일을 입력하세요"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>추가</button>
      {/* 할 일 목록 */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input 
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos