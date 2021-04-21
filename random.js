import { codersList } from "./data.js";


let btMatar = document.getElementById("btMatar");


btMatar.addEventListener('click', () => {
    codersList.forEach(item => {
        document.querySelector('.ctCoders').classList.add('ctCodersSelected');
    })

});




//Funcion para seleccionar aleatoriamente un elemento  
let random = Math.floor(Math.random() * codersList.length)
console.log(codersList[random].name)