// convert dollars to Pounds, Lira, Francs, Marks or Yen
// input in dollar => converted to an output in whatever the person chose before
// $... CONVERTS TO Pound,Lira.... 
// round to 2 decimal places
// all letters are UPPERCASE

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

    function checkAndPrint(input, inputDollars){
        switch(input){
            case "POUNDS": console.log("$" + inputDollars + " CONVERTS TO" + " " + dollarsToPounds(inputDollars) + " Pounds"); break;
            case "LIRA": console.log("$" + inputDollars + " CONVERTS TO" + " " + dollarsToLira(inputDollars) + " Lira"); break;
            case "FRANCS": console.log("$" + inputDollars + " CONVERTS TO" + " " + dollarsToFrancs(inputDollars) + " Francs"); break;
            case "MARKS": console.log("$" + inputDollars + " CONVERTS TO" + " " + dollarsToMarks(inputDollars) + " Marks"); break;
            case "YEN": console.log("$" + inputDollars + " CONVERTS TO" + " " + dollarsToYen(inputDollars) + " Yen"); break;
            default: console.log("Chose between Pounds, Lira, Francs, Marks or Yen please...");
        }
    }
//WE MAKE A SEPERATE FUNCTION FOR EACH OPTION
function dollarsToPounds(amountInDollars){ //input needs to be linked to this
    // $1 = 0.76
    var pound = 0.76; //since it is ever changing we make a seperate var out of it so it is easy adjustable
    var converted = (amountInDollars * pound);
    converted = converted.toFixed(2); // we round to 2 decimal places
    return converted;
}

function dollarsToLira(amountInDollars) { //input needs to be linked to this
    // $1 = 4.82 Lira
    var lira = 4.82; // since it is ever changing we make a seperate var out of it so it is easy adjustable
    var converted = (amountInDollars * lira);
    converted = converted.toFixed(2); // we round to 2 decimal places
    return converted;
}

function dollarsToFrancs(amountInDollars) { //input needs to be linked to this
    // $1 = 1 Franc
    // since it changes a lot I decided to still write this calculation out even though they are equal at this point
    var franc = 1; // since it is ever changing we make a seperate var out of it so it is easy adjustable
    var converted = (amountInDollars * franc);
    converted = converted.toFixed(2); // we round to 2 decimal places 
    return converted;
}

function dollarsToMarks(amountInDollars) { //input needs to be linked to this
    // $1 = 1.67 marks
    var marks = 1.67; // since it is ever changing we make a seperate var out of it so it is easy adjustable
    var converted = (amountInDollars * marks);
    converted = converted.toFixed(2); // we round to 2 decimal places 
    return converted;
}

function dollarsToYen(amountInDollars) { //input needs to be linked to this
    // $1 = 112.68 yen
    var yen = 112.68; // since it is ever changing we make a seperate var out of it so it is easy adjustable
    var converted = (amountInDollars * yen);
    converted = converted.toFixed(2); // we round to 2 decimal places 
    return converted;
}

main();