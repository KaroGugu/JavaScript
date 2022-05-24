function shopping(input){
    let budget = Number(input[0]);
    let number_cards = Number(input[1]);
    let number_processors = Number(input[2]);
    let number_ram = Number(input[3]);

    let price_card = 250
    let cards = number_cards * price_card
    
    let price_processor = 0.35 * cards
    let processors = number_processors * price_processor

    let price_ram = 0.10 * cards
    let ram_memorries = number_ram * price_ram

    let total_sum = cards + processors + ram_memorries

    if (number_cards > number_processors){
        total_sum = total_sum - (0.15 * total_sum)
    }

    let difference = Math.abs(total_sum - budget)
    if (budget >= total_sum){
        console.log("You have " + difference.toFixed(2) + " leva left!")
    } else{
        console.log("Not enough money! You need "+ difference.toFixed(2) + " leva more!")

    }

}

// shopping((["900",
// "2",
// "1",
// "3"])

// )