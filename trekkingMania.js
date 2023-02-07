function trekkingMania(input){
    let numberofgroups = Number(input[0]);

    let musala = 0;
    let montblanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    
    for (let i = 1; i <= numberofgroups; i++){
        let numberofpeople = Number(input[i]);

        if (numberofpeople <=5){
            musala += numberofpeople
        } else if (numberofpeople <= 12){
            montblanc += numberofpeople
        } else if (numberofpeople <= 25){
            kilimanjaro += numberofpeople
        } else if (numberofpeople <= 40){
            k2 +=numberofpeople
        } else {
            everest += numberofpeople}
    }

    let allAlpinists = musala + montblanc + kilimanjaro + k2 + everest
    let peercentMusala = (musala/allAlpinists)* 100;
    let percentMontblanc = (montblanc / allAlpinists) * 100;
    let percentKilimanjaro = (kilimanjaro / allAlpinists) * 100;
    let percentK2 = (k2 / allAlpinists) * 100;
    let percentEverest = (everest / allAlpinists) * 100;
    
    console.log(`${peercentMusala.toFixed(2)}%`);
    console.log(`${percentMontblanc.toFixed(2)}%`);
    console.log(`${percentKilimanjaro.toFixed(2)}%`);
    console.log(`${percentK2.toFixed(2)}%`);
    console.log(`${percentEverest.toFixed(2)}%`);

}

// trekkingMania((["5",
// "25",
// "41",
// "31",
// "250",
// "6"])
// )