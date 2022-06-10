function clever_lilly(input){
    let age = Number(input[0]);
    let priceWashingMachine = Number(input[1]);
    let pricetoy = Number(input[2]);

    let toyCounter = 0;
    let saveMoney = 0;
    let money = 10

    for (let i = 1; i <= age; i++){
        if (i % 2 != 0){
            toyCounter ++;
        } else {
            saveMoney += money; // За втория рожден ден получава 10.00 лв
            money += 10;  // като сумата се увеличава с 10.00 лв
            saveMoney -= 1 // Братът на Лили, в годините, които тя получава пари, взима по 1.00 лев от тях
        }
    }
    saveMoney += toyCounter * pricetoy;

    difference = Math.abs(saveMoney - priceWashingMachine)

    if (saveMoney >= priceWashingMachine){
        console.log(`Yes! ${difference.toFixed(2)}`)
    } else {
        console.log(`No! ${difference.toFixed(2)}`)
    }

}

// clever_lilly((["10",
// "170.00",
// "6"])
// )