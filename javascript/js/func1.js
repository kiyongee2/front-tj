
let result = document.getElementById("result");
let display = document.getElementById("display");

// void형 함수 정의
function greet(name) {
  result.innerHTML = `안녕하세요, ${name}님!<br>`;
}

function gugudan(dan) {
  display.innerHTML = `<h3>${dan}단</h3>`;
  for(let i = 1; i <= 9; i++) {
    display.innerHTML += `${dan} x ${i} = ${dan * i}<br>`;
  }
}

// void형 함수 호출
greet("김선화");
greet("장그래");

