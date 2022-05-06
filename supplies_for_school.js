function supplies_for_school(input){
    let number_of_pens = Number(input[0]);
    let number_of_markers = Number(input[1]);
    let liters_liquid = Number(input[2]);
    let discout = Number(input[3]);

    let price_pens = number_of_pens * 5.80
    let price_markers = number_of_markers * 7.20
    let price_liquid = liters_liquid * 1.20
    let total_price = price_pens + price_markers + price_liquid
    let sum_with_discount = total_price - (total_price * (discout/100))
    
    console.log(sum_with_discount)
}

// supplies_for_school(["4 ",
// "2 ",
// "5 ",
// "13 "]
// )