import { Link } from "react-router-dom"
import mainImage from '../assets/hero.png'

const Main = () => {
  return (
    <main className="main">
      <h1>컴퓨터 기기 쇼핑몰</h1>
      <section>
        <p>최신 컴퓨터 기기를 한 곳에서 만나보세요!</p>
        <div>
          <img src={mainImage} alt="메인 이미지" />
        </div>
        <div className="main-link">
          <Link to="/products">상품 목록 보기</Link>
        </div>
      </section>
    </main>
  )
}

export default Main

