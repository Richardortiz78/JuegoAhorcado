var palabras = ["Esfera", "Fosforo", "Lucidez", "Economia", "Estatua", "Bateria", "Codorniz", "Programar", "Leyenda", "Canario"];
var random = Math.floor(Math.random()*palabras.length);
var escogerPalabra = palabras[random];

console.log(escogerPalabra);
console.log(escogerPalabra.length)

var palabraConGuiones = escogerPalabra.replace(/./g, " _");
pincel.fillStyle="white"
pincel.font="bold italic 24px arial";
pincel.fillText(palabraConGuiones,20,120)











 



