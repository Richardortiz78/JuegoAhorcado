  
var canvas = document.getElementById("canvas");
var pincel =canvas.getContext("2d");

function cadalso() {
    

    pincel.fillStyle= "brown";
    pincel.fillRect(220,120, 60,08);
    pincel.fillRect(245,28, 10,100);
    pincel.fillRect(150,20, 120,08);
    pincel.fillRect(150,28, 10,20);
    
    pincel.beginPath()
	  pincel.moveTo(200,20);
	  pincel.lineTo(248,45);
	  pincel.lineTo(248,55);
	  pincel.fill();
  }
  

function cabeza(){
   
    pincel.lineWidth=4;
    pincel.fillStyle="white";
    pincel.beginPath();
    pincel.arc(155,60,10,0,Math.PI*2, true);
    pincel.stroke();
  }

function torso(){

    pincel.beginPath();
    pincel.moveTo(155,71);
    pincel.lineTo(155,91);
    pincel.stroke();
  }
  
function brazos(){
    pincel.beginPath();
    pincel.moveTo(155,71);
    pincel.lineTo(190,91);
    pincel.stroke();
    pincel.moveTo(155,71);
    pincel.lineTo(126,91);
    pincel.stroke();
  }
    
function piernas(){

    pincel.beginPath();
    pincel.moveTo(155,91);
    pincel.lineTo(190,111);
    pincel.stroke();
    pincel.moveTo(155,91);
    pincel.lineTo(126,111);
    pincel.stroke();

    }

    function dibujarPalabra(){
      pincel.fillStyle="white";
      pincel.font="bold italic 24px arial"
      pincel.fillText(palabraConGuiones,21,120);
    }


  

