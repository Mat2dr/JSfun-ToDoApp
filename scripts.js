const inputTask = document.querySelector('input[type="text"]');
const form = document.querySelector("form");
let task = "";
const listTasks = [];
let numList = 0;

inputTask.addEventListener("input", (e) =>{
    task = e.target.value;
})

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    listTasks.push(task);
    numList ++;
    listTasks.slice('numList');

    document.querySelector("form > .tasks").innerHTML = `
    <h4>${listTasks.slice('numList')}</h4>
    `;
})