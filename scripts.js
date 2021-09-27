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
function addToDo(toDo, id, done, trash){

    if(trash) {return;}

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `<li class="item">
                    <i class="fa ${DONE} co" job="completed" id=${id}"></i>
                    <p class="text  ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                </li>
                `;
    
    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
}

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
});
