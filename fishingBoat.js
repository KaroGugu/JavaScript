function fishingboat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let numberofFishermen = Number(input[2]);

    let money_needed = 0

    if (season == "Spring"){
        money_needed = 3000
    } else if (season == "Summer" || season == "Autumn"){
        money_needed = 4200
    } else if (season == "Winter"){
        money_needed = 2600
    }

    if (numberofFishermen <= 6){
        money_needed = money_needed - (0.10 * money_needed)
    } else if (numberofFishermen >= 7 && numberofFishermen <= 11){
        money_needed = money_needed - (0.15 * money_needed)
    } else if (numberofFishermen >= 12){
        money_needed = money_needed - (0.25 * money_needed)
    }

    if (numberofFishermen % 2 == 0 && season != "Autumn"){
        money_needed = money_needed - (0.05 * money_needed)
    }

    difference = Math.abs(budget - money_needed)
    if (money_needed <= budget){
        console.log("Yes! You have " + difference.toFixed(2) + " leva left.")
    } else {
        console.log("Not enough money! You need " + difference.toFixed(2) + " leva.")
    }
}

// fishingboat((["2000",
// "Winter",
// "13"])
// )