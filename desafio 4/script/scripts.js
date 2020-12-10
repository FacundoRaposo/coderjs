

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
    }

}

costos();
