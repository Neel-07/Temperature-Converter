let celsiusInput = document.querySelector('#celsiusInput');
let fahrenheitInput = document.querySelector('#fahrenheitInput');
let kelvinInput = document.querySelector('#kelvinInput');
let clearButton = document.querySelector('#clearButton');

function roundNumber(number) {
    return Math.round(number * 100) / 100;
}

function convertTemperatures() {
    let cTemp = parseFloat(celsiusInput.value);
    if (!isNaN(cTemp)) {
    let fTemp = (cTemp * 9/5) + 32;
    let kTemp = cTemp + 273.15;

    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
    }
    else 
    {
        celsiusInput.value = "";
        fahrenheitInput.value="";
        kelvinInput.value="";
    }
}

celsiusInput.addEventListener('input', convertTemperatures);
fahrenheitInput.addEventListener('input', function() {
    let fTemp = parseFloat(fahrenheitInput.value);
    if (!isNaN(fTemp)) {
    let cTemp = (fTemp - 32) * 5/9;
    let kTemp = (fTemp - 32) * 5/9 + 273.15;

    celsiusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
    }
    else 
    {
        celsiusInput.value = "";
        fahrenheitInput.value="";
        kelvinInput.value="";
    }
});
kelvinInput.addEventListener('input', function() {
    let kTemp = parseFloat(kelvinInput.value);
    if (!isNaN(kTemp)) {

    let cTemp = kTemp - 273.15;
    let fTemp = (kTemp - 273.15) * 9/5 + 32;

    celsiusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);
    }
    else 
    {
        celsiusInput.value = "";
        fahrenheitInput.value="";
        kelvinInput.value="";
    }
});

clearButton.addEventListener('click', function() {
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
});
