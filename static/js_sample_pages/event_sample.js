window.onload = function() {
    var target = document.getElementsByTagName('p');

    target.addEventListener('',function(){
        this.innerText = 'ここにカーソルを持ってくると・・　→　赤くなる！'
        this.style.color = "red";
    });
}