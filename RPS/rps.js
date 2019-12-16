let result = document.getElementById("result");

let rdm = top => {
    result.innerHTML = Math.floor((Math.random() * top + 1));
}


let clickRandom = document.getElementById("placeholder");

function getRDM(top) {

    clickRandom.innerHTML = "Your random number is: " + Math.floor(Math.random() * top + 1);
}

let autoRandom = document.getElementById("autoPlaceholder");


function autoRDM(top) {
    autoRandom.innerHTML = "yr rdm is: " + Math.floor((Math.random() * top + 1));    
}

function rr() {
    let x = Math.floor((Math.random() * 20 + 1));
}

setInterval(rr, 200);





