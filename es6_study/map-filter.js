// 배열의 각 요소를 2배로 만들기
const arr = [1, 2, 3];

const newArr = arr.map(x => x * 2);
console.log(newArr);

// 사용자 객체 배열에서 특정 속성만 추출하기
const users = [
  {name: 'Jerry', age: 25},
  {name: 'Linda', age: 30},
  {name: 'Tom', age: 35}
]

// 이름만 추출하기
const names = users.map(u => u.name)
console.log(names);

// filter 함수
// 나이가 30세 이상인 사용자들
const adults = users.filter(u => u.age >= 30);
console.log(adults);

// map과 filter를 함께 사용
// 나이가 30세 이상인 사용자들의 이름만 추출
const adultNames = users.filter(u => u.age >= 30).map(u => u.name);
console.log(adultNames);

// 짝수만 골라내기
const nums = [1, 2, 3, 4, 5, 6];

const evens = nums.filter(x => x % 2 === 0);
console.log(evens);


