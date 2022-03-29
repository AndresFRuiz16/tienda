let etiquetaBoton=document.getElementById("boton");
etiquetaBoton.addEventListener("click",escuchar);
function escuchar(event){
    event.preventDefault()
    console.log("hizo click")
    let tribuna=document.getElementById("tribuna").value
    console.log(tribuna)
    let cantidad=document.getElementById("cantidad").value
    console.log(cantidad)
    let cedula=document.getElementById("cedula").value
    console.log(cedula)
    let nombres=document.getElementById("nombres").value
    console.log(nombres)
    let apellidos=document.getElementById("apellidos").value
    console.log(apellidos)
    let correo=document.getElementById("correo").value
    console.log(correo)
    if(tribuna=="1"){
        let total1=cantidad*144000
        alert("El total es: $"+total1)
        console.log(total1)
    }
    else if(tribuna=="2"){
        let total2=cantidad*215000
        alert("El total es: $"+total2)
        console.log(total2)
    }
    else if(tribuna=="3"){
        let total3=cantidad*444000
        alert("El total es: $"+total3)
        console.log(total3)
    }
    else if(tribuna=="4"){
        let total4=cantidad*215000
        alert("El total es: $"+total4)
        console.log(total4)
    }
    else if(tribuna=="5"){
        let total5=cantidad*444000
        alert("El total es: $"+total5)
        console.log(total5)
    }
}