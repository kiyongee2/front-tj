import { useContext } from 'react';
import { UserContext } from './User';
import UserGrandChild from './UserGrandChild';

const UserChild = () => {
  // UserContext에서 user 데이터를 가져옵니다.
  const user = useContext(UserContext);
  console.log(user);
  
  return (
    <div className='user-child'>
      <h3>UserChild 컴포넌트입니다.</h3>
      <p>사용자 이름: {user.name}</p>
      <p>사용자 나이: {user.age}</p>

      <UserGrandChild />
    </div>
  );
}

export default UserChild;
