
//구조 분해 할당

//배열 구조 분해 할당
let arr = [1, 2];
let [a, b] = arr;

console.log(`a: ${a}`);
console.log(`b: ${b}`);


//객체 구조 분해 할당
let product = { 
  name: '무선마우스', 
  price: 27000 
};

let { name, price } = product;
console.log(`제품명: ${name}`);
console.log(`가격: ${price}`);

