import { codersList } from "./data.js";

let btMatar = document.querySelector(".btMatar")

function oscurecerRandom(array) {
        btMatar.addEventListener("click", () => {
        let random = Math.floor(Math.random() * array.length)
        let randomId = array[random].id;

        let contenedores = document.querySelectorAll(".ctCoders")

        let coderPaint = contenedores[randomId]
        paintCoder(coderPaint)
    
        array.map(item => {
            if (item.id == randomId) {
            let indice = array.indexOf(item);
            console.log(item);
            array.splice(indice, 1);
            console.log(array);

            contenedores[randomId].classList.add('ctCodersSelected');
            };
        });
    }); 
};
      
oscurecerRandom(codersList)

function paintCoder(coderPaint){
    let contenedores = document.querySelector(".ctFichas")
    let stageContainer = coderPaint.querySelector(".stage")
    let freakCoder = coderPaint.querySelector(".freakCoder")
    let freakName = coderPaint.querySelector("h2")

    contenedores.classList.add("ctFichasBig")
    stageContainer.classList.add("stageBig")
    freakCoder.classList.add("freakCoderBig")
    freakName.classList.add("deadName")
    
    console.log(coderPaint);
    }

