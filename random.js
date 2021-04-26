import { codersList } from "./data.js";


let btMatar = document.querySelector(".btMatar");
let contenedores = document.querySelectorAll(".ctCoders");


function darkenCoder(array) {
    let x = 0;
    while (x < 10) {
        let random = Math.floor(Math.random() * array.length);
        array.forEach(coder => {
            console.log(coder.name)
        })
    }
    for (let i = 0; i < 10; i++) {
        x++;
    }


};



/*ANDINOS
categorias.forEach(category => {
    category.addEventListener('click', function(e) {
        categorias.forEach(cat => cat.classList.remove('contenedorCategoriasClick'))
        this.classList.add('contenedorCategoriasClick')
        textoCategoria.forEach(txt => txt.classList.remove('textoCategoriasClick'))
        this.childNodes[3].classList.add('textoCategoriasClick')
        imagenCategoria.forEach(img => img.classList.remove('contenedorCategoriasImgClick'))
        this.childNodes[1].classList.add('contenedorCategoriasImgClick')
        home.classList.remove('homeSeleccionado')
    })
})
*/



/*
function chooseCoder(array) {
    let random = Math.floor(Math.random() * array.length);
    let randomId = array[random].id;
    array.map(item => {
        if (item.id == randomId && contenedores[randomId].classList.contains('ctCodersSelected')) {
            contenedores[randomId].classList.remove('ctCodersSelected');
        };
        if (item.id == randomId && !contenedores[randomId].classList.contains('ctCodersSelected')) {
            let indice = array.indexOf(item);
            array.splice(indice, 1);
            contenedores[randomId].classList.add('ctCodersSelected');
        };
    });
};
*/


function kill(array) {
    btMatar.addEventListener("click", () => {
        darkenCoder(array);
        //chooseCoder(array);
    });
};




kill(codersList);