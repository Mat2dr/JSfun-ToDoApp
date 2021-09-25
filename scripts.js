const inputTask = document.querySelector('input[type="text"]');
const form = document.querySelector("form");
let task = "";
const listTasks = [];

inputTask.addEventListener("input", (e) =>{
    task = e.target.value;
})

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    listTasks.push(task);
    console.log(listTasks);

    document.querySelector("form > .tasks").innerHTML = `
    <h4>${listTasks}</h4>
    `;
})