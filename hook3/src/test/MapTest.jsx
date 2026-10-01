
const MapTest = () => {
  const users = [
    {id: 1, name: "광개토태왕"},
    {id: 2, name: "장수왕"}
  ]

  return(
    <div>
      <h2>회원 명단</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default MapTest;