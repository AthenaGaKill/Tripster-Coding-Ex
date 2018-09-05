class Recipe{
    constructor(ingredients){
        if(ingredients==null){
            this.ingredients=[];
        }else{
            this.ingredients = ingredients;
        }
    }

    getRecipe(){
        this.ingredients=[];
    }

    prepareRecipe(){
        this.ingredients.forEach(ingredient => {
            console.log(ingredient)
        });
    }
}