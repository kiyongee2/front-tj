import heroImg from '../assets/hero.png'

const Home = () => {

  return(
    <div>
      <h2>라우터를 테스트합니다.</h2>
      <h3>[ 상단의 메뉴를 클릭해 보세요. ]</h3>
      <div>
        <img 
          src={heroImg} 
          alt="메인이미지" 
          width={300}
        />
      </div>
    </div>
  )
}

export default Home;