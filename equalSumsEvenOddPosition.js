// function equalSumsEvenOddPosition(input){   // 10 / 100 in Judge
//     let firstNumber = Number[input[0]];
//     let secondNumber = Number[input[1]];

//     let printLine = ''

//     for (let i = firstNumber; i <= secondNumber; i++){
//         let currentNumber = "" + i
//         let oddSum = 0;
//         let evenSum = 0;

//         for (let j = 0; j < currentNumber.length; j++){
//             let currentDigit = Number(currentNumber.charAt(j));
//             if (j % 2 === 0){
//                 evenSum += currentDigit
//             } else {
//                 oddSum += currentDigit
//             }
//         }
//         if (oddSum === evenSum){
//             printLine += `${i}`
//             console.log(printLine);
//         }
//     } 
// }

// equalSumsEvenOddPosition((["299900",
// "300000"])
// )

function equalSumsEvenOddPosition(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);

    let result = ``;
    let sumOdd = 0;
    let sumEven = 0;
    for (let currentNumber = firstNumber; currentNumber <= secondNumber; currentNumber++) {

        let num = currentNumber.toString();
        sumOdd = Number(num[0]) + Number(num[2]) + Number(num[4]);
        sumEven = Number(num[1]) + Number(num[3]) + Number(num[5]);
        if (sumOdd === sumEven)
        result += `${num} `;
    }
    console.log(result);
}

// equalSumsEvenOddPosition((["100115",
// "100120"])

// )