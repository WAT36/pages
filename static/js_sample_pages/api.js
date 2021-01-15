var canvas = document.getElementById('sample');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.rect(0,0,100,100);
ctx.strokeStyle = '#F00';
ctx.fillStyle = '#FF0';
ctx.stroke();
ctx.fill();