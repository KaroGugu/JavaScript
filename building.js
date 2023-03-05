function building(input){
    let numberofFloors = Number(input[0]);
    let roomsonFloor = Number(input[1]);

    for (let f = numberofFloors; f >= 1; f--){
        let roomNumber = '';
        for (let r = 0; r < roomsonFloor; r++){
            if (f == numberofFloors){
                roomNumber += `L${f}${r} ` 
            }
            else if (f % 2 != 0){
                roomNumber += `A${f}${r} `
            }
            else{
                roomNumber += `O${f}${r} `
            }
        }
        console.log(roomNumber)
    }
}

// building((["4", "4"]))