import { codersList } from "./data.js";

let btMatar= document.querySelector(".btMatar")




function oscurecerRandom(array){
  btMatar.addEventListener("click", () => {
    let random = Math.floor(Math.random() * array.length)
    let randomId = array[random].id
    console.log(array[randomId]);
   
    
    array.map(coder =>{

      if(coder.id == randomId){
        let indice = array.indexOf()
        array.splice(, 1)
        console.log(array);
      }
      
      
    })
  })
} 


oscurecerRandom(codersList)








/* function oscurecerRandom(array){
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
} */