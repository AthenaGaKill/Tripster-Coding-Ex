       //Re-use this Person-class. Make a class Group where you can add multiple objects of the class Person
       class Person {
        constructor(name, gender, age, weight) {
            this.name = name;
            this.gender = gender;
            this.age = age;
            this.weight = weight;
        }
        Equals(otherPerson) {
            let nameEqual = this.name == otherPerson.name;
            let genderEqual = this.gender == otherPerson.gender;
            let ageEqual = this.age == otherPerson.age;
            let isEqual = nameEqual && genderEqual && ageEqual;
            return isEqual;
        }
    };

    class Group {
        constructor() {
            this.persons = [];
        }
        AddPerson(newPerson) {
            //init... by default bestaat de persoon nog niet
            let exists = false;
            //laten we de personen in onze groep overlopen
            for (let i = 0; i < this.persons.length; i++) {
                //als de persoon die we aan het onderzoeken zijn gelijk is aan de persoon die we willen toevoegen
                if (this.persons[i].Equals(newPerson)) {
                    exists = true;
                }
            }
            //als de persoon nog niet in de groep zit voegen we hem toe
            if (!exists) {
                this.persons.push(newPerson);
            }
        }
    }

    class NamedGroup extends Group{
        constructor(name){
            super();
            this.name = name;
        }
    }

    function main() {
        let create = prompt("Do you want to create a person? Type: Yes/No");
        let hugSquad = new NamedGroup("HugSquad");
        let x = 0;
        while (create != "No") {
            let nameInput = prompt("Gief name!");
            let genderInput = prompt("Gief gender!");
            let ageInput = prompt("Gief age!");
            let weightInput = prompt("Gief weight!");
            let newPerson = new Person(nameInput, genderInput, ageInput, weightInput);
            hugSquad.AddPerson(newPerson);
            x++;
            create = prompt("Do you want to create a person? Type: Yes/No");
        }
        console.log(hugSquad);
    }

    main();