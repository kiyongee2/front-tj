
// watch.js

// 시계 기능을 구현하는 코드
// display 요소 접근
let display = document.getElementById("display");

// 1초마다 현재 시간을 업데이트하는 함수
setInterval(() => {
  let now = new Date();
  let time = now.toLocaleTimeString(); // 현재 시간을 문자열로 변환
  display.innerHTML = time;
}, 1000);

