var i = 1;
var j = 1;
var v;

function inicia() {
    document.getElementById("capa1").style.display = "block";
    v = setInterval('verCaja()', 4000);
}

function verCaja() {
    for (j; j <= 4; j++) {
        document.getElementById("capa" + j).style.display = "none";
    }
    document.getElementById("capa" + i).style.display = "block";
    j = 1;
    i++;
    if (i === 5) {
        i = 1;
    }
    ;
}