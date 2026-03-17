/*
  비동기 처리 - async/await 방식
  async/await를 사용하여 더 깔끔하게 비동기 작업 처리
  Promise를 명시적으로 사용하지 않음
  'A' -> 'B' -> 'C' 순서로 출력됨
*/

async function displayA() {
  console.log('A');
}

async function displayB() {
  // Promise 객체를 반환하여 비동기 작업 처리
  return new Promise((resolve) => { 
    setTimeout(() => {
      console.log('B');
      resolve();
    }, 2000);
  });
}

async function displayC() {
  console.log('C');
}

// async/await를 사용하여 순차적으로 실행
async function runSequence() {
  await displayA();
  await displayB();
  await displayC();
}

runSequence(); // runSequence() 함수를 호출하여 실행

