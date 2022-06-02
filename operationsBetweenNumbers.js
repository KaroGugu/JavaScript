function operationsBetweenNumbers(input){
    let firstnumber = Number(input[0]);
    let secondnumber = Number(input[1]);
    let operator = input[2];
    
    let result = 0

//     if (operator == "+"){
//         result = firstnumber + secondnumber
//         if (result % 2 == 0){
//             console.log (firstnumber + " " + operator + " " + secondnumber + " = " + result + " - " + "even")
//         } else{
//             console.log (firstnumber + " " + operator + " " + secondnumber + " = " + result + " - " + "odd")
//         }
//     } else if (operator == "-"){
//         result = firstnumber - secondnumber
//         if (result % 2 == 0){
//             console.log (firstnumber + " " + operator + " " + secondnumber + " = " + result + " - " + "even")
//         } else{
//             console.log (firstnumber + " " + operator + " " + secondnumber + " = " + result + " - " + "odd")
//         }
//     } else if (operator == "*"){
//         result = firstnumber * secondnumber
//         if (result % 2 == 0){
//             console.log (firstnumber + " " + operator + " " + secondnumber + " = " + result + " - " + "even")
//         } else{
//             console.log (firstnumber + " " + operator + " " + secondnumber + " = " + result + " - " + "odd")
//         }
//     } else if (operator == "/"){
//         if (secondnumber == 0){
//             console.log("Cannot divide " + firstnumber + " by zero")
//         } else {
//             result = firstnumber / secondnumber
//             console.log(firstnumber + " / " + secondnumber + " = " + result.toFixed(2))
//         }
//     } else if (operator == "%"){
//         if (secondnumber == 0){
//             console.log("Cannot divide " + firstnumber + " by zero")
//         } else {
//             result = firstnumber % secondnumber
//             console.log(firstnumber + " % " + secondnumber + " = " + result)
//         }

//     }
// }




switch(operator){
    case "+": 
       result = firstnumber + secondnumber; 
       if (result % 2 === 0){
           console.log(`${firstnumber} ${operator} ${secondnumber} = ${result} - even`);
       } else{
           console.log(`${firstnumber} ${operator} ${secondnumber} = ${result} - odd`);
       }
       break;

    case "-": 
        result = firstnumber - secondnumber; 
       if (result % 2 === 0){
           console.log(`${firstnumber} ${operator} ${secondnumber} = ${result} - even`);
       } else{
           console.log(`${firstnumber} ${operator} ${secondnumber} = ${result} - odd`);
       } break;

    case "*": 
        result = firstnumber * secondnumber; 
       if (result % 2 === 0){
           console.log(`${firstnumber} ${operator} ${secondnumber} = ${result} - even`);
       } else{
           console.log(`${firstnumber} ${operator} ${secondnumber} = ${result} - odd`);
       } break;

    case "/": 
        if (secondnumber === 0){
            console.log(`Cannot divide ${firstnumber} by zero`);
        } else{
            result = firstnumber / secondnumber
            console.log(`${firstnumber} / ${secondnumber} = ${result.toFixed(2)}`);
        }
        break;

    case "%": 
        if (secondnumber === 0){
            console.log(`Cannot divide ${firstnumber} by zero`);
        } else{
            result = firstnumber % secondnumber
            console.log(`${firstnumber} % ${secondnumber} = ${result}`);
    } break;

}

}

// operationsBetweenNumbers((["7",
// "3",
// "*"])
// )