
let result = document.getElementById("result");

// 절대값 계산 함수(익명 함수)
/*let myAbs = function(x) {
  if (x < 0) {
    return -x; // 음수인 경우 양수로 변환하여 반환
  } else {
    return x; // 양수인 경우 그대로 반환
  }
}*/

// 절대값 계산 함수(화살표 함수)
let myAbs = (x) => {
  if (x < 0) {
    return -x; // 음수인 경우 양수로 변환하여 반환
  } else {
    return x; // 양수인 경우 그대로 반환
  }
}

let display = document.getElementById("display");

// 절대값 계산 함수 호출
result.innerHTML = "myAbs(-5) = " + myAbs(-5) + "<br>"; // 5
result.innerHTML += "myAbs(3) = " + myAbs(3) + "<br>"; // 3

// 메시지 출력(익명 함수)
/*let message = function() {
  return display.innerHTML = "Good Luck!";
}*/

// 메시지 출력(화살표 함수)
let message = () => display.innerHTML = "Good Luck!";

