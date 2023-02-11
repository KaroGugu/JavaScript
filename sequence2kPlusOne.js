function sequence2kPlusOne(input){
    let startNumber = Number(input[0]);
    let index = 1;

    while(index <= startNumber){
        console.log(index);
        index = index * 2 + 1;
    }
}

// sequence2kPlusOne((["8"]))