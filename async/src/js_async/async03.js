
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

async function displayC() {
    console.log("C");
}

async function runSequence() {
    displayA();
    await displayB();
    await displayC();
}

runSequence();