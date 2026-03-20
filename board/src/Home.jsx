//Props: 상위 컴포넌트에서 하위컴포넌트로 파라미터를 전달하는 것
//Home -> Prop name, age
import { Link } from "react-router-dom";
import Prop from "./pages/Prop";
import {nation, nations} from "./data/data.js"

const Home = () => {
  return(
    <div className="home">
      <h2>Home.jsx</h2>
      {/* <Prop name="투데이" age="15" /> */}
      {/* /board/10 - 주소 변수 방식 */}
      <Link to={{
        pathname: "/board/20"
      }}>board 전송(path variable)</Link>
      {/* /board?q=aa - 쿼리스트링 방식 */}
      <div>
        <Link to="/board?q=aa">board 전송(query string1)</Link><br />
        {/* 속성별로 구분 */}
        <Link to={{
          pathname: "/board",
          search: "?q=aa&page=4"
        }}>board 전송(query string2)</Link>
      </div>
      <div>
        {/* 나라이름으로 주소 변수 만들기 - 백틱(`) 사용 */}
        {nations.map(n => (
          <Link to={{
            pathname: `/board/${n.name}`
          }}>{n.name} </Link>
        ))}
      </div>
    </div>
  );
}
export default Home;