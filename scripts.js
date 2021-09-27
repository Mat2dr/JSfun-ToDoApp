// Selecteurs
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Les classes 
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//Date du jour
const options = {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("fr-FR", options);

//Ajout tache function
function addToDo(toDo){
    const item = `<li class="item">
                    <i class="fa fa-circle-thin co" job="completed" id="0"></i>
                    <p class="text">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="0"></i>
                </li>
                `;
    
    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
}

addToDo("coder");

// Ajout d'une tache quand l'utilisateur utilise Entrer
document.addEventListener("keyup", function(even){
    if(event.keyCode == 13){
        const toDo = input.value;

        // Si tache n'est pas vide
        if(toDo){
            addToDo(toDo);
        }
        input.value = "";
    }
})