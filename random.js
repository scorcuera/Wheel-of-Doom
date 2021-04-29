import { codersList } from "./data.js";

let btMatar = document.querySelector(".btMatar");
let contenedores = document.querySelectorAll(".ctCoders");

function paintCoder(coderPaint) {

    let stageContainer = coderPaint.querySelector(".stage")
    let freakCoder = coderPaint.querySelector(".freakCoder")
    let deadName = coderPaint.querySelector("h2")
    let barril = coderPaint.querySelector(".barril")
    let telon = coderPaint.querySelector(".telon")

    stageContainer.classList.add("stageBig")
    freakCoder.classList.add("freakCoderBig")
    deadName.classList.add("deadName")
    barril.classList.add("barrilActivated")
    telon.classList.add("telonClose")

    console.log(coderPaint);
};


btMatar.addEventListener("click", () => {
    playSound(audioMatar, fuenteMatar);
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
    let coderToPaint = contenedores[randomId];
    paintCoder(coderToPaint);
    array.map(item => {
        if (item.id == randomId) {
            let indice = array.indexOf(item);
            contenedores[randomId].classList.add('ctCodersSelected');
            array.splice(indice, 1);
            console.log(array);
        };
    });
};

let audioMatar = document.querySelector(".audioMatar");
let fuenteMatar = audioMatar.src;

function playSound(audio, fuente) {
    audio.setAttribute("src", fuente);
    audio.play();
}