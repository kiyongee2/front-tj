import { useParams } from "react-router-dom";

const BoardDetail = () => {
  const {id} = useParams();

  return(
    <div>
      <h2>게시글 상세</h2>
      <p>{id}번 게시글입니다.</p>
    </div>
  )
}

export default BoardDetail;