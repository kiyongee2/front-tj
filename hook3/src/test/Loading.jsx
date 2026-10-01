import { useEffect } from "react";

const Loading = () => {

  useEffect(() => {
    console.log("페이지 로딩")
  }, [])

  return(
    <div>
      <h2>콘솔을 확인해 주세요</h2>
    </div>
  )
}

export default Loading;