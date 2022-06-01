function cinema(input){
    let typeofMovie = input[0];
    let numberofRows = Number(input[1]);
    let numberofColums = Number(input[2]);

    let income = 0

    if (typeofMovie == "Premiere"){
        income = numberofRows * numberofColums * 12.00;
    } else if (typeofMovie == "Normal"){
        income = numberofRows * numberofColums * 7.50;
    } else {
        income = numberofRows * numberofColums * 5.00;
    }
    console.log(income.toFixed(2) + " leva");
}

// cinema((["Discount",
// "12",
// "30"])
// )