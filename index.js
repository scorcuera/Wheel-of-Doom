import { codersList } from "./data.js";


//Funcion para traer las imagenes y nombres 
function printCoders(array) {
    let codersPrinted = "";
    array.forEach(item => {
        codersPrinted += `<div class="ctCoders" data-set="${item.id}"><h2>${item.name}</h2>
    <img src="${item.img}" alt="freakCoder" class="freakCoder">
    <img src="img/telonCoders.jpg" alt="stage" class="stage">
    <img src="img/barril.png" alt ="barril" class="barril">
    <img src="img/telonClose.png" alt ="telon cerrado" class="telon">
    </div>`
    });

    document.querySelector(".ctFichas").innerHTML = codersPrinted;
};

printCoders(codersList);

export { printCoders }