
function displayA() {
    console.log("A");
}

function displayB(callback) {
    // console.log("B")
    setTimeout(() => {
        console.log("B");
        if (callback) callback();  // callback이 존재하면 실행
    }, 2000);
}

function displayC() {
    console.log("C");
}

displayA();  // displayB();  // 비동기 함수이므로, displayC보다 먼저 실행됨
displayB(displayC);  