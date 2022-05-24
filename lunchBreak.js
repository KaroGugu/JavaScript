function lunchbreak(input){
    let name_of_movie = input[0];
    let movieTime = Number(input[1]);
    let lunchbreak = Number(input[2]);

    let time_for_eating = lunchbreak / 8
    let time_for_relax = lunchbreak / 4

    let timeforWatching = lunchbreak - time_for_eating - time_for_relax

    diffenrence = Math.abs(timeforWatching - movieTime)

    if (timeforWatching >= movieTime){
        console.log("You have enough time to watch " + name_of_movie + " and left with " + Math.ceil(diffenrence) + " minutes free time.")
    } else{
        console.log("You don't have enough time to watch "+ name_of_movie + ", you need " + Math.ceil(diffenrence) + " more minutes.")
    }
}

// lunchbreak((["Teen Wolf",
// "48",
// "60"])

// )