// Selecteurs
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Les classes 
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

let LIST = [], id = 0;

//Date du jour
const options = {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("fr-FR", options);

//Ajout tâche function
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

// Ajout d'une tâche quand l'utilisateur utilise Entrer
document.addEventListener("keyup", function(even){
    if(event.keyCode == 13){
        const toDo = input.value;

        // Si tâche n'est pas vide
        if(toDo){
            addToDo(toDo, id, false, false);

            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            });

            id++;
        }
        input.value = "";
    }
});

//Terminer une tâche
function completedToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}