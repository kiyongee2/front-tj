import Avatar from "./Avatar";
import Card from "./Card";
import profilePhoto from "../assets/sudo.jpg"

{/*
  프로필 페이지를 보여주는 컴포넌트입니다. 
  Card 컴포넌트를 사용하여, Avatar 컴포넌트를 
  카드 형태로 보여줍니다.
*/}
const Profile = () => {

  return(
    <Card>
      {/* <h2>Card UI 구현</h2> */}
      <Avatar 
        person={{
          name: '김기용',
          imageUrl: profilePhoto
        }}
      />
    </Card>
  )
}

export default Profile;