
const arr = [1, 2, 3];

const newArr = arr.map(x => x * 2);
console.log(newArr);

const users = [
  {name: 'Jerry', age: 25},
  {name: 'Linda', age: 30},
  {name: 'Tom', age: 35}
]

const names = users.map(u => u.name)
console.log(names);
