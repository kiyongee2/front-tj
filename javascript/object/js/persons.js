
// 객체 배열
const persons = [
  { 
    name: '이정후', 
    age: 27,
    sport: '야구',
    play: function() {
      console.log(`${this.name}이(가) ${this.sport}을(를) 합니다.`);
    }
  },
  { 
    name: '최민정', 
    age: 27,
    sport: '스피드 스케이팅',
    play: function() {
      console.log(`${this.name}이(가) ${this.sport}을(를) 합니다.`);
    }
  },
  { 
    name: '이강인', 
    age: 25,
    sport: '축구',
    play: function() {
      console.log(`${this.name}이(가) ${this.sport}을(를) 합니다.`);
    }
  }
];

// 객체 배열 조회
const person = persons[2]; // 세 번째 객체 조회
const demo = document.getElementById('demo');

// HTML 요소에 정보 출력
demo.innerHTML = `
  <h3>${person.name}</h3> 
  <p>나이: ${person.age}</p>
  <p>스포츠: ${person.sport}</p>
`; 

demo.innerHTML += "================================";

// 객체 배열 순회
/*for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    demo.innerHTML += `
    <h3>${person.name}</h3> 
    <p>나이: ${person.age}</p>
    <p>스포츠: ${person.sport}</p>
  `; 
}*/

// forEach 메서드 사용
persons.forEach(person => {
    demo.innerHTML += `
    <h3>${person.name}</h3>
    <p>나이: ${person.age}</p>
    <p>스포츠: ${person.sport}</p>
  `; 
});

