const planes = [];
const monto = this.montoCapital;


function costos(monto) {
    switch (cuotas) {
        case 3:
            costo = monto *(1.024*cuotas);
            alert("Usted pagaria "+cuotas+ " de " +costo+ " Pesos. ");
            break;
        case 4:
            costo = monto *(1.024*cuotas);
            alert("Usted pagaria "+cuotas+ " de " +costo+ " Pesos. ");
            break;
        case 5:
            costo = monto *(1.024*cuotas);
            alert("Usted pagaria "+cuotas+ " de " +costo+ " Pesos. ");
            break;
        case 6:
            costo = monto *(1.024*cuotas);
            alert("Usted pagaria "+cuotas+ " de " +costo+ " Pesos. ");
            break;
        default:
            alert("Debe colocar un numero de cuotas entre 3 a 6");
            break;
    }
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

const boton = document.querySelector('#botonCotizar');

boton.onclick = function (){
    console.log("hizo click");
    costos();
}



/* Titulo principal */
const divLanding = document.querySelector('#landing');
const tituloPrincipal = document.createElement('h1');
//divLanding.insertBefore(tituloPrincipal,referencia);
tituloPrincipal.classList.add('mx-12', 'py-2');

tituloPrincipal.textContent= 'Oportunya Créditos pensados para vos';

/* select */

function addOptions(domElement, array){
    let select = document.getElementsByName(domElement)[0];
    for (value in array){
        let plan = array[value];
        let planName = plan.nombre;
        console.log(planName);
        let option = document.createElement("option");
        option.text = planName;
        select.add(option);
    }
}

function getSelectedValue(){
    let selectedValue = document.getElementById("list").value;
    console.log(selectedValue)

}

this.addOptions("planes", planes);


