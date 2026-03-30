
import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosExample = () => {
    const [data, setData] = useState([]);

    // JSONPlaceholder에서 사용자 데이터를 가져오는 예시
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((response) => { 
                setData(response.data);
                console.log(response.data);
            }) // Axios는 응답 데이터를 response.data에 저장
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

export default AxiosExample;