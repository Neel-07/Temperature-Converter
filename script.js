let celsiusInput = document.querySelector('#celsiusInput');
let fahrenheitInput = document.querySelector('#fahrenheitInput');
let kelvinInput = document.querySelector('#kelvinInput');
let clearButton = document.querySelector('#clearButton');

function roundNumber(number) {
    return Math.round(number * 100) / 100;
}

function convertTemperatures() {
    let cTemp = parseFloat(celsiusInput.value);
    let fTemp = (cTemp * 9/5) + 32;
    let kTemp = cTemp + 273.15;

    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
}

celsiusInput.addEventListener('input', convertTemperatures);
fahrenheitInput.addEventListener('input', function() {
    let fTemp = parseFloat(fahrenheitInput.value);
    let cTemp = (fTemp - 32) * 5/9;
    let kTemp = (fTemp - 32) * 5/9 + 273.15;

    celsiusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
});
kelvinInput.addEventListener('input', function() {
    let kTemp = parseFloat(kelvinInput.value);
    let cTemp = kTemp - 273.15;
    let fTemp = (kTemp - 273.15) * 9/5 + 32;

    celsiusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);
});

clearButton.addEventListener('click', function() {
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
});
