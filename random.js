import { codersList } from "./data.js";


//Funcion para selecionar aleatoriamente el coder a morir

        let btMatar = document.querySelector(".btMatar")

        function oscurecerRandom(array) {
        btMatar.addEventListener("click", () => {
        let random = Math.floor(Math.random() * array.length)
        let randomId = array[random].id;

        let contenedores = document.querySelectorAll(".ctCoders")
       /*  console.log(contenedores[randomId]) */

        /* let contenedorKilled = contenedores[randomId] 
        contenedorKilled.classList.add('ctFichasBig') */

   
//Funcion para eliminar exactamente el coder selecionado manteniendo el indice de los elementos

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

 //Funcion para cambiar de pantalla el coder muerto y Regresar al juego

     /*   let ficha = document.getElementById("ctFichasBig");

        function mostrarKilledCoder() {
            console.log("");
            ficha.style.display = "flex";
         }
        
         function regresar() {
            ficha.style.display = "none";
        }
        }   */ 



/* mostrarKilledCoder();
regresar(); */
