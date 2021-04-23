import { codersList } from "./data.js";

<<<<<<< HEAD
//Funcion para seleccionar aleatoriamente un elemento  
//let random = Math.floor(Math.random() * codersList.length)
//console.log(codersList[random].name)






=======
  
<<<<<<< HEAD
 
 
=======
>>>>>>> bcbc3a2216673e87ec297e353ff19a0685e3b6eb
>>>>>>> db2fa49e31a76f6f3023dbd009f874d150f9d7d1
//Funcion para traer las imagenes y nombres 
function printCoders(array) {
    let codersPrinted = "";
    array.forEach(item => {
        codersPrinted += `<div class="ctCoders" data-set="${item.id}"><h2>${item.name}</h2>
    <img src="${item.img}" alt="freakCoder" class="freakCoder">
    <img src="img/telonCoders.jpg" alt="stage" class="stage"></div>`
    });

    document.querySelector(".ctFichas").innerHTML = codersPrinted;
};

<<<<<<< HEAD
printCoders(codersList);
=======
printCoders(codersList);

export {printCoders}

<<<<<<< HEAD

=======
>>>>>>> bcbc3a2216673e87ec297e353ff19a0685e3b6eb
>>>>>>> db2fa49e31a76f6f3023dbd009f874d150f9d7d1
