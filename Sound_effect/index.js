DontPlaySound()
playSoundChecked()

document.addEventListener("keypress", playAllSound)

const audios =document.querySelectorAll(".sound");
let enterIsPressed = false

function playAllSound(e){
     if(e.keyCode == 32){
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
}

function DontPlaySound (){
    const checkboxs = document.querySelectorAll(".audioContent input");
    console.log("Je décoche tout");
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





        //Si le son est joué et que j'appuie sur la checkbox, je stop le son
        // console.log(element.nextElementSibling.className);
        // if(element.checked){
        //     console.log("Son joué et case coché");
        // }
        // if(element.checked == true){
        //    element.nextElementSibling.classList.remove("sound")
        //    console.log(element.closest(".sound"));
        // }
        // else{
        //     if(element.checked== false&& element.nextElementSibling.className == ""){
        //         element.nextElementSibling.classList.add("sound")
        //     }
           
        // }
    });
}