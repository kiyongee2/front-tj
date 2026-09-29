// 구조 분해 할당 - 배열
const arr = [1, 2];
console.log(arr[0]);

const [a, b] = arr;
console.log(`a = ${a}`);

// 객체
const product = {
  name: "무선마우스",
  price: 27000
}

console.log(product.name);

const {name, price} = product;
console.log(`가격: ${price}`);


