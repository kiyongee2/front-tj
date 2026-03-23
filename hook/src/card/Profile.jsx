import Avatar from "./Avatar";
import profilePhoto from '../assets/sudo.jpg'
import Card from "./Card";

export default function Profile() { 
  const AVATAR_SIZE = {
    width: '300',
    height: '200'
  }

  return (
    <div className="profile">
      <Card>
        <Avatar 
          size={AVATAR_SIZE}
          person={{
            name: "김기용",
            imageUrl: profilePhoto
          }}
        />
      </Card>
    </div>
  )
}