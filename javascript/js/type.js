//1. 숫자형
let age = 25; // 정수
let temperature = 24.5 ; // 실수

console.log("나이:", age);
// console.log("나이:" + age + "세");
console.log(typeof(age)); // number
console.log("온도:", temperature);
console.log(typeof(temperature)); // number

//2. 문자열형
let player = "이정후";
let city = '샌프란시스코';

console.log("선수 이름:", player);
console.log(typeof(player)); // string
console.log("도시 이름:", city);
console.log(typeof(city)); // string

//3. 불린형
let isRaining = true;
let isSunny = false;

console.log("비가 오는가?", isRaining);
console.log(typeof(isRaining)); // boolean
console.log("맑은가?", isSunny);
console.log(typeof(isSunny)); // boolean

//4. undefined
let score; // 변수 선언만 하고 초기화하지 않음
console.log("점수:", score);
console.log(typeof(score)); // undefined

//5. 배열형
let fruits = ["사과", "바나나", "오렌지"];
console.log("과일 목록:", fruits);
console.log(typeof(fruits)); // object (배열도 객체의 한 종류)

//6. 객체형
let person = {
  name: "우영우",
  age: 30,
  city: "서울"
};
console.log("사람 정보:", person);
console.log(typeof(person)); // object
console.log("이름:", person.name);
console.log("나이:", person.age);
console.log("도시:", person.city);