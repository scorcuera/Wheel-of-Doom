import { codersList } from "./data.js";


for(let i=0; i<codersList.length; i++){
  console.log(codersList[i].name)
} 

codersList.sort(function() { 
  return Math.random((codersList.name) - 0.5)

})
  
    
