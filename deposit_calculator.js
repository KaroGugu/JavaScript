function deposit_calculator(input){
    let money = Number(input[0]);
    let days = Number(input[1]);
    let deposit = Number(input[2]);
    let deposite_on_money = ((deposit / 100)) * money
    let money_for_a_month = deposite_on_money / 12
    let total_sum = money + days * money_for_a_month;
    console.log(total_sum);
}

// deposit_calculator(["200 ",
// "3 ",
// "5.7 "]
// )