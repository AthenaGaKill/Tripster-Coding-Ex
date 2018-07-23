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

//!!!!! still need to fix the month check! Issues with figuring out how to do so because of the +20, +40...

function main() {
    //user geeft zyn id nr in bestaande uit 11 nrs yymmdd-xxx xx
    var input = prompt("Geef je rijksregisternummer in aub. Dit bestaat uit 11nrs en is terug te vinden achteraan je id kaart: ");
    while (input.length != 11) { //input needs to be 11 nrs
        var input = prompt("Meneer kan ni tellen zeker??? Je hebt geen 11 numbers ingegeven. Probeer opnieuw!");
    }

    var input = input.split(''); //an array makes it easier to extract nrs

    console.log("The person's nr is: " + input.join(""));
    var YearOfBirth = year(input); //outputs 2 nrs = the year of birth
    var monthOfBirth = month(input); //outputs 2nrs = month of birth
    if (monthOfBirth > 12 && genderOfPerson === true) { }

    var dayOfBirth = day(input); //outputs 2nrs = day of birth

    var isARefugee = refugee(dayOfBirth, monthOfBirth); //checks for refugees
    if (isARefugee === true) { //we only need output if the person is a refugee
        console.log("This " + gender(input) + " is a refugee, and that's why the nr starts with 0000.");
    }

    var monthFullWord = monthFullWritten(monthOfBirth, sexOfTempWorker);

    if (monthOfBirth > 12) { //we only need to check for a bisnr if the monthnr > 12 (there are 12 months in a year...)
        var sexOfTempWorker = sexTempWorker(monthOfBirth); //checks bisnr from temporary workers
        if (sexOfTempWorker == true) {
            console.log(" ==> This " + genderOfPerson + " was born on: " + dayOfBirth + " " + monthFullWord + " " + fullYear);
        } else {
            console.log("The gender of the temporary worker is unknown.");
        }
    }

    var genderOfPerson = gender(input);
    if (sexOfTempWorker === true) { //only if we know the gender will we print it
        console.log("Gender of the person: " + genderOfPerson);
    }

    var fullYear = millenialOrNot(input, YearOfBirth);   // will tell us when the person was born and so tell us if it is a millenial or not :)

    if (dayOfBirth != 00 && monthOfBirth != 00) { //0000 = refugee so if it's not the case we can use the normal notation
        console.log("==>  " + dayOfBirth + " " + monthFullWord + " " + fullYear);
    }
    switch (dayOfBirth) {
        case 00: if (monthOfBirth != 00) { //when only the day isnt known we need a different output
            console.log("==>  " + monthFullWord + " " + fullYear);
        }
        default: if (monthOfBirth == 00) {//when only the month isnt known we also need a different output
            console.log("==>  " + dayOfBirth + " , month unknown, " + fullYear);
        }
            break;
    }
    if (dayOfBirth == 00 && monthOfBirth == 00) {
        console.log("==> This person is a refugee born in: " + fullYear);
    }
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
    if (monthInt > 52) { //is the max nr that can be used taken into account the +40bisnr for temp workers from whom the gender is know / not sure how to do it for all seperate
        nr = prompt("I think you might have been mistaken. There aren't that many days in a month brah!");
    }
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

function sexTempWorker(birthmonth) { //temp workers get a bisnr. +20 when gender unknown and +40 when gender is known
    var minTwenty = birthmonth - 20; //birthmonth +20 when gender unknown
    var minForty = birthmonth - 40;//birthmonth +40 when gender known

    if (minTwenty <= 12) { //if the birthmonth - 20 is smaller or = to 12 (12months in a year) = gender unknown
        return false;
    }
    if (minForty <= 12) { //if the bm -40 is smaller or = to 12 = gender known
        return true;
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

//personen in of na 2000 = +20000000000 before/97
function millenialOrNot(nr, birthYear) {
    var firstNineNrs = ""; //we will put the first 9 nrs in this nr => used parseInt on the others already so couldnt concatenate them lol
    for (var i = 0; i < nr.length - 2; i++) { //we get the 1st 9 nrs from our input using this loop
        firstNineNrs += nr[i];
    }
    var firstNineNrsInt = parseInt(firstNineNrs); //our loop generated a string so we need to turn it into a nr to make the calculations later on

    var nrPlusTwoBillion = firstNineNrsInt + 2000000000; //when born in or after 2000 = +2000000000 before calculating the remainder of 97 
    var nrModuloByNinetyseven = nrPlusTwoBillion % 97; //we need the remainder of that nr and 97 to find the last 2 nrs. we put it in a new var so we can use this to compare later on.
    var lastTwoNrs = nr[9] + nr[10]; //we get the last 2 nrs from the input to compare
    var lastTwoNrsInt = parseInt(lastTwoNrs); //we make the nr an integer 
    var ninetySevenMinModResult = 97 - nrModuloByNinetyseven; //we need to substract 97 with the result of the modulo and compare this nr later on to know whether the person is a millenial or not

    if (ninetySevenMinModResult !== lastTwoNrsInt) { //if the last 2 nrs aren't the same then the person was born before 2000
        return "19" + birthYear;
    } else {
        return "20" + birthYear; //if the last 2 nrs are the same then it means a 2 got added before the nr and the person is a millenial
    }
}

function monthFullWritten(birthmonth, sexKnown) { //this turns the number indicating the month, into a fullout written month
    var monthInWord = "";
    var birthmonthResult = 0;

    if (birthmonth > 12 && sexKnown == true) { //if month>12 and we know the gender then we need to -40 to find the month
        birtmonthResult = birthmonth - 40;
    } else if (birthmonth > 12 && sexKnown == false) { //if month>12 and we don't know the gender we need to -20 to find the month
        birthmonthResult = birthmonth - 20;
    } else {
        birtmonthResult = birthmonth;
    }

    switch (birthmonthResult) {
        case 1: monthInWord = "january";
            return monthInWord;
            break;
        case 2: monthInWord = "february";
            return monthInWord;
            break;
        case 3: monthInWord = "march";
            return monthInWord;
            break;
        case 4: monthInWord = "april";
            return monthInWord;
            break;
        case 5: monthInWord = "mai";
            return monthInWord;
            break;
        case 6: monthInWord = "june";
            return monthInWord;
            break;
        case 7: monthInWord = "july";
            return monthInWord;
            break;
        case 8: monthInWord = "august";
            return monthInWord;
            break;
        case 9: monthInWord = "september";
            return monthInWord;
            break;
        case 10: monthInWord = "oktober";
            return monthInWord;
            break;
        case 11: monthInWord = "november";
            return monthInWord;
            break;
        case 12: monthInWord = "december";
            return monthInWord;
            break;
        default: monthInWord = " "
            return monthInWord;
    }
}

//MAKE A PRINT OUT FUNCTION TO PRINT OUT ALL INFO  


main();