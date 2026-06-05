
const UserList = () => {
  // 객체
  const userList = [
    { id: 1, name: "홍길동"},
    { id: 2, name: "이순신"}
  ];

  // 배열
  const carts = ["라면", "달걀", "콩나물"]

  // 객체
  const fruits = [
    { id: Date.now(), name: "사과", price: 1000 },
    { id: Date.now() + 1, name: "바나나", price: 2000 },
    { id: Date.now() + 2, name: "포도", price: 3000 }
  ]

  return (
    <div>
      <h2>UserList</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {userList.map(user => (
          <li key={user.id}>{user.id}. {user.name}</li>
        ))}
      </ul>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {fruits.map(fruit => (
          <li key={fruit.id}>{fruit.name} - {fruit.price}원</li>
        ))}
      </ul>
    </div>
  )
}

export default UserList;