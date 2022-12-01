import { printCoders } from "./index.js";
import { codersList } from "./data.js"

let btReload = document.querySelector(".btReload")

btReload.addEventListener("click", () => {
    printCoders(codersList);
    console.log(codersList);
});