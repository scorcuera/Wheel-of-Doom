import { codersList } from "./data.js";

console.log(codersList)

//Funcion para traer la persona seleccionada y que le caiga el barril y la sangre
function randomCodersPrinted (array) {
    let randomCodersPrinted = "";
    array.forEach(randomId) => {
        randomCodersPrinted += `<div class="ctCodersBig" data-set="${randomId.id}"><h2>${randomId.name}</h2>
    <img src="${randomId.img}" alt="ctCodersBig" class="ctCodersBig">
    <img src="img/telonCoders.jpg" alt="stage" class="stage"></div>`
    });

    document.querySelector(".ctFichas").innerHTML = randomCodersPrintedd;
};

randomCodersPrinted (codersList);

export {randomCodersPrinted}