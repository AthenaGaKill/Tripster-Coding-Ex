//read matrix of 16 nrs
//make a function that can find all positions of a certain nr + display it

function main() {
    do {
        var input = prompt("Give in your 16nrs to have them converted into a multidimensional array:");
    } while (input.length != 16);

    var multiArrayInput = createMultiArray(input);
    console.log(multiArrayInput);

    var pickANr = prompt("Which nr do you wish to find the positions of?");
    var position = findPosition(pickANr, multiArrayInput);
    console.log(position);
}

function findPosition(pickedNr, multiArrInput) {
    var positions = [];
    for (var i = 0; i < 4; i++) { //loop for the rows     
        positions[i] = [];
        for (var j = 0; j < 4; j++) { //loop for the colums
            if (multiArrInput[i][j] == pickedNr) {
                // positions += multiArrInput[i][j].indexOf(pickedNr);
                positions[positions.length] = multiArrInput[i][j];
                console.log((multiArrInput[i][j]));
            }
        }
    } console.log(positions);
    return positions;
}

function createMultiArray(inputNr) { //we turn the input row of nrs into a multidimensional array
    var multiArr = []; // we'll add the input values into this array and turn it into a multidimensional array
    var n = 0; //we increment this value to go through all input nrs

    for (var i = 0; i < 4; i++) { //loop for the rows
        multiArr[i] = []; //we define het multidim array
        for (var j = 0; j < 4; j++) { //loop for the colums
            multiArr[i][j] = inputNr[n]; //we add the individual input value into the array (x4 first loop x 4 second loop = 16)
            console.log(multiArr[i][j]);
            n++;
        }
    } return multiArr;
}

main();