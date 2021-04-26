import { codersList } from "./data.js";


let btMatar = document.querySelector(".btMatar");
let contenedores = document.querySelectorAll(".ctCoders");

btMatar.addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(function() {
            darkenCoder(codersList);
        }, 500 * i)
    };

    setTimeout(function() {
        chooseCoder(codersList);
    }, 5000);
});




function darkenCoder(array) {
    let random = Math.floor(Math.random() * array.length);
    let randomId = array[random].id;
    array.filter(item => {
        if (item.id == randomId) {
            contenedores[randomId].classList.add('ctCodersSelected');
        }
        setTimeout(function() {
            contenedores[randomId].classList.remove('ctCodersSelected');
        }, 200);
    })
};


function chooseCoder(array) {
    let random = Math.floor(Math.random() * array.length);
    let randomId = array[random].id;
    array.map(item => {
        if (item.id == randomId) {
            let indice = array.indexOf(item);
            contenedores[randomId].classList.add('ctCodersSelected');
            array.splice(indice, 1);
            console.log(array);
        };
    });
};