class Waiter extends Person{
    constructor(name){
        super(name);
    }

    PickOrder(meal){
        this.meal = meal;
    }

    giveOrder(){
        return this.meal;
    }
}