
function displayA() {
    console.log("A");
}

function displayB(callback) {
    // console.log("B");
    setTimeout(() => {
        console.log("B");
        if (callback) callback();
    }, 2000);
}

function displayC() {
    console.log("C");
}

displayA();
displayB(displayC);