var startBtn = document.getElementById("start-btn")
var startElement = document.querySelector('#first-para');
// startBtn.addEventListener("click", setFunction);
var mins = 5;
var sec = 60;
var mins1 = 5;
var sec1 = 60;
mins = mins - 1;
mins1 = mins1 - 1;
var t;
var t1;
isTime = true;
function setFunction() {
    t = setInterval(startFunction, 1000);
    isTime=false;
}
function startFunction() {
    // swapBtn.disabled = true ;
    startBtn.disabled = true ;
    if (mins >= 0) {
        sec--
        startElement.innerHTML = mins + ":" + sec;
        console.log(startElement);
        if (sec == 0) {
            mins--
            sec = 60;
        }
        if (mins == 0 && sec == 0) {
            clearInterval(t);
        }
    }
    
}


var swapBtn = document.getElementById("swap-btn");
var swapElement = document.querySelector('#sec-para');
// swapBtn.addEventListener("click", swapFunction)
function swapFunction() {
    if(isTime == false){
        clearInterval(t);
    t1 = setInterval(swapRunFunction, 1000);
    isTime = true ;
    }
    else{
        clearInterval(t1);
        setFunction();
    }
}
function swapRunFunction() {
    if (mins1 >= 0) {
        sec1--
        swapElement.innerHTML = mins1 + ":" + sec1;
        console.log(swapElement);
        if (sec1 == 0) {
            mins1--
            sec1 = 60;
        }
        if (mins1 == 0 && sec1 == 0) {
            clearInterval(t1);
        }
    }
}


var resetElement = document.getElementById("reset-btn");
// resetElement.addEventListener("click", resetBtnFunction);
function resetBtnFunction() {
    startBtn.disabled = false ;
    clearInterval(t);
    clearInterval(t1);
    startElement.textContent = "5:00";
    swapElement.textContent = "5:00";
}