function password_guess(input){
    let user_password = input[0];
    let needed_password = "s3cr3t!P@ssw0rd"

    if (user_password == needed_password){
        console.log("Welcome")
    } else {
        console.log("Wrong password!")
    }
}

// password_guess((["s3cr3t!p@ss"]))