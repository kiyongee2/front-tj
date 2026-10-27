import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <p>좋아요 {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>👍</button>
    </div>
  );
}

export default LikeButton