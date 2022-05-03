function concatenate_data(input){
    let first_name = input[0]
    let last_name = input[1]
    let age = Number(input[2])
    let town = input[3]
    let text = "You are " + first_name + ' ' + last_name + ", a "  + age + "-years old person from " + town + "."

    console.log(text)

    // console.log(`You are ${first_name} ${last_name}, a ${age}-years old person from ${town}.`);
}

// concatenate_data(["Maria", "Ivanova", 20, "Sofia"])