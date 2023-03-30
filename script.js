setInterval(moveClock, 1000)


const pontHor = document.querySelector("[data-pont-hora]")
const pontMin = document.querySelector("[data-pont-min]")
const pontSeg = document.querySelector("[data-pont-seg]")

const currentDate = new Date();
const secondsRatio = currentDate.getSeconds() / 60 ;
const minutesRatio = currentDate.getMinutes() / 60 ;
const hourRatio = currentDate.getHours() / 12;

function setRotation(element, ratio){

    element.style.setProperty("--rotation", ratio * 360 );
}

function setClock(){
    setRotation(pontHor, hourRatio);
    setRotation(pontMin, minutesRatio);
    setRotation(pontSeg, secondsRatio);
}

setClock();

let movHor = hourRatio * 360;
let movMin = minutesRatio * 360;
let movSeg = secondsRatio * 360;

function grausSeg(){
    while(true){
        movSeg = movSeg + 6;
        return movSeg;
    }
}

function grausMin(){
    while(true){
        movMin = movMin + 6;
        return movMin;
    }
}

function grausHor(){
    while(true){
        movHor = movHor + 30;
        return movHor;
    }
}

hourSafe = false;


function moveClock(){
    pontSeg.style.setProperty("--rotation", grausSeg());
    if (movSeg % 360 === 0){
        pontMin.style.setProperty("--rotation", grausMin());
    }
    if ((movMin + 6) % 360 === 0){
        hourSafe = true;
    }
    if(movMin % 360 === 0 && hourSafe === true){
        pontHor.style.setProperty("--rotation", grausHor());
        hourSafe = false;
    }
}

