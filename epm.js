let etiquetaBoton=document.getElementById("boton");
etiquetaBoton.addEventListener("click",escuchar);
function escuchar(event){
    event.preventDefault()
    console.log("hizo click")
    let estrato=document.getElementById("estrato").value 
    console.log(estrato)
    let cedula=document.getElementById("cedula").value 
    console.log(cedula)
    let total=document.getElementById("total").value
    console.log(total)
    if(estrato=="1"){
        let total1=total*0.60
        alert("Su valor total a pagar es: $"+total1)
        console.log(total1)
    }
    else if(estrato=="2"){
        let total2=total*0.70
        alert("Su valor total a pagar es: $"+total2)
        console.log(total2)
    }
    else if(estrato=="3"){
        let total3=total*0.80
        alert("Su valor total a pagar es: $"+total3)
        console.log(total3)
    }
}