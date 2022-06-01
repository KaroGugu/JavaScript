function newHouse(input){
    let flower = input[0];
    let numberofFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let sum = 0

    if (flower == "Roses"){
        sum = numberofFlowers * 5
        if (numberofFlowers > 80){
            sum = sum - (0.10 * sum)
        }
        
    } else if (flower == "Dahlias"){
        sum = numberofFlowers * 3.80
        if (numberofFlowers > 90){
            sum = sum - (0.15 * sum)
        }

    } else if (flower == "Tulips"){
        sum = numberofFlowers * 2.80
        if (numberofFlowers > 80){
            sum = sum - (0.15 * sum)
        }

    } else if (flower == "Narcissus"){
        sum = numberofFlowers * 3
        if (numberofFlowers < 120){
            sum = sum + (0.15 * sum)
        }

    } else if (flower == "Gladiolus"){
        sum = numberofFlowers * 2.50
        if (numberofFlowers < 80){
            sum = sum + (0.20 * sum)
        }

    }

    let difference = Math.abs(budget - sum) 

    if (budget >= sum){
        console.log("Hey, you have a great garden with " + numberofFlowers + " " + flower + " and " +  difference.toFixed(2) + " leva left.")
    } else {
        console.log("Not enough money, you need " + difference.toFixed(2) + " leva more.")

    }

}

// newHouse((["Narcissus",
// "119",
// "360"])
// )