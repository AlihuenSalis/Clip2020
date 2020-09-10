
function logica(){

    var intentos=4;
    var correcto = false;
    var respuesta = "chocolate";
    
    while (intentos > 0 && correcto == false){
        var alertResp = window.prompt("Ingrese su respuesta. Tenés "+intentos+" intentos.");
        if (alertResp == respuesta){
            correcto == true;
            intentos == 0;
            window.alert("¡¡¡FELICITACIONES ADIVINASTE. Ahora tendrás doble chance de ganar el sorteo");
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