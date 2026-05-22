
function myAbs(x) {
  if (x < 0) {
    return -x;
  } else {
    return x;
  }
}

function square(x) {
  return x * x;
}

//export { myAbs }; //myAbs 함수만 내보내기

export { myAbs, square }; //myAbs와 square 함수를 모두 내보내기

