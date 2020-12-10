decada();

function decada() {

    let dias = ["Lunes", "Martes", "Miercoles","Jueves", "Viernes", "Sábado","Domingo"];
    for(let i=0; i< dias.length;i++){
        if(i == 6){
        console.log(i);
        alert("es domingooo"); }
        else if (i % 2 == 0){
            alert(dias[i]+ (" es Par"));
        }else{
            alert(dias[i]+(" es impar"));
        }

    }

}


