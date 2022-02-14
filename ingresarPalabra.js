var ingresarPalabra = document.getElementById("ingresar");
ingresarPalabra.addEventListener("click", validarPalabra);

function validarPalabra(){
    var nuevaPalabra = document.getElementById("nuevaPalabra").value.toUpperCase()
    var patronValido = /^[A-Z]+$/g

    if(patronValido.test(nuevaPalabra)){
    palabras.push(nuevaPalabra);
    alert("Palabra Agregada Correctamente");
    }else{
        if(nuevaPalabra.length == 0){
            alert("Ingrese la Palabra")
        }else{

            alert("No se admiten Caracteres Especiales")

        }



    }

    //document.getElementById(nuevaPalabra).value ="";
    document.getElementById(nuevaPalabra).focus();

}