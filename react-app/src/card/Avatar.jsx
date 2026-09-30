import "../App.css"

const Avatar = ({person}) => {

  return(
    <div>
      {/* <h2>내 프로필</h2> */}
      <div>
        <img 
          className="avatar"
          src={person.imageUrl} 
          alt={person.name} 
        />
      </div>
    </div>
  )
}

export default Avatar;