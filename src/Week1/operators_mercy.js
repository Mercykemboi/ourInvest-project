// String Concatenation
function greetUserConcat(name, investment) {
    return "Hello, " + name + "! Your current investment is $" + investment + ".";
}

console.log(greetUserConcat("Alice", 1500)); 
// Output: Hello, Alice! Your current investment is $1500.

// Template Literals
function greetUserTemplate(name, investment) {
    return `Hello, ${name}! Your current investment is $${investment}.`;
}

console.log(greetUserTemplate("Bob", 2000)); 
// Output: Hello, Bob! Your current investment is $2000.



/*
Exercise 1:
Create a function displayInvestmentDetails that takes a user's name, investment amount, and risk category, then returns a formatted string using template literals.
*/
function displayInvestmentDetails(name, investment, riskCategory) {
    return `Hello, ${name}! Your investment amount is Ksh ${investment}, and your risk category is "${riskCategory}".`;
}

console.log(displayInvestmentDetails("Kemboi", 7000, "High"));
// Output: Hello, Kemboi! Your investment amount is ksh 7000, and your risk category is "High".

/*
Exercise 2:
Develop a function updateInvestmentMessage that dynamically updates the investment message based on user actions (e.g., adding funds).
*/
function updateInvestmentMessage(name, currentInvestment, changeAmount, action) {
    let newInvestment;
    let actionMessage;

    if (action === "add") {
        newInvestment = currentInvestment + changeAmount;
        actionMessage = `added Ksh ${changeAmount}`;
    } else if (action === "withdraw") {
        newInvestment = currentInvestment - changeAmount;
        actionMessage = `withdrew Ksh ${changeAmount}`;
    } else {
        return "Invalid action. Please use 'add' or 'withdraw'.";
    }

    return `Hello, ${name}! You have ${actionMessage} to your account. Your new investment total is Ksh ${newInvestment}.`;
}

console.log(updateInvestmentMessage("Mercy", 5000, 9000, "add"));
// Output: Hello, Mercy! You have added ksh 9000 to your account. Your new investment total is ksh 14000.

console.log(updateInvestmentMessage("Kemboi", 4000, 500, "withdraw"));
// Output: Hello, Kemboi! You have withdrew ksh 500 to your account. Your new investment total is ksh 3500.

console.log(updateInvestmentMessage("Sly", 4000, 500, "invalid"));
// Output: Invalid action. Please use 'add' or 'withdraw'.
