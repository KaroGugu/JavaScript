function area_of_figures(input){
    let figure = input[0]
    let area = 0
    
    if (figure == "square"){
        let side = Number(input[1])
        area = side * side
    } else if (figure == "rectangle"){
        let a = Number(input[1])
        let b = Number(input[2])
        area = a * b
    } else if (figure == "circle"){
        let radius = Number(input[1])
        area = Math.PI * radius * radius
    } else if (figure == "triangle"){
        let lenght = Number(input[1])
        let height = Number(input[2])
        area = (lenght * height) / 2

    }
    area = (area).toFixed(3)
    console.log(area)
}

// area_of_figures((["square", "5"]))