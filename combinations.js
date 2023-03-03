function combinations(input){ 
    let result = Number(input)  // x1 + x2 + x3 = n
    let counter = 0
    for(let firstNumber = 0; firstNumber <= result; firstNumber ++){
        for(let secondNumber = 0; secondNumber <= result; secondNumber++){
            for(let thirdNumber = 0; thirdNumber <= result; thirdNumber++){
                let sum = firstNumber + secondNumber + thirdNumber
                if(sum == result){
                    counter += 1}
                }
            } 
        }
        console.log(counter)
}

combinations((["5"]))