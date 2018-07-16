function main() {
    var input = Number(userInput()); //makes a nr out of the result you got out of this function
    var zeef = createPrimeZeef(input);

}

function userInput() {
    var input = prompt("Gief me a nr bigger than 1! ");
    return input;
}

function createPrimeZeef(limit) { //zeef strategy = we maken eerst een array met alleen trues in
    var array = 

}

function fillArray(limit, arr, value) { //
    for (var i = 0; i < limit; i++) {
        arr[i] = value;
    }
    return arr;
}
main();