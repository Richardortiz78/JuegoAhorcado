//variables globales
var palabras=["Esfera", "Fosforo", "Lucidez", "Economia", "Estatua", "Bateria", "Codorniz", "Programar", "Leyenda", "Canario"];
var random = Math.floor(Math.random()*palabras.length);
var escogerPalabra = palabras[random];
var palabraConGuiones;
var letraUsuario;
var letras;
var intentos = 5;
var buscar;
var codigo;


var usadas=[];
var mostrarLetra=[];
var juego=[];



function palabraSecreta(){
    var palabras = ["Esfera", "Fosforo", "Lucidez", "Economia", "Estatua", "Bateria", "Codorniz", "Programar", "Leyenda", "Canario"];
    var random = Math.floor(Math.random()*palabras.length);
    var escogerPalabra = palabras[random];
    return escogerPalabra
    console.log(escogerPalabra)
    
    }

function dibujarGuiones(){
    var palabraConGuiones = escogerPalabra.replace(/./g, " _");
    pincel.fillStyle="white"
    pincel.font="bold italic 24px arial";
    pincel.fillText(palabraConGuiones,20,120);
    mostrarLetra=palabraConGuiones.split("");
    console.log(mostrarLetra);
    
}

 
    var escogerPalabra = palabras[random];
    var letras= escogerPalabra.toUpperCase();
    var juego=letras.split("");
    console.log(juego)
    
function start(){
    window.addEventListener('keypress', (event) => {
        var letraUsuario = event.key;
        console.log(letraUsuario);

        var codigo = letraUsuario.charCodeAt();
        
        if(codigo > 64 && codigo < 91){
        usadas.push(letraUsuario.toUpperCase());
        console.log(usadas);   
        var ultimaLetra = (usadas.length-1);
        var buscar=juego.indexOf(letraUsuario);
        console.log(buscar);

        }else{
            alert("SOLO UTILICE LETRAS MAYUSCULAS");

        } if(buscar == -1 && intentos == 5){
       
            pincel.fillText(usadas[ultimaLetra], 20, 20);
            cabeza();
            intentos=(intentos-1);
            pincel.fillStyle="black"
            pincel.font="italic 8px verdana";
            pincel.fillText("Quedan " + intentos + " intentos", 210,140);
        }else{
            if(buscar != -1 && codigo > 64 && codigo < 91){
                alert("bien")


            }


        }
       
    })  

   


/*
        
        if(codigo > 64 && codigo < 91){

        /*if(codigo > 64 && codigo < 91){
        usadas.push(letraUsuario.toUpperCase());
        
    }else{
        }; 
    });*/
       

     
   /* if(buscar == -1 && intentos == 1){
            var usadas=[];
            usadas.push(letraUsuario)
            pincel.fillText(usadas, 20, 20);
            cabeza();
            intentos=(intentos+1);
        
        }/*else{         
            
            if(buscar == -1 && intentos == 2){
                usadas.push(letraUsuario);
                pincel.fillText(usadas, 40, 20);
                torso();
                intentos=(intentos+2);
            }else{               
                
                if(buscar == -1 && intentos == 3){
                    usadas.push(letraUsuario);
                    pincel.fillText(usadas, 60, 20);
                    manos();
                    intentos=(intentos+3);
                }else                      
                    
                    if(buscar == -1 && intentos == 4){
                        usadas.push(letraUsuario);
                        pincel.fillText(usadas, 80, 20);
                        piernas();
                        intentos=(intentos+4);
                        alert("Ultimo Intento");  
                    }else{
                        if(buscar == -1 && intentos == 5){
                            usadas.push(letraUsuario);
                            pincel.fillText(usadas, 100, 20);
                            piernas();                                      
                            alert("Colgado");}
                            
                            


        
          
   




    }*/

    }


   

    
    


 
    

