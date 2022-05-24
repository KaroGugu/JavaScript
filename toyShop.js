function toyShop(input){     // result 0/100 in Judge
    let money = Number(input[0]);
    let number_of_puzzels = Number(input[1]);
    let number_of_dolls = Number(input[2]);
    let number_of_bears = Number(input[3]);
    let number_of_minions = Number(input[4]);
    let number_of_cars = Number(input[5]);

    price_puzzles = number_of_puzzels * 2.60;
    price_dolls = number_of_dolls * 3;
    price_bears = number_of_bears * 4.10;
    price_minions = number_of_minions * 8.20;
    price_cars = number_of_cars * 2;

    total_price = price_puzzles + price_dolls + price_bears + price_minions + price_cars;

    number_of_toys = number_of_puzzels + number_of_dolls + number_of_bears + number_of_minions + number_of_cars;

    if (number_of_toys >= 50){
        total_price = total_price - (0.25 * total_price);
    }

    rent = total_price * 0.10
    income = total_price - rent;

    diffenrence = Math.abs(money - income);

    if (income > money){
        console.log("Yes! "+ diffenrence.toFixed(2) + " lv left.");
    }else{
        console.log("Not enough money! " + diffenrence.toFixed(2) + " lv needed.");
    }

}

// toyShop((["40.8",
// "20",
// "25",
// "30",
// "50",
// "10"])

// )  