
// 제곱수 계산
let square = function(x){
  return x * x
}

//절대값 계산
let myAbs = function(x){
  if (x < 0) {
    return -x;
  } else {
    return x;
  }
}

// module.exports = square;  //1개만 내보낼때
module.exports = { square, myAbs }; //2개 이상 내보낼때

