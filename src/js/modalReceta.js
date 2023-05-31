const btnVerMas = document.getElementById('btn1');
const modal = document.getElementById('modal2');

function abrirModal(){
    modal.style.display = "block";
}

btnVerMas.addEventListener('click', abrirModal);