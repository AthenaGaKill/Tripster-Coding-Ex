//take a string and return it with the letters in alphabetical order
//hello => ehllo

function main(){
//the user can pick a word he wants to see alphabetised
var input = prompt("Which word would you like to see alphabetised?");
console.log("KAPOW! Your chosen word: " + input + " alphabetised looks like this: " + sortInput(input));
}

function sortInput(word){ //we use a seperate function to alphabetise the word
    var word = word.split('').sort().join(''); //we first turn it into an array so we can use the sort method and turn it afterwards into a string again
    return word; //word = input so technically I don't use an extra variable... I hope this is what you meant :)
}
main();