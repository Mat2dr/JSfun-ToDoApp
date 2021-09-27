// Selecteurs
const clear = document.querySelector(".clear");
const dateElement = document.getElementById('item');

// Event
// Ajout element
btn.addEventListener('onclick', (e) => {
    e.preventDefault();
    list.innerHTML += `<li>${item.value}</li>`;
    item.value = '';
});