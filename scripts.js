const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const btnIniciar = document.getElementById("btnIniciar")
const btnParar = document.getElementById("btnParar")
const btnRestaurar = document.getElementById("btnRestaurar")

let sec = 00
let min = 00
let hour = 00
let interval

btnIniciar.addEventListener("click",()=>{
    clearInterval(interval)
    interval = setInterval(play,1000)
})

btnParar.addEventListener("click",()=>{
    clearInterval(interval)
})

btnRestaurar.addEventListener("click",()=>{
    sec = 00
    min = 00
    hour = 00

    seconds.innerHTML = "00"
    minutes.innerHTML = "00"
    hours.innerHTML = "00"
})

const play = ()=>{
    sec++
    sec = (sec < 10?"0"+sec:sec)

    if(sec == 60){
        sec = "00"
        min++
        min = (min < 10?"0"+min:min)
        minutes.innerHTML = min

        if(min == 60){
            min = "00"
            hour++
            hour = (hour < 10?"0"+hour:hour)
            hours.innerHTML = hour
        }
    }

    seconds.innerHTML = sec
}