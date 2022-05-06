function fish_tank(input){
    let lenght_tank = Number(input[0])   // in cm
    let width_tank = Number(input[1])  // in cm
    let hight_tank =  Number(input[2])  // in cm
    let persent_others = Number(input[3])

    let volume = lenght_tank * width_tank * hight_tank
    let volume_in_liters = volume / 1000
    let needed_water = volume_in_liters * (1 - (persent_others / 100))

    console.log(needed_water)
}

// fish_tank(["85 ",
// "75 ",
// "47 ",
// "17 "]
// )