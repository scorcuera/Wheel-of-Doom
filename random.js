import { codersList } from "./data.js";

let btMatar= document.querySelector(".btMatar")

function oscurecerRandom(array){
  btMatar.addEventListener("click", () =>{
    let random = Math.floor(Math.random()* array.length)
    let randomId = array[random].id
    
    let contenedores = document.querySelectorAll(".ctCoders")
    let randomDataset= contenedores[random].dataset.set

    array.forEach(item => {
      
        if(item.id == randomId){
        
          contenedores[randomId].classList.add('ctCodersSelected');
          array.splice(randomId, 1)
          console.log(array);
          
      }
    });
    
  })
}

oscurecerRandom(codersList);















/* 
//Funcion para seleccionar aleatoriamente un elemento  
let random = Math.floor(Math.random() * codersList.length)
  console.log(codersList[random].name)
 */
  