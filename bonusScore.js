function bonusScore(input){
    let number = Number(input[0]);
    let bonusPoints = 0;

    if (number <= 100){
        bonusPoints = 5;
    } else if (number >= 1000){
        bonusPoints = 0.10 * number;
    }else {
        bonusPoints =0.20 * number;
    } 

    if (number % 2 === 0){
        bonusPoints =  bonusPoints +1;
    } 
    
    if (number % 10 === 5){
        bonusPoints = bonusPoints + 2;
    }

    console.log(bonusPoints)
    console.log(number + bonusPoints)
}

// bonusScore((["15875"]))