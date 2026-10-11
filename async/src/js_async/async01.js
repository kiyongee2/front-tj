
function displayA() {
    console.log("A");
}

function displayB() {
    //console.log("B");
    setTimeout(() => {
        console.log("B");
    }, 2000);
}

function displayC() {
    console.log("C");
}

// A -> C -> B 순서로 출력됨
displayA();
displayB();
displayC();