
import React, { useEffect, useState } from "react";

function FetchGetById({ id }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/json/users.json")
      .then(response => response.json())
      .then(data => {
        const foundUser = data.find(user => user.id === id);
        setUser(foundUser);
      })
      .catch(error => console.error("Error:", error));
  }, [id]);

  return (
    <div className="container">
      <h2>사용자 정보 (ID: {id})</h2>
      {user && (
        <div>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>이름:</strong> {user.name}</p>
          <p><strong>도시:</strong> {user.address.city}</p>
          <p><strong>이메일:</strong> {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default FetchGetById;