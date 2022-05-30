function tradeCommissions(input){
    let city = input[0];
    let number = Number(input[1]);
    let commission = 0

    if (city == "Sofia"){
        if (number >= 0 && number <= 500){
            commission = 0.05
            result = number * commission
            console.log(result.toFixed(2))
        } else if (number > 500 && number <= 1000){
            commission = 0.07
            result = number * commission
            console.log(result.toFixed(2))
        } else if (number > 1000 && number <= 10000){
            commission = 0.08
            result = number * commission
            console.log(result.toFixed(2))
        } else if (number > 10000){
            commission = 0.12
            result = number * commission
            console.log(result.toFixed(2))
        } else{
            console.log("error")
        }
    } else if (city == "Varna"){
        if (number >= 0 && number <= 500){
            commission = 0.045
            result = number * commission
            console.log(result.toFixed(2))
        } else if (number > 500 && number <= 1000){
            commission = 0.075
            result = number * commission
            console.log(result.toFixed(2))
        } else if (number > 1000 && number <= 10000){
            commission = 0.10
            result = number * commission
            console.log(result.toFixed(2))
        } else if (number > 10000){
            commission = 0.13
            result = number * commission
            console.log(result.toFixed(2))
        } else{
            console.log("error")
        }
    } else if (city == "Plovdiv"){
        if (number >= 0 && number <= 500){
            commission = 0.055
            result = number * commission
            console.log(result.toFixed(2))
        } else if (number > 500 && number <= 1000){
            commission = 0.08
            result = number * commission
            console.log(result.toFixed(2))
        } else if (number > 1000 && number <= 10000){
            commission = 0.12
            result = number * commission
            console.log(result.toFixed(2))
        } else if (number > 10000){
            commission = 0.145
            result = number * commission
            console.log(result.toFixed(2))
        }else{
            console.log("error")
        }
    } else{
        console.log("error")
    }
}

// tradeCommissions((["Plovdiv",
// "499.99"])
// )
        