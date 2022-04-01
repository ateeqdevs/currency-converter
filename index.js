const input = require("sync-input");
let currencies = {
  USD: 1,
  JPY: 113.5,
  EUR: 0.89,
  RUB: 74.36,
  GBP: 0.75,
  convert: function (fromConvet, toConvet, amount, usdValue) {
    switch (toConvet) {
      case "JPY":
        console.log(
          `Result: ${amount} ${fromConvet} equals ${Math.abs(
            usdValue * this.JPY
          ).toFixed(4)} JPY`
        );
        break;
      case "EUR":
        console.log(
          `Result: ${amount} ${fromConvet} equals ${Math.abs(
            usdValue * this.EUR
          ).toFixed(4)} EUR`
        );
        break;
      case "RUB":
        console.log(
          `Result: ${amount} ${fromConvet} equals ${Math.abs(
            usdValue * this.RUB
          ).toFixed(4)} RUB`
        );
        break;
      case "USD":
        console.log(
          `Result: ${amount} ${fromConvet} equals ${Math.abs(
            usdValue * this.USD
          ).toFixed(4)} USD`
        );
        break;
      case "GBP":
        console.log(
          `Result: ${amount} ${fromConvet} equals ${Math.abs(
            usdValue * this.GBP
          ).toFixed(4)} GBP`
        );
        break;
    }
  },
};

// Start of  Wellcome Message
console.log("Welcome to Currency Converter!");
console.log(`1 USD equals  ${currencies.USD} USD`);
console.log(`1 USD equals  ${currencies.JPY} JPY`);
console.log(`1 USD equals  ${currencies.EUR} EUR`);
console.log(`1 USD equals  ${currencies.RUB} RUB`);
console.log(`1 USD equals  ${currencies.GBP} GBP`);
let exit = false;
let menu;
while (!exit) {
  console.log("What do you want to do?");
  console.log("1-Convert currencies 2-Exit program");
  menu = input();
  if (menu == 1) {
    datapocess();
  } else if (menu == 2) {
    console.log("Have a nice day!");
    break;
  } else {
    console.log("Unknown input");
  }
}
// Ending of Wellcome Message
function datapocess() {
  console.log("What do you want to convert?");
  let phaseOne = false;
  let fromConvet = input("From: ");
  fromConvet = fromConvet.toUpperCase();
  let usdConvertedValue;
  switch (fromConvet) {
    case "USD":
    case "JPY":
    case "EUR":
    case "RUB":
    case "GBP":
      phaseOne = true;
      break;
    default:
      console.log("Unknown currency");
  }

  let toConvet;

  let amount;
  if (phaseOne) {
    toConvet = input("To: ");
    toConvet = toConvet.toUpperCase();
    switch (toConvet) {
      case "USD":
      case "JPY":
      case "EUR":
      case "RUB":
      case "GBP":
        amount = input("Amount: ");
        if (amount < 1) {
          console.log("The amount can not be less than 1");
        } else if (isNaN(amount) !== false) {
          console.log("The amount has to be a number");
        } else {
          amount = parseInt(amount);
          switch (fromConvet) {
            case "USD":
              usdConvertedValue = amount / currencies.USD;
              break;
            case "JPY":
              usdConvertedValue = amount / currencies.JPY;
              break;
            case "EUR":
              usdConvertedValue = amount / currencies.EUR;
              break;
            case "RUB":
              usdConvertedValue = amount / currencies.RUB;
              break;
            case "GBP":
              usdConvertedValue = amount / currencies.GBP;
          }
          currencies.convert(fromConvet, toConvet, amount, usdConvertedValue);
        }
        break;
      default:
        console.log("Unknown currency");
    }
  }
}
