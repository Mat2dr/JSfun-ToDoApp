const inputTask = document.querySelector('input[type="text"]');
const form = document.querySelector("form");
let task = "";
const listTasks = [];

inputTask.addEventListener("input", (e) =>{
    task = e.target.value;
    console.log(task)
})

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    listTasks.push(task);
})