import React, { useEffect, useState } from "react";

const FetchExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Fetch 데이터</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchExample;