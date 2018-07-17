//take a string and return it with the letters in alphabetical order
//hello => ehllo

function main(){
//the user can pick a word he wants to see alphabetised
var input = prompt("Which word would you like to see alphabetised?");
sortInput(input);
}

function sortInput(word){
    var word = word.split('').sort().join('');
    console.log(word);
    return word;
}
main();