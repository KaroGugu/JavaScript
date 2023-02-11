// function readText(input){
//     let index = 0;

//     while (true){
//         let string = input[index];
//         index ++;
//         if (string == 'Stop'){
//             break;
//         }
//         console.log(string)
//     }
// }


function readText(input){
    let index = 0 ;
    let command = input[index];

    while (command != 'Stop'){
        console.log(command);
        index++;
        command = input[index]
    }
}

// readText((["Sofia",
// "Berlin",
// "Moscow",
// "Athens",
// "Madrid",
// "London",
// "Paris",
// "Stop",
// "AfterStop"])
// )