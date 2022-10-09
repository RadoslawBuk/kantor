let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let inputCurrencyElement = document.querySelector(".js-inputCurrency");
let outputCurrencyElement = document.querySelector(".js-outputCurrency");
let resultElement = document.querySelector(".js-result");

let pln = 1;
let eur = 4.86;
let usd = 4.95;
let gbd = 5.52;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let inputCurrency = inputCurrencyElement.value;
  let outputCurrency = outputCurrencyElement.value;
  let amount = amountElement.value;

  switch (inputCurrency) {
    case "PLN":
      switch (outputCurrency) {
        case "PLN":
          result = amount * 1;
          break;
        case "EUR":
          result = (amount * pln) / eur;
          break;
        case "USD":
          result = (amount * pln) / usd;
          break;
        case "GBD":
          result = (amount * pln) / gbd;
          break;
      }
      break;
    case "EUR":
      switch (outputCurrency) {
        case "EUR":
          result = amount * 1;
        case "USD": 
          result = (amount * eur) / usd;
        case "GBD": 
          result = (amount * eur) / gbd;
        case "PLN": 
          result = (amount * eur) / pln;
      }
      break;
    case "USD":
      switch (outputCurrency) {
        case "USD": 
          result = amount * 1;
        case "EUR": 
          result = (amount * usd) / eur;
        case "GBD": 
          result = (amount * usd) / gbd;
        case "PLN": 
          result = (amount * usd) / pln;
      }
      break;
    case "GBD":
      switch (outputCurrency) {
        case "GBD": 
          result = amount * 1;
        case "EUR": 
          result = (amount * gbd) / eur;
        case "USD": 
          result = (amount * gbd) / usd;
        case "PLN": 
          result = (amount * gbd) / pln;
      break;
  }}

  resultElement.innerText = `${result.toFixed(2)} ${
    outputCurrencyElement.value
  }`;
});
