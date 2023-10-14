let celsiusInput = document.querySelector("#celsiusInput");
let fahrenheitInput = document.querySelector("#fahrenheitInput");
let kelvinInput = document.querySelector("#kelvinInput");
let clearButton = document.querySelector("#clearButton");

function roundNumber(number) {
  return Math.round(number * 100) / 100;
}

function fromCelsius() {
    let cTemp = parseFloat(celsiusInput.value);

    if (!isNaN(cTemp)){
        let fTemp = (cTemp * 9) / 5 + 32;
        let kTemp = cTemp + 273.15;

        fahrenheitInput.value = roundNumber(fTemp);
        kelvinInput.value = roundNumber(kTemp);
    }
  
}


function fromFahrenheit() {
    let fTemp = parseFloat(fahrenheitInput.value);

    if (!isNaN(fTemp)){
        let cTemp = ((fTemp - 32) * 5) / 9;
        let kTemp = ((fTemp - 32) * 5) / 9 + 273.15;

        celsiusInput.value = roundNumber(cTemp);
        kelvinInput.value = roundNumber(kTemp);
    }
}

function fromKelvin() {
    let kTemp = parseFloat(kelvinInput.value);

    if(!isNaN(kTemp)){
        let cTemp = kTemp - 273.15;
        let fTemp = ((kTemp - 273.15) * 9) / 5 + 32;

        celsiusInput.value = roundNumber(cTemp);
        fahrenheitInput.value = roundNumber(fTemp);
    }
    
}

celsiusInput.addEventListener('input', fromCelsius);
fahrenheitInput.addEventListener('input', fromFahrenheit);
kelvinInput.addEventListener('input', fromKelvin)

clearButton.addEventListener("click", function () {
  celsiusInput.value = "";
  fahrenheitInput.value = "";
  kelvinInput.value = "";
});

// Add a function to start the tour when the "Start Tour" button is clicked
document
  .getElementById("startTourButton")
  .addEventListener("click", function () {
    introJs()
      .setOptions({
        steps: [
          {
            element: document.getElementById("celsius"),
            intro: "Enter a temperature in Celsius here.",
          },
          {
            element: document.getElementById("fahrenheit"),
            intro: "Enter a temperature in Fahrenheit here.",
          },
          {
            element: document.getElementById("kelvin"),
            intro: "Enter a temperature in Kelvin here.",
          },
          {
            element: document.getElementById("clearButton"),
            intro: "Click this button to clear all inputs.",
          },
        ],
      })
      .start();
  });

// For tooltip

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
