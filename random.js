import { codersList } from "./data.js";

//Para activar el buttom de html en js
let btMatar = document.querySelector(".btMatar") 

btMatar.addEventListener("click", () =>{
  let random = Math.floor(Math.random() * codersList.length)
  console.log(codersList[random].name)

  //1.hoja CSS crear un classe para cambiar la opacidad
})

/* 
//Funcion para seleccionar aleatoriamente un elemento  
let random = Math.floor(Math.random() * codersList.length)
  console.log(codersList[random].name)
 */
  