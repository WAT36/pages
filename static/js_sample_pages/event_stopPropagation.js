window.onload = function() {
    var target = document.getElementById('target2');

    target.addEventListener('mousemove',function(event){
        this.innerText = 'このp要素(target)にカーソルを持ってくると・・　→　赤くなる！';
        this.style.color = "red";
        event.stopPropagation();  //伝播をストップさせる。
    });

    var main = document.getElementById('main2');

    main.addEventListener('mousemove',function(){
        this.innerText = 'このp要素にカーソルを置くと・・・・　→　青くなる！';
        this.style.color = "blue";
    });
};