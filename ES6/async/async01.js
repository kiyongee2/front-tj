
/*싱글 스레드이므로 동기적으로 실행됨
  displayA() -> displayB() -> displayC() 순서로 실행됨
  displayB()는 2초 후에 'B'를 출력하는 비동기 처리이므로, 
  displayC()가 먼저 실행되어 'C'가 출력됨. 
  'A' -> 'C' -> 'B' 순서로 출력됨*/

function displayA() {
  console.log('A');
}

function displayB() {
  // console.log('B');
  // 2초 후에 'B'를 출력하는 비동기 처리
  setTimeout(() => {
    console.log('B');
  }, 2000);
}

function displayC() {
  console.log('C');
}

displayA();
displayB();
displayC();
  
