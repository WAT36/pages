window.onload = function() {
    var target = document.getElementById('target');

    target.addEventListener('mousemove',function(){
        this.innerText = 'このp要素(target)にカーソルを持ってくると・・　→　赤くなる！';
        this.style.color = "red";
    });

    var main = document.getElementById('main');

    main.addEventListener('mousemove',function(){
        this.innerText = 'このp要素にカーソルを置くと・・・・　→　青くなる！';
        this.style.color = "blue";
    });
};