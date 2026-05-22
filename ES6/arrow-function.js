
//함수 선언
let add = function (a, b) {
  return a + b;
}

console.log(add(10, 20)); 

//화살표 함수
let add2 = (a, b) => {
  return a + b;
}

console.log(add2(10, 20));

//매개변수가 하나인 경우, 괄호 생략 가능
let square = x => {
  return x * x;
}

/*매개변수가 하나이고, 함수 본문이 한 줄인 경우, 
  중괄호와 return 생략 가능*/
let square2 = x => x * x;

console.log(square(5));
console.log(square2(5));

//매개 변수 없는 경우
let message = () => console.log('Good, Luck!');
message();

