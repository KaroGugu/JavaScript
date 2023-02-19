function graduation(input){
    let name = input[0];
    let classes = 1;

    let sum = 0;
    let excluded = 0;
    let index = 0;

    while (classes <= 12){
        index++;
        let grade = Number(input[index]);
        if (grade < 4.00){
            excluded += 1;
            continue;
        }
        if (excluded > 1){
            console.log(`${name} has been excluded at ${classes} grade`)
            break;
        }
        sum += grade;
        classes++
    }
    let average = sum / 12
    if (excluded <=1){
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`)
    }
}

// graduation((["Gosho", 
// "5",
// "5.5",
// "6",
// "5.43",
// "5.5",
// "6",
// "5.55",
// "5",
// "6",
// "6",
// "5.43",
// "5"])
// )