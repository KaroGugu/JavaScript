function journey(input){
    let budget = Number(input[0]);
    let season = input[1];

    let moneyspent = 0

    if (season == "summer"){
        if (budget <= 100){
            moneyspent = 0.30 * budget
            console.log("Somewhere in Bulgaria")
            console.log("Camp" + " - "+ moneyspent.toFixed(2))
        } else if (budget > 100 && budget <= 1000){
            moneyspent = 0.40 * budget
            console.log("Somewhere in Balkans")
            console.log("Camp" + " - "+ moneyspent.toFixed(2))
        } else {
            moneyspent = 0.90 * budget
            console.log("Somewhere in Europe")
            console.log("Hotel" + " - " + moneyspent.toFixed(2))
        } 
          
    
    } else if (season == "winter"){
        if (budget <= 100){
            moneyspent = 0.70 * budget
            console.log("Somewhere in Bulgaria")
        } else if (budget > 100 && budget <= 1000){
            moneyspent = 0.80 * budget
            console.log("Somewhere in Balkans")
        } else {
            moneyspent = 0.90 * budget
            console.log("Somewhere in Europe")
        }
        console.log("Hotel" + " - " + moneyspent.toFixed(2))
    }
}

// journey((["1500", "summer"]))