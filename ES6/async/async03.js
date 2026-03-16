/*
  비동기 처리 - Promise 방식
  Promise를 사용하여 명확한 순서로 비동기 작업 처리
  'A' -> 'B' -> 'C' 순서로 출력됨
*/

function displayA() {
  return Promise.resolve().then(() => {
    console.log('A');
  });
}

function displayB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('B');
      resolve();
    }, 2000);
  });
}

function displayC() {
  return Promise.resolve().then(() => {
    console.log('C');
  });
}

displayA()
  .then(() => displayB())
  .then(() => displayC());
