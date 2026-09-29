import UserGrandChild from './UserGrandChild';

const UserChild = () => {
  
  return (
    <div className='user-child'>
      <h3>UserChild 컴포넌트입니다.</h3>
      <p>user props를 받지 않아도 GrandChild가 Context에서 직접 사용합니다.</p>
      <UserGrandChild />
    </div>
  );
}

export default UserChild;

