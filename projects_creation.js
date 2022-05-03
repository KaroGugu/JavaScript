function project_creation(input){
    let name = input[0];
    let number_of_projects = Number(input[1]);

    let hours_needed = number_of_projects * 3

    let text = "The architect " + name + " will need " + hours_needed + " hours to complete " + number_of_projects + " project/s."

    console.log(text)
}

// project_creation(["George ", "4 "])