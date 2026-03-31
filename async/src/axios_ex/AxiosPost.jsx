
import React, { useState, useEffect } from "react";
import axios from "axios";

// JSONPlaceholder에서 사용자 데이터를 가져오는 예시
const AxiosPost = () => {
    // 할 일 제목을 저장하는 상태
    const [title, setTitle] = useState("");

    // 입력 필드 변경 시 상태 업데이트
    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    // 폼 제출 시 POST 요청을 보내는 함수
    const handleSubmit = (e) => {
        e.preventDefault();
        // JSONPlaceholder API에서 할 일 데이터를 생성합니다.
        axios.post("https://jsonplaceholder.typicode.com/todos", {
            title: title,
            completed: false,
        })
        .then((response) => { 
            console.log("생성된 데이터:", response.data);
            alert("등록 완료!");
            setTitle(""); // 입력 필드 초기화
        }) 
        .catch((error) => console.error(error));
    }

    return (
        <div>
          <h2>할 일(To-do) 추가</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={handleChange}
              placeholder="할 일을 입력하세요"
            />
            <button type="submit" style={{marginLeft: '6px'}}>등록</button>
          </form>
        </div>
    );
}

export default AxiosPost;

