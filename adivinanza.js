// respuesta = {
//     respuestaForm:''
// };

// respuestaCorrecta="cacao";

// var intentos=4;
// $("#alert").html("te quedan " + intentos + " intentos");
// var respuesta = document.getElementById("respuestaForm").value;

// var formulario = document.getElementById("adivinanzaForm").value;





function logica(){

    var intentos=4;
    var correcto = false;
    var respuesta = "chocolate";
    
    while (intentos > 0 && correcto == false){
        var alertResp = window.prompt("Ingrese su respuesta. Tenés "+intentos+" intentos.");
        if (alertResp == respuesta){
            correcto == true;
            intentos == 0;
            window.alert("¡¡¡FELICITACIONES ADIVINASTE. Ahora tendrás soble chance de ganar el sorteo");
            break;
        }else{
            intentos--;
            window.alert("Tu respuesta es INCORRECTA. Intenta otra vez.");
            if (intentos == 2){
                window.alert("Tu respuesta es INCORRECTA. Una Ayuda: Su fruto es de color Marron de forma ovalada.");
            }
            if(intentos == 1){
                window.alert("Tu respuesta es INCORRECTA. Última Ayuda: Tiene el mismo nombre que nuestra empresa" );
            }
        if(intentos == 0 && acerto==false){
            window.alert("PERDISTE. Lo sentimos. La respuesta era: "+respuesta+" .Gracias por Participar.");
            break;
        }
        }
    }
}

// function logica(){
    
//     var respuesta = document.getElementById("respuestaForm").value;

//     if (respuesta == "cacao"){
//         alert ("FELICITACIONES. Tu respuesta es correcta");
//         // console.log("respuesta primer if= "+respuesta);
//         // console.log("intentos primer if = "+intentos);
//     }else{
//         // console.log("respuesta else = "+respuesta);
//         // console.log("intentos else = "+intentos);
//         // if (respuesta != "cacao" && intentos == 3){
            
//             alert("Su espuesta es INCORRECTA 1. Le quedan "+intentos+" intentos mas. || PISTA 1: Es de color Marron de forma ovalada:");
//             // alert("PISTA 1: Es de color Marron de forma ovalada"); 
//             console.log("respuesta if del else= "+respuesta);
//             console.log("intentos if del else= "+intentos);
//         // }
        
    
//     }
//     // respuesta != "cacao" &&
//     if (respuesta != "cacao" && intentos == 2){
//         intentos--;
//         // alert("Su espuesta es INCORRECTA 2. Le quedan "+intentos+" intentos");
//         alert("PISTA 2: Tiene el mismo nombre que un producto que se toma junto con la leche || Tiene "+intentos+ " intentos mas");
//     }
//     // respuesta != "cacao" &&
//     if (respuesta != "cacao" && intentos == 1 ){
//         intentos--;
//         // alert("Su espuesta es INCORRECTA 3. Le quedan "+intentos+" intentos");
//         alert("PISTA 3: Tiene el mismo nombre que nuestra empresa || Tiene "+intentos+ " intentos mas");
//     }
//     // respuesta != "cacao" &&
//     if ( intentos == 0 ){
//         alert("PERDISTE. Lo sentimos");
//         document.getElementById("btnForm").disable = true;
//     }    
// }

// formulario.addEventListener("submit", function(resp){
//     resp.preventDefault();

//     if (respuesta.value.toUpperCase() == "CACAO"){   
//         $("#botonModal").removeClass("btn btn-danger");
//         $("#botonModal").addClass("btn btn-success");
//         $("#alert").removeClass("alert alert-warning alert-dismissible fade show");
//         $("#alert").addClass("alert alert-success");
//         $("#alert").html("Felicitaciones");
//         $("#myModal").modal("show");
//         $("#modalTitle").html("Adivinanza");
//         $("#textModal").html("Felicitaciones");
//         document.getElementById("respuestaForm").disabled = true;
//         document.getElementById("btnForm").disabled = true;
//     } else{
//         if (respuesa.value.toLowwercase() != respuestaCorrecta){
        
//             intentos--;
//             $("#alert").html("te quedan " + intentos + " intentos");
//             $("#bar").css("width", intentos * 25 + "%");
//             if (intentos==3){
//                 $("#myModal").modal("show");
//                 $("#modalTitle").html("Adivinanza");
//                 $("#textModal").html("Es blanco"); 
//             }
//             if (intentos==2){
//                 $("#myModal").modal("show");
//                 $("#modalTitle").html("Adivinanza");
//                 $("#textModal").html("Tiene cáscara");
//             }
//             if (intentos==1){
//                 $("#myModal").modal("show");
//                 $("#modalTitle").html("Adivinanza");
//                 $("#textModal").html("Tiene cáscara");
//             }
//         }
//     }
    
// });
