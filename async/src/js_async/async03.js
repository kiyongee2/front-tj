
function displayA() {
    console.log("A");
}

function displayB(callback) {
   return new Promise((resolve) => {
        setTimeout(() => {
            console.log("B");
            resolve();
        }, 2000);
    });

}

/*
function displayC() {
    console.log("C");
}

displayA();
displayB().then(displayC);*/

async function displayC() { // async 함수로 변경
    console.log("C");
}

async function runSequence() { // async 함수로 변경
    displayA();
    await displayB();  // displayB가 완료될 때까지 기다림
    await displayC();  // displayC가 완료될 때까지 기다림
}

runSequence(); // A -> B -> C 순서로 출력됨

