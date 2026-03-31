
import React, { useState, useEffect } from "react";
import axios from "axios";

// JSONPlaceholder에서 사용자 데이터를 가져오는 예시
const AxiosGet = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // JSONPlaceholder API에서 할 일 데이터를 가져옵니다.
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((response) => { 
                setData(response.data); // 응답 데이터를 response.data에 저장
                console.log(response.data);
            }) 
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
}

export default AxiosGet;

