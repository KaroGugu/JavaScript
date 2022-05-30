function fruitshop(input){
    let food = input[0];
    let day = input[1];
    let number = Number(input[2]);
    let price = 0

    if (day == "Saturday" || day == "Sunday"){
        if (food == "banana"){
            price = 2.70
            let sum = price * number
            console.log(sum.toFixed(2))
        } else if (food == "apple"){
            price = 1.25
            let sum = price * number
            console.log(sum.toFixed(2))
        } else if (food == "orange"){
            price = 0.90
            let sum = price * number
            console.log(sum.toFixed(2))
        } else if (food == "grapefruit"){
            price = 1.60
            let sum = price * number
            console.log(sum.toFixed(2))
        } else if (food == "kiwi"){
            price = 3.00
            let sum = price * number
            console.log(sum.toFixed(2))
        } else if (food == "pineapple"){
            price = 5.60
            let sum = price * number
            console.log(sum.toFixed(2))
        } else if (food == "grapes"){
            price = 4.20
            let sum = price * number
            console.log(sum.toFixed(2))
            
        } else{
            console.log("error")
        }
    } else if ((day == "Monday") || (day == "Tuesday") || (day == "Wednesday") || (day == "Thurdays") || (day == "Friday")){
        if (food == "banana"){
            price = 2.50
            let sum = price * number
            console.log(sum.toFixed(2))
        } else if (food == "apple"){
            price = 1.20
            let sum = price * number
            console.log(sum.toFixed(2))
        } else if (food == "orange"){
            price = 0.85
            let sum = price * number
            console.log(sum.toFixed(2))
        } else if (food == "grapefruit"){
            price = 1.45
            let sum = price * number
            console.log(sum.toFixed(2))
        } else if (food == "kiwi"){
            price = 2.70
            let sum = price * number
            console.log(sum.toFixed(2))
        } else if (food == "pineapple"){
            price = 5.50
            let sum = price * number
            console.log(sum.toFixed(2))
        } else if (food == "grapes"){
            price = 3.85
            let sum = price * number
            console.log(sum.toFixed(2))
        } else{
            console.log("error")
        } 
    } else {
        console.log("error")}

}

// fruitshop ((["apple",
// "Workday",
// "2"])
// )