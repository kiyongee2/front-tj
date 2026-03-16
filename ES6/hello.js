// ES6 Hello World Example
const c = require('ansi-colors');

// console.log(c.green('Hello, World!'));

// hello 함수 정의
function hello(name) {
    console.log(`Hello, ${name}`);
    console.log(c.red(`Hello, ${name}!`));
}

// hello 함수 호출
hello('World');

 