


/* Input */
const referencia = document.querySelector('.getCapital');
const montoCapital = document.querySelector('#montoCap').value;
console.log(montoCapital);


/* Titulo principal */
const divLanding = document.querySelector('#landing');
const tituloPrincipal = document.createElement('h1');
divLanding.insertBefore(tituloPrincipal,referencia);
tituloPrincipal.classList.add('mx-12', 'py-2');

tituloPrincipal.textContent= 'Oportunya Créditos pensados para vos';
