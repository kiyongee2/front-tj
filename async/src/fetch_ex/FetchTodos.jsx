import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// JSONPlaceholder에서 사용자 데이터를 가져오는 예시
const FetchTodos = () => {
  const [data, setData] = useState([]);

  // 컴포넌트가 마운트될 때 한 번만 실행
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json()) // JSON 응답을 JavaScript 객체로 변환
      .then((result) => {
          setData(result); // 변환된 데이터를 상태에 저장
          console.log(result);
        }
      ) 
      .catch((error) => console.error(error)); // 오류 처리
  }, []);

  return (
    <div className="fetch-todos">
      <h2>할 일(To-do) 데이터</h2>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>
            <Link to={`/${todo.id}`}>{todo.title}</Link>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchTodos;