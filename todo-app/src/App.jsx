import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '운동 하기', completed: false },
    { id: 2, text: '영화 보기', completed: false },
  ])
  const [inputValue, setInputValue] = useState('')

  console.log(todos.length); //2

  // 입력값 변경 핸들러
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value)
  }

  // 할 일 추가
  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      // 새로운 할 일 객체 생성
      const newTodo = { 
        id: todos.length + 1,
        text: inputValue,
        completed: false,
      }
      // 새로운 할 일을 기존 할 일 목록에 추가
      setTodos([...todos, newTodo])
      setInputValue('') // 입력 필드 초기화
    }
  }

  // 할 일 완료 체크
  const handleToggleComplete = (id) => {
    /* 해당 id를 가진 할 일의 completed 상태를 토글
       todos 배열을 순회하면서 id가 일치하는 할 일의 completed 값을 반전시킴
       id가 일치하지 않는 할 일은 그대로 유지*/
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  // 할 일 삭제
  const handleDeleteTodo = (id) => {
    /* 해당 id를 가진 할 일을 삭제
       todos 배열을 필터링하여 id가 일치하지 않는 할 일만 남김*/
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <div className='container'>
        <h2>Todo List</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={handleAddTodo}>추가</button>

        {/* 할 일 목록 */}
        <TodoList
          todos={todos}
          onToggleComplete={handleToggleComplete}
          onDeleteTodo={handleDeleteTodo}
        />
      </div>
    </>
  )
}

export default App
