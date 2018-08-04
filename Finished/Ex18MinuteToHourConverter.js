//input in minutes => number of hours & minutes
//seperate the hours and minutes with :
function main() {
    //userinput in minutes
    var inputMinutes = prompt("Give me the nr of minutes, you like to see converted into the 'hours:minutes' notation:");
    hoursAndMinutes(inputMinutes);
}

function hoursAndMinutes(input){
    //lets see how many hours are in the amount of minutes
    var hours = Math.floor(input/60);
    if (hours<1){
        console.log("Your amount of minutes converted to the new notation: 00:" + input);
    }
    if (hours>1){
        var leftOverMinutes = (input%60);
        console.log("Your amount of minutes converted to the new notation: " + hours + ":" + leftOverMinutes);
    }
}

main();