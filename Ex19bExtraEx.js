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

function main() {
    //user geeft zyn id nr in bestaande uit 11 nrs yymmdd-xxx xx
    var input = prompt("Geef je rijksregisternummer in aub. Dit bestaat uit 11nrs en is terug te vinden achteraan je id kaart: ");
    // fix control in html with: <input type="text" id="here" required pattern="[0-9]{11}">
    var input = input.split(''); //an array makes it easier to extract nrs
    var YearOfBirth = year(input); //outputs 2 nrs = the year of birth
    var monthOfBirth = month(input); //outputs 2nrs = month of birth
    var dayOfBirth = day(input); //outputs 2nrs = day of birth
    var UnknownUser = unknown(dayOfBirth, monthOfBirth); //checks for unknown people
    console.log(UnknownUser);
}

function year(nr) { //first 2 nrs of the number = the year of birth
    var year = nr[0] + nr[1];  //concatination of 2 strings
    console.log(year);
    return year; //return the year so we can use it later on when we provide the info of the user
}

function month(nr) {
    var month = nr[2] + nr[3];
    console.log(month);
    return month; //return the month so we can use it later on when we provide the info of the user
}

function day(nr) {
    var day = nr[4] + nr[5];
    console.log(day);
    return day; //return the day so we can use it later on when we provide the info of the user
}

function unknown(birthday, birthmonth) { //
    var dateUnknown = true;
    if (birthday === "00" || birthmonth === "00") {
        return dateUnknown;
    } else {
        dateUnknown = false;
        return dateUnknown;
    }
}
//when we have to /97 we use parseInt() to turn the string into a number

main();