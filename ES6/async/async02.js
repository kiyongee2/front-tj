
/*
  비동기 처리 - 프로그램에서 처리해야 할 기능들을 순차적으로 처리하는 것이 아니라, 동시에 처리하는 방식
   원하는 순서에 맞게 처리하기 위해 콜백함수를 사용
  'A' -> 'B' -> 'C' 순서로 출력됨
*/

function displayA() {
  console.log('A');
}

function displayB(callBack) {
  setTimeout(() => {
    console.log('B');
    callBack();
  }, 2000);
}

function displayC() {
  console.log('C');
}

displayA();
displayB(displayC);