
import React, { useState, useEffect } from "react";
import axios from "axios";

// JSONPlaceholder에서 사용자 데이터를 가져오는 예시
const AxiosPut = () => {
    // 할 일 제목을 저장하는 상태
    const [title, setTitle] = useState("");

    // 입력 필드 변경 시 상태 업데이트
    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    // 폼 제출 시 PUT 요청을 보내는 함수
    const handleSubmit = (e) => {
        e.preventDefault();
        // JSONPlaceholder API에서 할 일 데이터를 업데이트합니다.
        axios.put("https://jsonplaceholder.typicode.com/todos/1", {
            id: 1, // 수정할 데이터의 ID를 명시적으로 포함
            title: title,
            completed: true,
        })
        .then((response) => { 
            console.log("수정된 데이터:", response.data);
            alert("수정 완료!");
            setTitle(""); // 입력 필드 초기화
        }) 
        .catch((error) => console.error(error));
    }

    return (
        <div>
          <h2>할 일(To-do) 수정</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={handleChange}
              placeholder="할 일을 입력하세요"
            />
            <button type="submit" style={{marginLeft: '6px'}}>수정</button>
          </form>
        </div>
    );
}

export default AxiosPut;

