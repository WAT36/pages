window.onload = function() {
    var target = document.getElementById('target');

    target.addEventListener('click',function(){
        this.innerText = 'ここにカーソルを持ってくると・・　→　赤くなる！';
    },false);
}