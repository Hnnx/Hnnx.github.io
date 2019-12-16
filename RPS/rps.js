console.log("handshake"); 


let result = document.getElementById("result");

let getRDM = () => {
    result.innerHTML = Math.floor((Math.random() * 9 + 1));
}

setInterval(getRDM, 700);



