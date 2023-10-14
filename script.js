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
});

clearButton.addEventListener("click", function () {
  celsiusInput.value = "";
  fahrenheitInput.value = "";
  kelvinInput.value = "";
});

// Function to copy the current website URL to the clipboard
function copyWebsiteURLToClipboard() {
  const currentURL = window.location.href;

  // Create a temporary input element to select and copy the URL
  const tempInput = document.createElement("input");
  document.body.appendChild(tempInput);
  tempInput.value = currentURL;
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  alert("Website URL copied to clipboard!");
}

// Add a click event listener to the "Copy Website URL" button
const copyButton = document.getElementById("copy-button");
copyButton.addEventListener("click", copyWebsiteURLToClipboard);
