const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPasswordEl = document.getElementById("first-password-el")
let secondPasswordEl = document.getElementById("second-password-el")
let passwordArray = []
let passwordOne = ""
let passwordTwo = ""

function passwordGen() { 
     for (i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random()*characters.length) 
        passwordOne += characters[randomIndex]
        randomIndex = Math.floor(Math.random()*characters.length)
        passwordTwo += characters[randomIndex]
        }
    return passwordOne
    return passwordTwo
} 

function passwordSave() {
    passwordArray.push(passwordOne)
    passwordArray.push(passwordTwo)
    return passwordArray
}

function passwordRender() {
    passwordGen()
    passwordSave()
    firstPasswordEl.textContent = passwordArray[0]
    secondPasswordEl.textContent = passwordArray[1]
}
    

