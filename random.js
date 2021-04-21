import { codersList } from "./data.js";

let btMatar= document.querySelector(".btMatar")

function oscurecerRandom(array){
  btMatar.addEventListener("click", () =>{
    let random = Math.floor(Math.random()* array.length)
    let randomId = array[random].id

    let codersPrinted = "";
    array.forEach(item => {
        if(item.id == randomId){
        codersPrinted += `<div class="ctCoders" data-set="${item.id}"><h2>${item.name}</h2>
    <img src="${item.img}" alt="freakCoder" class="freakCoder">
    <img src="img/telonCoders.jpg" alt="stage" class="stage"></div>`
      }
    });
    document.querySelector(".ctFichas").innerHTML = codersPrinted;
  })
}

oscurecerRandom(codersList);













/* 
//Funcion para seleccionar aleatoriamente un elemento  
let random = Math.floor(Math.random() * codersList.length)
  console.log(codersList[random].name)
 */
  