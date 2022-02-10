function dibujar() {
    var canvas = document.getElementById("canvas");
    var pincel =canvas.getContext("2d");

    pincel.fillStyle= "white";
    pincel.beginPath(390,1000)
    pincel.moveTo(370,980)
  }

dibujar();

