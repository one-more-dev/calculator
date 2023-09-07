const display = document.querySelector(".tela1")
const warning = document.querySelector(".warning")
const insert = document.querySelector(".tela2")
const buttons = [
    ...document.querySelectorAll(".numeros > button"),
    ...document.querySelectorAll(".operadores > button"),
    document.querySelector(".resultado")
]

let currentValue = undefined
const operators = /[\+\-\x\:]/gm
insert.readOnly = true


for(let btn=0; btn<buttons.length; btn++){
    buttons[btn].addEventListener("click", ()=>{
        if(buttons[btn].innerText === "C"){
            insert.value = ""
            return
        }
        if(buttons[btn].innerText === "R"){
            currentValue = undefined
            insert.value = ""
            display.innerText = ""
            return
        }
        if(buttons[btn].className === "resultado"){
            return
        }
        insert.value += buttons[btn].innerText
    })
}