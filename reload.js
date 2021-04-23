import { printCoders } from "./index.js";
import {codersList} from "./data.js"

let btReload = document.querySelector(".btReload")
let genesisArray = [...codersList]

btReload.addEventListener("click", () =>{
    printCoders(genesisArray);
    codersList.splice(0, codersList.length, ...genesisArray)
    console.log(codersList);
    console.log(genesisArray);
})



