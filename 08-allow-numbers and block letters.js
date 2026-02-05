// Bloquear letras permitir numeros

document.querySelector(".user-phone").addEventListener("keydown", function(e){

        if(
            e.key === "Backspace" ||
            e.key === "Tap" ||
            e.key === "ArrowLeft" ||
            e.key === "ArrowRight" 
        ) {
            return;
        }
        //Bloquear cualquier tecla que no sea numero
        if(e.key < '0' || e.key > '9'){
            e.preventDefault();
            console.log('Solo se permite números');
        }
});