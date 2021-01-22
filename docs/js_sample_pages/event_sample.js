window.onload = function() {
    var target = document.getElementById('target');

    target.addEventListener('mousemove',function(){
        this.innerText = 'ここにカーソルを持ってくると・・　→　赤くなる！';
        this.style.color = "red";
    });

    var target2 = document.getElementById('target2');

    target2.addEventListener('mousemove',function(){
        this.innerText = 'このp要素(target)にカーソルを持ってくると・・　→　赤くなる！';
        this.style.color = "red";
    });

    var main2 = document.getElementById('main2');

    main2.addEventListener('mousemove',function(){
        this.innerText = 'このp要素にカーソルを置くと・・・・　→　青くなる！';
        this.style.color = "blue";
    });

    var target3 = document.getElementById('target3');

    target3.addEventListener('mousemove',function(event){
        this.innerText = 'このp要素(target)にカーソルを持ってくると・・　→　赤くなる！';
        this.style.color = "red";
        event.stopPropagation();  //伝播をストップさせる。
    });

    var main3 = document.getElementById('main3');

    main3.addEventListener('mousemove',function(){
        this.innerText = 'このp要素にカーソルを置くと・・・・　→　青くなる！';
        this.style.color = "blue";
    });
};

function dragHandler(event){
    //動作結果を表示するオブジェクトを取得
    var p = document.getElementById("status");

    //ドラッグするデータの識別子をDataTransferオブジェクトにセット
    event.dataTransfer.setData("text","ドラッグされました！");

    //動作結果を表示
    p.innerHTML="ドラッグされました！";
}

function dropHandler(event){
    var p = document.getElementById("status");
    textdata = event.dataTransfer.getData('text');
    p.innerHTML = textdata + ' → ドロップされました！'
    event.preventDefault();
}