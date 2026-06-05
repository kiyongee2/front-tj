import { useEffect, useState } from "react";

export default function Clock(){
  // time 상태 관리
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  //처음 랜더링될때 타이머 설정
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000)
    console.log("렌더링...");
    
  },[])

  return(
    <div>
      <h2>디지털 시계</h2>
      <h3>현재 시간: {time}</h3>
    </div>
  )
}

