function sumofTwoNumbers(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);

    let counterCombinations = 0;
    let isFound = false;
    
    for (let i = start; i <= end; i++){
        for (let j = start; j <= end; j++){
            counterCombinations++;
            if (i + j === magicNumber){
            console.log(`Combination N:${counterCombinations} (${i} + ${j} = ${magicNumber})`);
            isFound = true;
            break;}}
        if (isFound)
        break;
    }

    if(isFound == false){
        console.log(`${counterCombinations} combinations - neither equals ${magicNumber}`)}
}


// sumofTwoNumbers((["88", 
// "888", 
// "2000"])
// )