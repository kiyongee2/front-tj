
import { useEffect, useState } from "react";
import axios from "axios";

const AxiosGetById = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // JSONPlaceholder API에서 특정 ID의 할 일 데이터를 가져옵니다.
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  }, [id]); // id가 변경될 때마다 데이터를 다시 가져옴

  return (
    <div>
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

export default AxiosGetById;

