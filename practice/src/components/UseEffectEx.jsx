import { useEffect } from "react"

export default function UseEffectEx(){

  useEffect(() => {
    console.log("페이지 로딩...");
  }, [])

  return(
    <div>
      <h2>UseEffect Test</h2>
    </div>
  )
}