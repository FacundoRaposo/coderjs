const planes = [];

window.onload = function(){
    const botonCoti = document.getElementById('botonCotizar');
    botonCoti.addEventListener("click",function(event){
        resultadoFinal();
    })
}



/* Calculo cuotas*/

function costos() {
    const monto = document.getElementById("montoCap").value;
    let cuotas = this.getSelectedValue();
    console.log(cuotas);
    console.log(monto);
    switch (cuotas) {
        case 3:
            costo = monto *(1.024*cuotas);
            return("Usted pagaria "+cuotas+ " de " +costo+ " Pesos. ");
            break;
        case 4:
            costo = monto *(1.024*cuotas);
            return("Usted pagaria "+cuotas+ " de " +costo+ " Pesos. ");
            
        case 5:
            costo = monto *(1.024*cuotas);
            return("Usted pagaria "+cuotas+ " de " +costo+ " Pesos. ");
            
        case 6:
            costo = monto *(1.024*cuotas);
            return("Usted pagaria "+cuotas+ " de " +costo+ " Pesos. ");
            
        default:
            return("Debe colocar un numero de cuotas entre 3 a 6");
    }
}

/* select */

function addOptions(domElement, array){
    let select = document.getElementsByName(domElement)[0];
    for (value in array){
        let plan = array[value];
        let planName = plan.nombre;
        let planCuota = plan.cuotas;
        //console.log(planName);
        let option = document.createElement("option");
        option.text = planName  + " en " + planCuota + " cuotas";
        select.add(option);
    }
}

function getSelectedValue(){
    let selectedValue = document.getElementById("list").value;
    let Arrcuotas = selectedValue.split(" ");
    var cuotas = Arrcuotas[2];

    console.log(cuotas);
    return cuotas;
}

/* Respuesta */

function resultadoFinal(){
let contenedor = document.createElement("div");
contenedor.setAttribute("class","result");
contenedor.innerHTML = `<span>${costos()}</span>`;
document.getElementById("resultado").appendChild(contenedor);

}
function Plan(nombre, limite, cuotas, tasa, vencimiento) {
	this.nombre = nombre;
	this.limite = limite;
	this.cuotas = cuotas;
	this.tasa = tasa;
	this.vencimiento = vencimiento;
    

   
}

this.mostrarPlanes = function () {
		console.log(`Este plan es el: ${this.nombre} y tiene una tasa de ${this.tasa} , a pagar en ${this.cuotas} que vencen el dia ${this.vencimiento} de cada mes`);
}

const plan1 = new Plan ('Plan1', 10000,3,0.15,10);
const plan2 = new Plan ('Plan2', 12000,4,0.15,10);
const plan3 = new Plan ('Plan3', 13000,5,0.15,10);
const plan4 = new Plan ('Plan4', 14000,6,0.15,10);
    
planes.push(plan1);
planes.push(plan2);
planes.push(plan3);
planes.push(plan4);

/* Titulo principal */
const divLanding = document.querySelector('#landing');
const tituloPrincipal = document.createElement('h1');

//divLanding.insertBefore(tituloPrincipal,referencia);

tituloPrincipal.classList.add('mx-12', 'py-2');

tituloPrincipal.textContent= 'Oportunya Créditos pensados para vos';




this.addOptions("planes", planes);