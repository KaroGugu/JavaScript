function salary(input){
    let index = 0

    let numberofTabs = Number(input[index]);
    index ++;

    let salary = Number(input[index]);
    index ++;
    

    for (let i = 0; i < numberofTabs; i++){
        let nameofTab = input[index];
        index++

        if (nameofTab == "Facebook"){
            salary -= 150;
            
        } else if (nameofTab == "Instagram"){
            salary -= 100;
        } else if (nameofTab == "Reddit"){
            salary -= 50;
        } else{
            salary = salary
        }
    }

    if (salary <= 0) {
        console.log("You have lost your salary.");
    } else{
        console.log(salary)
    }
}

// salary((["3",
// "500",
// "Github.com",
// "Stackoverflow.com",
// "softuni.bg"])
// )
