function skitrip(input){
    let days = Number(input[0]);
    let typeofRoom = input[1];
    let feedback = input[2];

    let moneyNeeded = 0

    if (typeofRoom == "room for one person"){
        moneyNeeded = (days - 1) * 18.00

    } else if (typeofRoom == "apartment"){
        moneyNeeded = (days - 1) * 25.00
        if (days < 9){
            moneyNeeded = moneyNeeded - (0.30 * moneyNeeded)
        } else if (days >= 9 && days <= 14){
            moneyNeeded = moneyNeeded - (0.35 * moneyNeeded)
        } else {
            moneyNeeded = moneyNeeded - (0.50 * moneyNeeded)
        }

    } else if (typeofRoom == "president apartment"){
        moneyNeeded = (days - 1) * 35.00
        if (days < 9){
            moneyNeeded = moneyNeeded - (0.10 * moneyNeeded)
        } else if (days >= 9 && days <= 14){
            moneyNeeded = moneyNeeded - (0.15 * moneyNeeded)
        } else {
            moneyNeeded = moneyNeeded - (0.20 * moneyNeeded)
        }
    }

    if (feedback == "positive"){
        moneyNeeded = moneyNeeded + (0.25 * moneyNeeded)
    } else {
        moneyNeeded = moneyNeeded - (0.10 * moneyNeeded)
    }

    console.log(moneyNeeded.toFixed(2))
}

// skitrip((["2",
// "apartment",
// "positive"])
// )