//Length conversions METRIC
function kilometersConverted(){
    var kmInput = document.getElementById("meKil").value;
    var milesOutput = kmInput * 0.621371;
    document.getElementById("kmToMResult").value = milesOutput.toFixed(3);
}

function metersConverted(){
    var metersInput = document.getElementById("meMet").value;
    var yardsOutput = metersInput * 1.09361;
    document.getElementById("meterToYardResult").value = yardsOutput.toFixed(3);
}

function mmConverted(){
    var mmInput = document.getElementById("meMil").value;
    var inchOutput = mmInput * 0.0393701;
    document.getElementById("mmToInResult").value = inchOutput.toFixed(3);
}

function cmConverted(){
    var cmInput = document.getElementById("meCm").value;
    var inchOutputTwo = cmInput * 0.393701;
    document.getElementById("cmToInResult").value = inchOutputTwo.toFixed(3);
}

//Length conversions IMPERIAL
function milesConverted(){
    var milesInput = document.getElementById("imMiles").value;
    var kilometersOutput = milesInput * 1.609344;
    document.getElementById("mToKmResult").value = kilometersOutput.toFixed(3);
}

function yardsConverted(){
    var yardsInput = document.getElementById("imYards").value;
    var metersOutput = yardsInput * 0.9144;
    document.getElementById("yardToMeterResult").value = metersOutput.toFixed(3);
}

function inchesConverted(){
    var inchesInput = document.getElementById("imInchM").value;
    var mmOutput = inchesInput * 25.4;
    document.getElementById("inToMmResult").value = mmOutput.toFixed(3);
}

function inchesConvertedTwo(){
    var inchesInputTwo = document.getElementById("imInchC").value;
    var cmOutput = inchesInputTwo * 2.54;
    document.getElementById("inToCmResult").value = cmOutput.toFixed(3);
}



