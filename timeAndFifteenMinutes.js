function timeplusfifteenminutes(input){
    let hour = Number(input[0]);
    let minutes =  Number(input[1]);
    let additionalminutes = minutes + 15

    hour = hour + additionalminutes / 60;
    additionalminutes = additionalminutes % 60
    
    if (hour >= 24){
        hour = 0;
    }
    if (additionalminutes <= 9){
        console.log(Math.trunc(hour) + ":0" + Math.floor(additionalminutes));
    }else{
        console.log(Math.trunc(hour) + ":" + Math.floor(additionalminutes))
    }

}

// timeplusfifteenminutes((["12", "49"]))