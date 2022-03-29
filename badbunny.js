let etiquetaBoton=document.getElementById("boton");
etiquetaBoton.addEventListener("click",escuchar);
function escuchar(event){
    event.preventDefault()
    console.log("hizo click")
    let ciudad=document.getElementById("ciudad").value
    console.log(ciudad)
    if(ciudad=="1"){
        alert("El dia del concierto es 8 de Agosto de 2022")
    }
     else if(ciudad=="2"){
        alert("El dia del concierto es 11 de Agosto de 2022")
    }
     else if(ciudad=="3"){
        alert("El dia del concierto es 15 de Agosto de 2022")
    }
    }