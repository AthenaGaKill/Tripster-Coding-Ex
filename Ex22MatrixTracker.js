//read matrix of 16 nrs
//store it in a multidimensial array
//make a function that can find all positions of a certain nr + display it

function main() {
    var input = prompt("Give in your 16 nr code. We'll put it in a multi dimensional array for you: ");
    inputArr = input.split(); //we turn the nr string input into an array
    var multiArray = createMultiArray(inputArr);
    console.log(multiArray);
}

function createMultiArray(inputNr) { //we turn the input row of nrs into a multidimensional array
    var multiArr = []; // we'll add the input values into this array and turn it into a multidimensional array
    for (var i = 0; i < inputNr.length; i++) { //loop for the rows
        for (var j = 0; j < inputNr[i].length; j++) { //loop for the colums
            multiArr[i][j] = inputNr[i]; //we add the individual input value into the array
            console.log(multiArr[i][j]);
        }
    } return multiArr;
}
main();