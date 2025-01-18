
//initialisierung
let count = 0; 

//HTML span ziehen
const counter = document.getElementById("counterValue");

//zählFunction

function countIncrement(){
    count = Number(localStorage.getItem("count"));
    counter.innerText = count;
    localStorage.setItem("count", count +1);

}

//eventlistener
window.onload = countIncrement;


const reset = document.getElementById("reset");
reset.addEventListener("click", () => { 
    localStorage.setItem("count", 0);
    countIncrement();


});


