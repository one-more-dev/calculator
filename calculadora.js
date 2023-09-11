const display = document.querySelectorAll(".tela1 > div")
const insert = document.querySelector(".tela2")
const buttons = [
    ...document.querySelectorAll(".numeros > button"),
    ...document.querySelectorAll(".operadores > button"),
    document.querySelector(".resultado")
]

const primaryOperators = /[\x\*\:\/]/gm
const secundaryOperators = /[\+\-]/gm


for(let btn=0; btn<buttons.length; btn++){
    buttons[btn].addEventListener("click", ()=>{
        if(buttons[btn].innerText === "C"){
            insert.value = ""
            return
        }
        if(buttons[btn].innerText === "R"){
            display.forEach(div => div.innerText = "")
            return
        }
        if(buttons[btn].className === "resultado"){
            const resultado = result(insert.value)
            display[0].innerText = insert.value
            display[1].innerText = resultado
            insert.value = resultado
            return
        }
        insert.value += buttons[btn].innerText
    })
}


function calc(operator,n1,n2){
    if(operator === "+"){ return Number(n1) + Number(n2) }
    else if(operator === "-"){ return Number(n1 - n2) }
    else if(operator === "x" || operator === "*"){ return Number(n1 * n2) }
    else if(operator === ":" || operator === "/"){ return Number(n1 / n2) }
}


function result(conta){
    const calculationOperators = conta.split("").filter(char => '+-'.includes(char))
    let calculation = conta.split(secundaryOperators)
    
    for(let v=0; v<calculation.length; v++){    //  *MULTIPLICATION AND /DIVISION FIRST
        if(primaryOperators.test(calculation[v])){
            const currentOperators = calculation[v].split("").filter(char => 'x*:/'.includes(char))
            let currentValue = calculation[v].split(primaryOperators)

            for(let op=0; op<currentOperators.length; op++){
                const currentResult = calc(currentOperators[op],currentValue[0],currentValue[1])
                currentValue.splice(1,1)
                currentValue[0] = currentResult
            }
            calculation[v] = currentValue[0]
        }
    }

    for(let op=0; op<calculationOperators.length; op++){    //  +SUM AND SUBTRACTION SECOND
        const currentResult = calc(calculationOperators[op],calculation[0],calculation[1])
        calculation.splice(1,1)
        calculation[0] = currentResult
    }

    return isNaN(calculation[0]) === false ? calculation[0] : "Invalid operation"
}

