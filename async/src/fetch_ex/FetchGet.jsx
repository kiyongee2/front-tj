
import React, { useEffect, useState } from "react";

function FetchGet() {
  console.log("1. 컴포넌트 실행");
  const [users, setUsers] = useState([]);

  //useEffect는 데이터를 가져오는데 시간이 소요될때 사용
  useEffect(() => {
    console.log("2. useEffect 실행");

    fetch("/json/users.json")
      .then(response => response.json())
      .then(data => {
        console.log("3. 데이터 가져오기 성공", data);
        setUsers(data);
      })
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div className="container">
      <h2>회원 목록</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            이름: {user.name}, 주소: {user.address.city}, 이메일: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchGet;