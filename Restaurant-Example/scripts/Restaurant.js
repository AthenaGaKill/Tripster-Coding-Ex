class Restaurant{
    constructor(cook,waiter){
        this.cook=cook;
        this.waiter=waiter;
    }
    customerEntersRestaurant(customer){
        this.customer = customer;
    }
    waiterPicksOrder(){
        if(this.customer != null){
            let orderedMeal = this.customer.meal;
            this.waiter.PickOrder(orderedMeal);
        }else{
            console.log("no customer bro! Go back!")
        }
    }
    waiterGivesOrderToTheCook(){
        if(this.waiter.meal != null){
            this.cook.getCookingOrder(this.waiter.meal);
        }else{
            console.log("Cooking with Athene!")
        }
    }
    cookPreparesFood(){
        if(this.cook.meal != null){
            this.cook.recipe.prepareRecipe();
        }else{
            console.log("Cooking with Athene!")
        }
    }
}