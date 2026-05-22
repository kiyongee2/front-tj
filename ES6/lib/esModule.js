
let square = function(x) {
  return x * x;
}

let myAbs = function(x) {
  if (x < 0) {
    return -x;
  } else {
    return x;
  }
}

// export { square }; //square 함수만 내보내기

export { square, myAbs }; //2개의 함수를 내보내기

