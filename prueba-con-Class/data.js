class Coder {

    //constructor
    constructor(name, id, img){
        this.name = name;
        this.id = id;
        this.img = `../img/${img}`;
    }

    //methods
    paint() {
        let ctLista = document.getElementById("ctLista")
        ctLista.innerHTML += `<div class="card" style="width: 20rem; height:30rem;">
        <div class="ctImg d-flex" style="height: 20rem;"><img src="${this.img}" class="card-img-top img-fluid mx-auto py-4" style="width: auto; height: 100%; object-fit: cover; object-position:center;" alt="..."></div>
        <div class="card-body d-flex flex-column align-items-center">
          <h5 class="card-title">${this.name}</h5>
          <a href="#" class="btn btn-danger" onclick="deleteItem(this)">Die</a>
        </div>
      </div>`
    }

    objectConstructor(){
        let codersList = []
        codersList.push({name: `${this.name}`, id:`${this.id}`, img:`${this.img}`})
        console.log(codersList);
    }


}

function creaedro(nameCoder, paint){

}

const Andrea = new Coder("Andrea", 1, "freak01.png")
const Berta = new Coder("Berta", 2, "freak02.png")
const Andres = new Coder("Andres", 3, "freak03.png")
const Anya = new Coder("Anya", 4, "freak04.png")
const Alexandra = new Coder("Alexandra", 5, "freak05.png")
const Sergio = new Coder("Sergio", 6, "freak06.png" )
const Diego = new Coder("Diego", 7, "freak07.png")
const Jael = new Coder("Jael", 8, "freak08.png")
const Joan = new Coder("Joan", 9, "freak09.png")
const Gabriela = new Coder("Gabriela", 10, "freak10.png")
const Armando = new Coder("Armando", 11, "freak11.png")



console.log(Berta.img);
Andrea.paint()
Andrea.objectConstructor()
Berta.paint()
Andres.paint()
Anya.paint()
Alexandra.paint()
Sergio.paint()
Diego.paint()
Jael.paint()
Joan.paint()
Gabriela.paint()
Armando.paint()

function deleteItem(element){
    element.parentElement.parentElement.remove();
}