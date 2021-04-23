import { codersList } from "./data.js";

  
<<<<<<< HEAD
 
 
=======
>>>>>>> bcbc3a2216673e87ec297e353ff19a0685e3b6eb
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

printCoders(codersList);

export {printCoders}

<<<<<<< HEAD

=======
>>>>>>> bcbc3a2216673e87ec297e353ff19a0685e3b6eb
