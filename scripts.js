//Selecteurs
const list = document.getElementById('list');
const form = document.getElementById('form');
const item = document.getElementById('item');

//Event
//Ajout element
form.addEventListener('submit', (e => {
    list.innerHTML +=  `<li>${item.value}</li> `
}))