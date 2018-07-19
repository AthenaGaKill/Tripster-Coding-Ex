//id nr = 11nrs
//eerste 6: jj,mm,dd
//maand en/of dag zyn 0 indien niet gekend
//buitenlandse tijdelijke arbeiders = bisnr
//bisnr = geboortemaand +20(als geslacht niet bekend is) of +40(als geslacht bekend is)
//bisnr vluchteling = d en m = 00
//2e groep cyfers = even voor vrouwen (002-998), oneven voor mannen(001-997) 
//3e groep cyfers = 9 voorafgaande cyfers/97 
//controlenr = rest (%) wordt van 97 afgetrokken
//vb 18 mei 1993 = 930518223 / 97 = 9592971 (36rest) => 97-36=61

function main() {
    //user geeft zyn id nr in bestaande uit 11 nrs yymmdd-xxx xx
    var input = prompt("Geef je rijksregisternummer in aub. Dit bestaat uit 11nrs en is terug te vinden achteraan je id kaart: ");
    var input = Number(input);
    nrLength(input); //checked of er wel delijk 11 nrs ingegeven zyn
}

function nrLength(nr) { //we kijken na of er wel degelijk 11 nrs ingegeven zyn
    var check = false;
    var low =  10000000000;
    var high = 99999999999;
    while (check) {
        switch (nr) {
            case (nr < low || nr > high): nr = prompt("Je rijksregister bestaat uit 11 nrs. Probeer nogmaals: ");
            case (nr >= low && nr <= high): check = true; return nr;
        }
    }
}

main();