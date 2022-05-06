function painting_the_hall(input){
    let needed_naylon = Number(input[0])
    let needed_paint = Number(input[1])
    let neened_liquid = Number(input[2])
    let needed_hours = Number(input[3])
    
    let price_naylon_per_meter = 1.50
    let price_paint_per_liter = 14.50
    let price_liquid_per_liter = 5.00
    let price_bag = 0.40

    let sum_naylon = (needed_naylon + 2) * price_naylon_per_meter  // + additional 2 meters naylon
    let sum_paint = (needed_paint + (0.10 * needed_paint)) * price_paint_per_liter  // + additional 10% paint
    let sum_liquid = neened_liquid * price_liquid_per_liter
    let sum_materials = sum_naylon + sum_paint + sum_liquid + price_bag

    let price_for_workers = (0.30 * sum_materials) * needed_hours
    let total_money = sum_materials + price_for_workers

    console.log(total_money)
    
}

// painting_the_hall(["5 ",
// "10 ",
// "10 ",
// "1 "]
// )