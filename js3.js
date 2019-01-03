/*    by Chtiwi Malek      */
/* http://www.codicode.com */
var mousePressed = false;
var lastX, lastY;
var ctx;

$(window).ready(function () {
  canv = document.getElementById('myCanvas');
  ctx = canv.getContext("2d");
  canv.width  = $(window).width();
  canv.height = 1000;
  
  $('#myCanvas').mousedown(function (e) {
    mousePressed = true;
    //Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
    Draw(e.pageX, e.pageY, false);
  });
  
  $('#myCanvas').mousemove(function (e) {
    if (mousePressed) {
      //Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
      Draw(e.pageX , e.pageY , true);
    }
  });
  
  $('#myCanvas').mouseup(function (e) {
    mousePressed = false;
  });
  $('#myCanvas').mouseleave(function (e) {
    mousePressed = false;
  });
});

function Draw(x, y, isDown) {
  if (isDown) {
    ctx.beginPath();
    ctx.strokeStyle = $('#selColor').val();
    ctx.lineWidth = $('#selWidth').val();
    ctx.lineJoin = "round";
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
  }
  lastX = x; lastY = y;
}

function clearArea() {
  // Use the identity matrix while clearing the canvas
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}