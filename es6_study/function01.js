
let add = function(a, b){
  return a + b;
}

let addition = add(10, 20);
console.log(addition);

let add2 = (a, b) => {
  return a + b;
}
console.log(add2(10, 20));

let add3 = (a, b) => a + b 
console.log(add3(10, 20));

let square = (x) => {
  return x * x;
}

let square2 = x => x * x;
console.log(square(5));
console.log(square2(5));

let message = () => console.log("Good, Luck!");
message(); //호출

const sum = (a, b) => `합계: ${a + b}`;
console.log(sum(3, 7));




