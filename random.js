import { codersList } from "./data.js";

let btMatar = document.querySelector(".btMatar")


function oscurecerRandom(array) {
    btMatar.addEventListener("click", () => {
        let random = Math.floor(Math.random() * array.length)
        let randomId = array[random].id;

        let contenedores = document.querySelectorAll(".ctCoders")
        let coderToPaint = contenedores[randomId]
        paintCoder(coderToPaint)
        array.map(item => {
            if (item.id == randomId) {
                let indice = array.indexOf(item)
                console.log(item);
                array.splice(indice, 1)
                console.log(array)

                contenedores[randomId].classList.add('ctCodersSelected');
                /* contenedores[randomId].classList.add('ctCodersBig', 'stageBig'); */

            };
        });
    });
};


oscurecerRandom(codersList)

function paintCoder(coderToPaint){
    let bigContainer = document.querySelector(".ctFichas")
    let stageContainer = coderToPaint.querySelector(".stage")
    let freakCoder = coderToPaint.querySelector(".freakCoder")
    let freakName = coderToPaint.querySelector("h2")
    let barril = coderToPaint.querySelector(".barril")
    bigContainer.classList.add("ctFichasBig")
    coderToPaint.classList.add("ctCodersBig")
    stageContainer.classList.add("stageBig")
    freakCoder.classList.add("freakCoderBig")
    freakName.classList.add("deadName")
    barril.classList.add("barrilActivated")
    console.log(coderToPaint);
}