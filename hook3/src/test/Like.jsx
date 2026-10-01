import { useState } from "react"

export default function Like(){
  const [likeCount, setLikeCount] = useState(0);

  return(
    <div>
      <h2>좋아요 {likeCount}</h2>
      <button onClick={() => setLikeCount(likeCount+1)}>♥ 좋아요</button>
    </div>
  )
}