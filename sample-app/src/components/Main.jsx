
import roseImg from '../assets/rose.jpg'

const Main = () => {
  const season = "여름";
  
  return(
    <>
      <div>
        <h1>Hello, World!</h1>
      </div>
      <div className='welcome'>
        <h2>Welcome!<br />홈페이지 방문을 환영합니다.</h2>
      </div>
      <section>
        <h3>현재 계절은 {season}입니다.</h3>
        <img 
          src={roseImg} 
          alt="장미꽃"
          width={400}
        />
      </section>
    </>
  )
}

export default Main;