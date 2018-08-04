// "use strict";
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
    //**********INPUT***********
    //user geeft zyn id nr in bestaande uit 11 nrs yymmdd-xxx xx
    var input = prompt("Gief Id nr plz! It's the 11 nr code on your id card: ");
    while (input.length != 11) { //input needs to be 11 nrs
        var input = prompt("Nope those are not 11 digits....Try again!");
    }
    var input = input.split(''); //an array makes it easier to extract nrs
    var YearOfBirth = year(input); //outputs 2 nrs = the year of birth
    var monthOfBirth = month(input); //outputs 2nrs = month of birth
    var dayOfBirth = day(input); //outputs 2nrs = day of birth
    var isARefugee = refugee(dayOfBirth, monthOfBirth); //checks for refugees and gives back a true or false value
    var sexOfTempWorkerKnown = sexOfTempWorkerCheck(monthOfBirth); //checks bisnr from temporary workers and gives back true if gender is know and false when it isnt
    var monthFullWord = monthFullWritten(monthOfBirth, sexOfTempWorkerKnown);
    var genderOfPerson = gender(input);
    var fullYear = millenialOrNot(input, YearOfBirth);

    print(dayOfBirth, monthOfBirth, monthFullWord, YearOfBirth, fullYear, sexOfTempWorkerKnown, genderOfPerson, isARefugee);
}

function year(nr) { //first 2 nrs of the number = the year of birth
    var year = nr[0] + nr[1];  //concatination of 2 strings
    var yearInt = parseInt(year);
    return yearInt; //return the year so we can use it later on when we provide the info of the user
}

function month(nr) {
    var month = nr[2] + nr[3];
    var monthInt = parseInt(month);
    if (monthInt > 52) { //is the max nr that can be used taken into account the +40bisnr for temp workers from whom the gender is know / not sure how to do it for all seperate
        nr = prompt("I think you might have been mistaken. There aren't that many days in a month brah!");
    }
    return monthInt; //return the month so we can use it later on when we provide the info of the user
}

function day(nr) {
    var day = nr[4] + nr[5];
    var dayInt = parseInt(day); //we turn the string into an nr so we can compare it
    if (dayInt > 31) {
        nr = prompt("I think you might have been mistaken. There aren't that many days in a month brah!");
    }
    return dayInt; //return the day so we can use it later on when we provide the info of the user
}

function refugee(birthday, birthmonth) { //check if it is a refugee or not...
    var dateUnknown = true;
    if (birthday == 00 && birthmonth == 00) { //if these are 00 = refugee
        return dateUnknown; //so we return true
    } else {
        dateUnknown = false; // if not then we return false as it isnt a refugee
        return dateUnknown;
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

function sexOfTempWorkerCheck(birthmonth) { //temp workers get a bisnr. +20 when gender unknown and +40 when gender is known
    var minTwenty = birthmonth - 20; //birthmonth +20 when gender unknown
    var minForty = birthmonth - 40;//birthmonth +40 when gender known

    if (minTwenty > 0 && minTwenty <= 12) { //if the birthmonth - 20 is smaller or = to 12 (12months in a year) = gender unknown
        return false;
    }
    if (minForty > 0 && minForty <= 12) { //if the bm -40 is smaller or = to 12 = gender known
        return true;
    }
    if (birthmonth <= 12) { //normal situation so sex is know as well
        return true;
    }
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
   
    if (birthmonth > 12 && sexKnown == true) { //if month>12 and we know the gender then we need to -40 to find the month
        birthmonth = birthmonth - 40;
    } else if (birthmonth > 12 && sexKnown == false) { //if month>12 and we don't know the gender we need to -20 to find the month
        birthmonth = birthmonth - 20;
    }

    switch (birthmonth) {
        case 01: monthInWord = "january";
            break;
        case 1: monthInWord = "january";
            break;
        case 02: monthInWord = "february";
            break;
        case 2: monthInWord = "february";
            break;
        case 03: monthInWord = "march";
            break;
        case 3: monthInWord = "march";
            break;
        case 04: monthInWord = "april";
            break;
        case 4: monthInWord = "april";
            break;
        case 05: monthInWord = "mai";
            break;
        case 5: monthInWord = "mai";
            break;
        case 06: monthInWord = "june";
            break;
        case 6: monthInWord = "june";
            break;
        case 07: monthInWord = "july";
            break;
        case 7: monthInWord = "july";
            break;
        case 08: monthInWord = "august";
            break;
        case 8: monthInWord = "august";
            break;
        case 09: monthInWord = "september";
            break;
        case 9: monthInWord = "september";
            break;
        case 10: monthInWord = "oktober";
            break;
        case 11: monthInWord = "november";
            break;
        case 12: monthInWord = "december";
            break;
        default: monthInWord = " 0 ";
    }
    return monthInWord;
}

function print(dayOfBirth, monthOfBirth, monthFullWord, YearOfBirth, fullYear, sexOfTempWorkerKnown, genderOfPerson, isARefugee) {
    console.log("Year of birth: " + YearOfBirth);
    console.log("Month of birth: " + monthOfBirth);
    console.log("Day of birth: " + dayOfBirth);
    console.log("Is a refugee: " + isARefugee);
    if (sexOfTempWorkerKnown == true) {
        console.log("Sex: " + genderOfPerson);
    } else if (sexOfTempWorkerKnown == false) {
        console.log("Sex of the temporary worker is unknown");
    } else {
        console.log("Sex: " + genderOfPerson);
    }
    console.log("=> " + dayOfBirth + " " + monthFullWord + " " + fullYear);
}

main();