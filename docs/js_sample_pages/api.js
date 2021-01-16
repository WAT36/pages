var canvas = document.getElementById('sample');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.rect(0,0,100,100);
ctx.strokeStyle = '#F00';
ctx.fillStyle = '#FF0';
ctx.stroke();
ctx.fill();

window.onload = function(){
    var title = document.getElementById('title');
    var boxes = document.getElementsByClassName('box');

    for(var i=0,l=boxes.length;i<l;i++){
        boxes[i].addEventListener('click',function(){
            title.style.color = this.id;
        })
    }
}