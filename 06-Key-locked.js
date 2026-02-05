//  Bloqueo de teclas

const KeyLocked = ["a","A","b","B"];

document.querySelectorAll('.user-name').forEach(field => {

    field.addEventListener("Keydown", function(e){
        if(KeyLocked.includes(e.key)){
            e.preventDefault();
            console.log(`Tecla ${e.key} bloqueada`);
        }
    });
});
