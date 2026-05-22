//spread 연산자

//배열에서 사용
let arr1 = [1, 2, 3];
let arr2 = [4, 5];

//배열을 펼쳐서 새로운 배열을 만든다.
let newArr = [...arr1, ...arr2];
console.log(newArr); //[1, 2, 3, 4, 5]

//객체에서 사용
let obj1 = { product: '무선마우스', price: 27000 };
let obj2 = { spec: 'M200 무선마우스 그레이' };

//객체를 펼쳐서 새로운 객체를 만든다.
let combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); //{ product: '무선마우스', price: 27000, spec: 'M200 무선마우스 그레이' }

