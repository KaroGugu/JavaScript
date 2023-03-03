function multiplicationTableAllNumbers(){
    let result = 0
    for(let startNumber = 1; startNumber <= 10; startNumber ++){
        for (let multiplyByNumber = 1; multiplyByNumber <= 10; multiplyByNumber++){
            result = startNumber * multiplyByNumber
            console.log(`${startNumber} * ${multiplyByNumber} = ${result}`)
    }
}
}

multiplicationTableAllNumbers()