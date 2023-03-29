setInterval(moveClock, 1000)

const pontHora = document.querySelector("[data-pont-hora]")
const pontMin = document.querySelector("[data-pont-min]")
const pontSeg = document.querySelector("[data-pont-seg]")

function setClock(){

    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60 ;
    const minutesRatio = currentDate.getMinutes() / 60 ;
    const hourRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(pontHora, hourRatio);
    setRotation(pontMin, minutesRatio);
    setRotation(pontSeg, secondsRatio);
}

function setRotation(element, ratio){

    element.style.setProperty("--rotation", ratio * 360 );
}

function moveClock(){
    
}

function setMove(element){
    
    element.style.setProperty("--rotation", ratio * 360 );
}

setClock();