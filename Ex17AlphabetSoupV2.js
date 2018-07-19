//take a string and return it with the letters in alphabetical order
//hello => ehllo

function main() {
    //the user can pick a word he wants to see alphabetised
    var input = prompt("Which word would you like to see alphabetised?");
    input = input.split(""); //we make it an offical array so we can replace elements later on
    alert("Here is your foeking alphabetised word: " + operationReplacement(input));
}

function operationReplacement(word) {
    for (var i = 0; i < word.length; i++) {
        //the j index always needs to be 1 higher than the i index
        //and since we swap this one around sometimes i+1 it is
        for (var j = i + 1; j < word.length; j++) {
            if (word[i] > word[j]) { // if the first value is bigger then we have to switch them around
                [word[i], word[j]] = [word[j], word[i]]; //we switch them around here by swapping their index         
            }
        }
    }
    word = word.join("");
    return word;
}
main();