function main() {
    var input = Number(userInput()); //makes a nr out of the result you got out of this function
    var zeef = createPrimeZeef(input);
    printArray(zeef);
}

function userInput() {
    var input = prompt("Gief me a nr bigger than 1! ");
    return input;
}

function createPrimeZeef(limit) { //zeef strategy = we maken eerst een array met alleen trues in
    var array = [];
    array = fillArray(limit, array, true);
    for (var i = 0; i < array.length; i++) {
        if (i <= 1) {
            array[i] = false;
        }
        else {
            if (array[i]) {
                var sum = i + i;
                do {
                    if (sum < array.length && array[sum]) {
                        array[sum] = false;
                    }
                    sum += i;
                } while (sum <= array.length)
            }
        }
    }
    return array;
}

function fillArray(limit, arr, value) { //
    for (var i = 0; i < limit; i++) {
        arr[i] = value;
    }
    return arr;
}
function printArray(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i]) {
            console.log(i);
        }
    }
}

main();