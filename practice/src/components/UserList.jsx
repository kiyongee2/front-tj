
const UserList = () => {
  // 객체
  const userList = [
    { id: 1, name: "홍길동"},
    { id: 2, name: "이순신"}
  ];

  // 배열
  const carts = ["라면", "달걀", "콩나물"]

  return (
    <div>
      <h1>User</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {userList.map(user => (
          <li key={user.id}>{user.id}. {user.name}</li>
        ))}
      </ul>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {carts.map((cart, index) => (
          // <li key={index}>{index + 1}. {cart}</li>
          <li key={index}>{`${index + 1}. ${cart}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserList;