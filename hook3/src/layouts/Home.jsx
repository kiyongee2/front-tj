
import mainPhoto from "../assets/hero.png"

const Home = () => {

  return(
    <div>
      <h2>Main Page</h2>
      <p>라우터를 테스트합니다.</p>
      <div>
        <img src={mainPhoto} alt="메인이미지" />
      </div>
    </div>
  )
}

export default Home;