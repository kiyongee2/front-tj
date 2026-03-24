
import React, { useState, useEffect } from "react";

export default function Clock() {
  // time 상태와 setTime 함수를 useState 훅을 사용하여 정의
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // useEffect 훅을 사용하여 컴포넌트가 처음 렌더링될 때 타이머를 설정
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    console.log("렌더링..");
    
    // 컴포넌트가 언마운트될 때 타이머를 정리
    return () => clearInterval(timer);
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행

  return (
    <div>
      <h2>디지털 시계</h2>
      <h3>현재 시간: {time}</h3>
    </div>
  );
}

