
// 배열 생성(길이가 4인 배열)
let numbers = new Array(4);
// 배열에 값 할당(인덱스)
// numbers[0] = 10;
// numbers[1] = 20;
// numbers[2] = 30;
// numbers[3] = 40;

// for문을 이용하여 배열에 값 할당
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = (i + 1) * 10;
}

// 배열 출력
console.log("배열 요소:", numbers);

// demo 요소 선택
let demo = document.getElementById("demo");

// forEach() 메서드를 이용하여 출력
numbers.forEach((number, index) => {
  demo.innerHTML += number + "<br>";
});



