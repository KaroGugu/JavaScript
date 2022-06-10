function tennisRanklist(input){
    let index = 0
    let numberoftournaments = Number(input[index]);
    index ++;
    let startPoints = Number(input[index]);
    index ++;

    let score = 0;
    let winCounter = 0

    for (let i = 0; i < numberoftournaments; i++){
        let typeofResult = input[index];
        index ++;

        if (typeofResult == "W"){
            score += 2000;
            winCounter ++
        } else if (typeofResult == "F"){
            score += 1200;
        } else if (typeofResult == "SF"){
            score += 720;
        }
    }
    let totalPoint = startPoints + score

    console.log(`Final points: ${totalPoint}`);

    let averagePoints = Math.floor(score / numberoftournaments)
    console.log(`Average points: ${averagePoints}`)

    let percentWins = (winCounter / numberoftournaments) * 100
    console.log(percentWins.toFixed(2) + "%")


}

// tennisRanklist((["7",
// "1200",
// "SF",
// "F",
// "W",
// "F",
// "W",
// "SF",
// "W"])
// )