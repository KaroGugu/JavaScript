function pet_shop(input){
    let dog_food = Number(input[0]);
    let cat_food = Number(input[1]);

    let total_food_price = dog_food * 2.50 + cat_food * 4;
    console.log(total_food_price + " lv.");
}

// pet_shop(["13","9"])