//read matrix of 16 nrs
//make a function that can find all positions of a certain nr + display it

function main() {
var input = prompt("Give in your 16nrs to have them converted into a multidimensional array:");
var multiArrayInput = createMultiArray(input);
console.log(multiArrayInput);

}

function createMultiArray(inputNr) { //we turn the input row of nrs into a multidimensional array
    var multiArr = []; // we'll add the input values into this array and turn it into a multidimensional array
    var n = 0; //we increment this value to go through all input nrs
    for (var i = 0; i < 4; i++) { //loop for the rows
        for (var j = 0; j < 4; j++) { //loop for the colums
            multiArr[i][j] = inputNr[n]; //we add the individual input value into the array
            console.log(multiArr[i][j]);
            n++;
        }
    } return multiArr;
}

main();