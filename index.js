import { codersList } from "./data.js";

  let random = Math.floor(Math.random() * codersList.length)
  console.log(codersList[random].name)
 
 
    
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



