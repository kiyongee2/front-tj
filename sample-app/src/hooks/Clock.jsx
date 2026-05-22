import { useEffect, useState } from "react";

export default function Clock(){
  const [time, setTime] = useState(new Date().toLocaleTimeString());

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