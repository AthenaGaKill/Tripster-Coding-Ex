class Cook extends Person{
    constructor(name){
        super(name);
    }

    getCookingOrder(meal){
        this.recipe  = this.getRecipe(meal);
        this.recipe.prepareRecipe();
    }

    getRecipe(meal){
        switch(meal.name.toLowerCase()){
            case "spaghetti":return new Spaghetti();break;
            case "pizza":return new Pizza();break;
            case "falafel":return new Falafel();break;
            default:alert("unknown recipe");break;
        }
    }
}