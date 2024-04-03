document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault();

        let numeroMaximo = document.getElementById('numero-max').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.getElementById('resultado-valor').innerText = numeroAleatorio
        document.querySelector('.resultado').style.display = 'block';
    })
})