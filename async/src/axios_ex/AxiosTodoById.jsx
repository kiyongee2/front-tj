
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AxiosTodoById = () => {
  const {id} = useParams(); // URL에서 ID를 가져옵니다.
  const [data, setData] = useState(null);

  useEffect(() => {
    // JSONPlaceholder API에서 특정 ID의 할 일 데이터를 가져옵니다.
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => {
        setData(response.data); // 가져온 데이터를 상태에 저장
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  }, [id]); // id가 변경될 때마다 데이터를 다시 가져옴

  return (
    <div className="axios-todo-by-id">
      <h2>할 일(To-do) 데이터</h2>
      {data && (
        <div>
          <p>
            <strong>제목: </strong> {data.title}
          </p>
          <p>
            <strong>완료 여부: </strong> 
            {data.completed ? "● 완료" : "○ 미완료"}
          </p>
        </div>
      )}
    </div>
  );
}

export default AxiosTodoById;

