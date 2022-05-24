function worldSwimmingRecord(input){
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let time_per_meter = Number(input[2]);

    let needed_time = distance * time_per_meter;

    let additional_time = Math.floor(distance / 15) * 12.5;

    let all_time = needed_time + additional_time;


    if (all_time < record){
        console.log("Yes, he succeeded! The new world record is " + all_time.toFixed(2) + " seconds.")
    } else{
        let difference = Math.abs(record - all_time)
        console.log("No, he failed! He was " + difference.toFixed(2) + " seconds slower.")
    }

}

// worldSwimmingRecord((["10464",
// "1500",
// "20"])

// )