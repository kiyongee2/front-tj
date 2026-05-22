//구조 분해 할당

//배열 구조 분해 할당
const arr = [1, 2];
console.log(arr[0]); //1
console.log(arr[1]); //2

const [a, b] = arr; 
console.log(a); //1
console.log(b); //2

console.log(`a= ${a}`); //a: 1
console.log(`b= ${b}`); //b: 2

//객체 구조 분해 할당
const product = { 
  name: '무선마우스', 
  price: 27000 
};

const { name, price } = product;
console.log(`제품명: ${name}`);
console.log(`가격: ${price}`);


