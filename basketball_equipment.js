function basketball_equipment(input){
    let taxes = Number(input[0])

    let shoes = taxes - (0.40 * taxes)
    let dress = shoes - (0.20 * shoes)
    let ball = dress / 4
    let accesories = ball / 5
    let total_price = taxes + shoes + dress + ball + accesories

    console.log(total_price)

}

// basketball_equipment(["550 "])