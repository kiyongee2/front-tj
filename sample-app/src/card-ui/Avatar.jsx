{/*
  프로필 사진을 보여주는 컴포넌트입니다. 
  props로 person 객체를 받아서, person 객체의 
  imageUrl과 name을 사용하여 프로필 사진을 보여줍니다.
*/}
export default function Avatar({person}) {

  return(
    <div>
      {/* <h3>여기에 프로필 사진</h3> */}
      <div>
        <img 
          src={person.imageUrl}
          alt={person.name}
          width={400}
          className="avatar"
        />
      </div>
    </div>
  )
}

