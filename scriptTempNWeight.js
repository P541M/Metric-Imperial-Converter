//Temperature and weight conversions METRIC
function celsiusConverted(){
    var celInput = document.getElementById("meCel").value;
    var fahOutput = celInput * 9/5 + 32;
    document.getElementById("celToFaResult").value = fahOutput.toFixed(3);
}

function kelvConverted(){
    var kelvInput = document.getElementById("meKel").value;
    var rankOutput = kelvInput * 1.8;
    document.getElementById("kelvToRaResult").value = rankOutput.toFixed(3);
}

function kilConverted(){
    var kilInput = document.getElementById("meKg").value;
    var poundOutput = kilInput * 2.20462;
    document.getElementById("kgToLbsResult").value = poundOutput.toFixed(3);
}

function ounceConverted(){
    var ounceInput = document.getElementById("meOun").value;
    var gramOutput = ounceInput * 28.3495;
    document.getElementById("ounchToGrResult").value = gramOutput.toFixed(3);
}

//Temperature and weight conversions IMPERIAL
function fahConverted(){
    var fahInput = document.getElementById("imFah").value;
    var celOutput = ((fahInput-32) * 5/9);
    document.getElementById("faToCelResult").value = celOutput.toFixed(3);
}

function rankConverted(){
    var rankInput = document.getElementById("imRank").value;
    var kelvOutput = rankInput * 0.555556;
    document.getElementById("raToKelvResult").value = kelvOutput.toFixed(3);
}

function poundConverted(){
    var poundInput = document.getElementById("imPound").value;
    var kiloOutput = poundInput * 0.453592;
    document.getElementById("lbsToKgResult").value = kiloOutput.toFixed(3);
}

function gramConverted(){
    var gramInput = document.getElementById("imGram").value;
    var ounceOutput = gramInput * 0.035274;
    document.getElementById("grToOunceResult").value = ounceOutput.toFixed(3);
}






