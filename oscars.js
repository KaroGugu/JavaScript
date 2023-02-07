function oscars(input){
    let actorName = input[0];
    let startPoints = Number(input[1]);
    let numberofPeople = Number(input[2]);

    let sum = 0;

    for (let i = 3; i < input.length; i ++){
        let nameofJury = input[i++];
        let pointjury = Number(input[i]);

        let lenghtname = Number(nameofJury.length);

        sum = startPoints + (pointjury * lenghtname)/2;
        startPoints = sum;

        if (sum >= 1250.5){
            break;
        }
    }
        
    if (sum >= 1250.5){
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${sum.toFixed(1)}!`)
    } else {
        let difference = 1250.5 - sum
        console.log(`Sorry, ${actorName} you need ${difference.toFixed(1)} more!`)
    } 
}

// oscars((["Sandra Bullock",
// "340",
// "5",
// "Robert De Niro",
// "50",
// "Julia Roberts",
// "40.5",
// "Daniel Day-Lewis",
// "39.4",
// "Nicolas Cage",
// "29.9",
// "Stoyanka Mutafova",
// "33"])
// )