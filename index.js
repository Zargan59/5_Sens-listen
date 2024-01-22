const checkboxs = document.querySelectorAll(".audioContent input");
const winCondition = document.querySelector("#winMessage")
// winCondition.innerHTML = ""

const oil = document.getElementById("audioOil")
const paquet =document.getElementById("audioPaquet")
const alu = document.getElementById("audioAlu")

oil.volume = 0.5
paquet.volume = 0.5
alu.volume = 0.5

DontPlaySound()
playSoundChecked()

document.addEventListener("keypress", (e)=>{
    if(e.key == " "){
        playAllSound() 
    }
})
const picturesSelected = new Set
const soundSelected = new Set


const buttonPlay = document.getElementById("play")
const buttonReset = document.getElementById("resetSound")
const buttonRestart = document.getElementById("reset")
const buttonValid = document.getElementById("valid")
const pictures = document.querySelectorAll(".picture")
let numberSoundSelected = 0
let numberPictureSelected = 0


pictures.forEach(element => {
    element.addEventListener("click", ()=>{
        verifyPictureSelected(element)
    })
});
buttonPlay.addEventListener("click", playAllSound)
buttonReset.addEventListener("click", resetAllSound)
buttonValid.addEventListener("click", findSound)
buttonRestart.addEventListener("click", Restart)

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


    checkboxs.forEach(element => {
        element.addEventListener("change",()=>{
            if(element.checked == true){
                element.nextElementSibling.classList.remove("playing")
                soundSelected.add(element.parentElement.id)
                element.nextElementSibling.classList.add("Selected")
                numberSoundSelected ++
            }

            else{
                element.nextElementSibling.classList.remove("Selected")
                numberSoundSelected --
                soundSelected.delete(element.parentElement.id)
            }

        })
    });
}

function resetAllSound(){
audios.forEach(element => {
    element.currentTime = 0
});
}

function findSound(){
    if(numberSoundSelected === numberPictureSelected){
        //Lance la fonction qui vérifie les réponses
        VerifyPictureNSound()
    }
    else{
        winCondition.innerHTML = `Veuillez sélectionnez ${numberSoundSelected} image (s)`
    }
}
function verifyPictureSelected(element){
    //Si l'élément est déjà select alors tu le déselect
    if(element.classList[3]== "pictureSelected"){
        element.classList.remove("pictureSelected")
        picturesSelected.delete(element.classList[2])
        numberPictureSelected --
    }
    else{
        element.classList.add("pictureSelected")
        picturesSelected.add(element.classList[2])
        numberPictureSelected ++
    }
}

function VerifyPictureNSound(){
let checkPicture = Array.from(picturesSelected)
let checkSound = Array.from(soundSelected)
let test = 0


//Pour chaque image que j'ai selectionné
checkPicture.forEach(element=>{
    //Si l'élémént est présent dans le checkSound alors tu renvoie test+1
    checkSound.filter(sound=> {
       if(sound ==element){
        test++
       }
    })
})
//Si test == à checkPicture.length alors c'est win
if(test !== checkPicture.length){
    console.log("perdu");
    winCondition.innerHTML = "Écoutez plus attentivement !"
}
else{
    console.log("gagné");
    winCondition.innerHTML = "Vous avez l'ouïe fine ! Félicitations !!"
}

}
function Restart(){
    resetAllSound()

    checkboxs.forEach(element => {
        element.checked = false
    });

    const allPictures = document.querySelectorAll(".picture");
    console.log(allPictures);
    allPictures.forEach(element => {
        element.classList.remove("pictureSelected")
    });
    winCondition.innerHTML =""
}