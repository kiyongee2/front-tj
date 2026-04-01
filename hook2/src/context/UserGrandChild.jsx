import { useContext } from 'react';
import { UserContext } from './User';

const UserGrandChild = () => {
  // UserContext에서 user 데이터를 가져옵니다.
  const user = useContext(UserContext);

  return (
    <div className='user-grandchild'>
      <h4>UserGrandChild 컴포넌트입니다.</h4>
      <p>사용자 이름: {user.name}</p>
      <p>사용자 나이: {user.age}</p>
    </div>
  );
}

export default UserGrandChild;
