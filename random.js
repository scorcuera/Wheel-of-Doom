import { codersList } from "./data.js";

let btMatar= document.querySelector(".btMatar")
let genesisArray = []
 
function oscurecerRandom(array){
btMatar.addEventListener("click", () =>{
  let random = Math.floor(Math.random()* array.length)
  let randomId = array[random].id;
  
  let contenedores = document.querySelectorAll(".ctCoders")
 
  array.map(item => {
      if(item.id == randomId){
        let indice = array.indexOf(item)
        genesisArray.push(item)
        array.splice(indice, 1)
        console.log(array)
        console.log(genesisArray);
        contenedores[randomId].classList.add('ctCodersSelected');
        contenedores[randomId].classList.add('ctCodersBig', 'stageBig');
      
  };
});
});
};
 

oscurecerRandom(codersList)



















