function funcao(){
    var pes = (document.getElementById("l1").value);
    var metro = (pes * 0.3048);
    var km = (pes * 0.0003048);
    document.getElementById("Km").innerHTML = "PÉS CONVERTIDO EM KM: " + km;
    document.getElementById("metros").innerHTML = "PÉS CONVERTIDO EM METRO: " + metro;
}
