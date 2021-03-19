const toggleButton = document.getElementById('toggle-button')
const sideBar = document.getElementById('side-bar')
const main = document.querySelector('main');
const body = document.querySelector('body');



toggleButton.addEventListener('click', show);

function show() {
    sideBar.classList.toggle('active')

}

// fermer la sidebar par le body 
// main.addEventListener('click', () => {
//     sideBar.classList.remove('active')
// });




