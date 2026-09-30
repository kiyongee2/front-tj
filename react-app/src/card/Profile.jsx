import Avatar from "./Avatar";
import profilePhoto from "../assets/giyong.jpg"
import Card from "./Card";

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