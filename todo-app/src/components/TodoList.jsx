
function TodoList({ todos, onToggleComplete, onDeleteTodo }) {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleComplete(todo.id)}
          />
          {todo.text}
          <button onClick={() => onDeleteTodo(todo.id)}>삭제</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
