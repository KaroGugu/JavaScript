function yard_greening(input){
    let meters_to_green = input[0]
    let price_to_green = meters_to_green * 7.61
    let discount = 0.18 * price_to_green
    let total_price = price_to_green - discount
    console.log("The final price is: " + total_price + " lv.")
    console.log("The discount is: " + discount + " lv.")
}

// yard_greening(["150"])