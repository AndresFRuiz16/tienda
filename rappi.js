let etiquetaBoton=document.getElementById("boton");
etiquetaBoton.addEventListener("click",escuchar);
function escuchar(event){
    event.preventDefault()
    console.log("hizo click")
    let comida=document.getElementById("comida").value 
    console.log(comida)
    let cantidad=document.getElementById("cantidad").value
    console.log(cantidad)
    let comida2=document.getElementById("comida2").value
    console.log(comida2)
    let cantidad2=document.getElementById("cantidad2").value
    console.log(cantidad2)
    let nombre=document.getElementById("nombre").value
    console.log(nombre)
    let direccion=document.getElementById("direccion").value
    console.log(direccion)
    if(comida=="4"||comida=="5"||comida=="9"||comida=="10"){
        console.log("tiene descuento")
        if(comida=="4"){
            let precioUnitario=50000
            let total=(precioUnitario*cantidad)-(cantidad*10000)
        }
        else if(comida=="5"){
            let precioUnitario=70000
            let total=(precioUnitario*cantidad)-(cantidad*10000)
        }
        else if(comida=="9"){
            let precioUnitario=65000
            let total=(precioUnitario*cantidad)-(cantidad*10000)
        }
        else if(comida=="10"){
            let precioUnitario=20000
            let total=(precioUnitario*cantidad)-(cantidad*10000)
        }
    }
    if(comida2=="4"||comida2=="5"||comida2=="9"||comida2=="10"){
        console.log("tiene descuento")
        if(comida=="4"){
            let precioUnitario=50000
            let total=(precioUnitario*cantidad)-(cantidad*10000)
        }
        else if(comida=="5"){
            let precioUnitario=70000
            let total=(precioUnitario*cantidad)-(cantidad*10000)
        }
        else if(comida=="9"){
            let precioUnitario=65000
            let total=(precioUnitario*cantidad)-(cantidad*10000)
        }
        else if(comida=="10"){
            let precioUnitario=20000
            let total=(precioUnitario*cantidad)-(cantidad*10000)
        }
    }
}