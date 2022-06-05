function histogram(input){
    let numberofRows = input[0];
    let p1Counter = 0
    let p2Counter = 0
    let p3Counter = 0
    let p4Counter = 0
    let p5Counter = 0


    for (let row = 1; row <= Number(numberofRows); row ++){
        let currentNumber = Number(input[1])
        if (input[row] < 200){
            p1Counter ++
        } else if (input[row] >= 200 && input[row] <= 399){
            p2Counter ++
        } else if (input[row] >= 400 && input[row] <= 599){
            p3Counter ++
        } else if (input[row] >= 600 && input[row] <= 799){
            p4Counter ++
        } else if (input[row] >= 800){
            p5Counter ++
        }
    } let p1Percent = p1Counter / numberofRows * 100
    let p2Percent =p2Counter / numberofRows * 100
    let p3Percent =p3Counter / numberofRows * 100
    let p4Percent =p4Counter / numberofRows * 100
    let p5Percent = p5Counter / numberofRows * 100

    console.log(p1Percent.toFixed(2) + "%")
    console.log(p2Percent.toFixed(2) + '%')
    console.log(p3Percent.toFixed(2) + '%')
    console.log(p4Percent.toFixed(2) + '%')
    console.log(p5Percent.toFixed(2) + '%')




}

// histogram((["9",
// "367", 
// "99", 
// "200", 
// "799",
// "999",
// "333",
// "555",
// "111",
// "9"])
// )