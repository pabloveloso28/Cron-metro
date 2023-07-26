const minutesjs = document.querySelector("#minutes")
const secoundsjs = document.querySelector("#secounds")
const millisecondsjs = document.querySelector("#milliseconds")
const startjs = document.querySelector("#start")
const stopjs = document.querySelector("#stop")
const resumejs = document.querySelector("#resume")
const resetjs = document.querySelector("#reset")

let interval;
let minutes = 0;
let secounds = 0;
let milliseconds = 0;
let isStop = false;


startjs.addEventListener("click", startTimer)
stopjs.addEventListener("click" ,stopTime )
resumejs.addEventListener("click" , resumeTime)
resetjs.addEventListener("click" , resetTime)

function startTimer() {

    interval = setInterval(() => {

        if (!isStop) {
            milliseconds += 10;

            if (milliseconds === 1000) {
                secounds++;
                milliseconds = 0;
            }

            if (secounds === 60) {
                minutes++;
                secounds = 0;
            }

            minutesjs.textContent = formatTime(minutes);
            secoundsjs.textContent = formatTime(secounds);
            millisecondsjs.textContent = formatmillisecounds(milliseconds) ;
        }

    }, 10);
}

function stopTime(){
    isStop = true
}

function resumeTime(){
    isStop = false
}

function resetTime(){
    isStop = false
    clearInterval(interval);
    minutes = 0;
    secounds = 0;
    milliseconds = 0;

     minutesjs.textContent = "00";
     secoundsjs.textContent = "00";
     millisecondsjs.textContent = "000" ;
 }
    



function formatTime(time) {
    return time < 10 ? `0${time}` : time;
    
}



function formatmillisecounds(time){
    return time < 100 ? `${time}` .padStart(3 , "0") : time;
}

