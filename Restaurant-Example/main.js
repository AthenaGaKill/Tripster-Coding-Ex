function main() {
    let cook =  new Cook("Bachir");
    let waiter = new Waiter("Dries");
    let falafelNiZoTof = new Restaurant(cook,waiter);

    let klantVanMenVoeten = new Customer("Tania",new Meal("Pizza"));

    falafelNiZoTof.customerEntersRestaurant(klantVanMenVoeten);
    falafelNiZoTof.waiterPicksOrder();
    falafelNiZoTof.waiterGivesOrderToTheCook();
    falafelNiZoTof.cookPreparesFood();
}

main();