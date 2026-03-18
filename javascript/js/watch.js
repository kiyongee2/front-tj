
// watch.js

// 시계 기능을 구현하는 코드
// display 요소 접근
let display = document.getElementById("display");

setInterval(() => {
  let now = new Date();
  let time = now.toLocaleTimeString();
  display.innerHTML = time;
}, 1000);

