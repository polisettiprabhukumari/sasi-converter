const readline = require('readline');

// Fixed exchange rate
const EXCHANGE_RATE = 82.5; // 1 USD = 82.5 INR

// Create readline interface for CLI
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the INR-USD Converter!");
console.log(`Fixed Exchange Rate: 1 USD = ${EXCHANGE_RATE} INR`);
console.log("Choose an option:");
console.log("1. Convert INR to USD");
console.log("2. Convert USD to INR");
console.log("3. Exit");

const convert = (amount, rate) => amount / rate;

const promptUser = () => {
  rl.question("Enter your choice (1, 2, or 3): ", (choice) => {
    if (choice === "1") {
      rl.question("Enter amount in INR: ", (amount) => {
        const converted = convert(parseFloat(amount), EXCHANGE_RATE).toFixed(2);
        console.log(`${amount} INR = ${converted} USD\n`);
        promptUser();
      });
    } else if (choice === "2") {
      rl.question("Enter amount in USD: ", (amount) => {
        const converted = (parseFloat(amount) * EXCHANGE_RATE).toFixed(2);
        console.log(`${amount} USD = ${converted} INR\n`);
        promptUser();
      });
    } else if (choice === "3") {
      console.log("Exiting the converter. Goodbye!");
      rl.close();
    } else {
      console.log("Invalid choice. Please try again.\n");
      promptUser();
    }
  });
};

promptUser();

