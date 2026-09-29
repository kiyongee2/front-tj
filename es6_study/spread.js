
let arr1 = [1, 2, 3];
let arr2 = [4, 5];

let newArr = [...arr1, ...arr2];
console.log(newArr);

let obj1 = {
  product: '무선키보드',
  price: 25000
}

let obj2 = {spec: "K200 무선키보드 블랙"}

let obj3 = {...obj1, ...obj2}
console.log(obj3);

