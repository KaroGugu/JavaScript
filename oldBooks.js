function oldBooks(input){
    let index = 0;
    let wantedBook = input[index];
    index++
    let currentBook = input[index]
    index++

    let counter = 1;
    let isFound = false

    while (currentBook != 'No More Books'){
        if(currentBook == wantedBook){
            isFound = true;
            break;
        }
        counter ++;
        index++
        currentBook = input[index]; 
    }

    if (isFound == false){
        console.log(`The book you search is not here! \nYou checked ${counter} books.`)
    } else{
        console.log(`You checked ${counter} books and found it.`)
    }
}

// oldBooks((["The Spot",
// "Hunger Games",
// "Harry Potter",
// "Torronto",
// "Spotify",
// "No More Books"])
// )