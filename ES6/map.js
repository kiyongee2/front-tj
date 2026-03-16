
/* 
map() 함수
배열의 각 요소에 대해 주어진 함수를 호출한 결과를 모아 
새로운 배열을 반환하는 함수
*/

const arr = [1,2,3];

const newArr = arr.map(x => x * 2);
console.log(newArr); // [2, 4, 6]

const users = [
  { name: 'Jerry', age: 25 },
  { name: 'Linda', age: 30 },
  { name: 'Tom', age: 35 }
];

const names = users.map(user => user.name);
console.log(names); // ['Jerry', 'Linda', 'Tom']

const ages = users.map(user => user.age);
console.log(ages); // [25, 30, 35]

