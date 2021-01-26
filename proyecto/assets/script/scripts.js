let planes = [];
let planSelected = "";
window.onload = function(){
    $("#botonCotizar").click(function(){
        resultadoFinal();
    })

}

$(function() {
    document.addEventListener('DOMContentLoaded', ()=> {
        console.log("DOMContentLoaded desde Jquery");
    })

    
    $.ajax({
        url: "./assets/script/planes.json",
        success: function(data){
            addOptions("planes",data.arrayPlanes);
            console.log("peticion exitosa");

        },
        error: function(){
    
        }
      });

})

/* Calculo cuotas*/

function costos(cuotas) {
    const monto = document.getElementById("montoCap").value;

    console.log("este monto: " + monto);
    console.log("estas cuotas: " + cuotas)
    if(cuotas == 3) { 
        costo = ((monto *1.024)/cuotas);
        answer = "Usted pagaria "+cuotas+ " cuotas de " +costo+ " Pesos. "
        return(answer);}else if(cuotas == 4){
            costo = ((monto *1.024)/cuotas);
            answer = "Usted pagaria "+cuotas+ " cuotas de " +costo+ " Pesos. "
            return(answer);
            
        }else if(cuotas == 5) {
            costo = ((monto *1.024)/cuotas);
            answer = "Usted pagaria "+cuotas+ " cuotas de " +costo+ " Pesos. "
            return(answer);

        }else{
            costo = ((monto *1.024)/cuotas);
            answer = "Usted pagaria "+cuotas+ " cuotas de " +costo+ " Pesos. "
            return(answer);
        }
        
}

/* select */

function addOptions(domElement, array){
    let select = document.getElementsByName(domElement)[0];
    for (value in array){
        let plan = array[value];
        let planName = plan.nombre;
        let planCuota = plan.cuotas;
        console.log(planName);
        let option = document.createElement("option");
        option.text = planName  + " en " + planCuota + " cuotas";
        select.add(option);
    }
}

function getSelectedValue(){

    let selectedValue = document.getElementById("list").value;
    let Arrcuotas = selectedValue.split(" ");
    let cuotas = Arrcuotas[2];
    console.log(cuotas);

    let resultado = this.costos(cuotas);
    
    planSelected = resultado;
    
    return planSelected;


}


/* Respuesta */

console.log("previo a mostrar el resultado es" + planSelected);

function resultadoFinal(){
let contenedor = document.createElement("div");
contenedor.setAttribute("class","result");
contenedor.innerHTML = `<span>${getSelectedValue()}</span>`;
document.getElementById("resultado").appendChild(contenedor);
}
