import React, { useEffect, useState } from "react";

const FetchExample = () => {
  const [data, setData] = useState([]);

  // JSONPlaceholder에서 사용자 데이터를 가져오는 예시
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json()
      ) // JSON 응답을 JavaScript 객체로 변환
      .then((result) => {
          setData(result);
          console.log(result);
        }
      ) // 변환된 데이터를 상태에 저장
      .catch((error) => console.error(error)); // 오류 처리
  }, []);

  return (
    <div>
      <h2>할 일(To-do) 데이터</h2>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchExample;