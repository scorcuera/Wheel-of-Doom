import { codersList } from "./data.js";

let btMatar = document.querySelector(".btMatar")

function oscurecerRandom(array) {
    btMatar.addEventListener("click", () => {
        let random = Math.floor(Math.random() * array.length)
        let randomId = array[random].id;

        let contenedores = document.querySelectorAll(".ctCoders")
        let contenedorKilled = contenedores[randomId]
    
        console.log(contenedores[randomId])
        
        contenedorKilled.classList.add('ctCodersBig')
              
              
        array.map(item => {
            if (item.id == randomId) {
                let indice = array.indexOf(item)
                console.log(item);
                array.splice(indice, 1)
                console.log(array)

                contenedores[randomId].classList.add('ctCodersSelected');
                 
                }

            });
        });
    };

oscurecerRandom(codersList);

/* 
let ficha = document.getElementById("ctFichasBig");


  function mostrarKilledCoder() {
    console.log("ctFichasBig");
    ficha.style.display = "flex";
}; */

