import { useEffect } from "react";

function Page() {
  useEffect(() => {
    console.log("페이지 로딩…");
  }, []); // 빈 배열 → 처음 한 번만 실행

  return <h2>페이지</h2>;
}

export default Page