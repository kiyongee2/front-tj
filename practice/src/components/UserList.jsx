
const UserList = () => {
  const userList = [
    { id: 1, name: "홍길동"},
    { id: 2, name: "이순신"}
  ];

  return (
    <div>
      <h1>User</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {userList.map(user => (
          <li key={user.id}>{user.id}. {user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserList;