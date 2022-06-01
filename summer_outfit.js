function summer_outfit(input){
    let degrees = Number(input[0]);
    let dayPart = input[1];

    if (dayPart == "Morning"){
        if (degrees >= 10 && degrees <= 18){
            console.log("It's " + degrees + " degrees, get your Sweatshirt and Sneakers.")
        } else if (degrees >= 19 && degrees <= 24){
            console.log("It's " + degrees + " degrees, get your Shirt and Moccasins.")
        } else if (degrees >= 25){
            console.log("It's " + degrees + " degrees, get your T-Shirt and Sandals.")
        }
    } else if (dayPart == "Afternoon"){
        if (degrees >= 10 && degrees <= 18){
            console.log("It's " + degrees + " degrees, get your Shirt and Moccasins.")
        } else if (degrees >= 19 && degrees <= 24){
            console.log("It's " + degrees + " degrees, get your T-Shirt and Sandals.")
        } else if (degrees >= 25){
            console.log("It's " + degrees + " degrees, get your Swim Suit and Barefoot.")
        }
    } else{
        console.log("It's " + degrees + " degrees, get your Shirt and Moccasins.")
    }
}

// summer_outfit((["28",
// "Evening"])
// )