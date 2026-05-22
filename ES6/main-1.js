
//CommonJS 모듈 가져오기
// let square = require("./lib/basicModule.js")
let { square, myAbs } = require("./lib/basicModule.js")

console.log(square(4)); //16
console.log(myAbs(-5)); //5
console.log(myAbs(5)); //5

