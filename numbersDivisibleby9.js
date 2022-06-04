function numbersDivisible([num1, num2]){   //  аргументите на входа да са обвити в масив   // 60 / 100 in Judge
    let firstNumber = num1;
    let secondNumber = num2;

    let sum = 0;
    let outputNumbers = '';

    for (let i = firstNumber; i <= secondNumber; i++){
        if (i % 9 == 0){
            sum += i
            outputNumbers += i + '\n'
        }
    } 
    console.log(`The sum: ${sum}`)
    console.log(outputNumbers)
}

// numbersDivisible((["100", "200"]))
