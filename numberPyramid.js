function numberPyramid(input){
    let number = input[0];
    let currentNumber = 1
    let isBigger = false
    let printCurrentRow = ''

    for(let rows = 1; rows <= number; rows ++){
        for (let numbersonRow = 1; numbersonRow <= rows; numbersonRow ++){
            if (currentNumber > number){
            isBigger = true
            break;}
            printCurrentRow += currentNumber + ' '
            currentNumber ++
        }
        console.log(printCurrentRow)
        printCurrentRow = '';
        if(isBigger){
            break;
    }
}
}

// numberPyramid((["15"]))
