function main(){
    var numbers = [12,13,15,14,16,17,18,23,34,35,4,36,34,32,32,31,47,45];
    var lowestNumber = FindLowestNumber(numbers);
    console.log(lowestNumber);
}

main();

function FindLowestNumber(numbers) {
    var lowestNumber = 10000;
    for(var i=0;i < numbers.length;i++){
        if(lowestNumber > numbers[i]){
            lowestNumber = numbers[i];
        }
    }
    return lowestNumber;
}