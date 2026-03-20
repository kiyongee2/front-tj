import { useParams } from "react-router-dom";

const Boardlist = () => {
  //hook useParams 사용(id 값을 꺼내서 변수에 할당함) - 주소 변수 방식
  const {id} = useParams();
  console.log(id);
  return(
    <div className="board-page page">
      <h2>Boardlist.jsx</h2>
      <p>요청 id: {id}</p>
    </div>
  )
}
export default Boardlist;