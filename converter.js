const readline = require('readline');

// Fixed exchange rates (for demonstration purposes)
const FIXED_RATE_USD_TO_INR = 82; // 1 USD = 82 INR
const FIXED_RATE_INR_TO_USD = 1 / FIXED_RATE_USD_TO_INR; // 1 INR = (1/82) USD

// Create a readline interface for command-line interaction
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to convert Rupees to Dollars
function rupeesToDollars(inrAmount) {
    const dollarAmount = inrAmount * FIXED_RATE_INR_TO_USD;
    console.log(`${inrAmount} INR is equal to ${dollarAmount.toFixed(2)} USD`);
}

// Function to convert Dollars to Rupees
function dollarsToRupees(usdAmount) {
    const inrAmount = usdAmount * FIXED_RATE_USD_TO_INR;
    console.log(`${usdAmount} USD is equal to ${inrAmount.toFixed(2)} INR`);
}

// Function to display the menu
function showMenu() {
    console.log(`
    ==== Currency Converter ====
    1. Convert INR to USD
    2. Convert USD to INR
    3. Exit
    `);
    rl.question('Choose an option (1/2/3): ', handleChoice);
}

// Function to handle the user's menu choice
function handleChoice(choice) {
    switch (choice.trim()) {
        case '1': // Convert INR to USD
            rl.question('Enter amount in INR: ', (amount) => {
                const inrAmount = parseFloat(amount);
                if (!isNaN(inrAmount) && inrAmount > 0) {
                    rupeesToDollars(inrAmount);
                } else {
                    console.log('Invalid input. Please enter a positive number.');
                }
                showMenu(); // Show the menu again
            });
            break;
        case '2': // Convert USD to INR
            rl.question('Enter amount in USD: ', (amount) => {
                const usdAmount = parseFloat(amount);
                if (!isNaN(usdAmount) && usdAmount > 0) {
                    dollarsToRupees(usdAmount);
                } else {
                    console.log('Invalid input. Please enter a positive number.');
                }
                showMenu(); // Show the menu again
            });
            break;
        case '3': // Exit
            console.log('Thank you for using the currency converter!');
            rl.close();
            break;
        default: // Invalid choice
            console.log('Invalid choice. Please choose 1, 2, or 3.');
            showMenu(); // Show the menu again
    }
}

// Start the application
showMenu();

