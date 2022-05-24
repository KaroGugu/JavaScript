function godzillakingkong(input){
    let budget = Number(input[0]);
    let number_of_people = Number(input[1]);
    let price_dress = Number(input[2]);

    let price_decore = 0.10 * budget;
    let price_people = number_of_people * price_dress;

    if (number_of_people > 150){
        price_people = price_people - (0.10 * price_people);
    }

    let price_for_film = price_decore + price_people;

    let diffenrence = Math.abs(budget - price_for_film);

    if (budget >= price_for_film){
        console.log("Action!");
        console.log("Wingard starts filming with " + diffenrence.toFixed(2) + " leva left.");
    } else{
        console.log("Not enough money!");
        console.log("Wingard needs " + diffenrence.toFixed(2) + " leva more.");
    }
}

// godzillakingkong((["20000",
// "120",
// "55.5"])
// )