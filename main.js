const happyButton = document.getElementById("happyButton")
const sadButton = document.getElementById("sadButton")
const happyCount = document.getElementById("happyCount")
const sadCount = document.getElementById("sadCount")
let userFeeling = document.getElementsByTagName("span")[0]
let happyClicks = JSON.parse(localStorage.getItem("happyCount"))
let sadClicks = JSON.parse(localStorage.getItem("sadCount"))
happyCount.textContent = happyClicks
sadCount.textContent = sadClicks


happyButton.addEventListener("click",function(e){
    
    e.preventDefault()
    happyClicks += 1
    happyCount.textContent = happyClicks
    JSON.stringify(localStorage.setItem("happyCount", happyClicks))
    happyOrSad()
})

sadButton.addEventListener("click",function(e){
    e.preventDefault()
    sadClicks += 1
    sadCount.textContent = sadClicks
    JSON.stringify(localStorage.setItem("sadCount", sadClicks))
    happyOrSad()
})

function happyOrSad(){
let savedHappyClicks = localStorage.getItem("happyCount")
let savedSadClicks = localStorage.getItem("sadCount")
if(savedSadClicks < savedHappyClicks ){
    userFeeling.textContent = "Happy!! Yayyyyyy"
}else if (savedHappyClicks === savedSadClicks){
    userFeeling.textContent = "OK"
}else if(savedSadClicks > savedHappyClicks){
    userFeeling.textContent = "sad. Hope you feel better soon!"
}
}


if(sadClicks < happyClicks ){
    userFeeling.textContent = "Hey Rock Star!"
}else if (happyClicks === sadClicks){
    userFeeling.textContent = "OK"
}else if(sadClicks > happyClicks){
    userFeeling.textContent = "Feeling Better?"
}


let timeToDecide = 10
function countDown(){

}
