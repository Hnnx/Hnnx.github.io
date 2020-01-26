//Random num on click
let myElement = document.getElementById("placeholder");

const getRDM = top => {   
    return Math.floor(Math.random() * top + 1);
}

const newRDM = () => {    
    console.log(Math.floor(Math.random() * 5 + 1))
}


let myButton = document.getElementById("rdmButton");

myButton.addEventListener("click", newRDM);


//prompt function
const getName = () => {

    let userName = prompt("ins name:");
    let defName = userName || "NoName";

    document.getElementById("name").innerHTML = "Hello " + defName + "!";
}

let buttonName = document.getElementById("listen");
buttonName.addEventListener("click", getName);


















//REWORK RANDOM