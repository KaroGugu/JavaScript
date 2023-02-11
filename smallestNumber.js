function smallestNumber(input){
    let command = input[0];
    let index = 1;

    let minNumber = Number.MAX_SAFE_INTEGER;

    while (command != 'Stop'){
        let currentNumber = Number(command);
        if (currentNumber < minNumber){
            minNumber = currentNumber
        }
        command = input[index];
        index++
    }
    console.log(minNumber)
}

// smallestNumber((["-10",
// "20",
// "-30",
// "Stop"])
// )