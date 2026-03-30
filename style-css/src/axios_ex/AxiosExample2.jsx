
import { useEffect, useState } from "react";
import axios from "axios";

const AxiosExample2 = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <h2>할 일(To-do) 데이터</h2>
      {data && (
        <div>
          <p>
            <strong>제목:</strong> {data.title}
          </p>
          <p>
            <strong>완료 여부:</strong> {data.completed ? "✓ 완료" : "○ 미완료"}
          </p>
        </div>
      )}
    </div>
  );
}

export default AxiosExample2;