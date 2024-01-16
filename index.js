DontPlaySound()
playSoundChecked()

document.addEventListener("keypress", (e)=>{
    if(e.key == " "){
        playAllSound() 
    }
})
const buttonPlay = document.getElementById("play")
const buttonReset = document.getElementById("reset")

buttonPlay.addEventListener("click", playAllSound)
buttonReset.addEventListener("click", resetAllSound)

const audios = document.querySelectorAll(".sound");
let enterIsPressed = false

function playAllSound(){
        if(enterIsPressed === false){
            audios.forEach(element => {
                if(element.className == "sound Selected"){
                    element.classList.add("playing")
                    element.play()
                }
            });
            enterIsPressed = true
        }
        else{
            audios.forEach(element => {
                element.pause()
                element.classList.remove("playing")
            });
            enterIsPressed = false
            
        }
}

function DontPlaySound (){
    const checkboxs = document.querySelectorAll(".audioContent input");
    checkboxs.forEach(element => {
        element.checked = false
    });
}

function playSoundChecked(){
    const checkboxs = document.querySelectorAll(".audioContent input");


    checkboxs.forEach(element => {
        element.addEventListener("change",()=>{
            if(element.checked == true){
                // element.nextElementSibling.pause()
                element.nextElementSibling.classList.remove("playing")
                element.nextElementSibling.classList.add("Selected")
            }

            else{
                element.nextElementSibling.classList.remove("Selected")
            }
        })
    });
}

function resetAllSound(){
audios.forEach(element => {
    element.currentTime = 0
});
}