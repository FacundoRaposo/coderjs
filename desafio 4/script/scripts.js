

function costos() {
    let monto = Number(prompt("Que monto quiere solicitar"));
    const cuotas = Number(prompt("cantidad de cuotas del 2 al 5"));
    switch (cuotas) {
        case 2:
            costo = monto *(1.24*cuotas);
            alert("Usted pagaria "+cuotas+ " de " +costo+ " Pesos. ");
            break;
        case 3:
            costo = monto *(1.24*cuotas);
            alert("Usted pagaria "+cuotas+ " de " +costo+ " Pesos. ");
            break;
        case 4:
            costo = monto *(1.24*cuotas);
            alert("Usted pagaria "+cuotas+ " de " +costo+ " Pesos. ");
            break;
        case 5:
            costo = monto *(1.24*cuotas);
            alert("Usted pagaria "+cuotas+ " de " +costo+ " Pesos. ");
            break;
        default:
            alert("Debe colocar de 2 a 5 cuotas");
            break;
    }

}
let plan = {
	nombre: "cuoti4",
	limite: 10000,
	cuotas: 4,
	tasa: 0.27,
	vencimiento: 15,

	mostrarInfo: function () {
		// console.log(this)
		console.log(`Este producto es: ${this.nombre} y tiene un precio de $${this.limite}`);
    }   
}


function Plan(nombre, limite, cuotas, tasa, vencimiento) {
	this.nombre = nombre;
	this.limite = limite;
	this.cuotas = cuotas;
	this.tasa = tasa;
	this.vencimiento = vencimiento;

	this.mostrarPlanes = function () {
		console.log(`Este plan es el: ${this.nombre} y tiene una tasa de ${this.tasa} , a pagar en ${this.cuotas} que vencen el dia ${this.vencimiento} de cada mes`);
    };
}

const plan2 = new Plan("cuoti3",5000,3,0.15,15);

plan2.mostrarPlanes();
costos();