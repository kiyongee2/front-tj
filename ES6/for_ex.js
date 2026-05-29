// 1부터 5까지 출력하는 for 반복문
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

  // 1부터 10까지의 홀수만 출력
  for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
 
  // 1부터 10까지의 합을 계산하는 for 반복문
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log("1부터 10까지의 합:", sum);
  console.log("================================");

  // 배열을 순회하는 for 반복문
  const fruits = ["apple", "banana", "cherry"];
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }

  // for...of 반복문을 사용하여 배열 순회
  for (const fruit of fruits) {
    console.log(fruit);
  }

  // for...in 반복문을 사용하여 배열 순회 (인덱스 출력)
  for (const index in fruits) {
    console.log(`Index: ${index}, Value: ${fruits[index]}`);
  }

  // for...in 반복문을 사용하여 객체 순회
  const person = { name: "Alice", age: 30, city: "New York" };
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }