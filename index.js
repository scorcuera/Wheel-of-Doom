import { codersList } from "./data.js";

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






for (let i = 0; i < codersList.length; i++) {
    console.log(codersList[i].name)
}

codersList.sort(function() {
    return Math.random((codersList.name) - 0.5)

})