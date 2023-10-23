let celsiusInput = document.querySelector("#celsiusInput");
let fahrenheitInput = document.querySelector("#fahrenheitInput");
let kelvinInput = document.querySelector("#kelvinInput");
let clearButton = document.querySelector("#clearButton");

function roundNumber(number) {
  return Math.round(number * 100) / 100;
}

function convertTemperatures() {
  let cTemp = parseFloat(celsiusInput.value);
  let fTemp = (cTemp * 9) / 5 + 32;
  let kTemp = cTemp + 273.15;

  fahrenheitInput.value = roundNumber(fTemp);
  kelvinInput.value = roundNumber(kTemp);
}

celsiusInput.addEventListener("input", convertTemperatures);
fahrenheitInput.addEventListener("input", function () {
  let fTemp = parseFloat(fahrenheitInput.value);
  let cTemp = ((fTemp - 32) * 5) / 9;
  let kTemp = ((fTemp - 32) * 5) / 9 + 273.15;

  celsiusInput.value = roundNumber(cTemp);
  kelvinInput.value = roundNumber(kTemp);
});
kelvinInput.addEventListener("input", function () {
  let kTemp = parseFloat(kelvinInput.value);
  let cTemp = kTemp - 273.15;
  let fTemp = ((kTemp - 273.15) * 9) / 5 + 32;

  celsiusInput.value = roundNumber(cTemp);
  fahrenheitInput.value = roundNumber(fTemp);

  let cTemp2 = parseFloat(celsiusInput.value);
  if (!isNaN(cTemp)) {
    let fTemp = (cTemp * 9) / 5 + 32;
    let kTemp = cTemp2 + 273.15;

    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
  } else {
    if (celsiusInput.value === "")
      alert("Please enter a valid numerical value");
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
  }
});

celsiusInput.addEventListener("input", convertTemperatures);

fahrenheitInput.addEventListener("input", function () {
  let fTemp = parseFloat(fahrenheitInput.value);
  if (!isNaN(fTemp)) {
    let cTemp = ((fTemp - 32) * 5) / 9;
    let kTemp = ((fTemp - 32) * 5) / 9 + 273.15;

    celsiusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
  } else {
    if (fahrenheitInput.value !== "")
      alert("Please enter a valid numerical value");
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
  }
});
kelvinInput.addEventListener("input", function () {
  let kTemp = parseFloat(kelvinInput.value);
  if (!isNaN(kTemp)) {
    let cTemp = kTemp - 273.15;
    let fTemp = ((kTemp - 273.15) * 9) / 5 + 32;

    celsiusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);
  } else {
    if (fahrenheitInput.value !== "")
      alert("Please enter a valid numerical value");
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
  }
});

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


//For ConactUs
function toggleContactForm() {
  var contactForm = document.getElementById("collapseExample");
  if (contactForm) {
      contactForm.classList.toggle("show");
  }
}

function mailto(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const object = {};
    data.forEach((value, key) => (object[key] = value));

    var name = object["contact_name"];
    var place = object["contact_place"];
    var email = "neelmishra9125@gmail.com";

    var subject = `Name: ${name} and Place: ${place}`;
    var encodedSubject = encodeURI(subject);
    var mailto_link = "mailto:" + email + `?subject=${encodedSubject}`;

    window.location.href = mailto_link;
    
    document.getElementById("contact").reset();
}

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
  