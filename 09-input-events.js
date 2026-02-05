//Eventos de los inputs

//leer lo que ingresa el usuario

const userName = document.querySelector('.user-name');
const userPhone = document.querySelector('.user-phone');
const userEmail = document.querySelector('.user-email');
const userText = document.querySelector('.user-text');

// Leer lo que el usuario ingresa
// userName.addEventListener('input', function (e) {
//     console.log(e.target.value);
// });
// userEmail.addEventListener('input', function (e) {
//     console.log(e.target.value);
// });
// userPhone.addEventListener('input', function (e) {
//     console.log(e.target.value);
// });
// userText.addEventListener('input', function (e) {
//     console.log(e.target.value);
// });

userName.addEventListener('input',readText);
userPhone.addEventListener('input',readText);
userEmail.addEventListener('input',readText);
userText.addEventListener('input',readText);

function readText(e) {
    console.log(e.target.value);
}
