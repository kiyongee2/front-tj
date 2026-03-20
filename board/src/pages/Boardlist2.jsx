import { useSearchParams } from "react-router-dom";

const Boardlist2 = () => {
  //쿼리 스트링 방식- useSearchParams
  const [board] = useSearchParams();
  console.log(board);
  console.log(board.get("q"));
  console.log(board.get("page"));
  return(
    <div className="board-page page">
      <h2>Boardlist2.jsx</h2>
    </div>
  )
}
export default Boardlist2;