import { useEffect, useState } from "react";

const FetchExample2 = ({ id }) => {
  // 객체 초기값을 null로 설정 - 데이터가 아직 로드되지 않았음
  const [data, setData] = useState(null);

  // JSONPlaceholder에서 사용자 데이터를 가져오는 예시
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json()
      ) // JSON 응답을 JavaScript 객체로 변환
      .then((result) => {
          setData(result);
          console.log(result);
        }
      ) // 변환된 데이터를 상태에 저장
      .catch((error) => console.error(error)); // 오류 처리
  }, [id]); // id가 변경될 때마다 데이터를 다시 가져옴 

  return (
    <div>
      <h2>할 일(To-do) 데이터</h2>
      {data && (
        <div>
          <p>
            <strong>제목:</strong> {data.title}
          </p>
          <p>
            <strong>완료 여부:</strong> 
            {data.completed ? "● 완료" : "○ 미완료"}
          </p>
        </div>
      )}
    </div>
  );
};

export default FetchExample2;

