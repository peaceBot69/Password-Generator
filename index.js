let result = "";
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(),./<>?";

let randomPass = document.getElementById("random-pass");
//We will make a function that will give us the pass of length given by user
let randomPassGen = false;

function generatePass() {
    for(let i=0; i<10; i++) {
        let randomIndex = Math.floor(Math.random()* characters.length);
        result += characters[randomIndex];
    }
    randomPassGen = true;
    randomPass.textContent = result;

    if(randomPassGen) {
        result = "";
    }
}

