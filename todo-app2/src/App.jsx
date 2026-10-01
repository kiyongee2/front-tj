
import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {id: 1, text: "운동 하기", completed: false},
    {id: 2, text: "영화 하기", completed: false},
  ])

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  }

  // 할 일 추가
  const handleAddTodo = () => {
    if(inputValue.trim() !== ""){
      const newTodo = {
        id: todos.length + 1,
        text: inputValue,
        completed: false
      }

      setTodos([...todos, newTodo]);
      setInputValue(""); //초기화
    }
  }

  // 할 일 완료 체크
  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo )
    )
  }

  // 할 일 삭제
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <div className="container">
        <h2>To-do List</h2>
        <input 
          type="text" 
          value={inputValue}
          onChange={handleInputChange}
          placeholder='할 일 입력'
        />
        <button onClick={handleAddTodo}>추가</button>

        {/* 할 일 목록 */}
        <ul className='todo-list'>
          {todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
              <input 
                type="checkbox" 
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)}
              />
              {todo.text}
              <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
