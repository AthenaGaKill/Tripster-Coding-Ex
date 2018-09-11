class Adress {
    constructor(voornaam, achternaam, straat, huisnummer, postcode, gemeente) {
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.straat = straat;
        this.huisnummer = huisnummer;
        this.postcode = postcode;
        this.gemeente = gemeente;
    }
    display() {
        let leist = document.createElement("ul")
        leist.appendChild(this.createPropertyElement(this.voornaam));
        leist.appendChild(this.createPropertyElement(this.achternaam));
        leist.appendChild(this.createPropertyElement(this.straat));
        leist.appendChild(this.createPropertyElement(this.huisnummer));
        leist.appendChild(this.createPropertyElement(this.postcode));
        leist.appendChild(this.createPropertyElement(this.gemeente));
        return leist;
    }
    createPropertyElement(text) {
        let listItemElement = document.createElement("li");
        listItemElement.innerText = text;
        return listItemElement;
    }
    equals(otherAdress){
        return this.voornaam == otherAdress.voornaam && this.achternaam==otherAdress.achternaam;
    }
}

class AdressBook {
    constructor() {
        this.adresses = [];
    }
    addAddress(adress) {
        this.adresses.push(adress);
    }
    removeAdress(adressToDelete){
        let adressFound = this.findAdress(adressToDelete);
        if(adressFound != null){
            for(let i=0;i<this.adresses.length;i++){
                if(this.adresses[i].equals(adressFound)){
                    this.adresses.splice(i,1);
                    break;
                }
            }
        }
    }

    findAdress(searchAdress){
        let foundAdress=null;
        this.adresses.forEach(adress => {
            if(adress.equals(searchAdress)){
                foundAdress = {...adress};
            }
        });
        return foundAdress;
    }

    display() {
        let div = document.createElement("div");
        this.adresses.forEach(adress => {
            div.appendChild(adress.display());
        });
        return div;
    }
}

var contactenboek = null;

function documentLoaded(){
    contactenboek = new AdressBook();
}

function addAddress(event) {
    let voornaam = getInputValue("voornaam");
    let achternaam = getInputValue("achternaam");
    let straatnaam = getInputValue("straatnaam");
    let nummer = getInputValue("nummer");
    let postcode = getInputValue("postcode");
    let gemeente = getInputValue("gemeente");
    let testAdress = new Adress(voornaam, achternaam, straatnaam, nummer, postcode, gemeente);
    contactenboek.addAddress(testAdress);
    document.getElementById("Output").innerHTML="";
    document.getElementById("Output").appendChild(contactenboek.display());
}

function removeAddress(){
    let voornaam = getInputValue("voornaam");
    let achternaam = getInputValue("achternaam");
    let adress = new Adress(voornaam,achternaam);
    contactenboek.removeAdress(adress);
    document.getElementById("Output").innerHTML="";
    document.getElementById("Output").appendChild(contactenboek.display());
}

function getInputValue(id) {
    return document.getElementById(id).value;
}