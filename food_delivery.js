function food_delivery(input){
    let price_chicken = 10.35
    let price_fish = 12.40
    let price_vegetarian = 8.15
    let price_delivery = 2.50

    let number_chicken = Number(input[0])
    let number_fish = Number(input[1])
    let number_vegetarian = Number(input[2])

    let sum_menues = (price_chicken * number_chicken) + (price_fish * number_fish) + (price_vegetarian * number_vegetarian)
    let price_dessert = 0.20 * sum_menues

    let total_price_with_delivery = sum_menues + price_dessert + price_delivery
    console.log(total_price_with_delivery)
}

// food_delivery(["9 ",
// "2 ",
// "6 "]
// )