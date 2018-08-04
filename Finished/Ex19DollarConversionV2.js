function main() {
    // the user will give in a certain amount of dollars
    var inputDollars = prompt("Give in the amount of dollars you like to see converted:");
    // the user will then chose to what he wants to convert to: Pounds, Lira, Francs, Marks or Yen
    var inputChoice = prompt("What do you want to convert to? You can chose between: Pounds, Lira, Francs, Marks or Yen.");
    //all letter need to be converted to Uppercase
    var inputUppercase = inputChoice.toUpperCase();
    //we need a system to check if they pick one of the options and no other
    checkAndPrint(inputUppercase, inputDollars);
}

function checkAndPrint(input, inputDollars) {
    switch (input) {
        case "POUNDS":
            var pound = 0.76; 
            console.log("$" + inputDollars + " CONVERTS TO" + " " + conversion(inputDollars, pound) + " Pounds"); break;
        case "LIRA":
            var lira = 4.82; 
            console.log("$" + inputDollars + " CONVERTS TO" + " " + conversion(inputDollars, lira) + " Lira"); break;
        case "FRANCS":
            var franc = 1; 
            console.log("$" + inputDollars + " CONVERTS TO" + " " + conversion(inputDollars, franc) + " Francs"); break;
        case "MARKS":
            var marks = 1.67; 
            console.log("$" + inputDollars + " CONVERTS TO" + " " + conversion(inputDollars, marks) + " Marks"); break;
        case "YEN":
            var yen = 112.68; 
            console.log("$" + inputDollars + " CONVERTS TO" + " " + conversion(inputDollars, yen) + " Yen"); break;
        default: console.log("Chose between Pounds, Lira, Francs, Marks or Yen please...");
    }
}

function conversion(amountInDollars, coinChoice) {
    var converted = (amountInDollars * coinChoice);
    converted = converted.toFixed(2); // we round to 2 decimal places
    return converted;
}

main();