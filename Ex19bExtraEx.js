//id nr = 11nrs
//eerste 6: jj,mm,dd
//maand en/of dag zyn 0 indien niet gekend
//buitenlandse tijdelijke arbeiders = bisnr
//bisnr = geboortemaand +20(als geslacht niet bekend is) of +40(als geslacht bekend is)
//bisnr vluchteling = d en m = 00
//2e groep cyfers = even voor vrouwen (002-998), oneven voor mannen(001-997) 
//personen in of na 2000 = +20000000000 before/97
//3e groep cyfers = 9 voorafgaande cyfers/97 
//controlenr = rest (%) wordt van 97 afgetrokken
//vb 18 mei 1993 = 930518223 / 97 = 9592971 (36rest) => 97-36=61

}
function main() {
    //user geeft zyn id nr in bestaande uit 11 nrs yymmdd-xxx xx
    var input = prompt("Geef je rijksregisternummer in aub. Dit bestaat uit 11nrs en is terug te vinden achteraan je id kaart: ");
    do { //input needs to be 11 nrs
        var input = prompt("Meneer kan ni tellen zeker??? Je hebt geen 11 numbers ingegeven. Probeer opnieuw!");
    } while (input.length != 11);
    
    var input = input.split(''); //an array makes it easier to extract nrs
    var YearOfBirth = year(input); //outputs 2 nrs = the year of birth
    var monthOfBirth = month(input); //outputs 2nrs = month of birth
    var dayOfBirth = day(input); //outputs 2nrs = day of birth
    var isARefugee = refugee(dayOfBirth, monthOfBirth); //checks for refugees
    var temporaryWorker = tempWorker(monthOfBirth); //checks bisnr from temporary workers
    var genderOfPerson = gender(input);
    var limitDayInput = dayRestriction(dayOfBirth, input); //checks and limits the dayinput
    var millenial = millenialBoolean(YearOfBirth);

    console.log(input.join(""));
    console.log("Is it a refugee: " + isARefugee);
    console.log("Gender known of temp worker: " + temporaryWorker);
    console.log("Gender of the person: " + genderOfPerson);
}

function millenialBoolean(YearOfBirth) {

}

function MonthRestriction(input, monthOfBirth, temporaryWorker) {
    if 
}



function year(nr) { //first 2 nrs of the number = the year of birth
    var year = nr[0] + nr[1];  //concatination of 2 strings
    var yearInt = parseInt(year);
    console.log("Year of birth: " + yearInt);
    return yearInt; //return the year so we can use it later on when we provide the info of the user
}

function month(nr) {
    var month = nr[2] + nr[3];
    var monthInt = parseInt(month);
    console.log("Month of birth: " + monthInt);
    return monthInt; //return the month so we can use it later on when we provide the info of the user
}

function day(nr) {
    var day = nr[4] + nr[5];
    var dayInt = parseInt(day); //we turn the string into an nr so we can compare it
    if (dayInt > 31) {
        nr = prompt("I think you might have been mistaken. There aren't that many days in a month brah!");
    }
    console.log("Day of birth: " + dayInt);
    return dayInt; //return the day so we can use it later on when we provide the info of the user
}

function refugee(birthday, birthmonth) { //check if it is a refugee or not...
    var dateUnknown = true;
    if (birthday === 00 && birthmonth === 00) { //if these are 00 = refugee
        return dateUnknown; //so we return true
    } else {
        dateUnknown = false; // if not then we return false as it isnt a refugee
        return dateUnknown;
    }
}

function tempWorker(birthmonth) { //temp workers get a bisnr. +20 when gender unknown and +40 when gender is known
    var SexWorkerKnown = true;
    var minTwenty = birthmonth - 20; //birthmonth +20 when gender unknown
    var minForty = birthmonth - 40;//birthmonth +40 when gender known

    if (minTwenty <= 12) { //if the birthmonth - 20 is smaller or = to 12 (12months in a year) = gender unknown
        SexWorkerKnown = false;
        return SexWorkerKnown;
    }
    if (minForty <= 12) { //if the bm -40 is smaller or = to 12 = gender known
        return SexWorkerKnown;
    }
}

function gender(nr) {
    var man = "man";
    var woman = "woman";
    var gender = nr[6] + nr[7] + nr[8]; //concatination of the 3 nrs to id the gender
    var genderInt = parseInt(gender); //turn it into a nr 
    if (genderInt % 2 == 0) { //see if there is a remainder, if none = woman, if there is = man
        return woman;
    }
    return man;
}

main();