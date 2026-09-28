
const main = document.getElementById("main"); // Contenedor Principal
const datoImporte = document.getElementById("ingresarImporte"); // div del Input
const valorInput = document.getElementById("valorInput");
const descuentos = [5,25,50]; // array con los descuentos a aplicar

let boton = document.createElement("button"); // Boton creado
boton.textContent = "Aplicar Descuentos";
boton.classList.add("boton");


let tarjeta = document.createElement("div"); // contenedor donde estara la lista de descuento
tarjeta.classList.add("tarjeta");

datoImporte.appendChild(boton); // agregado al main

/** FUNCIONES Y EVENTOS*/

function generarDescuentos(){
    tarjeta.textContent=""; // Para Limpiar Contenido de la Tarjeta
    let num = parseInt(valorInput.value) //recoge el valor que agrego el usuario
    let precioFinal;
    let des; // recoge el descuento

    if(num<=0 || isNaN(num))
            throw new Error("Debe agregar valores Permitidos"); 
        
      
    for(let i=0;i<descuentos.length;i++){
       
        des=descuentos[i];
        precioFinal=calcularDescuento(des,num);  
        
        generarTarjeta(des,precioFinal);
    }


}

function calcularDescuento(des,num){
    let precioFinal;

    precioFinal=num-((num*des)/100); 

    return precioFinal;
}

//Agregar los descuentos a la tarjeta
function generarTarjeta(des,precioFinal){ 

    let texto = document.createElement("p");

    texto.textContent=`Se aplico descuento de ${des}%: ${precioFinal}`;
        
    tarjeta.appendChild(texto);
}

//Eventos que se ejecutan al precionar el Botón
boton.addEventListener("click", function(){

    console.log("Evento activado");
    console.warn("Evento aplicado");
    console.table("Funcionamiento Correcto");
    generarDescuentos();
    main.appendChild(tarjeta);

})