
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// JSONPlaceholder에서 사용자 데이터를 가져오는 예시
const AxiosTodos = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // JSONPlaceholder API에서 할 일 데이터를 가져옵니다.
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((response) => { 
                setData(response.data); // 가져온 데이터를 상태에 저장
                console.log(response.data);
            }) 
            .catch((error) => console.error(error)); // 오류 처리
    }, []);

    return (
        <div className="axios-todos">
          <h2>할 일(To-do) 데이터</h2>
          <ul>
            {data.map((todo) => (
              <li key={todo.id}>
                <Link to={`/axios/${todo.id}`}>{todo.title}</Link>
              </li>
            ))}
          </ul>
        </div>
    );
}

export default AxiosTodos;

