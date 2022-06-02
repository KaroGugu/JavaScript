function ontimefortheExam(input){
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let examTimeinMin = hourExam * 60 + minExam
    let arriveTimeinMin = hourArrive * 60 + minArrive

    if (arriveTimeinMin > examTimeinMin){
        console.log("Late");
        let difference = arriveTimeinMin - examTimeinMin
        if (difference >= 60){
            let hours = Math.floor (difference / 60);
            let minutes = difference % 60

            if (minutes < 10){
                console.log(hours + ":" + "0" + minutes + " hours after the start");
            } else {
            console.log(hours + ":" + minutes + " hours after the start");
            }
        
        } else{
            let minutes = difference % 60
            console.log(minutes + " minutes after the start");

        }


    } else if (examTimeinMin - arriveTimeinMin <= 30){
        console.log("On time");
        let difference = examTimeinMin - arriveTimeinMin;
        if (difference !== 0){
            let min = difference % 60
            console.log(`${min} minutes before the start`)
        }

    } else{
        console.log("Early")
        let diff = examTimeinMin - arriveTimeinMin
        if (diff >= 60){
            let h = Math.floor(diff / 60)
            let min = diff % 60
            if (min < 10){
                console.log(`${h}:0${min} hours before the start`);
            } else{
                console.log(`${h}:${min} hours before the start`);
            }
        } else {
            let min = diff % 60
            console.log(`${min} minutes before the start`);
        }
    }

}

// ontimefortheExam((["9",
// "00",
// "8",
// "30"])
// )