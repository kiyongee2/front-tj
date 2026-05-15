
// 신호등 색상 판별 함수
const checkColor = () => {
  // 사용자로부터 신호등 색상 입력 받기
  let color = prompt("신호등 색상을 입력하세요 (red, yellow, green):");
  const result = document.getElementById("result");

  if(color == null){
    result.textContent = "입력이 취소되었습니다.";
  } else {
    color = color.trim(); // 입력값 양쪽 공백 제거
    if (color === "red") {
      result.textContent = "멈춤";
      result.style.color = "red"; // 빨간색으로 표시
    } else if (color === "yellow") {
      result.textContent = "준비";
      result.style.color = "orange"; // 주황색으로 표시
    } else if (color === "green") {
      result.textContent = "진행";
      result.style.color = "green"; // 초록색으로 표시
    } else {
      result.innerHTML = "알 수 없는 색상입니다.<br> \
        red, yellow, green 중 하나를 입력하세요.";
    }
  }
}

