
import { useState } from "react";

const Like = () => {
  // 좋아요 상태 관리
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  }

  return (
    <div>
      <h1>Like</h1>
      <button onClick={handleLike}>좋아요</button>
      <span> {likeCount}</span>
    </div>
  )
}

export default Like;