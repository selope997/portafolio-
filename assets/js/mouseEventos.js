document.addEventListener("mousedown", startDrawing);
document.addEventListener("mousemove", keepDrawing); // every time the mouse moves it will draw if left click is been pressed 
document.addEventListener("mouseup", finishDrawing);

var canvas = document.getElementById("canvas");
var paper = canvas.getContext("2d");
var isMouseActive = false;
var coulor; 
console.log(isMouseActive);

function setCoulor(option)
{
  if(option === 1)
  {
    coulor = "red";
  }
  else if (option == 2)
  {
    coulor = "blue"
  }
  else if (option == 3)
  {
    coulor = "purple"
  }
}

function drawLine(coulor, xStart, yStart, xFinal, yFinal, canvas)
{
  canvas.beginPath();
  canvas.strokeStyle = coulor;
  canvas.lineWidth = 2
  canvas.moveTo(xStart, yStart);
  canvas.lineTo(xFinal, yFinal);
  canvas.stroke();
  canvas.closePath();
}

function startDrawing(event)
 {
   var x = event.offsetX;
   var y = event.offsetY;
   isMouseActive = true;
   console.log(isMouseActive);
   drawLine(coulor, x-1, y-1, x+1, y+1, paper);
   //drawLine("green", x, y, x, y, paper);
 }

  function keepDrawing (event)
  {
   if(isMouseActive == true)
   {
    var x = event.offsetX;
    var y = event.offsetY;
    drawLine(coulor, x-1, y-1, x+1, y+1, paper);
   }
  }


function finishDrawing()
{
  isMouseActive = false;
  console.log(isMouseActive);
}

