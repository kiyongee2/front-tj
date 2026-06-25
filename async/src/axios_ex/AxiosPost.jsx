import axios from "axios";
import { useState } from "react";

const AxiosPost = () => {
  const [title, setTitle] = useState(""); // 할 일 입력 상태 관리

  // 입력값 변경 시 상태 업데이트
  const handleInputChange = (e) => {
    setTitle(e.target.value); // 입력 필드의 값을 상태에 저장
  }

  // 폼 제출 시 POST 요청 보내기
  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지

    // JSONPlaceholder API에 POST 요청 보내기
    axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: title,
      completed: false
    })
    .then((response) => {
      console.log("추가된 데이터:", response.data);
      alert("추가 완료!");
      setTitle(""); // 입력 필드 초기화
    })
    .catch((error) => console.log(error)) // 에러 처리
  }

  return(
    <div className="axios-new-todo">
      <h2>할 일 추가</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="할 일 입력"
          value={title} // 입력 필드의 값을 상태에 바인딩
          onChange={handleInputChange}
        />
        <button type="submit">추가</button>
      </form>
    </div>
  )
}

export default AxiosPost;