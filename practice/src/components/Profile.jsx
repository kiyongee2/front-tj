
import profilePhoto from '../assets/giyong.jpg'

const Profile = () => {
  const user = {
    name: "김기용",
    imageUrl: profilePhoto
  }

  return(
    <div>
      <h1>{user.name}</h1>
      <img 
        src={user.imageUrl}
        alt={'Photo of' + user.name}
        className='profile-photo'
      />
    </div>
  )
}

export default Profile;