import { codersList } from "./data.js";

//Funcion para seleccionar aleatoriamente un elemento  
let random = Math.floor(Math.random() * codersList.length)
  console.log(codersList[random].name)



  
 
 
//Funcion para traer las imagenes y nombres 
function printCoders(array) {
    let codersPrinted = "";
    array.forEach(item => {
        codersPrinted += `<div class="ctCoders"><h2>${item.name}</h2>
    <img src="${item.img}" alt="freakCoder" class="freakCoder">
    <img src="img/telonCoders.jpg" alt="stage" class="stage"></div>`
    });

    document.querySelector(".ctFichas").innerHTML = codersPrinted;
};

printCoders(codersList);



