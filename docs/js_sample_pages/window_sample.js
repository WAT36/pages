window.onload = function() {
    var h = document.getElementById('height');
    h.innerText = window.innerHeight + 'px';

    var l = document.getElementById('length');
    l.innerText = window.innerWidth + 'px';
};

window.onresize = function() {
    var h = document.getElementById('height');
    h.innerText = window.innerHeight + 'px';

    var l = document.getElementById('length');
    l.innerText = window.innerWidth + 'px';
};