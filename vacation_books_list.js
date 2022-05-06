function vacation_books(input){
    let number_of_pages_of_a_book = Number(input[0]);
    let number_of_pages_for_hour = Number(input[1]);
    let days = Number(input[2]);

    let time_for_book = number_of_pages_of_a_book / number_of_pages_for_hour;
    let hours_per_day = time_for_book / days;
    
    console.log(hours_per_day);
}

// vacation_books(["432 ",
// "15 ",
// "4 "]
// )