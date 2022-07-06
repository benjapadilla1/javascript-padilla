// Calcular pagos en cuotas sobre un monto determinado.

do {
    valortotal = parseInt (prompt("Ingrese su monto total"))
    if(isNaN(valortotal)){
        alert("Ingrese numeros válidos")
    }
    if(valortotal <= 100){
        alert("Su monto no puede ser menor o igual a 100")
    }
}while ((isNaN(valortotal)) || (valortotal<=100)  
)
function cuotas(){
    let meses_cuotas= parseInt(prompt("Ingrese el numero de cuotas deseadas(Las cuotas no pueden ser menor a 1) "))
    if (isNaN(meses_cuotas)){
        alert("Ingresa un valor correcto!!")
        alert("Por favor reinicie la pagina")
    }
    if(meses_cuotas<=0){
        alert("Las cuotas no pueden ser menor o igual a 0")
        alert("Por favor reinicie la pagina")
    }
    if (meses_cuotas >0){
        alert("La cantidad a abonar con cuotas es de "+valortotal/meses_cuotas)
    }  
}
cuotas()
