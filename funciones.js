var letrasRepetidas= [];
var letrasErroneas= [];
var intentos =5;


var inicio= document.getElementById("iniciar")
inicio.addEventListener("click", start);
function start(){
    cadalso();
    dibujarPalabra();
    window.addEventListener("keydown", ingresarLetra);
         

}


    var palabras=["Esfera", "Fosforo", "Lucidez", "Economia", "Estatua", "Bateria", "Codorniz", "Programar", "Leyenda", "Canario"];
    var random = Math.floor(Math.random()*palabras.length);
    var palabra = palabras[random];
    var juego =palabra.toUpperCase();
    var palabraSecreta = juego.split("");  
    

    var palabraConGuiones = palabra.replace(/./g, "_ ")


function ingresarLetra(e){
        var tecla =e.keyCode || e.which;
        if(tecla>64 && tecla <91){
            letra=e.key.toUpperCase()
            comprobarLetra(letra);
        }

}
function comprobarLetra(letra){
    var nuevo="";
    var error= true

    for(var i=0; i<palabra.length;i++){
        if(letra==palabraSecreta[i]){
            nuevo = nuevo + letra +" ";
            error = false
        }else{

            nuevo = nuevo +palabraConGuiones[i*2] + " ";
        }
    }
    if (error){

        var resultado = verificarLetra(letra)
        if(resultado){

            intentos = intentos - 1

            if(intentos == 4){
                cabeza();
            }
            if(intentos==3){
                torso()
            }
            if (intentos ==2){
                brazos();

            }
            if(intentos == 1){

                piernas();
            }
            if(intentos == 0){
                document.getElementById("resultadoPerdedor").innerHTML = "Colgado!!  La palabra era : " + juego;
                window.removeEventListener("keydown", ingresarLetra);
                inicio.removeEventListener("click", start);
            }
            document.getElementById("intentos").innerHTML = "Te quedan:  " + intentos + " intentos";

        }
    }
palabraConGuiones= nuevo;

document.getElementById("palabraSecreta").innerHTML = palabraConGuiones;

if(palabraConGuiones.search("_") == -1){
    document.getElementById("resultadoGanador").innerHTML = "GANASTE FELICITACIONES!!!!";
    window.removeEventListener("keydown", ingresarLetra);
    inicio.removeEventListener("click", start);
    
    

    }
}

function verificarLetra(valor){
letra = valor;
var restar = false;

    if(!letrasErroneas.includes(letra)){
        letrasErroneas.push(letra)
        document.getElementById("letrasError").innerHTML= letrasErroneas
        restar = true
        
        }else{

            letrasRepetidas.push(letra)
            alert("ya utilizo la letra: " + letra);

        }
        return restar

    }






    var reiniciar=document.getElementById("reiniciar");
reiniciar.addEventListener("click", refresh);

function refresh(){
    location.reload();
   

}


